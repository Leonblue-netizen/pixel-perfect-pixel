import { caso, enlaceVideoIncrustado } from "@/data/contenido";
import { Aparece, Estrella } from "./Basicos";

export function Caso() {
  const video = enlaceVideoIncrustado(caso.video);
  const cartilla =
    caso.enlaceCartilla && !caso.enlaceCartilla.trim().startsWith("[")
      ? caso.enlaceCartilla
      : null;

  return (
    <section id="caso" className="relative px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Aparece>
          <p className="font-mano text-2xl text-lima md:text-3xl">caso grupal</p>
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
                    <span className="font-mano text-2xl text-menta">
                      {caso.textoVideoPendiente}
                    </span>
                  </div>
                )}
              </div>

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
