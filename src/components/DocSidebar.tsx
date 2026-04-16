import { Link, useLocation } from "@tanstack/react-router";
import {
  FileSearch, PenTool, MessageSquare, Bot, Briefcase,
  Search, Users, Zap, Shield, Play, Home, ChevronDown,
  ChevronRight, X, Menu
} from "lucide-react";
import { useState } from "react";

const sections = [
  {
    label: "Inicio",
    items: [
      { title: "Introducción", to: "/", icon: Home },
    ],
  },
  {
    label: "Plataforma",
    items: [
      { title: "Análisis de Documentos", to: "/docs/analysis", icon: FileSearch },
      { title: "Redacción Legal con IA", to: "/docs/drafting", icon: PenTool },
      { title: "Asistente Legal", to: "/docs/assistant", icon: MessageSquare },
      { title: "Agentes de IA", to: "/docs/agents", icon: Bot },
      { title: "CRM Legal", to: "/docs/crm", icon: Briefcase },
      { title: "Búsqueda Inteligente", to: "/docs/search", icon: Search },
      { title: "Colaboración", to: "/docs/collaboration", icon: Users },
      { title: "Automatización", to: "/docs/automation", icon: Zap },
    ],
  },
  {
    label: "Más",
    items: [
      { title: "Demo Interactiva", to: "/demo", icon: Play },
      { title: "Seguridad", to: "/docs/security", icon: Shield },
    ],
  },
];

export function DocSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    Object.fromEntries(sections.map(s => [s.label, true]))
  );

  const toggle = (label: string) =>
    setExpandedSections(prev => ({ ...prev, [label]: !prev[label] }));

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 bg-foreground/20 lg:hidden" onClick={onClose} />
      )}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 border-r border-border bg-sidebar flex flex-col transition-transform lg:translate-x-0 lg:static lg:z-auto ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">J</span>
            </div>
            <span className="font-semibold text-sidebar-foreground text-[15px] tracking-tight">Jurify CRM</span>
          </Link>
          <button onClick={onClose} className="lg:hidden text-muted-foreground hover:text-foreground">
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
          {sections.map((section) => (
            <div key={section.label}>
              <button
                onClick={() => toggle(section.label)}
                className="flex items-center justify-between w-full px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground"
              >
                {section.label}
                {expandedSections[section.label] ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
              </button>
              {expandedSections[section.label] && (
                <div className="space-y-0.5 mt-0.5">
                  {section.items.map((item) => {
                    const isActive = location.pathname === item.to;
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={onClose}
                        className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[13px] transition-colors ${
                          isActive
                            ? "bg-sidebar-accent text-sidebar-primary font-medium"
                            : "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
                        }`}
                      >
                        <item.icon size={15} className={isActive ? "text-sidebar-primary" : "text-muted-foreground"} />
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
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
    </>
  );
}

export function SidebarTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
    >
      <Menu size={20} />
    </button>
  );
}
