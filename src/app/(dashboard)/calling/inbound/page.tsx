import { SidebarTrigger } from "@/components/ui/sidebar"
import { PhoneIncoming } from "lucide-react"

export default function InboundPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center space-y-3">
          <PhoneIncoming className="mx-auto size-12 text-muted-foreground" />
          <h2 className="text-2xl font-bold">Inbound Calling</h2>
          <p className="text-muted-foreground">Coming soon — manage inbound calls here.</p>
        </div>
      </div>
    </div>
  )
}
