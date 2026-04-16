import Layout from "@/components/Layout";
import ChatInterface from "@/components/ChatInterface";
import HelpTooltip from "@/components/HelpTooltip";
import DraggableCard from "@/components/DraggableCard";

export default function Geral() {
  return (
    <Layout>
      <div className="w-full h-full flex flex-col">
        {/* Page Header */}
        <div className="border-b border-border/50 bg-gradient-to-b from-violet-500/10 to-transparent px-4 sm:px-6 lg:px-8 py-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                Guia Geral
              </h1>
              <HelpTooltip
                label="Guia Geral"
                helpText="Interface conversacional onde você pode fazer perguntas e interagir com seu assistente virtual pessoal sobre diversos tópicos."
              />
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Interface conversacional com seu assistente virtual
            </p>
          </div>
        </div>

        {/* Chat Container */}
        <div className="flex-1 overflow-hidden p-4">
          <DraggableCard defaultWidth={800} defaultHeight={600}>
            <ChatInterface />
          </DraggableCard>
        </div>
      </div>
    </Layout>
  );
}
