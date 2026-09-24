/** Destellos de luz difusos que se mueven despacio, más el grano sutil. */
export function Fondo() {
  return (
    <>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="destello bg-lila"
          style={{ width: "46rem", height: "46rem", top: "-14rem", left: "-12rem" }}
        />
        <div
          className="destello bg-periwinkle"
          style={{
            width: "38rem",
            height: "38rem",
            top: "28%",
            right: "-14rem",
            animationDuration: "34s",
          }}
        />
        <div
          className="destello bg-lima"
          style={{
            width: "30rem",
            height: "30rem",
            bottom: "-10rem",
            left: "20%",
            opacity: 0.18,
            animationDuration: "42s",
          }}
        />
      </div>
      <div aria-hidden="true" className="grano" />
    </>
  );
}
