type HandwrittenNoteProps = {
  children: React.ReactNode;
  rotate?: "left" | "right" | "none";
};

export default function HandwrittenNote({
  children,
  rotate = "left",
}: HandwrittenNoteProps) {
  const rotation = {
    left: "-rotate-1",
    right: "rotate-1",
    none: "",
  };

  return (
    <p
      className={`
        handwritten
        ${rotation[rotate]}
        text-2x1
        italic
        leading-7
        text-[var(--wine)]
      `}
    >
      {children}
    </p>
  );
}