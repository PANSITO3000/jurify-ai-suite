import { createFileRoute } from "@tanstack/react-router";
import {
  FileSearch, PenTool, MessageSquare, Bot, Briefcase,
  Search, Users, Zap, Shield, ArrowRight, CheckCircle,
  Upload, HelpCircle, FileText, Play, Star, TrendingUp,
  Clock, DollarSign, BarChart3
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jurify CRM — Analiza, gestiona y crea documentos legales con IA" },
      { name: "description", content: "El sistema operativo legal con IA que permite analizar, gestionar y crear documentos legales en minutos, no horas." },
      { property: "og:title", content: "Jurify CRM — Sistema Operativo Legal con IA" },
      { property: "og:description", content: "Analiza contratos, gestiona casos y crea documentos legales con IA en minutos." },
    ],
  }),
});

const modules = [
  { icon: FileSearch, title: "Análisis de Documentos", desc: "Análisis de contratos, detección de riesgos, extracción de cláusulas y comparación entre documentos.", to: "/docs/analysis" },
  { icon: PenTool, title: "Redacción Legal con IA", desc: "Generación de contratos, demandas y escritos personalizados basados en documentos internos.", to: "/docs/drafting" },
  { icon: MessageSquare, title: "Asistente Legal", desc: "Chat contextual que responde con base en tus documentos y guía paso a paso.", to: "/docs/assistant" },
  { icon: Bot, title: "Agentes de IA", desc: "Recopilan información, analizan documentos y generan reportes automáticos.", to: "/docs/agents" },
  { icon: Briefcase, title: "CRM Legal", desc: "Gestión de casos, contactos, timeline y estados de procesos legales.", to: "/docs/crm" },
  { icon: Search, title: "Búsqueda Inteligente", desc: "Búsqueda semántica en todos tus documentos, precedentes y cláusulas.", to: "/docs/search" },
  { icon: Users, title: "Colaboración", desc: "Edición simultánea, comentarios, asignaciones y workspaces compartidos.", to: "/docs/collaboration" },
  { icon: Zap, title: "Automatización", desc: "Flujos legales automáticos, seguimiento de plazos y monitoreo de cumplimiento.", to: "/docs/automation" },
];

const steps = [
  { icon: Upload, title: "Sube documentos", desc: "PDF, DOCX, TXT — cualquier formato legal." },
  { icon: HelpCircle, title: "Pregunta en lenguaje natural", desc: "\"¿Cuáles son los riesgos de este contrato?\"" },
  { icon: FileSearch, title: "Obtén análisis con citas", desc: "Respuestas fundamentadas con referencias exactas." },
  { icon: FileText, title: "Genera documentos o actúa", desc: "Redacta, modifica o comparte en segundos." },
];

const metrics = [
  { icon: Clock, value: "+60%", label: "Más rápido" },
  { icon: BarChart3, value: "3x", label: "Más casos gestionados" },
  { icon: DollarSign, value: "-40%", label: "Reducción de costos" },
  { icon: TrendingUp, value: "2x", label: "Eficiencia operativa" },
];

const useCases = [
  "Estudios jurídicos", "Abogados independientes", "Equipos legales internos", "Estudiantes de derecho"
];

function Index() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar - simplified for landing */}
      <aside className="hidden lg:flex w-64 border-r border-border bg-sidebar flex-col">
        <div className="flex items-center gap-2.5 px-5 py-4 border-b border-border">
          <div className="h-7 w-7 rounded-lg bg-gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">J</span>
          </div>
          <span className="font-semibold text-sidebar-foreground text-[15px] tracking-tight">Jurify CRM</span>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
          <p className="px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Plataforma</p>
          {modules.map((m) => (
            <Link
              key={m.to}
              to={m.to}
              className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[13px] text-sidebar-foreground hover:bg-sidebar-accent/60 transition-colors"
            >
              <m.icon size={15} className="text-muted-foreground" />
              {m.title}
            </Link>
          ))}
          <p className="px-2 py-1.5 mt-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Más</p>
          <Link
            to="/demo"
            className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[13px] text-sidebar-foreground hover:bg-sidebar-accent/60 transition-colors"
          >
            <Play size={15} className="text-muted-foreground" />
            Demo Interactiva
          </Link>
          <Link
            to="/docs/security"
            className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[13px] text-sidebar-foreground hover:bg-sidebar-accent/60 transition-colors"
          >
            <Shield size={15} className="text-muted-foreground" />
            Seguridad
          </Link>
        </nav>
        <div className="p-4 border-t border-border">
          <Link
            to="/demo"
            className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Play size={14} />
            Probar Demo
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile header */}
        <header className="sticky top-0 z-30 flex items-center justify-between h-12 px-4 border-b border-border bg-background/80 backdrop-blur-md lg:justify-end">
          <div className="flex items-center gap-2.5 lg:hidden">
            <div className="h-6 w-6 rounded-md bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">J</span>
            </div>
            <span className="font-semibold text-sm">Jurify CRM</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors">
              Iniciar sesión
            </a>
            <a href="#" className="text-[13px] font-medium px-3.5 py-1.5 rounded-lg bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Probar gratis
            </a>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          {/* Hero */}
          <section className="relative px-6 pt-16 pb-20 lg:px-16 lg:pt-24 lg:pb-28 bg-gradient-hero">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-[12px] font-medium text-muted-foreground mb-6">
                <Star size={12} className="text-primary" />
                Respaldado por líderes del sector
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-foreground">
                Analiza contratos, gestiona casos y crea documentos legales{" "}
                <span className="text-gradient-primary">con IA en minutos</span>
              </h1>
              <p className="mt-5 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Jurify CRM combina inteligencia artificial, automatización y gestión legal en una sola plataforma.
                El sistema operativo legal que permite analizar, gestionar y crear documentos en minutos, no horas.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-glow"
                >
                  Probar gratis <ArrowRight size={16} />
                </a>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border bg-card text-foreground font-medium text-sm hover:bg-accent transition-colors"
                >
                  <Play size={14} /> Ver demo
                </Link>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="px-6 py-16 lg:px-16 border-t border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-foreground mb-10">Cómo funciona</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, i) => (
                  <div key={i} className="relative text-center p-5 rounded-xl border border-border bg-card hover:shadow-glow transition-shadow">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-3">
                      <step.icon size={20} />
                    </div>
                    <div className="absolute top-3 left-3 text-[11px] font-bold text-muted-foreground/40">{i + 1}</div>
                    <h3 className="font-semibold text-sm text-foreground">{step.title}</h3>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Modules */}
          <section className="px-6 py-16 lg:px-16 border-t border-border bg-surface">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-foreground mb-3">Módulos principales</h2>
              <p className="text-center text-muted-foreground text-sm mb-10 max-w-xl mx-auto">
                Todo lo que necesitas para transformar la práctica legal, integrado en una sola plataforma.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {modules.map((m) => (
                  <Link
                    key={m.to}
                    to={m.to}
                    className="group p-5 rounded-xl border border-border bg-card hover:border-gradient hover:shadow-glow transition-all"
                  >
                    <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary mb-3 group-hover:bg-primary/15 transition-colors">
                      <m.icon size={18} />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground">{m.title}</h3>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Explorar <ArrowRight size={12} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Metrics */}
          <section className="px-6 py-16 lg:px-16 border-t border-border">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-foreground mb-10">Resultados reales</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <m.icon size={20} className="mx-auto text-primary mb-2" />
                    <div className="text-3xl font-extrabold text-gradient-primary">{m.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="px-6 py-16 lg:px-16 border-t border-border bg-surface">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">¿Para quién es Jurify CRM?</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {useCases.map((uc) => (
                  <span key={uc} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm text-foreground">
                    <CheckCircle size={14} className="text-primary" />
                    {uc}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="px-6 py-20 lg:px-16 border-t border-border">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-foreground">
                Empieza hoy a trabajar como un estudio{" "}
                <span className="text-gradient-primary">10x más eficiente</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-sm">
                Únete a los profesionales legales que ya están transformando su práctica con inteligencia artificial.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-glow">
                  Probar gratis <ArrowRight size={16} />
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border bg-card text-foreground font-medium text-sm hover:bg-accent transition-colors">
                  Agendar demo
                </a>
                <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Hablar con ventas →
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="px-6 py-8 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">© 2026 Jurify CRM. Todos los derechos reservados.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
