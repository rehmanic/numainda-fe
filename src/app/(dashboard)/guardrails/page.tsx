import { SidebarTrigger } from "@/components/ui/sidebar"
import { Shield } from "lucide-react"

export default function GuardrailsPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center space-y-3">
          <Shield className="mx-auto size-12 text-muted-foreground" />
          <h2 className="text-2xl font-bold">Guardrails</h2>
          <p className="text-muted-foreground">Coming soon — configure safety guardrails here.</p>
        </div>
      </div>
    </div>
  )
}
