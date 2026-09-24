import { useState } from "react";
import { caso, enlaceVideoIncrustado, esPendiente } from "@/data/contenido";
import { Aparece, Estrella } from "./Basicos";

/** Una página o portada dentro del mockup de la cartilla: imagen o recuadro punteado. */
function PaginaCartilla({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  const mostrar = Boolean(src) && !esPendiente(src) && !error;

  if (mostrar) {
    return (
      <img
        src={src}
        alt={alt}
        onError={() => setError(true)}
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center border-2 border-dashed border-pendiente bg-card px-3 text-center">
      <span className="text-xs text-pendiente">{alt}</span>
    </div>
  );
}

/** Mockup tipo librito editorial: portada atrás, página interior grande al frente. */
function MockupCartilla() {
  const { portada, paginas } = caso.cartilla;
  const paginaFrente = paginas[0] ?? "";
  const paginaAtras = paginas[1] ?? "";

  return (
    <div className="relative py-8">
      <Estrella
        className="flota pointer-events-none absolute left-2 top-0 h-5 w-5"
        tono="text-lima"
      />
      <Estrella
        className="flota pointer-events-none absolute bottom-2 right-4 h-4 w-4"
        tono="text-rosa"
        style={{ animationDelay: "1.3s" }}
      />

      <div className="relative mx-auto h-96 max-w-lg sm:h-[32rem] sm:max-w-xl">
        <div className="absolute right-0 top-0 aspect-[3/4] w-[36%] rotate-6 overflow-hidden rounded-[1.25rem] border border-border shadow-lg">
          <PaginaCartilla src={paginaAtras} alt="[Página de la cartilla]" />
        </div>
        <div className="absolute left-2 top-3 aspect-[3/4] w-[34%] -rotate-9 overflow-hidden rounded-[1.25rem] border border-border shadow-lg">
          <PaginaCartilla src={paginaFrente} alt="[Página de la cartilla]" />
        </div>
        <div className="absolute bottom-0 left-[18%] aspect-[3/4] w-[56%] -rotate-2 overflow-hidden rounded-[1.25rem] border border-border shadow-2xl">
          <PaginaCartilla src={portada} alt="[Portada de la cartilla]" />
        </div>
      </div>
    </div>
  );
}

export function Caso() {
  const video = enlaceVideoIncrustado(caso.video);
  const cartilla =
    caso.enlaceCartilla && !caso.enlaceCartilla.trim().startsWith("[") ? caso.enlaceCartilla : null;

  return (
    <section id="caso" className="relative px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Aparece>
          <p className="texto-ancha text-xl text-lima md:text-2xl">caso grupal</p>
          <h2 className="mt-1 max-w-3xl text-4xl font-extrabold md:text-6xl">{caso.titulo}</h2>
        </Aparece>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <Aparece>
            <div className="rounded-[2.25rem] border border-border bg-card p-7 md:p-9">
              <p className="text-base leading-relaxed text-menta">{caso.descripcion}</p>

              <ol className="mt-8 space-y-3">
                {caso.pasos.map((paso, i) => (
                  <li
                    key={paso}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-muted/50 px-5 py-4"
                  >
                    <span className="font-display text-sm font-bold text-lila">0{i + 1}</span>
                    <span className="text-sm font-medium">{paso}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Aparece>

          <Aparece delay={120}>
            <div className="space-y-5">
              <div className="relative aspect-video overflow-hidden rounded-[2.25rem] border border-border bg-muted">
                {video ? (
                  <iframe
                    src={video}
                    title={caso.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                    <Estrella className="h-5 w-5" tono="text-rosa" />
                    <span className="texto-ancha text-lg text-menta">
                      {caso.textoVideoPendiente}
                    </span>
                  </div>
                )}
              </div>

              <MockupCartilla />

              {cartilla && (
                <a
                  href={cartilla}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-lima px-7 py-3.5 text-sm font-semibold text-tinta transition-transform hover:scale-[1.03]"
                >
                  {caso.textoBotonCartilla}
                </a>
              )}
            </div>
          </Aparece>
        </div>
      </div>
    </section>
  );
}
