import { createFileRoute } from "@tanstack/react-router";
import { PenTool, MessageSquare, FileText, Layers, Wand2 } from "lucide-react";

export const Route = createFileRoute("/docs/drafting")({
  component: DraftingPage,
  head: () => ({
    meta: [
      { title: "Redacción Legal con IA — Jurify CRM" },
      { name: "description", content: "Genera contratos, demandas y escritos personalizados con IA basándose en tus documentos internos." },
    ],
  }),
});

const features = [
  { icon: FileText, title: "Generación de contratos", desc: "Crea contratos completos, demandas y escritos legales a partir de instrucciones en lenguaje natural." },
  { icon: Layers, title: "Drafts personalizados", desc: "Genera borradores basados en tus documentos previos, manteniendo tu estilo y terminología." },
  { icon: MessageSquare, title: "Asistente que pregunta primero", desc: "Antes de redactar, la IA hace preguntas clave para entender el contexto y generar documentos precisos." },
  { icon: Wand2, title: "Plantillas dinámicas", desc: "Crea y personaliza plantillas automáticamente que se adaptan a cada caso y jurisdicción." },
];

function DraftingPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 lg:px-10">
      <div className="animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-[12px] font-medium text-primary mb-4">
          <PenTool size={12} /> Redacción con IA
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Redacción Legal con IA</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Genera contratos, demandas y escritos legales personalizados en minutos. La IA aprende de tus documentos
          internos y hace preguntas antes de redactar para garantizar precisión.
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

      <div className="mt-12 p-6 rounded-xl bg-surface border border-border">
        <h2 className="font-semibold text-foreground mb-3">Flujo de redacción</h2>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">1</span>
            Describe qué documento necesitas en lenguaje natural
          </div>
          <div className="flex items-center gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">2</span>
            La IA te hace preguntas clave (partes, jurisdicción, condiciones)
          </div>
          <div className="flex items-center gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">3</span>
            Genera un borrador completo basado en tus documentos previos
          </div>
          <div className="flex items-center gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">4</span>
            Edita, colabora y exporta el documento finalizado
          </div>
        </div>
      </div>
    </div>
  );
}
