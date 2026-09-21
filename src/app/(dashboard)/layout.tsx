import { TooltipProvider } from "@/components/ui/tooltip"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/src/components/dashboard/app-sidebar"
import { DashboardHeader } from "@/src/components/dashboard/dashboard-header"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-inter">
      <TooltipProvider>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <DashboardHeader />
            {children}
          </SidebarInset>
        </SidebarProvider>
      </TooltipProvider>
    </div>
  )
}
