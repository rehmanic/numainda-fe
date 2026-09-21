"use client"

import Link from "next/link"
import Image from "next/image"
import {
  LayoutDashboard,
  BookOpen,
  Wrench,
  Shield,
  Workflow,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"

import NumaindaIcon from "@/src/assets/numainda_new_icon.svg"
import NumaindaLogo from "@/src/assets/numainda_new_logo.svg"

const overviewItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
]

const configureItems = [
  { title: "Knowledge Base", url: "/knowledge-base", icon: BookOpen },
  { title: "Tools", url: "/tools", icon: Wrench },
  { title: "Guardrails", url: "/guardrails", icon: Shield },
  { title: "Workflows", url: "/workflows", icon: Workflow },
]

const deployItems = [
  { title: "Calling", url: "/calling", icon: PhoneCall },
]

function NavGroup({ label, items }: { label: string; items: typeof overviewItems }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton render={<Link href={item.url} />} tooltip={item.title}>
                <item.icon />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export function AppSidebar() {
  const { state } = useSidebar()
  const isExpanded = state === "expanded"

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="px-4 py-3">
        {isExpanded ? (
          <Image src={NumaindaLogo} alt="Numainda" height={28} />
        ) : (
          <Image src={NumaindaIcon} alt="Numainda" width={28} height={28} />
        )}
      </SidebarHeader>
      <SidebarContent>
        <NavGroup label="Overview" items={overviewItems} />
        <NavGroup label="Configure" items={configureItems} />
        <NavGroup label="Deploy" items={deployItems} />
      </SidebarContent>
    </Sidebar>
  )
}
