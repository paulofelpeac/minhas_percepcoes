
import Link from "next/link";

const navigation = [
  { label: "Início", href: "/" },
  { label: "Temas", href: "/#temas" },
  { label: "Artigos", href: "/artigos" },
  { label: "Sobre", href: "/#sobre" },
];

export default function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-[var(--line)]">
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-6
          px-6
          py-7
          md:flex-row
          md:items-center
          md:justify-between
          lg:px-10
        "
      >
        {/* Identidade editorial */}
        <Link
          href="/"
          className="block shrink-0"
          aria-label="Minhas Percepções — Página inicial"
        >
          <div className="editorial text-3xl font-semibold tracking-tight text-[var(--ink)]">
            minhas percepções
            <span className="text-[var(--wine)]">.</span>
          </div>

          <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
            por Paulo Felipe Leitão
          </p>
        </Link>

        {/* Navegação principal */}
        <nav
          aria-label="Navegação principal"
          className="
            flex
            items-center
            gap-6
            md:gap-8
            lg:gap-10
          "
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                relative
                whitespace-nowrap
                py-2
                text-[11px]
                font-medium
                uppercase
                tracking-[0.14em]
                text-[var(--muted)]
                transition-colors
                duration-200
                hover:text-[var(--wine)]
                focus-visible:rounded-sm
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[var(--wine)]
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
