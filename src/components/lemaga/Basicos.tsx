import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { esPendiente } from "@/data/contenido";

/** Muestra un texto; si empieza con "[" lo marca como pendiente. */
export function Texto({ valor, className = "" }: { valor: string; className?: string }) {
  if (esPendiente(valor)) {
    return <span className={`pendiente font-sans text-sm ${className}`}>{valor}</span>;
  }
  return <span className={className}>{valor}</span>;
}

/** Envuelve contenido para que aparezca al hacer scroll. */
export function Aparece({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`aparece ${className}`}
    >
      {children}
    </div>
  );
}

/** Sticker de estrella decorativo. */
export function Estrella({
  className = "",
  tono = "text-lima",
  style,
}: {
  className?: string;
  tono?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`${tono} ${className}`}
      style={style}
      fill="currentColor"
    >
      <path d="M12 0c.6 5.5 2.4 8.4 12 12-9.6 3.6-11.4 6.5-12 12-.6-5.5-2.4-8.4-12-12C9.6 8.4 11.4 5.5 12 0z" />
    </svg>
  );
}
