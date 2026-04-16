import { createFileRoute } from "@tanstack/react-router";
import { Bot, Database, FileSearch, FileOutput, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/docs/agents")({
  component: AgentsPage,
  head: () => ({
    meta: [
      { title: "Agentes de IA — Jurify CRM" },
      { name: "description", content: "Agentes autónomos que recopilan información, analizan documentos y generan reportes legales automáticos." },
    ],
  }),
});

const features = [
  { icon: Database, title: "Recopilación automática", desc: "Los agentes recopilan información de múltiples fuentes y documentos de forma autónoma." },
  { icon: FileSearch, title: "Análisis multi-documento", desc: "Analizan simultáneamente múltiples documentos para encontrar patrones, inconsistencias y conexiones." },
  { icon: FileOutput, title: "Solicitudes legales completas", desc: "Construyen solicitudes legales completas a partir de la información recopilada y analizada." },
  { icon: BarChart3, title: "Reportes estructurados", desc: "Generan reportes automáticos con hallazgos, métricas y recomendaciones accionables." },
];

function AgentsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 lg:px-10">
      <div className="animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-[12px] font-medium text-primary mb-4">
          <Bot size={12} /> Agentes Autónomos
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Agentes de IA</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Sistema de agentes inteligentes que trabajan de forma autónoma: recopilan información,
          analizan documentos, construyen solicitudes legales y generan reportes estructurados.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        {features.map((f, i) => (
          <div key={i} className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-glow transition-shadow">
            <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <f.icon size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-foreground">{f.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
