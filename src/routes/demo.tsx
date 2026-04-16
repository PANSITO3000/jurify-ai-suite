import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, FileText, Wand2, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/demo")({
  component: DemoPage,
  head: () => ({
    meta: [
      { title: "Demo Interactiva — Jurify CRM" },
      { name: "description", content: "Prueba el asistente legal con IA de Jurify CRM en esta demo interactiva." },
    ],
  }),
});

type Message = { role: "user" | "ai"; content: string; typing?: boolean };

const presetQueries = [
  "Analiza la cláusula de indemnización",
  "Genera un contrato de prestación de servicios",
  "Crea una plantilla de NDA",
  "Ver historial del caso #1024",
];

const responses: Record<string, string> = {
  "Analiza la cláusula de indemnización": `**Análisis de Cláusula — Indemnización**

🔴 **Riesgo: Alto**

**Hallazgos:**
- La cláusula establece una **indemnización ilimitada** sin tope de responsabilidad
- **Duración indefinida** — no se establece un período máximo de vigencia
- No incluye mecanismo de resolución de disputas
- Falta definición clara de "daño indirecto"

**Cita textual:** *"La parte indemnizante será responsable por todos los daños, directos e indirectos, sin limitación alguna..."* (Cláusula 8.2, párrafo 3)

**💡 Recomendación:**
→ Limitar la indemnización a 12 meses de fees pagados
→ Establecer un tope de 2x el valor total del contrato
→ Excluir daños indirectos y consecuenciales
→ Agregar cláusula de resolución de disputas

¿Deseas que genere una **versión mejorada** de esta cláusula?`,

  "Genera un contrato de prestación de servicios": `**Asistente de Redacción — Contrato de Prestación de Servicios**

Para generar un contrato preciso, necesito algunos datos:

1. **¿Quién es el prestador de servicios?** (nombre o razón social)
2. **¿Quién es el cliente?** (nombre o razón social)
3. **¿Qué servicios se prestarán?** (descripción general)
4. **¿Cuál es la duración del contrato?**
5. **¿Cuál es el monto o esquema de pago?**
6. **¿Jurisdicción aplicable?**

Una vez que me proporciones esta información, generaré un borrador completo basado en contratos similares de tu archivo. El documento incluirá:
- Objeto del contrato
- Obligaciones de las partes
- Condiciones de pago
- Confidencialidad
- Cláusula de terminación
- Jurisdicción y ley aplicable`,

  "Crea una plantilla de NDA": `**Plantilla Generada — Acuerdo de Confidencialidad (NDA)**

✅ Se ha creado una plantilla dinámica de NDA con los siguientes campos personalizables:

| Campo | Valor predeterminado |
|-------|---------------------|
| Parte reveladora | [Nombre empresa] |
| Parte receptora | [Nombre contraparte] |
| Duración | 2 años |
| Jurisdicción | México, D.F. |
| Penalidad | Según daños comprobados |

**Secciones incluidas:**
1. Definición de información confidencial
2. Obligaciones de la parte receptora
3. Excepciones a la confidencialidad
4. Duración y terminación
5. Ley aplicable y jurisdicción

La plantilla está lista para personalizar. ¿Deseas editarla o exportarla?`,

  "Ver historial del caso #1024": `**Caso #1024 — Demanda Laboral: García vs. Tech Solutions S.A.**

📋 **Estado:** En proceso | 🔵 **Prioridad:** Alta

**Timeline:**
- 📅 **15 Mar 2026** — Caso creado, documentos iniciales subidos
- 📄 **18 Mar 2026** — Análisis de contrato laboral completado (3 riesgos identificados)
- ✍️ **22 Mar 2026** — Borrador de contestación de demanda generado
- 👥 **25 Mar 2026** — Revisión colaborativa con equipo (3 comentarios)
- 📤 **28 Mar 2026** — Documento final enviado al juzgado
- ⚖️ **10 Abr 2026** — Audiencia preliminar programada

**Documentos vinculados:** 12 archivos
**Abogados asignados:** Lic. Martínez, Lic. Rodríguez
**Próximo vencimiento:** Audiencia en 6 días`,
};

function DemoPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content: "Hola, soy el asistente legal de **Jurify CRM**. Puedo analizar documentos, generar contratos, crear plantillas y revisar casos. ¿En qué puedo ayudarte?\n\nPrueba uno de los ejemplos de abajo o escribe tu propia consulta.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const response = responses[text] || `He analizado tu consulta: "${text}"\n\nBasándome en los documentos disponibles, puedo ayudarte con esto. Para darte una respuesta más precisa, ¿podrías compartir más detalles o subir el documento relevante?\n\n**Acciones disponibles:**\n- 📄 Analizar un documento\n- ✍️ Generar un borrador\n- 🔍 Buscar precedentes\n- 📋 Crear una plantilla`;

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "ai", content: response }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar mini */}
      <aside className="hidden lg:flex w-64 border-r border-border bg-sidebar flex-col">
        <div className="flex items-center gap-2.5 px-5 py-4 border-b border-border">
          <div className="h-7 w-7 rounded-lg bg-gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">J</span>
          </div>
          <span className="font-semibold text-sidebar-foreground text-[15px] tracking-tight">Demo Interactiva</span>
        </div>
        <div className="flex-1 p-4 space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">Acciones rápidas</p>
          {[
            { icon: FileText, label: "Analizar contrato" },
            { icon: Wand2, label: "Generar documento" },
            { icon: Clock, label: "Ver caso" },
          ].map((a, i) => (
            <button
              key={i}
              onClick={() => handleSend(presetQueries[i])}
              className="flex items-center gap-2.5 w-full px-3 py-2 rounded-md text-[13px] text-sidebar-foreground hover:bg-sidebar-accent transition-colors text-left"
            >
              <a.icon size={15} className="text-muted-foreground" />
              {a.label}
            </button>
          ))}
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 flex items-center justify-between h-12 px-4 border-b border-border bg-background/80 backdrop-blur-md">
          <span className="text-sm font-medium text-foreground">Demo — Asistente Legal IA</span>
          <a
            href="#"
            className="text-[13px] font-medium px-3.5 py-1.5 rounded-lg bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Probar gratis
          </a>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
              {msg.role === "ai" && (
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-primary flex items-center justify-center mt-0.5">
                  <Bot size={14} className="text-primary-foreground" />
                </div>
              )}
              <div
                className={`max-w-[85%] lg:max-w-[70%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground"
                }`}
              >
                <div
                  className="prose-sm [&_strong]:font-semibold [&_ul]:mt-1 [&_ul]:space-y-0.5 [&_li]:ml-4 [&_table]:mt-2 [&_table]:text-xs"
                  dangerouslySetInnerHTML={{
                    __html: msg.content
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\*(.*?)\*/g, "<em>$1</em>")
                      .replace(/\n/g, "<br/>")
                      .replace(/\|(.+)\|/g, (match) => {
                        if (match.includes("---")) return "";
                        const cells = match.split("|").filter(Boolean).map((c) => c.trim());
                        return `<div class="flex gap-4 text-xs"><span class="text-muted-foreground">${cells[0]}</span><span>${cells[1] || ""}</span></div>`;
                      }),
                  }}
                />
              </div>
              {msg.role === "user" && (
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-secondary flex items-center justify-center mt-0.5">
                  <User size={14} className="text-secondary-foreground" />
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Bot size={14} className="text-primary-foreground" />
              </div>
              <div className="bg-card border border-border rounded-xl px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Preset queries */}
        <div className="px-4 pb-2 flex flex-wrap gap-2">
          {presetQueries.map((q) => (
            <button
              key={q}
              onClick={() => handleSend(q)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
            >
              <ArrowRight size={10} />
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border bg-background">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="flex items-center gap-2 max-w-3xl mx-auto"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu consulta legal..."
              className="flex-1 px-4 py-2.5 rounded-lg border border-input bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="p-2.5 rounded-lg bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
