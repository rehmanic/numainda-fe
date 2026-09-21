import { SidebarTrigger } from "@/components/ui/sidebar"
import { LayoutDashboard } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center space-y-3">
          <LayoutDashboard className="mx-auto size-12 text-muted-foreground" />
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text-muted-foreground">Coming soon — analytics and overview will appear here.</p>
        </div>
      </div>
    </div>
  )
}
