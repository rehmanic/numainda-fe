import { SidebarTrigger } from "@/components/ui/sidebar"
import { Workflow } from "lucide-react"

export default function WorkflowsPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center space-y-3">
          <Workflow className="mx-auto size-12 text-muted-foreground" />
          <h2 className="text-2xl font-bold">Workflows</h2>
          <p className="text-muted-foreground">Coming soon — build and manage workflows here.</p>
        </div>
      </div>
    </div>
  )
}
