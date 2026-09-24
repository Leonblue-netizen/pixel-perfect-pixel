import { useState, type CSSProperties, type ReactNode } from "react";
import { equipo, esPendiente, type FotoConTexto } from "@/data/contenido";
import { Aparece, Estrella, Texto } from "./Basicos";

const acentos = ["text-lima", "text-lila", "text-periwinkle"] as const;
const acentosFondo = ["bg-lima", "bg-lila", "bg-periwinkle"] as const;

function acentoDe(index: number): (typeof acentos)[number] {
  return acentos[index % acentos.length] ?? acentos[0];
}

function acentoFondoDe(index: number): (typeof acentosFondo)[number] {
  return acentosFondo[index % acentosFondo.length] ?? acentosFondo[0];
}

/** Recorte irregular que simula un borde rasgado para la foto. */
const recorte =
  "polygon(2% 4%, 14% 0%, 27% 3%, 40% 0%, 54% 4%, 68% 0%, 82% 3%, 96% 0%, 100% 12%, 97% 26%, 100% 40%, 96% 54%, 100% 68%, 97% 82%, 100% 96%, 87% 100%, 73% 97%, 59% 100%, 45% 96%, 31% 100%, 17% 97%, 3% 100%, 0% 87%, 3% 73%, 0% 59%, 4% 45%, 0% 31%, 3% 17%)";

/** Sticker circular pequeño, para variar junto a las estrellas. */
function Punto({
  className = "",
  tono = "text-lima",
  style,
}: {
  className?: string;
  tono?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      className={`flota pointer-events-none absolute rounded-full ${tono} ${className}`}
      style={{ backgroundColor: "currentColor", ...style }}
    />
  );
}

/** Etiqueta tipo cinta de papel negra, para "Especialidad", "Educación" y "Experiencia". */
function Cinta({ children, girar = "-rotate-2" }: { children: ReactNode; girar?: string }) {
  return (
    <span
      className={`inline-block ${girar} rounded-sm bg-tinta px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-foreground shadow-md`}
    >
      {children}
    </span>
  );
}

/** Chip pequeño para habilidades y herramientas. */
function Chip({ texto, tono }: { texto: string; tono: "lima" | "periwinkle" }) {
  if (esPendiente(texto)) {
    return <span className="pendiente font-sans text-xs">{texto}</span>;
  }
  const tonos = {
    lima: "bg-lima text-tinta",
    periwinkle: "bg-periwinkle text-tinta",
  } as const;
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${tonos[tono]}`}>
      {texto}
    </span>
  );
}

/** Una fila de educación o experiencia, con los años en cursiva. */
function FilaItem({ nombre, lugar, anios }: { nombre: string; lugar: string; anios: string }) {
  if (esPendiente(nombre)) {
    return <li className="pendiente font-sans text-xs">{nombre}</li>;
  }
  return (
    <li className="text-sm leading-relaxed">
      <span className="font-medium">{nombre}</span>
      <span className="text-tinta/60"> · {lugar} · </span>
      <span className="italic text-tinta/60">{anios}</span>
    </li>
  );
}

/** Un espacio de foto para la tarjeta de proyecto: imagen o recuadro punteado. */
function EspacioFoto({ src, aspecto = "aspect-square" }: { src: string; aspecto?: string }) {
  const [error, setError] = useState(false);
  const mostrar = Boolean(src) && !esPendiente(src) && !error;

  if (mostrar) {
    return (
      <div className={`w-full overflow-hidden rounded-[20px] ${aspecto}`}>
        <img
          src={src}
          alt=""
          onError={() => setError(true)}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out hover:scale-110"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex w-full flex-col items-center justify-center rounded-[20px] border-2 border-dashed border-pendiente px-3 text-center ${aspecto}`}
    >
      <span className="text-xs text-pendiente">[Foto del proyecto]</span>
    </div>
  );
}

/** Texto corto debajo de una foto, por ejemplo un pie de foto. */
function BloqueTexto({ texto }: { texto: string }) {
  if (esPendiente(texto)) {
    return <p className="pendiente font-sans mt-2 text-xs">{texto}</p>;
  }
  return <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{texto}</p>;
}

/** Nombre corto de un proyecto, encima de su foto. */
function NombreFoto({ nombre }: { nombre: string }) {
  if (esPendiente(nombre)) {
    return <p className="pendiente font-sans mb-2 text-xs">{nombre}</p>;
  }
  return <p className="mb-2 text-sm font-bold">{nombre}</p>;
}

/** Una foto metida dentro de un marco de celular, para capturas de una app. */
function MockupCelular({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  const mostrar = Boolean(src) && !esPendiente(src) && !error;

  return (
    <div className="flex h-[28rem] w-full items-center justify-center sm:h-80">
      <div className="relative h-full max-w-full rounded-[1.75rem] border-[6px] border-tinta bg-tinta p-1.5 shadow-2xl [aspect-ratio:5/7]">
        <div className="absolute left-1/2 top-1.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-tinta" />
        <div className="h-full w-full overflow-hidden rounded-[1.25rem] bg-background">
          {mostrar ? (
            <img
              src={src}
              alt={alt}
              onError={() => setError(true)}
              className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center border-2 border-dashed border-pendiente px-3 text-center">
              <span className="text-xs text-pendiente">{alt}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Fila de fotos con un bloque de texto propio debajo de cada una. */
function FotosConCaption({ fotos }: { fotos: FotoConTexto[] }) {
  const total = Math.max(3, fotos.length);
  const items = Array.from(
    { length: total },
    (_, i) => fotos[i] ?? { src: "", texto: "[Completar: texto de la foto]" },
  );

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {items.map((item, i) => (
        <div key={i} className={item.grande ? "sm:col-span-2" : undefined}>
          <NombreFoto nombre={item.nombre ?? "[Completar: nombre del proyecto]"} />
          {item.tipo === "mockup" ? (
            <MockupCelular src={item.src} alt="[Foto del proyecto]" />
          ) : (
            <EspacioFoto src={item.src} aspecto={item.aspecto ?? "aspect-[4/5]"} />
          )}
          <BloqueTexto texto={item.texto} />
        </div>
      ))}
    </div>
  );
}

/**
 * El encabezado de texto de la tarjeta de proyecto: badge y etiqueta siempre,
 * más nombre y descripción cuando `conNombreYDescripcion` es true (se omiten
 * cuando cada foto ya trae su propio nombre y texto, como en fotosConTexto).
 */
function InfoProyecto({
  persona,
  index,
  conNombreYDescripcion = true,
}: {
  persona: (typeof equipo)[number];
  index: number;
  conNombreYDescripcion?: boolean;
}) {
  const acento = acentoDe(index);
  const { proyecto } = persona;

  return (
    <div>
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-tinta ${acentoFondoDe(index)}`}
      >
        Caso de éxito
      </span>
      <span className={`texto-ancha mt-3 block text-xs ${acento}`}>
        Proyecto de {persona.nombre}
      </span>

      {conNombreYDescripcion && (
        <>
          {esPendiente(proyecto.nombre) ? (
            <p className="pendiente font-sans mt-2 text-sm">{proyecto.nombre}</p>
          ) : (
            <h4 className="texto-ancha mt-2 text-2xl md:text-3xl">{proyecto.nombre}</h4>
          )}

          <div className="mt-4 min-h-[7rem]">
            <Texto
              valor={proyecto.descripcion}
              className="block text-sm leading-relaxed text-muted-foreground"
            />
          </div>
        </>
      )}
    </div>
  );
}

/** Tarjeta grande de proyecto, debajo de la presentación de cada consultor. */
function Proyecto({ persona, index }: { persona: (typeof equipo)[number]; index: number }) {
  const acento = acentoDe(index);
  const colorVar = acento.replace("text-", "");
  const { proyecto } = persona;
  const totalEspacios = Math.max(3, proyecto.fotos.length);
  const espacios = Array.from({ length: totalEspacios }, (_, i) => proyecto.fotos[i] ?? "");
  const [principal, ...secundarias] = espacios;

  const horizontal = !proyecto.fotosConTexto && proyecto.orientacion === "horizontal";

  return (
    <Aparece delay={index * 100 + 80}>
      <div
        className="group rounded-[2rem] p-[1.5px] transition-transform duration-300 hover:-translate-y-1.5"
        style={{
          background: "linear-gradient(135deg, var(--lima), var(--lila), var(--periwinkle))",
          boxShadow: `0 30px 70px -30px color-mix(in oklch, var(--${colorVar}) 55%, transparent)`,
        }}
      >
        <div className="relative rounded-[calc(2rem-1.5px)] bg-background/60 p-6 backdrop-blur-sm md:p-8">
          <Estrella
            className={`flota pointer-events-none absolute right-7 top-7 h-4 w-4 transition-transform duration-300 group-hover:scale-150 group-hover:rotate-45`}
            tono="text-rosa"
          />
          <Estrella
            className="flota pointer-events-none absolute left-7 top-9 h-3 w-3 transition-transform duration-300 group-hover:scale-150 group-hover:-rotate-45"
            tono={acento}
            style={{ animationDelay: "1.1s" }}
          />
          <Punto
            className="h-2 w-2 transition-transform duration-300 group-hover:scale-150"
            tono={acento}
            style={{ right: "2.75rem", top: "3.25rem", animationDelay: "1.8s" }}
          />

          {proyecto.fotosConTexto ? (
            <div>
              <InfoProyecto persona={persona} index={index} conNombreYDescripcion={false} />
              <div className="mt-4">
                <FotosConCaption fotos={proyecto.fotosConTexto} />
              </div>
            </div>
          ) : horizontal ? (
            <div className="grid gap-6 md:grid-cols-2 md:items-start md:gap-10">
              <div className="order-1 space-y-3 md:order-2">
                <EspacioFoto src={principal ?? ""} aspecto="aspect-[4/3]" />
                {secundarias.length > 0 && (
                  <div className="grid grid-cols-2 gap-3">
                    {secundarias.map((src, i) => (
                      <EspacioFoto key={i} src={src} />
                    ))}
                  </div>
                )}
              </div>

              <div className="order-2 md:order-1">
                <InfoProyecto persona={persona} index={index} />
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-xl">
              <InfoProyecto persona={persona} index={index} />
              <div className="mt-6">
                <EspacioFoto src={principal ?? ""} aspecto="aspect-[3/4]" />
              </div>
              {secundarias.length > 0 && (
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {secundarias.map((src, i) => (
                    <EspacioFoto key={i} src={src} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Aparece>
  );
}

function Retrato({ foto, nombre, index }: { foto: string; nombre: string; index: number }) {
  const [error, setError] = useState(false);
  const mostrarFoto = Boolean(foto) && !esPendiente(foto) && !error;
  const acento = acentoDe(index);

  return (
    <div className="relative mx-auto max-w-[15rem] md:max-w-[17rem]">
      {mostrarFoto ? (
        <div className="aspect-[4/5] w-full" style={{ clipPath: recorte }}>
          <img
            src={foto}
            alt={nombre}
            onError={() => setError(true)}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="flex aspect-[4/5] w-full flex-col items-center justify-center rounded-[1.75rem] border-2 border-dashed border-pendiente px-6 text-center">
          <span className="text-sm text-pendiente"></span>
        </div>
      )}
      <Estrella
        className="flota pointer-events-none absolute -right-3 -top-4 h-10 w-10"
        tono={acento}
      />
      <Estrella
        className="flota pointer-events-none absolute -left-4 top-1/3 h-5 w-5"
        tono={acento}
        style={{ animationDelay: "0.8s" }}
      />
      <Estrella
        className="flota pointer-events-none absolute -left-3 bottom-8 h-6 w-6"
        tono="text-rosa"
        style={{ animationDelay: "1.4s" }}
      />
      <Punto
        className="h-3 w-3"
        tono={acento}
        style={{ right: "1.25rem", bottom: "-0.5rem", animationDelay: "2s" }}
      />
    </div>
  );
}

function Presentacion({ persona, index }: { persona: (typeof equipo)[number]; index: number }) {
  const fotoDerecha = index === 1;
  const acento = acentoDe(index);

  return (
    <Aparece delay={index * 100}>
      <article className="relative overflow-hidden rounded-[2.5rem] border border-border p-6 md:p-10">
        <Estrella
          className="flota pointer-events-none absolute left-6 top-6 h-4 w-4"
          tono={acento}
          style={{ animationDelay: "0.3s" }}
        />
        <Estrella
          className="flota pointer-events-none absolute bottom-8 right-8 h-3 w-3"
          tono="text-rosa"
          style={{ animationDelay: "2.1s" }}
        />
        <Estrella
          className="flota pointer-events-none absolute right-16 top-10 hidden h-5 w-5 md:block"
          tono={acento}
          style={{ animationDelay: "1s" }}
        />
        <Punto
          className="h-2.5 w-2.5"
          tono="text-periwinkle"
          style={{ left: "18%", bottom: "2.5rem", animationDelay: "1.7s" }}
        />

        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <div className={fotoDerecha ? "md:order-2" : "md:order-1"}>
            <Retrato foto={persona.foto} nombre={persona.nombre} index={index} />
          </div>

          <div className={fotoDerecha ? "md:order-1" : "md:order-2"}>
            <div className="relative rounded-[1.75rem] bg-menta py-7 pl-9 pr-6 text-tinta md:py-9 md:pl-11 md:pr-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-6 left-3 top-6 w-2.5 opacity-40"
                style={{
                  backgroundImage: "radial-gradient(circle, var(--tinta) 3.5px, transparent 4px)",
                  backgroundSize: "100% 24px",
                }}
              />

              <h3 className="texto-ancha text-3xl md:text-4xl">Hola, soy {persona.nombre}</h3>

              <Texto valor={persona.presentacion} className="mt-4 block text-sm leading-relaxed" />

              <div className="mt-6">
                <Cinta>Especialidad</Cinta>
                <p className="mt-2 text-sm leading-relaxed">{persona.especialidad}</p>
              </div>

              <div className="mt-6">
                <Cinta girar="rotate-1">Educación</Cinta>
                <ul className="mt-2 space-y-1.5">
                  {persona.educacion.map((item, i) => (
                    <FilaItem key={i} nombre={item.titulo} lugar={item.lugar} anios={item.anios} />
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Cinta girar="-rotate-1">Experiencia</Cinta>
                <ul className="mt-2 space-y-1.5">
                  {persona.experiencia.map((item, i) => (
                    <FilaItem key={i} nombre={item.cargo} lugar={item.lugar} anios={item.anios} />
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {persona.habilidades.map((h) => (
                  <Chip key={h} texto={h} tono="lima" />
                ))}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {persona.herramientas.map((h) => (
                  <Chip key={h} texto={h} tono="periwinkle" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Aparece>
  );
}

function ConsultorBloque({ persona, index }: { persona: (typeof equipo)[number]; index: number }) {
  return (
    <div>
      <Presentacion persona={persona} index={index} />
      <div className="mt-6 md:mt-8">
        <Proyecto persona={persona} index={index} />
      </div>
    </div>
  );
}

export function Equipo() {
  return (
    <section id="equipo" className="relative px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Aparece>
          <p className="texto-ancha text-xl text-periwinkle md:text-2xl">quiénes somos</p>
          <h2 className="mt-1 text-4xl font-extrabold md:text-6xl">Equipo</h2>
        </Aparece>

        <div className="mt-12 space-y-10 md:space-y-14">
          {equipo.map((persona, i) => (
            <ConsultorBloque key={persona.nombre} persona={persona} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
