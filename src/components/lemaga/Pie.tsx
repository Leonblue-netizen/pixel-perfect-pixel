import { pie } from "@/data/contenido";
import { Estrella } from "./Basicos";

export function Pie() {
  return (
    <footer className="relative border-t border-border/60 px-5 py-10">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 text-center">
        <Estrella className="h-3 w-3" tono="text-lima" />
        <p className="text-xs text-muted-foreground md:text-sm">{pie}</p>
      </div>
    </footer>
  );
}
