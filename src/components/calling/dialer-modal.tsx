"use client"

import { useState, useEffect } from "react"
import { Phone, PhoneOff, Mic, MicOff, Pause, Play, Delete } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function DialerModal({ 
  children,
  triggerClassName
}: { 
  children?: React.ReactNode
  triggerClassName?: string
}) {
  const [open, setOpen] = useState(false)
  const [callState, setCallState] = useState<"idle" | "ringing" | "connected">("idle")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [timer, setTimer] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [isHold, setIsHold] = useState(false)

  // Simulated Call Flow
  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (callState === "ringing") {
      timeout = setTimeout(() => {
        setCallState("connected")
      }, 3000)
    }
    return () => clearTimeout(timeout)
  }, [callState])

  // Call Timer
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (callState === "connected" && !isHold) {
      interval = setInterval(() => {
        setTimer((t) => t + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [callState, isHold])

  const handleCall = () => {
    if (!phoneNumber) return
    setCallState("ringing")
    setTimer(0)
    setIsMuted(false)
    setIsHold(false)
  }

  const handleEndCall = () => {
    setCallState("idle")
    setPhoneNumber("")
  }

  const handleKeyPress = (key: string) => {
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

  const renderKeypad = () => {
    const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"]
    return (
      <div className="grid grid-cols-3 gap-3 my-6 max-w-[240px] mx-auto">
        {keys.map((key) => (
          <Button
            key={key}
            variant="outline"
            className="h-14 rounded-full text-lg font-medium border-sidebar-border bg-sidebar hover:bg-sidebar-accent transition-colors"
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
      if (!val) {
        setCallState("idle")
        setPhoneNumber("")
      }
    }}>
      <DialogTrigger className={triggerClassName}>
        {children}
      </DialogTrigger>
      {/* 
        We use a frosted glass background on the Dialog overlay by default in shadcn if configured, 
        but we can enforce it on the content wrapper as well.
      */}
      <DialogContent className="sm:max-w-md bg-sidebar/80 backdrop-blur-xl border-sidebar-border text-sidebar-foreground shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-center font-heading tracking-wide">
            {callState === "idle" ? "Quick Call" : callState === "ringing" ? "Calling..." : "In Call"}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center py-6">
          
          {/* Idle State (Dialer) */}
          {callState === "idle" && (
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
                  disabled={!phoneNumber}
                >
                  <Phone className="size-6 fill-current" />
                </Button>
              </div>
            </div>
          )}

          {/* Ringing State */}
          {callState === "ringing" && (
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
          {callState === "connected" && (
            <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300 w-full">
              <div className="relative z-10 flex items-center justify-center size-20 rounded-full bg-sidebar border border-coral/30 text-coral shadow-inner mb-4">
                <Phone className="size-8" />
              </div>
              
              <h3 className="text-2xl font-bold tracking-widest font-mono mb-1">{phoneNumber}</h3>
              <p className={cn("text-lg font-mono mb-8", isHold ? "text-yellow-500" : "text-green-500")}>
                {formatTime(timer)}
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex flex-col items-center gap-2">
                  <Button
                    variant="outline"
                    className={cn("rounded-full size-14 border-sidebar-border transition-all", isMuted && "bg-coral text-white border-coral")}
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? <MicOff className="size-5" /> : <Mic className="size-5" />}
                  </Button>
                  <span className="text-xs text-sidebar-foreground/60">Mute</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Button
                    variant="outline"
                    className={cn("rounded-full size-14 border-sidebar-border transition-all", isHold && "bg-yellow-500 text-white border-yellow-500")}
                    onClick={() => setIsHold(!isHold)}
                  >
                    {isHold ? <Play className="size-5" /> : <Pause className="size-5" />}
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
