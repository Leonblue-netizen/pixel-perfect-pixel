import { servicios } from "@/data/contenido";
import { Aparece, Estrella } from "./Basicos";

const fondos: Record<string, string> = {
  lima: "bg-lima",
  lila: "bg-lila",
  periwinkle: "bg-periwinkle",
  menta: "bg-menta",
};

export function Servicios() {
  return (
    <section id="servicios" className="relative px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Aparece>
          <p className="texto-ancha text-xl text-lila md:text-2xl">seis líneas</p>
          <h2 className="mt-1 text-4xl font-extrabold md:text-6xl">Servicios</h2>
        </Aparece>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s, i) => (
            <Aparece key={s.titulo} delay={i * 70}>
              <article
                className={`${fondos[s.color]} relative flex h-full flex-col justify-between gap-8 rounded-[2.25rem] p-7 text-tinta transition-transform duration-300 hover:-translate-y-1.5`}
              >
                <span className="font-display text-xs font-semibold opacity-60">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold leading-snug">{s.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-80">{s.resumen}</p>
                </div>
                {i === 0 && (
                  <Estrella className="absolute right-6 top-6 h-4 w-4" tono="text-tinta" />
                )}
              </article>
            </Aparece>
          ))}
        </div>
      </div>
    </section>
  );
}
