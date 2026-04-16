import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Users, Clock, GitBranch, LayoutDashboard, FileText } from "lucide-react";

export const Route = createFileRoute("/docs/crm")({
  component: CrmPage,
  head: () => ({
    meta: [
      { title: "CRM Legal — Jurify CRM" },
      { name: "description", content: "Gestión integral de casos, contactos, timeline y estados de procesos legales." },
    ],
  }),
});

const features = [
  { icon: Briefcase, title: "Gestión de casos", desc: "Organiza todos tus casos legales con pipelines visuales, estados personalizables y vistas kanban." },
  { icon: Users, title: "Contactos", desc: "Base de datos de clientes, contrapartes y contactos vinculados automáticamente a sus casos." },
  { icon: Clock, title: "Timeline completo", desc: "Historial automático de cada acción, documento y comunicación relacionada con el caso." },
  { icon: GitBranch, title: "Estados de procesos", desc: "Define flujos de trabajo personalizados con estados, transiciones y reglas de negocio." },
  { icon: LayoutDashboard, title: "Dashboard de casos", desc: "Vista panorámica de todos los casos con métricas, alertas y resúmenes ejecutivos." },
  { icon: FileText, title: "Documentos vinculados", desc: "Relación automática entre documentos y casos. Cada archivo sabe a qué caso pertenece." },
];

function CrmPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 lg:px-10">
      <div className="animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-[12px] font-medium text-primary mb-4">
          <Briefcase size={12} /> CRM Legal
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">CRM Legal</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Gestión completa de casos legales con pipeline visual, contactos vinculados, timeline automático
          y dashboards dinámicos. Todo conectado con IA.
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
