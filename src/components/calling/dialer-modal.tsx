"use client"

import { useState, useEffect } from "react"
import { Phone, PhoneOff, Mic, MicOff, Pause, Play, Delete } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
// Standard DTMF frequency pairs (row freq, col freq) in Hz
const DTMF_FREQUENCIES: Record<string, [number, number]> = {
  '1': [697, 1209],
  '2': [697, 1336],
  '3': [697, 1477],
  '4': [770, 1209],
  '5': [770, 1336],
  '6': [770, 1477],
  '7': [852, 1209],
  '8': [852, 1336],
  '9': [852, 1477],
  '*': [941, 1209],
  '0': [941, 1336],
  '#': [941, 1477],
}

let audioCtx: AudioContext | null = null

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
  if (!AudioContextClass) return null
  if (!audioCtx || audioCtx.state === 'closed') {
    audioCtx = new AudioContextClass()
  }
  return audioCtx
}

function playDtmfTone(key: string) {
  try {
    const freqs = DTMF_FREQUENCIES[key]
    if (!freqs) return

    const ctx = getAudioContext()
    if (!ctx) return

    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {})
    }

    const [f1, f2] = freqs
    const now = ctx.currentTime
    const duration = 0.16

    const osc1 = ctx.createOscillator()
    const osc2 = ctx.createOscillator()
    const gainNode = ctx.createGain()

    osc1.type = 'sine'
    osc1.frequency.setValueAtTime(f1, now)

    osc2.type = 'sine'
    osc2.frequency.setValueAtTime(f2, now)

    // Gain envelope with audible volume (0.35) and smooth ramp to prevent clicks
    gainNode.gain.setValueAtTime(0.001, now)
    gainNode.gain.linearRampToValueAtTime(0.35, now + 0.015)
    gainNode.gain.setValueAtTime(0.35, now + duration - 0.02)
    gainNode.gain.linearRampToValueAtTime(0.001, now + duration)

    osc1.connect(gainNode)
    osc2.connect(gainNode)
    gainNode.connect(ctx.destination)

    osc1.start(now)
    osc2.start(now)
    osc1.stop(now + duration)
    osc2.stop(now + duration)
  } catch (err) {
    console.warn("Unable to play dial sound:", err)
  }
}

export function DialerModal({ 
  children,
  triggerClassName
}: { 
  children?: React.ReactNode
  triggerClassName?: string
}) {
  const [open, setOpen] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [timer, setTimer] = useState(0)
  const [callState, setCallState] = useState<'idle' | 'ringing' | 'active'>('idle')
  const [isMuted, setIsMuted] = useState(false)
  const [isHeld, setIsHeld] = useState(false)

  const status = 'ready'

  // Derive UI states from call state
  const isIdle = callState === 'idle'
  const isRinging = callState === 'ringing'
  const isConnected = callState === 'active'

  // Call Timer
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isConnected && !isHeld) {
      interval = setInterval(() => {
        setTimer((t) => t + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isConnected, isHeld])

  // Reset timer when call ends
  useEffect(() => {
    if (isIdle) {
      setTimer(0)
    }
  }, [isIdle])

  const handleCall = () => {
    if (!phoneNumber) return
    setCallState('ringing')
    setTimer(0)
    setTimeout(() => {
      setCallState('active')
    }, 2000)
  }

  const handleEndCall = () => {
    setCallState('idle')
    setIsMuted(false)
    setIsHeld(false)
  }

  const toggleMute = () => setIsMuted((prev) => !prev)
  const toggleHold = () => setIsHeld((prev) => !prev)
  const sendDTMF = (_key: string) => {}

  const handleKeyPress = (key: string) => {
    playDtmfTone(key)
    if (isConnected) {
      sendDTMF(key)
    }
    setPhoneNumber((prev) => prev + key)
  }

  const handleDelete = () => {
    setPhoneNumber((prev) => prev.slice(0, -1))
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Connection status indicator
  const statusColor = status === 'ready' ? 'bg-green-500' : status === 'connecting' ? 'bg-yellow-500' : status === 'error' ? 'bg-red-500' : 'bg-gray-500'
  const statusLabel = status === 'ready' ? 'Connected' : status === 'connecting' ? 'Connecting...' : status === 'error' ? 'Connection Error' : 'Disconnected'

  const renderKeypad = () => {
    const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"]
    return (
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3 my-4 sm:my-6 max-w-[240px] w-full mx-auto">
        {keys.map((key) => (
          <Button
            key={key}
            variant="outline"
            className="h-12 sm:h-14 rounded-full text-lg font-medium border-sidebar-border bg-sidebar hover:bg-sidebar-accent transition-colors"
            onClick={() => handleKeyPress(key)}
          >
            {key}
          </Button>
        ))}
      </div>
    )
  }

  return (
    <Dialog open={open} onOpenChange={(val) => {
      setOpen(val)
      if (!val && isIdle) {
        setPhoneNumber("")
      }
    }}>
      <DialogTrigger className={triggerClassName}>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[calc(100vw-2rem)] max-w-sm sm:max-w-md bg-sidebar/95 backdrop-blur-xl border-sidebar-border text-sidebar-foreground shadow-2xl p-4 sm:p-6 overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-center font-heading tracking-wide">
            {isIdle ? "Quick Call" : isRinging ? "Calling..." : "In Call"}
          </DialogTitle>
          {/* Connection status dot */}
          <div className="flex items-center justify-center gap-2 mt-1">
            <div className={cn("size-2 rounded-full", statusColor)} />
            <span className="text-xs text-sidebar-foreground/50">{statusLabel}</span>
          </div>
        </DialogHeader>

        <div className="flex flex-col items-center py-6">
          
          {/* Idle State (Dialer) */}
          {isIdle && (
            <div className="w-full">
              <div className="flex items-center gap-2 max-w-[240px] mx-auto">
                <Input
                  type="tel"
                  placeholder="Enter number..."
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="h-12 text-center text-lg bg-transparent border-b-2 border-x-0 border-t-0 border-sidebar-border rounded-none focus-visible:ring-0 focus-visible:border-coral px-0"
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleDelete}
                  disabled={!phoneNumber}
                  className="opacity-50 hover:opacity-100"
                >
                  <Delete className="size-5" />
                </Button>
              </div>

              {renderKeypad()}

              <div className="flex justify-center mt-6">
                <Button 
                  className="rounded-full size-16 bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                  onClick={handleCall}
                  disabled={!phoneNumber || status !== 'ready'}
                >
                  <Phone className="size-6 fill-current" />
                </Button>
              </div>
            </div>
          )}

          {/* Ringing State */}
          {isRinging && (
            <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
              <div className="relative flex items-center justify-center size-24 mb-6">
                <div className="absolute inset-0 rounded-full border-2 border-coral/50 animate-ping" />
                <div className="absolute inset-2 rounded-full border-2 border-coral/30 animate-ping delay-75" />
                <div className="relative z-10 flex items-center justify-center size-16 rounded-full bg-coral text-white shadow-lg shadow-coral/30">
                  <Phone className="size-6 animate-pulse" />
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-widest font-mono mb-2">{phoneNumber}</h3>
              <p className="text-sm text-sidebar-foreground/60 mb-10">Ringing...</p>
              
              <Button 
                className="rounded-full size-16 bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20 transition-all hover:scale-105 active:scale-95"
                onClick={handleEndCall}
              >
                <PhoneOff className="size-6" />
              </Button>
            </div>
          )}

          {/* Connected State */}
          {isConnected && (
            <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300 w-full">
              <div className="relative z-10 flex items-center justify-center size-20 rounded-full bg-sidebar border border-coral/30 text-coral shadow-inner mb-4">
                <Phone className="size-8" />
              </div>
              
              <h3 className="text-2xl font-bold tracking-widest font-mono mb-1">{phoneNumber}</h3>
              <p className={cn("text-lg font-mono mb-8", isHeld ? "text-yellow-500" : "text-green-500")}>
                {formatTime(timer)}
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex flex-col items-center gap-2">
                  <Button
                    variant="outline"
                    className={cn("rounded-full size-14 border-sidebar-border transition-all", isMuted && "bg-coral text-white border-coral")}
                    onClick={toggleMute}
                  >
                    {isMuted ? <MicOff className="size-5" /> : <Mic className="size-5" />}
                  </Button>
                  <span className="text-xs text-sidebar-foreground/60">Mute</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Button
                    variant="outline"
                    className={cn("rounded-full size-14 border-sidebar-border transition-all", isHeld && "bg-yellow-500 text-white border-yellow-500")}
                    onClick={toggleHold}
                  >
                    {isHeld ? <Play className="size-5" /> : <Pause className="size-5" />}
                  </Button>
                  <span className="text-xs text-sidebar-foreground/60">Hold</span>
                </div>
              </div>
              
              <Button 
                className="rounded-full h-14 px-10 bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20 transition-all hover:scale-105 active:scale-95 font-semibold text-lg"
                onClick={handleEndCall}
              >
                End Call
              </Button>
            </div>
          )}

        </div>
      </DialogContent>
    </Dialog>
  )
}
