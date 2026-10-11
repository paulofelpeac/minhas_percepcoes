import Link from "next/link"; 

type Props = {
    original: string;
    nova: string;
};

export default function MinhaPercepcaoMudou({
  original,
  nova,
}: Props) {
  return (
    <aside className="my-12 border-y border-[var(--line)] py-8">
      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[var(--wine)]">
        Minha percepção mudou
      </p>

      <p className="editorial mt-4 text-xl leading-relaxed">
        Este texto representa uma percepção registrada em {original}.
        Posteriormente, publiquei uma nova reflexão sobre o assunto.
      </p>

      <Link
        href={nova}
        className="mt-5 inline-block font-sans text-sm font-medium text-[var(--wine)] underline underline-offset-4"
      >
        Conheça minha percepção atual →
      </Link>
    </aside>
  );
}