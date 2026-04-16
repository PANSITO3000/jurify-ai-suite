import { createFileRoute } from "@tanstack/react-router";
import { Search, FileSearch, Filter, Bookmark } from "lucide-react";

export const Route = createFileRoute("/docs/search")({
  component: SearchPage,
  head: () => ({
    meta: [
      { title: "Búsqueda Inteligente — Jurify CRM" },
      { name: "description", content: "Búsqueda semántica en todos tus documentos legales con IA." },
    ],
  }),
});

const features = [
  { icon: Search, title: "Búsqueda semántica", desc: "Busca por significado, no solo por palabras clave. Encuentra información relevante incluso con términos diferentes." },
  { icon: FileSearch, title: "Precedentes y cláusulas", desc: "Encuentra precedentes legales y cláusulas similares en todo tu archivo documental." },
  { icon: Filter, title: "Filtrado avanzado", desc: "Filtra por caso, cliente, tipo de documento, fecha, jurisdicción y más." },
  { icon: Bookmark, title: "Resultados contextuales", desc: "Cada resultado incluye contexto, resumen y enlace directo al fragmento relevante." },
];

function SearchPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 lg:px-10">
      <div className="animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-[12px] font-medium text-primary mb-4">
          <Search size={12} /> Búsqueda IA
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Búsqueda Inteligente</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Búsqueda semántica potenciada por IA en todos tus documentos. Encuentra precedentes,
          cláusulas y referencias en segundos.
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
