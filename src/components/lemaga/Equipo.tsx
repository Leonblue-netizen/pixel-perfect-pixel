import { useState } from "react";
import { equipo } from "@/data/contenido";
import { Aparece } from "./Basicos";

const degradados = [
  "linear-gradient(135deg, var(--lila), var(--periwinkle))",
  "linear-gradient(135deg, var(--periwinkle), var(--menta))",
  "linear-gradient(135deg, var(--lima), var(--menta))",
];

function Retrato({ foto, nombre, index }: { foto: string; nombre: string; index: number }) {
  const [error, setError] = useState(false);
  const mostrarFoto = Boolean(foto) && !foto.trim().startsWith("[") && !error;

  return (
    <div
      className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[1.75rem]"
      style={{ background: degradados[index % degradados.length] }}
    >
      {mostrarFoto ? (
        <img
          src={foto}
          alt={nombre}
          onError={() => setError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="font-display text-6xl font-extrabold text-tinta/70">
          {nombre.trim().charAt(0)}
        </span>
      )}
    </div>
  );
}

export function Equipo() {
  return (
    <section id="equipo" className="relative px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Aparece>
          <p className="font-mano text-2xl text-periwinkle md:text-3xl">quiénes somos</p>
          <h2 className="mt-1 text-4xl font-extrabold md:text-6xl">Equipo</h2>
        </Aparece>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {equipo.map((p, i) => (
            <Aparece key={p.nombre} delay={i * 90}>
              <article className="h-full rounded-[2.25rem] border border-border bg-card p-5">
                <Retrato foto={p.foto} nombre={p.nombre} index={i} />
                <h3 className="mt-5 font-display text-lg font-bold">{p.nombre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.descripcion}
                </p>
              </article>
            </Aparece>
          ))}
        </div>
      </div>
    </section>
  );
}
