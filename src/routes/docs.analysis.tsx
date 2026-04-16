import { createFileRoute } from "@tanstack/react-router";
import { FileSearch, AlertTriangle, GitCompare, List, FileText, Layers } from "lucide-react";

export const Route = createFileRoute("/docs/analysis")({
  component: AnalysisPage,
  head: () => ({
    meta: [
      { title: "Análisis de Documentos — Jurify CRM" },
      { name: "description", content: "Análisis inteligente de contratos, detección de riesgos y extracción de cláusulas con IA." },
    ],
  }),
});

const features = [
  { icon: FileSearch, title: "Análisis individual de contratos", desc: "Sube cualquier contrato y obtén un análisis completo con riesgos identificados, cláusulas clave y resumen ejecutivo en segundos." },
  { icon: Layers, title: "Análisis masivo de archivos", desc: "Procesa cientos de documentos simultáneamente. Ideal para due diligence, auditorías y revisión de portfolios." },
  { icon: AlertTriangle, title: "Detección de riesgos", desc: "Identificación automática de cláusulas abusivas, riesgos contractuales y términos desfavorables con nivel de severidad." },
  { icon: List, title: "Extracción de cláusulas", desc: "Extrae automáticamente cláusulas específicas: indemnización, jurisdicción, confidencialidad, penalidades y más." },
  { icon: GitCompare, title: "Comparación entre documentos", desc: "Compara versiones de contratos, identifica diferencias y cambios clave entre documentos relacionados." },
  { icon: FileText, title: "Resúmenes con citas legales", desc: "Genera resúmenes ejecutivos fundamentados con referencias exactas al texto original del documento." },
];

function AnalysisPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 lg:px-10">
      <div className="animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-[12px] font-medium text-primary mb-4">
          <FileSearch size={12} /> Módulo Core
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Análisis de Documentos</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Analiza contratos individuales o archivos masivos con inteligencia artificial. Detecta riesgos,
          extrae cláusulas y genera resúmenes con citas legales exactas en segundos.
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
        <h2 className="font-semibold text-foreground mb-3">Ejemplo de uso</h2>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-primary font-mono text-xs mt-0.5">→</span>
            <span className="text-muted-foreground"><strong className="text-foreground">Usuario:</strong> "Analiza la cláusula de indemnización de este contrato"</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary font-mono text-xs mt-0.5">←</span>
            <div className="text-muted-foreground">
              <strong className="text-foreground">Jurify IA:</strong>
              <ul className="mt-1 space-y-1 ml-4 list-disc">
                <li><span className="text-destructive font-medium">Riesgo alto</span> — Cláusula de indemnización ilimitada</li>
                <li>Duración indefinida sin mecanismo de terminación</li>
                <li>Sin límite de responsabilidad establecido</li>
                <li className="text-primary">→ Sugerencia: Limitar a 12 meses y establecer tope de 2x el valor del contrato</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
