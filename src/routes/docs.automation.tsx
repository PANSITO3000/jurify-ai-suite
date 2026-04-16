import { createFileRoute } from "@tanstack/react-router";
import { Zap, CalendarClock, Bell, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/docs/automation")({
  component: AutomationPage,
  head: () => ({
    meta: [
      { title: "Automatización — Jurify CRM" },
      { name: "description", content: "Flujos legales automáticos, seguimiento de plazos y monitoreo de cumplimiento." },
    ],
  }),
});

const features = [
  { icon: Zap, title: "Flujos legales automáticos", desc: "Define workflows que se ejecutan automáticamente al crear casos, recibir documentos o cumplir condiciones." },
  { icon: CalendarClock, title: "Seguimiento de plazos", desc: "Control automático de vencimientos, prescripciones y fechas límite con notificaciones anticipadas." },
  { icon: Bell, title: "Alertas inteligentes", desc: "Notificaciones por cambios en documentos, aproximación de plazos o eventos relevantes del caso." },
  { icon: ShieldCheck, title: "Monitoreo de cumplimiento", desc: "Verifica automáticamente que los documentos y procesos cumplan con regulaciones y políticas internas." },
];

function AutomationPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 lg:px-10">
      <div className="animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-[12px] font-medium text-primary mb-4">
          <Zap size={12} /> Automatización
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Automatización</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Automatiza flujos legales, controla plazos y monitorea cumplimiento. Deja que la tecnología
          se encargue de lo repetitivo.
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
