import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileSearch, PenTool, MessageSquare, Bot, Briefcase,
  Search, Users, Zap, Shield, Play, ArrowRight, Cloud
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jurify CRM — Documentación" },
      { name: "description", content: "Bienvenido a Jurify CRM, tu recurso para configuración avanzada y mejores prácticas en gestión legal con IA." },
      { property: "og:title", content: "Jurify CRM — Documentación" },
      { property: "og:description", content: "Analiza contratos, gestiona casos y crea documentos legales con IA en minutos." },
    ],
  }),
});

const cards = [
  {
    icon: FileSearch,
    title: "Análisis de Documentos",
    desc: "Analiza contratos, detecta riesgos y extrae cláusulas clave con IA.",
    to: "/docs/analysis",
    bg: "var(--card-purple)",
    iconBg: "var(--card-purple-icon)",
  },
  {
    icon: Briefcase,
    title: "CRM Legal",
    desc: "Gestiona casos, contactos y procesos legales en un solo lugar.",
    to: "/docs/crm",
    bg: "var(--card-pink)",
    iconBg: "var(--card-pink-icon)",
  },
  {
    icon: Bot,
    title: "Agentes de IA",
    desc: "Agentes autónomos que recopilan información y generan reportes.",
    to: "/docs/agents",
    bg: "var(--card-yellow)",
    iconBg: "var(--card-yellow-icon)",
  },
  {
    icon: PenTool,
    title: "Redacción Legal",
    desc: "Genera contratos, demandas y escritos personalizados con IA.",
    to: "/docs/drafting",
    bg: "var(--card-red)",
    iconBg: "var(--card-red-icon)",
  },
  {
    icon: MessageSquare,
    title: "Asistente Legal",
    desc: "Chat inteligente que responde con base en tus documentos.",
    to: "/docs/assistant",
    bg: "var(--card-blue)",
    iconBg: "var(--card-blue-icon)",
  },
  {
    icon: Zap,
    title: "Automatización",
    desc: "Flujos legales automáticos, plazos y monitoreo de cumplimiento.",
    to: "/docs/automation",
    bg: "var(--card-orange)",
    iconBg: "var(--card-orange-icon)",
  },
  {
    icon: Search,
    title: "Búsqueda Inteligente",
    desc: "Búsqueda semántica en documentos, precedentes y cláusulas.",
    to: "/docs/search",
    bg: "var(--card-green)",
    iconBg: "var(--card-green-icon)",
  },
  {
    icon: Users,
    title: "Colaboración",
    desc: "Edición simultánea, comentarios y workspaces compartidos.",
    to: "/docs/collaboration",
    bg: "var(--card-teal)",
    iconBg: "var(--card-teal-icon)",
  },
  {
    icon: Shield,
    title: "Seguridad",
    desc: "Cifrado extremo a extremo, TLS y nube privada opcional.",
    to: "/docs/security",
    bg: "var(--card-gray)",
    iconBg: "var(--card-gray-icon)",
  },
];

function Index() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-8 py-10 lg:px-12 lg:py-14">
            {/* Breadcrumb */}
            <p className="text-sm text-primary font-medium mb-2">Jurify CRM</p>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Descubre Jurify CRM
            </h1>

            {/* Description */}
            <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-2xl">
              Bienvenido a Jurify CRM, tu recurso para el sistema operativo legal con IA
              que permite analizar, gestionar y crear documentos legales en minutos, no horas.
            </p>

            {/* Cards Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cards.map((card) => (
                <Link
                  key={card.to}
                  to={card.to}
                  className="group block rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Color top area with icon */}
                  <div
                    className="flex items-center justify-center h-28"
                    style={{ backgroundColor: card.bg }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: card.iconBg }}
                    >
                      <card.icon size={28} className="text-foreground" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="px-5 py-4 bg-card">
                    <h3 className="font-semibold text-[15px] text-foreground group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-[13px] text-muted-foreground leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Demo CTA */}
            <div className="mt-12 p-6 rounded-xl border border-border bg-card">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-semibold text-foreground flex items-center gap-2">
                    <Play size={16} className="text-primary" />
                    Demo Interactiva
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Prueba el asistente legal con IA de Jurify CRM directamente en tu navegador.
                  </p>
                </div>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity flex-shrink-0"
                >
                  Probar demo <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Floating search bar */}
          <div className="sticky bottom-0 px-8 pb-5 pt-2 lg:px-12">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card shadow-lg">
                <Search size={16} className="text-muted-foreground" />
                <span className="flex-1 text-sm text-muted-foreground">Haz una pregunta...</span>
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-muted text-[11px] text-muted-foreground font-mono">
                  Ctrl+I
                </kbd>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ─── Sidebar ─── */

import {
  ChevronDown, ChevronRight, Menu, X, Settings, Moon, Globe
} from "lucide-react";
import { useState } from "react";
import { useLocation } from "@tanstack/react-router";

const sidebarSections = [
  {
    icon: FileSearch,
    label: "Análisis de Documentos",
    to: "/docs/analysis",
    children: [
      { label: "Análisis de Documentos", to: "/docs/analysis" },
    ],
  },
  {
    icon: Briefcase,
    label: "CRM Legal",
    to: "/docs/crm",
    children: [
      { label: "CRM Legal", to: "/docs/crm" },
    ],
  },
  {
    icon: Bot,
    label: "Agentes de IA",
    to: "/docs/agents",
    children: [
      { label: "Agentes de IA", to: "/docs/agents" },
    ],
  },
  {
    icon: PenTool,
    label: "Redacción Legal",
    to: "/docs/drafting",
    children: [
      { label: "Redacción Legal", to: "/docs/drafting" },
    ],
  },
  {
    icon: MessageSquare,
    label: "Asistente Legal",
    to: "/docs/assistant",
    children: [
      { label: "Asistente Legal", to: "/docs/assistant" },
    ],
  },
  {
    icon: Zap,
    label: "Automatización",
    to: "/docs/automation",
    children: [
      { label: "Automatización", to: "/docs/automation" },
    ],
  },
  {
    icon: Users,
    label: "Colaboración",
    to: "/docs/collaboration",
    children: [
      { label: "Colaboración", to: "/docs/collaboration" },
    ],
  },
  {
    icon: Shield,
    label: "Seguridad",
    to: "/docs/security",
    children: [
      { label: "Seguridad", to: "/docs/security" },
    ],
  },
  {
    icon: Play,
    label: "Demo Interactiva",
    to: "/demo",
    children: [
      { label: "Demo Interactiva", to: "/demo" },
    ],
  },
  {
    icon: Cloud,
    label: "Base de Conocimientos",
    to: "/knowledge",
    children: [
      { label: "Configuración", to: "/knowledge/config" },
      { label: "Facturación", to: "/knowledge/billing" },
      { label: "Funciones Avanzadas", to: "/knowledge/advanced" },
    ],
  },
  {
    icon: Settings,
    label: "Central de Desarrollo",
    to: "/dev",
    children: [
      { label: "Personalización", to: "/dev/customize" },
      { label: "API e Integraciones", to: "/dev/api" },
      { label: "Estado del Sistema", to: "/dev/status" },
    ],
  },
];

function Sidebar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleSection = (label: string) => {
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="hidden lg:flex w-60 border-r border-border bg-card flex-col">
      {/* Search */}
      <div className="px-3 py-3 border-b border-border">
        <button className="flex items-center gap-2 w-full px-3 py-1.5 rounded-md bg-muted text-sm text-muted-foreground hover:bg-accent transition-colors">
          <Search size={14} />
          <span className="flex-1 text-left">Buscar...</span>
          <kbd className="text-[10px] font-mono bg-background px-1.5 py-0.5 rounded border border-border">Ctrl K</kbd>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5">
        {/* Home link */}
        <Link
          to="/"
          className={`flex items-center gap-2.5 px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
            location.pathname === "/"
              ? "bg-accent text-foreground"
              : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
          }`}
        >
          Descubre Jurify CRM
        </Link>

        {sidebarSections.map((section) => {
          const isActive = location.pathname.startsWith(section.to);
          const isOpen = expanded[section.label] ?? isActive;

          return (
            <div key={section.label}>
              <button
                onClick={() => toggleSection(section.label)}
                className={`flex items-center gap-2 w-full px-3 py-1.5 rounded-md text-[13px] transition-colors ${
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                <section.icon size={14} className="flex-shrink-0" />
                <span className="flex-1 text-left truncate">{section.label}</span>
                {isOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
              </button>

              {isOpen && (
                <div className="ml-5 pl-3 border-l border-border space-y-0.5 mt-0.5">
                  {section.children.map((child) => {
                    const childActive = location.pathname === child.to;
                    return (
                      <Link
                        key={child.to}
                        to={child.to}
                        className={`block px-3 py-1 rounded-md text-[13px] transition-colors ${
                          childActive
                            ? "bg-accent text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        }`}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                  <Link
                    to={section.to}
                    className="block px-3 py-1 rounded-md text-[13px] text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  >
                    Capacidades →
                  </Link>
                  <Link
                    to={section.to}
                    className="block px-3 py-1 rounded-md text-[13px] text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  >
                    Cómo usar →
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 py-3 border-t border-border flex items-center gap-2">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Globe size={12} />
          <span>Español</span>
          <ChevronDown size={10} />
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <button className="p-1 text-muted-foreground hover:text-foreground transition-colors">
            <Settings size={14} />
          </button>
          <button className="p-1 text-muted-foreground hover:text-foreground transition-colors">
            <Moon size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
}

/* ─── Top Bar ─── */

function TopBar() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-end h-12 px-4 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
          Iniciar sesión
        </a>
        <a
          href="#"
          className="text-[13px] font-medium px-3.5 py-1.5 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
        >
          Probar gratis
        </a>
      </div>
    </header>
  );
}
