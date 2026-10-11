import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    date?: string;
};

export default function Nota({ children, date }: Props) {
    return (
        <aside className="relative my-12 rotate-[-0.5deg] border border-[var(--line)] bg-[var(--paper-dark)] px-8 py-9 shadow-md">
            <div
                aria-hidden="true"
                className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-2 bg-[#d9c9a7]/70"
            />

            {date && (
                <p className="mb-4 font-sans text-[10px] uppercase tracking-widest text-[var(--muted)]">
                    {date}
                </p>
            )}

            <div className="handwritten text-3xl leading-snug text-[var(--wine)] [&>p]:my-0">
                {children}
            </div>
        </aside>
    );
}