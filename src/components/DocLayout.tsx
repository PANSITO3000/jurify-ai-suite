import { Outlet } from "@tanstack/react-router";
import { DocSidebar, SidebarTrigger } from "./DocSidebar";
import { useState } from "react";

export function DocLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      <DocSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 flex items-center h-12 px-4 border-b border-border bg-background/80 backdrop-blur-md">
          <SidebarTrigger onClick={() => setSidebarOpen(true)} />
          <div className="ml-auto flex items-center gap-3">
            <a
              href="#"
              className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Iniciar sesión
            </a>
            <a
              href="#"
              className="text-[13px] font-medium px-3.5 py-1.5 rounded-lg bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Probar gratis
            </a>
          </div>
        </header>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
