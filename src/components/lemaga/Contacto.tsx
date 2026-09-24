import { contacto, equipo, esPendiente } from "@/data/contenido";
import { Aparece, Texto } from "./Basicos";

export function Contacto() {
  return (
    <section id="contacto" className="relative px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Aparece>
          <p className="font-mano text-2xl text-lila md:text-3xl">hablemos</p>
          <h2 className="mt-1 text-4xl font-extrabold md:text-6xl">{contacto.titulo}</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-menta">
            {contacto.descripcion}
          </p>
        </Aparece>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {equipo.map((p, i) => (
            <Aparece key={p.nombre} delay={i * 80}>
              <article className="h-full rounded-[2.25rem] border border-border bg-card p-7">
                <h3 className="font-display text-base font-bold">{p.nombre}</h3>
                <div className="mt-4">
                  {esPendiente(p.correo) ? (
                    <Texto valor={p.correo} />
                  ) : (
                    <a
                      href={`mailto:${p.correo}`}
                      className="text-sm text-periwinkle underline-offset-4 hover:underline"
                    >
                      {p.correo}
                    </a>
                  )}
                </div>
              </article>
            </Aparece>
          ))}
        </div>
      </div>
    </section>
  );
}
