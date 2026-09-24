/**
 * ARCHIVO DE CONTENIDO
 * --------------------
 * Aquí se edita TODO el texto y las imágenes de la página.
 * No hace falta tocar ningún otro archivo.
 *
 * Reglas simples:
 * - Cualquier texto que empiece con "[" se ve con borde punteado amarillo:
 *   significa "pendiente por completar".
 * - Si una foto no existe, déjala como "" y se muestra un fondo de color
 *   con la inicial del nombre.
 * - El campo de video acepta enlaces de YouTube, Vimeo o Google Drive.
 */

export const marca = {
  nombre: "Lemaga",
  manuscritoPortada: "portafolio 2026",
  titulo: "Tres Frentes",
  subtitulo:
    "Consultoría para emprendimientos y pymes. Somos tres estudiantes con seis líneas de servicio y casos reales de emprendedores con los que ya trabajamos.",
  botonPrimario: "Ver servicios",
  botonSecundario: "Ver caso",
};

export const navegacion = [
  { etiqueta: "Servicios", id: "servicios" },
  { etiqueta: "Equipo", id: "equipo" },
  { etiqueta: "Caso", id: "caso" },
  { etiqueta: "Contacto", id: "contacto" },
];

export const cinta = [
  "Innovación y MVP",
  "Prospectiva estratégica",
  "Finanzas y costos",
  "Marketing y ventas de campo",
  "Propiedad intelectual y RSE",
  "Operación y talento",
];

export const servicios = [
  {
    titulo: "Innovación, experiencia y MVP",
    resumen: "Salimos a hablar con el consumidor antes de diseñar nada.",
    color: "lima" as const,
  },
  {
    titulo: "Prospectiva, cambio y riesgo",
    resumen: "Escenarios futuros para decidir con información incompleta.",
    color: "lila" as const,
  },
  {
    titulo: "Finanzas, costos y presupuestos",
    resumen:
      "Los números del negocio en Excel, listos para revisar con un banco o un inversionista.",
    color: "periwinkle" as const,
  },
  {
    titulo: "Estrategia comercial y ventas",
    resumen: "Del estudio de mercado a la venta directa en un stand.",
    color: "menta" as const,
  },
  {
    titulo: "Legal, propiedad intelectual y RSE",
    resumen: "Formalizar la empresa y proteger lo que ya construyó.",
    color: "lila" as const,
  },
  {
    titulo: "Operación, logística y talento",
    resumen: "Procesos claros y equipos que saben qué les toca hacer.",
    color: "lima" as const,
  },
];

export const equipo = [
  {
    nombre: "Sofia Leon",
    descripcion: "innovación, diseño centrado en el usuario y prospectiva",
    // Pega aquí la ruta de la foto, por ejemplo: "/images/sofia.jpg"
    foto: "",
    correo: "[correo]",
  },
  {
    nombre: "Francisco Martínez Díaz",
    descripcion: "desarrollo de negocios, finanzas y propiedad intelectual",
    foto: "",
    correo: "[correo]",
  },
  {
    nombre: "Jeidy Gaviria",
    descripcion: "gestión operativa, análisis de datos y ventas de campo",
    foto: "",
    correo: "[correo]",
  },
];

export const caso = {
  titulo: "Proyecto social con emprendedores",
  descripcion:
    "Los tres trabajamos con emprendedores reales. Entrevistamos a cada uno, grabamos las conversaciones y armamos una cartilla-guía para el tema donde más ayuda necesitaban.",
  pasos: ["Entrevista", "Tema de ayuda", "Cartilla-guía"],
  // Acepta enlaces de YouTube, Vimeo o Google Drive. Si está vacío se muestra
  // el marco con "video próximamente".
  video: "",
  textoVideoPendiente: "video próximamente",
  // Si está vacío, el botón de descarga no aparece.
  enlaceCartilla: "",
  textoBotonCartilla: "Descargar la cartilla-guía",
};

export const contacto = {
  titulo: "Contacto",
  descripcion:
    "Escríbenos con el nombre de tu emprendimiento y el problema que quieres resolver.",
};

export const pie = "Portafolio de consultoría empresarial · Proyecto universitario · 2026";

/** Convierte un enlace de YouTube, Vimeo o Google Drive en enlace para insertar. */
export function enlaceVideoIncrustado(url: string): string | null {
  if (!url || url.trim().startsWith("[")) return null;
  const u = url.trim();
  const yt = u.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]+)/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  const vi = u.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vi) return `https://player.vimeo.com/video/${vi[1]}`;
  const gd = u.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([\w-]+)/);
  if (gd) return `https://drive.google.com/file/d/${gd[1]}/preview`;
  return u;
}

/** Un texto es "pendiente" cuando empieza con "[". */
export function esPendiente(texto: string): boolean {
  return typeof texto === "string" && texto.trim().startsWith("[");
}
