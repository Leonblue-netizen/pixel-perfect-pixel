import { marca, navegacion } from "@/data/contenido";
import { Estrella } from "./Basicos";

export function Navegacion() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#portada" className="flex items-center gap-2">
          <Estrella className="h-4 w-4" />
          <span className="font-display text-base font-semibold tracking-tight">
            {marca.nombre}
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {navegacion.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="transition-colors hover:text-foreground">
                {item.etiqueta}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#servicios"
          className="rounded-full bg-lima px-4 py-2 text-xs font-semibold text-tinta transition-transform hover:scale-[1.03] md:text-sm"
        >
          {marca.botonPrimario}
        </a>
      </nav>
    </header>
  );
}
