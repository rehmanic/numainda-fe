'use client';

import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import { useAuth } from '@clerk/nextjs';

export type SoftphoneStatus = 'idle' | 'connecting' | 'ready' | 'error';
export type CallState = 'idle' | 'ringing' | 'active' | 'held' | 'hangup';

export interface SoftphoneContextType {
  status: SoftphoneStatus;
  callState: CallState;
  remoteParty: string;
  callerId: string;
  isMuted: boolean;
  isHeld: boolean;
  errorMessage?: string;
  makeCall: (destinationNumber: string) => void;
  hangup: () => void;
  answer: () => void;
  toggleMute: () => void;
  toggleHold: () => void;
  sendDTMF: (key: string) => void;
}

const SoftphoneContext = createContext<SoftphoneContextType | undefined>(undefined);

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export function SoftphoneProvider({ children }: { children: React.ReactNode }) {
  const { getToken, isSignedIn, isLoaded } = useAuth();
  const [status, setStatus] = useState<SoftphoneStatus>('idle');
  const [callState, setCallState] = useState<CallState>('idle');
  const [remoteParty, setRemoteParty] = useState('');
  const [callerId, setCallerId] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [isHeld, setIsHeld] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  // Holds instance of TelnyxRTC dynamically imported (SSR-safe)
  const clientRef = useRef<any>(null);
  const activeCallRef = useRef<any>(null);

  // Initialize softphone client
  const initializeClient = useCallback(async () => {
    if (!isSignedIn) {
      setStatus('idle');
      return;
    }

    try {
      setStatus('connecting');
      setErrorMessage(undefined);

      // Fetch client login token from provider-agnostic backend endpoint
      let response: Response;
      const clerkToken = await getToken();
      const headers: Record<string, string> = {
        'ngrok-skip-browser-warning': 'true',
      };
      if (clerkToken) {
        headers['Authorization'] = `Bearer ${clerkToken}`;
      }

      try {
        response = await fetch(`${API_BASE_URL}/telephony/token`, { headers });
        if (!response.ok && API_BASE_URL !== 'http://localhost:4000') {
          // Fallback to local dev backend port 4000
          response = await fetch('http://localhost:4000/telephony/token', { headers });
        }
      } catch (networkErr) {
        if (API_BASE_URL !== 'http://localhost:4000') {
          response = await fetch('http://localhost:4000/telephony/token', { headers });
        } else {
          throw networkErr;
        }
      }

      if (!response.ok) {
        throw new Error(`Token fetch failed with status: ${response.status}`);
      }
      const data = await response.json();
      const { token, callerId: assignedCallerId } = data;

      if (!token) {
        throw new Error('No token returned from telephony backend');
      }

      setCallerId(assignedCallerId || '');

      // Dynamic import to prevent SSR errors
      const { TelnyxRTC } = await import('@telnyx/webrtc');

      // Clean up any existing client before creating new
      if (clientRef.current) {
        try {
          clientRef.current.disconnect();
        } catch {}
      }

      const client = new TelnyxRTC({
        login_token: token,
      });

      // Bind audio element via property setter on the client
      client.remoteElement = 'remoteMediaAudio';

      client.on('telnyx.ready', () => {
        if (clientRef.current && clientRef.current !== client) return;
        console.log('Telnyx WebRTC connected and ready!');
        setStatus('ready');
        setErrorMessage(undefined);
      });

      client.on('telnyx.socket.open', () => {
        if (clientRef.current && clientRef.current !== client) return;
        console.log('Telnyx socket connected');
      });

      client.on('telnyx.socket.close', () => {
        if (clientRef.current && clientRef.current !== client) return;
        console.log('Telnyx socket closed');
      });

      client.on('telnyx.error', (err: any) => {
        // Ignore errors from discarded/old client instances during React StrictMode remounts
        if (clientRef.current && clientRef.current !== client) return;

        const code = Number(err?.error?.code || err?.code || 0);
        const msg = err?.error?.message || err?.message || JSON.stringify(err);
        const fullMessage = code ? `[${code}] ${msg}` : msg;
        console.warn('Telephony event/error:', {
          code,
          message: msg,
          error: err?.error,
          sessionId: err?.sessionId,
        });

        // 45002 = WEBSOCKET_ERROR (Connection to server lost).
        // The Telnyx WebRTC SDK auto-reconnects non-fatally.
        if (code === 45002) {
          setStatus('connecting');
          setErrorMessage('Reconnecting to telephony network...');
          return;
        }

        setStatus('error');
        setErrorMessage(fullMessage || 'Telephony connection failed');
      });

      client.on('telnyx.notification', (notification: any) => {
        if (process.env.NODE_ENV !== 'production') {
          console.log('Telnyx notification:', notification.type, notification);
        }
        if (notification.type === 'callUpdate' && notification.call) {
          const call = notification.call;
          activeCallRef.current = call;
          console.log(`Call state update: ${call.state}, cause: ${call.cause || 'none'}`);

          switch (call.state) {
            case 'ringing':
            case 'trying':
            case 'early':
              setCallState('ringing');
              setRemoteParty(call.remotePartyNumber || call.destinationNumber || '');
              break;
            case 'active':
              setCallState('active');
              setRemoteParty(call.remotePartyNumber || call.destinationNumber || '');
              break;
            case 'held':
              setCallState('held');
              setIsHeld(true);
              break;
            case 'hangup':
            case 'destroy':
              console.warn(`Call ended (${call.state}) cause: ${call.cause || call.hangupCause || 'NORMAL'}`);
              setCallState('idle');
              setRemoteParty('');
              setIsMuted(false);
              setIsHeld(false);
              activeCallRef.current = null;
              break;
            default:
              break;
          }
        }
      });

      client.connect();
      clientRef.current = client;
    } catch (err: any) {
      console.error('Failed to initialize softphone:', err);
      setStatus('error');
      setErrorMessage(err?.message || 'Failed to initialize softphone');
    }
  }, [getToken, isSignedIn]);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      initializeClient();
    }
    return () => {
      try {
        clientRef.current?.disconnect();
      } catch {}
    };
  }, [isLoaded, isSignedIn, initializeClient]);

  const makeCall = useCallback(
    (destinationNumber: string) => {
      const client = clientRef.current;
      if (!client || status !== 'ready') {
        console.warn('Softphone is not connected yet.');
        return;
      }

      try {
        // Use destination number as dialed (supports *, #, +, and digits)
        const cleanNumber = destinationNumber.trim();
        setRemoteParty(cleanNumber);
        setCallState('ringing');

        const callParams: any = {
          destinationNumber: cleanNumber,
          audio: true,
          remoteElement: 'remoteMediaAudio',
        };

        if (callerId) {
          callParams.callerNumber = callerId;
        }

        const call = client.newCall(callParams);
        activeCallRef.current = call;
      } catch (err: any) {
        console.error('Error placing outbound call:', err);
        setCallState('idle');
        setErrorMessage(err?.message || 'Failed to dial number');
      }
    },
    [callerId, status],
  );

  const hangup = useCallback(() => {
    try {
      const call = activeCallRef.current || clientRef.current?.activeCall;
      if (call) {
        call.hangup();
      }
    } catch (err) {
      console.error('Error hanging up call:', err);
    } finally {
      setCallState('idle');
      setRemoteParty('');
      setIsMuted(false);
      setIsHeld(false);
      activeCallRef.current = null;
    }
  }, []);

  const answer = useCallback(() => {
    try {
      const call = activeCallRef.current || clientRef.current?.activeCall;
      if (call) {
        call.answer();
        setCallState('active');
      }
    } catch (err) {
      console.error('Error answering call:', err);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const call = activeCallRef.current || clientRef.current?.activeCall;
    if (!call) return;
    try {
      if (isMuted) {
        call.unmuteAudio();
        setIsMuted(false);
      } else {
        call.muteAudio();
        setIsMuted(true);
      }
    } catch (err) {
      console.error('Error toggling mute:', err);
    }
  }, [isMuted]);

  const toggleHold = useCallback(() => {
    const call = activeCallRef.current || clientRef.current?.activeCall;
    if (!call) return;
    try {
      if (isHeld) {
        call.unhold();
        setIsHeld(false);
      } else {
        call.hold();
        setIsHeld(true);
      }
    } catch (err) {
      console.error('Error toggling hold:', err);
    }
  }, [isHeld]);

  const sendDTMF = useCallback((key: string) => {
    const call = activeCallRef.current || clientRef.current?.activeCall;
    if (!call) return;
    try {
      call.dtmf(key);
    } catch (err) {
      console.error('Error sending DTMF tone to call:', err);
    }
  }, []);

  return (
    <SoftphoneContext.Provider
      value={{
        status,
        callState,
        remoteParty,
        callerId,
        isMuted,
        isHeld,
        errorMessage,
        makeCall,
        hangup,
        answer,
        toggleMute,
        toggleHold,
        sendDTMF,
      }}
    >
      {/* Remote audio stream rendering element required by WebRTC */}
      <audio id="remoteMediaAudio" autoPlay playsInline className="hidden" />
      {children}
    </SoftphoneContext.Provider>
  );
}

export function useSoftphone() {
  const context = useContext(SoftphoneContext);
  if (!context) {
    throw new Error('useSoftphone must be used within a SoftphoneProvider');
  }
  return context;
}
