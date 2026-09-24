import { marca } from "@/data/contenido";
import { Aparece, Estrella } from "./Basicos";

export function Portada() {
  return (
    <section id="portada" className="relative px-5 pb-20 pt-32 md:pb-28 md:pt-44">
      <div className="mx-auto max-w-6xl">
        <Aparece>
          <p className="font-mano text-3xl text-periwinkle md:text-4xl">
            {marca.manuscritoPortada}
          </p>
        </Aparece>

        <Aparece delay={80}>
          <h1 className="mt-3 flex flex-wrap items-center gap-x-5 text-[3.4rem] font-extrabold leading-[0.95] md:text-[7rem]">
            {marca.titulo}
            <Estrella className="h-7 w-7 md:h-11 md:w-11" tono="text-rosa" />
          </h1>
        </Aparece>

        <Aparece delay={160}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-menta md:text-lg">
            {marca.subtitulo}
          </p>
        </Aparece>

        <Aparece delay={240}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#servicios"
              className="rounded-full bg-lima px-7 py-3.5 text-sm font-semibold text-tinta transition-transform hover:scale-[1.03]"
            >
              {marca.botonPrimario}
            </a>
            <a
              href="#caso"
              className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
            >
              {marca.botonSecundario}
            </a>
          </div>
        </Aparece>
      </div>
    </section>
  );
}
