import { createFileRoute } from "@tantml/react-router";
import { Users, MessageCircle, FolderOpen, Edit3 } from "lucide-react";

export const Route = createFileRoute("/docs/collaboration")({
  component: CollaborationPage,
  head: () => ({
    meta: [
      { title: "Colaboración — Jurify CRM" },
      { name: "description", content: "Edición simultánea, comentarios y workspaces compartidos para equipos legales." },
    ],
  }),
});

const features = [
  { icon: Edit3, title: "Edición simultánea", desc: "Múltiples abogados editando el mismo documento en tiempo real con indicadores de presencia." },
  { icon: MessageCircle, title: "Comentarios y asignaciones", desc: "Comenta en cualquier sección, asigna tareas y mantén la comunicación dentro del documento." },
  { icon: FolderOpen, title: "Workspaces compartidos", desc: "Espacios de trabajo por equipo, caso o cliente con permisos granulares." },
  { icon: Users, title: "Historial de cambios", desc: "Registro completo de cada modificación con la posibilidad de restaurar versiones anteriores." },
];

function CollaborationPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 lg:px-10">
      <div className="animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-[12px] font-medium text-primary mb-4">
          <Users size={12} /> Colaboración
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Colaboración</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Trabaja en equipo con edición simultánea, comentarios en contexto y workspaces compartidos.
          Todo el equipo legal en sincronía.
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
