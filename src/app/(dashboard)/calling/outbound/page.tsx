import { SidebarTrigger } from "@/components/ui/sidebar"
import { PhoneOutgoing, Plus, Search, PhoneCall } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DialerModal } from "@/src/components/calling/dialer-modal"

const campaigns = [
  { id: "CMP-001", name: "Q3 SaaS Renewals", status: "Active", leads: 450, successRate: "24%", lastRun: "2 mins ago" },
  { id: "CMP-002", name: "Cold Outreach Tech", status: "Paused", leads: 1200, successRate: "8%", lastRun: "1 day ago" },
  { id: "CMP-003", name: "Webinar Follow-up", status: "Completed", leads: 320, successRate: "41%", lastRun: "3 days ago" },
]

export default function OutboundPage() {
  return (
    <div className="flex flex-col h-full bg-background">
      
      {/* Top action bar (below header) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-sidebar-border bg-sidebar/30">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-heading font-bold">Outbound Campaigns</h2>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <DialerModal triggerClassName="inline-flex shrink-0 items-center justify-center rounded-lg border text-sm font-medium transition-all gap-2 border-coral text-coral hover:bg-coral hover:text-white cursor-pointer h-9 px-3 sm:px-4 py-2">
            <PhoneCall className="size-4" />
            Quick Call
          </DialerModal>
          <Button className="gap-2 bg-coral hover:bg-coral/90 text-white shrink-0 h-9 px-3 sm:px-4">
            <Plus className="size-4" />
            New Campaign
          </Button>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-auto">
        
        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-sidebar/50 backdrop-blur-md border-sidebar-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Calls Made Today</CardTitle>
              <PhoneOutgoing className="size-4 text-coral" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono">1,248</div>
              <p className="text-xs text-muted-foreground mt-1">+12% from yesterday</p>
            </CardContent>
          </Card>
          <Card className="bg-sidebar/50 backdrop-blur-md border-sidebar-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Connection Rate</CardTitle>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="size-4 text-green-500"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono">18.4%</div>
              <p className="text-xs text-muted-foreground mt-1">Industry avg: 12%</p>
            </CardContent>
          </Card>
          <Card className="bg-sidebar/50 backdrop-blur-md border-sidebar-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Campaigns</CardTitle>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="size-4 text-blue-400"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono">3</div>
              <p className="text-xs text-muted-foreground mt-1">Out of 12 total</p>
            </CardContent>
          </Card>
        </div>

        {/* Data Table */}
        <div className="rounded-md border border-sidebar-border bg-sidebar/50 backdrop-blur-sm">
          <div className="flex items-center px-4 py-4 border-b border-sidebar-border">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
              <Input
                placeholder="Search campaigns..."
                className="pl-9 bg-background border-sidebar-border focus-visible:ring-coral"
              />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="border-sidebar-border hover:bg-transparent">
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Campaign Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total Leads</TableHead>
                <TableHead className="text-right">Success Rate</TableHead>
                <TableHead className="text-right">Last Run</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((camp) => (
                <TableRow key={camp.id} className="border-sidebar-border hover:bg-sidebar-accent/50 cursor-pointer">
                  <TableCell className="font-mono text-xs">{camp.id}</TableCell>
                  <TableCell className="font-medium">{camp.name}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
                      camp.status === 'Active' ? 'bg-green-500/10 text-green-500' :
                      camp.status === 'Completed' ? 'bg-blue-500/10 text-blue-400' :
                      'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {camp.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-mono">{camp.leads}</TableCell>
                  <TableCell className="text-right font-mono">{camp.successRate}</TableCell>
                  <TableCell className="text-right text-muted-foreground text-sm">{camp.lastRun}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

      </div>
    </div>
  )
}
