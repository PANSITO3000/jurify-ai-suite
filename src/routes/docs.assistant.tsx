import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, BookOpen, Compass, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/docs/assistant")({
  component: AssistantPage,
  head: () => ({
    meta: [
      { title: "Asistente Legal Inteligente — Jurify CRM" },
      { name: "description", content: "Chat contextual con IA que responde basándose en tus documentos y guía paso a paso." },
    ],
  }),
});

const features = [
  { icon: MessageSquare, title: "Chat contextual", desc: "Conversa con la IA sobre tus documentos. Entiende el contexto completo de tus casos y archivos." },
  { icon: BookOpen, title: "Respuestas con base documental", desc: "Cada respuesta está fundamentada en tus documentos, con citas y referencias exactas." },
  { icon: Compass, title: "Guía paso a paso", desc: "El asistente guía al usuario a través de procesos legales complejos de forma clara y estructurada." },
  { icon: Lightbulb, title: "Estrategias legales", desc: "Propone estrategias basadas en el análisis de tus documentos y casos similares." },
];

function AssistantPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 lg:px-10">
      <div className="animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-[12px] font-medium text-primary mb-4">
          <MessageSquare size={12} /> Asistente IA
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Asistente Legal Inteligente</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Un asistente tipo chat que entiende tus documentos, responde con fundamento y te guía
          en procesos legales complejos. Piensa en un Claude + Harvey diseñado para abogados.
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
