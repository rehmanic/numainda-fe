"use client"

import { PhoneIncoming, PhoneMissed, Clock, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
const recentInbound = [
  { id: "IN-001", from: "+1 (415) 555-1234", status: "Answered", duration: "4:32", time: "2 mins ago" },
  { id: "IN-002", from: "+1 (212) 555-5678", status: "Missed", duration: "—", time: "15 mins ago" },
  { id: "IN-003", from: "+1 (310) 555-9012", status: "Answered", duration: "12:08", time: "1 hour ago" },
  { id: "IN-004", from: "+1 (650) 555-3456", status: "Voicemail", duration: "0:45", time: "2 hours ago" },
  { id: "IN-005", from: "+1 (512) 555-7890", status: "Answered", duration: "7:15", time: "3 hours ago" },
]

export default function InboundPage() {
  const status = 'ready'

  const statusColor = status === 'ready' ? 'bg-green-500' : status === 'connecting' ? 'bg-yellow-500' : status === 'error' ? 'bg-red-500' : 'bg-gray-500'
  const statusLabel = status === 'ready' ? 'Listening for calls' : status === 'connecting' ? 'Connecting...' : status === 'error' ? 'Connection Error' : 'Disconnected'

  return (
    <div className="flex flex-col h-full bg-background">

      {/* Top action bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-sidebar-border bg-sidebar/30">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-heading font-bold">Inbound Calls</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className={`size-2 rounded-full ${statusColor} animate-pulse`} />
          <span className="text-sm text-muted-foreground">{statusLabel}</span>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-auto">

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-sidebar/50 backdrop-blur-md border-sidebar-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Calls Today</CardTitle>
              <PhoneIncoming className="size-4 text-coral" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono">47</div>
              <p className="text-xs text-muted-foreground mt-1">+8% from yesterday</p>
            </CardContent>
          </Card>
          <Card className="bg-sidebar/50 backdrop-blur-md border-sidebar-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Missed Calls</CardTitle>
              <PhoneMissed className="size-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono">3</div>
              <p className="text-xs text-muted-foreground mt-1">6.4% miss rate</p>
            </CardContent>
          </Card>
          <Card className="bg-sidebar/50 backdrop-blur-md border-sidebar-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg Wait Time</CardTitle>
              <Clock className="size-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono">8s</div>
              <p className="text-xs text-muted-foreground mt-1">Target: &lt;15s</p>
            </CardContent>
          </Card>
          <Card className="bg-sidebar/50 backdrop-blur-md border-sidebar-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg Duration</CardTitle>
              <TrendingUp className="size-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono">5:42</div>
              <p className="text-xs text-muted-foreground mt-1">+1:20 from last week</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Calls Table */}
        <div className="rounded-md border border-sidebar-border bg-sidebar/50 backdrop-blur-sm">
          <div className="px-4 py-4 border-b border-sidebar-border">
            <h3 className="font-semibold">Recent Inbound Calls</h3>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="border-sidebar-border hover:bg-transparent">
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>From</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Duration</TableHead>
                <TableHead className="text-right">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentInbound.map((call) => (
                <TableRow key={call.id} className="border-sidebar-border hover:bg-sidebar-accent/50">
                  <TableCell className="font-mono text-xs">{call.id}</TableCell>
                  <TableCell className="font-mono">{call.from}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
                      call.status === 'Answered' ? 'bg-green-500/10 text-green-500' :
                      call.status === 'Missed' ? 'bg-red-500/10 text-red-400' :
                      'bg-blue-500/10 text-blue-400'
                    }`}>
                      {call.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-mono">{call.duration}</TableCell>
                  <TableCell className="text-right text-muted-foreground text-sm">{call.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

      </div>
    </div>
  )
}
