import { auth } from "@clerk/nextjs/server"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/src/components/dashboard/app-sidebar"
import { DashboardHeader } from "@/src/components/dashboard/dashboard-header"
import { SoftphoneProvider } from "@/src/components/calling/softphone-provider"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  await auth.protect()

  return (
    <div className="font-inter">
      <TooltipProvider>
        <SidebarProvider>
          <SoftphoneProvider>
            <AppSidebar />
            <SidebarInset>
              <DashboardHeader />
              {children}
            </SidebarInset>
          </SoftphoneProvider>
        </SidebarProvider>
      </TooltipProvider>
    </div>
  )
}
