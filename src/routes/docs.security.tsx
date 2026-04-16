import { createFileRoute } from "@tanstack/react-router";
import { Shield, Lock, Server, EyeOff, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/docs/security")({
  component: SecurityPage,
  head: () => ({
    meta: [
      { title: "Seguridad — Jurify CRM" },
      { name: "description", content: "Cifrado de extremo a extremo, TLS, y privacidad total de datos legales." },
    ],
  }),
});

const secFeatures = [
  { icon: Lock, title: "Cifrado de extremo a extremo", desc: "Todos los documentos se cifran en tránsito y en reposo con estándares AES-256." },
  { icon: Shield, title: "TLS en todas las comunicaciones", desc: "Todas las conexiones usan TLS 1.3 para proteger la transmisión de datos." },
  { icon: EyeOff, title: "Sin uso de datos para entrenamiento", desc: "Tus documentos nunca se usan para entrenar modelos de IA. Tu información es exclusivamente tuya." },
  { icon: Server, title: "Opción de nube privada", desc: "Despliega Jurify CRM en tu propia infraestructura para máximo control." },
];

const faqs = [
  { q: "¿Mis datos están seguros?", a: "Sí. Usamos cifrado AES-256 en reposo y TLS 1.3 en tránsito. Los datos se almacenan en centros de datos certificados SOC 2 Type II." },
  { q: "¿Qué tan precisa es la IA?", a: "Nuestros modelos tienen una precisión superior al 95% en análisis de documentos legales, y cada respuesta incluye citas verificables." },
  { q: "¿Qué tipos de documentos soporta?", a: "PDF, DOCX, TXT, RTF y más. Procesamos cualquier documento legal estándar." },
  { q: "¿Cómo funciona la colaboración en equipo?", a: "Múltiples usuarios pueden editar documentos simultáneamente con indicadores de presencia, comentarios y control de versiones." },
];

function SecurityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 lg:px-10">
      <div className="animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-[12px] font-medium text-primary mb-4">
          <Shield size={12} /> Seguridad
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Seguridad y Privacidad</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          La seguridad de tus datos legales es nuestra prioridad absoluta. Cifrado, privacidad total
          y opciones de despliegue privado.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        {secFeatures.map((f, i) => (
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

      {/* FAQ */}
      <div className="mt-14">
        <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <HelpCircle size={18} className="text-primary" /> Preguntas frecuentes
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-accent/50 transition-colors"
              >
                {faq.q}
                <ChevronDown size={16} className={`text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <div className="px-4 pb-3 text-xs text-muted-foreground leading-relaxed animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
