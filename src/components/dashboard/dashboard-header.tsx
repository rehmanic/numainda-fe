"use client"
import { usePathname } from "next/navigation"
import { SidebarTrigger } from "@/components/ui/sidebar"

const routeTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/knowledge-base": "Knowledge Base",
  "/tools": "Tools",
  "/guardrails": "Guardrails",
  "/workflows": "Workflows",
  "/calling/inbound": "Inbound",
  "/calling/outbound": "Outbound",
}

export function DashboardHeader() {
  const pathname = usePathname()
  const title = pathname ? routeTitles[pathname] || "Numainda" : "Numainda"

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger />
      <h1 className="text-lg font-semibold">{title}</h1>
    </header>
  )
}
