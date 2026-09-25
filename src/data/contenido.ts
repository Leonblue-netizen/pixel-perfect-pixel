/**
 * ARCHIVO DE CONTENIDO
 * --------------------
 * Aquí se edita TODO el texto y las imágenes de la página.
 * No hace falta tocar ningún otro archivo.
 *
 * Reglas simples:
 * - Cualquier texto que empiece con "[" se ve con borde punteado:
 *   significa "pendiente por completar".
 * - Si una foto no existe, déjala como "" y se muestra un fondo de color
 *   con la inicial del nombre.
 * - El campo de video acepta enlaces de YouTube, Vimeo o Google Drive.
 */

import fotoSofia from "@/assets/sofia-leon.png.asset.json";
import fotoJeidy from "@/assets/jeidy-gaviria.png.asset.json";
import fotoDesfile from "@/assets/desfile-makeup.png.asset.json";
import fotoStandQuillaz from "@/assets/stand-quillaz.png.asset.json";
import fotoTaller from "@/assets/taller-comunidad.png.asset.json";
import fotoAimsDream from "@/assets/aimsdream-inicio.png.asset.json";
import fotoLimit from "@/assets/limit-app.png.asset.json";
import fotoPostre from "@/assets/postre-copa.png.asset.json";

export const marca = {
  nombre: "Lemaga",
  manuscritoPortada: "CONSULTORIA",
  titulo: "Lemaga",
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

/**
 * Un ítem de educación o experiencia. Cuando el título o el cargo empieza
 * con "[" se considera pendiente y se muestra con borde punteado, sin
 * importar lo que digan lugar o años.
 */
export type ItemEducacion = { titulo: string; lugar: string; anios: string };
export type ItemExperiencia = { cargo: string; lugar: string; anios: string };

/** Una foto con su encabezado arriba y su texto corto debajo, por ejemplo un pie de foto. */
export type FotoConTexto = { src: string; titulo?: string; texto: string };

/**
 * El proyecto de cada consultor.
 * - nombre: el nombre del proyecto.
 * - descripcion: qué es, qué problema resuelve y qué se logró. Puede ser
 *   largo, hay espacio de sobra en la tarjeta.
 * - fotos: lista de rutas a imágenes, por ejemplo:
 *   ["/images/proyecto-sofia-1.jpg", "/images/proyecto-sofia-2.jpg"].
 *   La primera se muestra grande y el resto en una cuadrícula debajo.
 *   Mientras la lista esté vacía se muestran recuadros punteados.
 * - fotosConTexto: opcional. Cuando se usa, reemplaza a "fotos" y muestra
 *   tres (o más) fotos en fila, cada una con su propio bloque de texto
 *   debajo, por ejemplo para capturas de redes sociales con su pie de foto.
 *   Cada objeto es { src: "ruta de la imagen", texto: "el pie de foto" }.
 * - orientacion: opcional, solo aplica cuando no se usa "fotosConTexto".
 *   "vertical" (el valor por defecto si se omite) apila la foto grande
 *   debajo del texto. "horizontal" pone la foto al lado del texto. Se usa
 *   para que no todos los proyectos se vean iguales.
 */
export type Proyecto = {
  nombre: string;
  descripcion: string;
  fotos: string[];
  fotosConTexto?: FotoConTexto[];
  orientacion?: "vertical" | "horizontal";
};

export const equipo = [
  {
    nombre: "Sofia Leon",
    especialidad: "innovación, diseño centrado en el usuario y prospectiva",
    // Pega aquí la ruta de la foto, por ejemplo: "/images/sofia.jpg". Vacío = recuadro punteado.
    foto: fotoSofia.url,
    // La foto de Sofia es muy vertical: con este marco se ve completa, sin recortes.
    retratoAspecto: "aspect-[9/16]",
    // Párrafo corto de presentación personal.
    presentacion: "Emprendedora y fundadora de Dulcesoft. Antes de diseñar cualquier cosa entrevisto a los clientes, porque prefiero validar con personas reales. Ayudo a emprendedores a entender qué necesita su cliente, identificar el problema real y convertirlo en un producto o servicio con un MVP.",
    // Agrega un objeto por cada título o programa (título, lugar, años).
    educacion: [
      {
        titulo: "Gestión del Emprendimiento y la Innovación",
        lugar: "[Universidad del valle]",
        anios: "[Next]",
      },
    ] as ItemEducacion[],
    // Agrega un objeto por cada experiencia (cargo, lugar, años).
    experiencia: [
      {
        cargo: "Fundadora de Dulcesoft",
        lugar: "[Cali]",
        anios: "[1 año]",
      },
    ] as ItemExperiencia[],
    habilidades: [
      "investigación cualitativa",
      "prospectiva estratégica",
      "desarrollo de MVP",
      "gestión social y RSE",
    ],
    // Lista de herramientas de trabajo, por ejemplo: ["Figma", "Notion"].
    herramientas: ["Claude, Notion, Excel, Canva, Lovable"],
    correo: "[correo]",
    proyecto: {
      // Nombre y descripción vacíos a propósito: cada foto trae su propio
      // encabezado y texto abajo, así la tarjeta queda compacta y las fotos
      // resaltan. Si algún día quieres un titular general, escríbelo aquí.
      nombre: "",
      descripcion: "",
      fotos: [] as string[],
      // Tres fotos en fila: cada una con su encabezado arriba y su texto debajo.
      fotosConTexto: [
        { src: fotoAimsDream.url, titulo: "Aints&dream", texto: "Aints&dream, MVP de productividad para personas multirol. Muestra en qué rol estás invirtiendo más tiempo." },
        { src: fotoLimit.url, titulo: "Limit", texto: "Limit, MVP para emprendedores para el registro y la toma de decisiones." },
        { src: fotoPostre.url, titulo: "Dulcesoft", texto: "Dulcesoft, emprendimiento de postres tipo pavé en distintos sabores, ya lanzado al mercado." },
      ] as FotoConTexto[],
    } as Proyecto,
  },
  {
    nombre: "Francisco Martínez Díaz",
    especialidad: "desarrollo de negocios, finanzas y propiedad intelectual",
    foto: "",
    presentacion: "[Completar: presentación]",
    educacion: [
      {
        titulo: "Pregrado / Profesional en Gestión del Emprendimiento y la Innovación\nDiseñadora de modas \n",
        lugar: "[Completar: institución]",
        anios: "[Completar: años]",
      },
    ] as ItemEducacion[],
    experiencia: [
      {
        cargo: "Consultora de Operaciones, Datos y Estrategia Comercial",
        lugar: "[Completar: lugar]",
        anios: "[Completar: años]",
      },
    ] as ItemExperiencia[],
    habilidades: [
      "estructuración financiera",
      "pitching de inversión",
      "marco legal y SAS",
      "planes de marketing",
    ],
    herramientas: ["Microsoft Excel (fórmulas y datos) | Python | Análisis PESTEL y DOFA | Encuestas de Campo | Plataformas Digitales y Podcast"],
    correo: "[correo]",
    proyecto: {
      nombre: "QUILLAZ ",
      descripcion: "[Completar: qué es el pr",
      fotos: [] as string[],
      orientacion: "horizontal",
    } as Proyecto,
  },
  {
    nombre: "Jeidy Gaviria",
    especialidad: "gestión operativa, análisis de datos y ventas de campo",
    foto: fotoJeidy.url,
    presentacion: "Consultora enfocada en optimizar procesos operativos, analizar datos clave para la toma de decisiones estratégicas y liderar la ejecución de iniciativas comerciales y activaciones de campo.",
    educacion: [
      {
        titulo: "Pregrado / Profesional en Gestión del Emprendimiento y la Innovación\nDiseñadora de modas \n",
        lugar: "[Completar: institución]",
        anios: "[Completar: años]",
      },
    ] as ItemEducacion[],
    experiencia: [
      {
        cargo: "Consultora de Operaciones, Datos y Estrategia Comercial",
        lugar: "[Completar: lugar]",
        anios: "[Completar: años]",
      },
    ] as ItemExperiencia[],
    habilidades: [
      "decisiones con datos",
      "análisis estadístico",
      "activación en ferias",
      "contenido y podcast",
    ],
    herramientas: ["Microsoft Excel (fórmulas y datos) | Python | Análisis PESTEL y DOFA | Encuestas de Campo | Plataformas Digitales y Podcast"],
    correo: "[correo]",
    proyecto: {
      nombre: "QUILLAZ ",
      descripcion: "[Completar: qué es el pr",
      fotos: [fotoDesfile.url, fotoStandQuillaz.url, fotoTaller.url] as string[],
    } as Proyecto,
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
  descripcion: "Escríbenos con el nombre de tu emprendimiento y el problema que quieres resolver.",
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
