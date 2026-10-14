'use client';

import { Phone, PhoneOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function IncomingCallBanner({
  callDirection = 'idle',
  callState = 'idle',
  remoteParty = '',
  answer = () => {},
  hangup = () => {},
}: {
  callDirection?: 'inbound' | 'outbound' | 'idle'
  callState?: 'idle' | 'ringing' | 'active' | 'hangup'
  remoteParty?: string
  answer?: () => void
  hangup?: () => void
} = {}) {
  const isIncomingRinging =
    callDirection === 'inbound' && callState === 'ringing';

  if (!isIncomingRinging) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top-4 fade-in duration-300">
      <div className="flex items-center gap-4 rounded-2xl border border-sidebar-border bg-sidebar/95 backdrop-blur-xl px-6 py-4 shadow-2xl shadow-black/20">
        {/* Pulsing indicator */}
        <div className="relative flex items-center justify-center size-10">
          <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
          <div className="relative size-10 rounded-full bg-green-500/10 flex items-center justify-center">
            <Phone className="size-5 text-green-500 animate-pulse" />
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-medium text-sidebar-foreground/60">
            Incoming call
          </span>
          <span className="text-lg font-bold font-mono tracking-wide">
            {remoteParty || 'Unknown'}
          </span>
        </div>

        <div className="flex items-center gap-2 ml-4">
          <Button
            className="rounded-full size-12 bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20 transition-all hover:scale-105 active:scale-95"
            onClick={answer}
          >
            <Phone className="size-5 fill-current" />
          </Button>
          <Button
            className="rounded-full size-12 bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20 transition-all hover:scale-105 active:scale-95"
            onClick={hangup}
          >
            <PhoneOff className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
