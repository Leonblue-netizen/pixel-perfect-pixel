import { cinta } from "@/data/contenido";
import { Estrella } from "./Basicos";

export function Cinta() {
  const items = [...cinta, ...cinta];

  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-muted/40 py-5">
      <div className="cinta-corre whitespace-nowrap">
        {items.map((texto, i) => (
          <span key={`${texto}-${i}`} className="flex items-center">
            <span className="px-6 font-display text-sm uppercase tracking-[0.18em] text-menta md:text-base">
              {texto}
            </span>
            <Estrella className="h-3 w-3 shrink-0" tono={i % 5 === 2 ? "text-rosa" : "text-lima"} />
          </span>
        ))}
      </div>
    </div>
  );
}
