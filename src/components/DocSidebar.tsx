import { Link, useLocation } from "@tanstack/react-router";
import {
  FileSearch, PenTool, MessageSquare, Bot, Briefcase,
  Search, Users, Zap, Shield, Play, ChevronDown,
  ChevronRight, X, Menu, Settings, Moon, Globe
} from "lucide-react";
import { useState } from "react";

const sidebarSections = [
  { icon: FileSearch, label: "Análisis de Documentos", to: "/docs/analysis" },
  { icon: Briefcase, label: "CRM Legal", to: "/docs/crm" },
  { icon: Bot, label: "Agentes de IA", to: "/docs/agents" },
  { icon: PenTool, label: "Redacción Legal", to: "/docs/drafting" },
  { icon: MessageSquare, label: "Asistente Legal", to: "/docs/assistant" },
  { icon: Zap, label: "Automatización", to: "/docs/automation" },
  { icon: Users, label: "Colaboración", to: "/docs/collaboration" },
  { icon: Shield, label: "Seguridad", to: "/docs/security" },
  { icon: Play, label: "Demo Interactiva", to: "/demo" },
];

export function DocSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const location = useLocation();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (label: string) =>
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 bg-foreground/20 lg:hidden" onClick={onClose} />
      )}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-60 border-r border-border bg-card flex flex-col transition-transform lg:translate-x-0 lg:static lg:z-auto ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Search */}
        <div className="px-3 py-3 border-b border-border flex items-center justify-between">
          <button className="flex items-center gap-2 flex-1 px-3 py-1.5 rounded-md bg-muted text-sm text-muted-foreground hover:bg-accent transition-colors">
            <Search size={14} />
            <span className="flex-1 text-left">Buscar...</span>
            <kbd className="text-[10px] font-mono bg-background px-1.5 py-0.5 rounded border border-border">Ctrl K</kbd>
          </button>
          <button onClick={onClose} className="ml-2 lg:hidden text-muted-foreground hover:text-foreground">
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5">
          <Link
            to="/"
            onClick={onClose}
            className={`flex items-center gap-2.5 px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
              location.pathname === "/"
                ? "bg-accent text-foreground"
                : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
            }`}
          >
            Descubre Jurify CRM
          </Link>

          {sidebarSections.map((section) => {
            const isActive = location.pathname === section.to;
            const isOpen = expanded[section.label] ?? isActive;

            return (
              <div key={section.label}>
                <button
                  onClick={() => toggle(section.label)}
                  className={`flex items-center gap-2 w-full px-3 py-1.5 rounded-md text-[13px] transition-colors ${
                    isActive
                      ? "text-foreground font-medium bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  <section.icon size={14} className="flex-shrink-0" />
                  <span className="flex-1 text-left truncate">{section.label}</span>
                  {isOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                </button>

                {isOpen && (
                  <div className="ml-5 pl-3 border-l border-border space-y-0.5 mt-0.5">
                    <Link
                      to={section.to}
                      onClick={onClose}
                      className={`block px-3 py-1 rounded-md text-[13px] transition-colors ${
                        isActive
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      }`}
                    >
                      {section.label}
                    </Link>
                    <span className="block px-3 py-1 text-[13px] text-muted-foreground/60">
                      Capacidades →
                    </span>
                    <span className="block px-3 py-1 text-[13px] text-muted-foreground/60">
                      Cómo usar →
                    </span>
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
