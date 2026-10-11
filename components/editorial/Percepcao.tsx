import type { ReactNode } from "react";

type props = {
    children: ReactNode;
};

export default function Percepcao({ children }: props) {
    return (
    <aside className="my-12 border-l-4 border-[var(--wine)] bg-[var(--paper-dark)] px-7 py-8">
      <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--wine)]">
        Minha percepção
      </p>

      <div className="editorial text-2xl italic leading-relaxed [&>p]:my-0">
        {children}
      </div>
    </aside>
  );
}