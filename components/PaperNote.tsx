type PaperNoteProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PaperNote({
  children,
  className = "",
}: PaperNoteProps) {
  return (
    <div
      className={`
        relative
        border border-[var(--line)]
        bg-[var(--paper-dark)]
        p-8
        shadow-[3px_5px_15px_rgba(0,0,0,0.04)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}