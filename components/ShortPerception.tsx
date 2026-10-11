type ShortPerceptionProps = {
  date: string;
  children: React.ReactNode;
  rotate?: "left" | "right" | "none";
};

export default function ShortPerception({
  date,
  children,
  rotate = "none",
}: ShortPerceptionProps) {
  const rotation = {
    left: "-rotate-[0.5deg]",
    right: "rotate-[0.5deg]",
    none: "",
  };

  return (
    <article
      className={`
        ${rotation[rotate]}
        min-h-[180px]
        border
        border-[var(--line)]
        bg-[var(--paper-dark)]
        p-7
        shadow-[2px_4px_12px_rgba(0,0,0,0.035)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[4px_8px_20px_rgba(0,0,0,0.07)]
      `}
    >
      <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
        {date}
      </p>

      <p className="handwritten mt-8 text-3xl leading-snug">
        {children}
      </p>
    </article>
  );
}