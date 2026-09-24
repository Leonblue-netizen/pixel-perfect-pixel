import { createFileRoute } from "@tanstack/react-router";

import { Fondo } from "@/components/lemaga/Fondo";
import { Navegacion } from "@/components/lemaga/Navegacion";
import { Portada } from "@/components/lemaga/Portada";
import { Cinta } from "@/components/lemaga/Cinta";
import { Servicios } from "@/components/lemaga/Servicios";
import { Equipo } from "@/components/lemaga/Equipo";
import { Caso } from "@/components/lemaga/Caso";
import { Contacto } from "@/components/lemaga/Contacto";
import { Pie } from "@/components/lemaga/Pie";

const titulo = "Lemaga · Tres Frentes · Portafolio de consultoría 2026";
const descripcion =
  "Consultoría para emprendimientos y pymes. Somos tres estudiantes con seis líneas de servicio y casos reales de emprendedores con los que ya trabajamos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Fondo />
      <Navegacion />
      <main className="relative">
        <Portada />
        <Cinta />
        <Servicios />
        <Equipo />
        <Cinta />
        <Caso />
        <Contacto />
      </main>
      <Pie />
    </div>
  );
}
