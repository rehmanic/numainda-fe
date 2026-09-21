import { SidebarTrigger } from "@/components/ui/sidebar"
import { BookOpen } from "lucide-react"

export default function KnowledgeBasePage() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center gap-2 border-b px-4 py-3">
        <SidebarTrigger />
        <h1 className="text-lg font-semibold">Knowledge Base</h1>
      </header>
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center space-y-3">
          <BookOpen className="mx-auto size-12 text-muted-foreground" />
          <h2 className="text-2xl font-bold">Knowledge Base</h2>
          <p className="text-muted-foreground">Coming soon — manage your documents and knowledge here.</p>
        </div>
      </div>
    </div>
  )
}
