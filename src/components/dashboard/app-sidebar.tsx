"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  BookOpen,
  Wrench,
  Shield,
  Workflow,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  ChevronRight,
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import NumaindaIcon from "@/src/assets/numainda_new_icon.svg"
import NumaindaLogo from "@/src/assets/numainda_new_logo.svg"

type BaseItem = { title: string; url: string }
type NavItem = {
  title: string
  url?: string
  icon?: any
  items?: BaseItem[]
}

const overviewItems: NavItem[] = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
]

const configureItems: NavItem[] = [
  { title: "Knowledge Base", url: "/knowledge-base", icon: BookOpen },
  { title: "Tools", url: "/tools", icon: Wrench },
  { title: "Guardrails", url: "/guardrails", icon: Shield },
  { title: "Workflows", url: "/workflows", icon: Workflow },
]

const callingItems: NavItem[] = [
  { title: "Inbound", url: "/calling/inbound", icon: PhoneIncoming },
  { title: "Outbound", url: "/calling/outbound", icon: PhoneOutgoing },
]

function NavGroup({ label, items }: { label: string; items: NavItem[] }) {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            item.items ? (
              <Collapsible
                key={item.title}
                render={<SidebarMenuItem />}
                defaultOpen={item.items.some((sub) => pathname?.startsWith(sub.url))}
                className="group/collapsible"
              >
                <CollapsibleTrigger 
                  render={<SidebarMenuButton tooltip={item.title} />}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton 
                          render={<Link href={subItem.url} />} 
                          isActive={pathname === subItem.url}
                        >
                          <span>{subItem.title}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  render={<Link href={item.url!} />} 
                  tooltip={item.title}
                  isActive={pathname === item.url}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
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
      <SidebarHeader className="flex h-14 shrink-0 items-center justify-center border-b border-sidebar-border px-4 group-data-[collapsible=icon]:px-0">
        {isExpanded ? (
          <Image src={NumaindaLogo} alt="Numainda" height={28} />
        ) : (
          <Image src={NumaindaIcon} alt="Numainda" width={28} height={28} />
        )}
      </SidebarHeader>
      <SidebarContent>
        <NavGroup label="Overview" items={overviewItems} />
        <NavGroup label="Configure" items={configureItems} />
        <NavGroup label="Calling" items={callingItems} />
      </SidebarContent>
    </Sidebar>
  )
}
