import ArticleCard from "@/components/ArticleCard";
import HandwrittenNote from "@/components/HandwrittenNote";
import PaperNote from "@/components/PaperNote";
import ShortPerception from "@/components/ShortPerception";
import TapedPhoto from "@/components/TapedPhoto";
import { getAllArticles } from "@/lib/articles";
import Link from "next/link";

const categories = [
  {
    name: "Liderança",
    description: "Poder, responsabilidade e pessoas.",
    href: "/temas/lideranca",
  },
  {
    name: "Política",
    description: "Estado, instituições e sociedade.",
    href: "/temas/politica",
  },
  {
    name: "Fé",
    description: "Crenças, dúvidas e espiritualidade.",
    href: "/temas/fe",
  },
  {
    name: "Sociedade",
    description: "Comportamentos e contradições.",
    href: "/temas/sociedade",
  },
  {
    name: "Cotidiano",
    description: "O extraordinário escondido no comum.",
    href: "/temas/cotidiano",
  },
  {
    name: "Lições",
    description: "Aquilo que a vida precisou ensinar.",
    href: "/temas/licoes",
  },
];

export default function Home() {
  const articles = getAllArticles();
  return (
    <main>
      <section className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--wine)]">
            Ideias em movimento
          </p>

          <h1 className="editorial max-w-3xl text-6xl font-medium leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Pensar também é permitir-se mudar.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-[var(--muted)]">
            Reflexões sobre liderança, política, fé, sociedade, cotidiano e
            aquilo que a experiência vai nos ensinando pelo caminho.
          </p>

          <div className="mt-8 max-w-sm rotate-[-1deg]">
            <p className="handwritten text-2xl leading-7 text-[var(--wine)]">
              algumas ideias merecem respostas.
              <br />
              outras merecem apenas novas perguntas.
            </p>
          </div>

          <Link
            href="/artigos"
            className="mt-8 inline-block bg-[var(--wine)] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white"
          >
            Explorar percepções
          </Link>
        </div>

        <div className="relative pb-16">

          <TapedPhoto
            src="/images/hero.webp"
            alt="Imagem que acompanha a reflexão principal"
            caption="algumas ideias começam apenas com uma observação."
            priority
          />

          <PaperNote className="relative z-10 -mt-14 ml-4 rotate-[-1deg] md:ml-14">
            <span className="editorial absolute -left-3 -top-8 text-8xl text-[var(--wine)]/20">
              “
            </span>

            <blockquote className="editorial text-2xl italic leading-snug md:text-3xl">
              Prefiro ser essa metamorfose ambulante...
            </blockquote>

            <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Raul Seixas · Metamorfose Ambulante
            </p>

            <div className="mt-8 border-t border-[var(--line)] pt-6">
              <HandwrittenNote rotate="right">
                Minhas percepções não são minhas verdades definitivas.
              </HandwrittenNote>
            </div>
          </PaperNote>

        </div>
      </section>

      <section id="temas" className="border-y border-[var(--line)] bg-white/25">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--wine)]">
            Sobre o que penso
          </p>

          <h2 className="editorial mt-3 text-5xl">Temas</h2>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3">

            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="
                            group
                            block
                            border-t
                            border-[var(--line)]
                            px-1
                            py-8
                            transition-colors
                            hover:bg-[var(--paper-dark)]
                            md:px-6
                          "
              >
                <div className="flex items-center justify-between">
                  <h3 className="editorial text-3xl transition-colors group-hover:text-[var(--wine)]">
                    {category.name}
                  </h3>

                  <span className="text-xl text-[var(--wine)] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                    ↗
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {category.description}
                </p>
              </Link>
            ))}

          </div>
        </div>
      </section>

      <section id="artigos" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex items-end justify-between border-b border-[var(--ink)] pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--wine)]">
              Escritos recentes
            </p>
            <h2 className="editorial mt-2 text-5xl">Últimas percepções</h2>
          </div>
        </div>

        <div className="divide-y divide-[var(--line)]">
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              slug={article.slug}
              category={article.category}
              date={article.date}
              title={article.title}
              description={article.description}
              readingTime={article.readingTime}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-white/20">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--wine)]">
              Anotações
            </p>

            <h2 className="editorial mt-2 text-5xl">
              Percepções breves
            </h2>

            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
              Nem toda percepção precisa se transformar em um ensaio.
              Algumas ideias merecem apenas ser registradas.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <ShortPerception date="04 OUT 2026" rotate="left">
              Nem toda resposta precisa ser imediata.
            </ShortPerception>

            <ShortPerception date="01 OUT 2026" rotate="right">
              Mudar de opinião também pode ser sinal de coerência.
            </ShortPerception>

            <ShortPerception date="28 SET 2026" rotate="left">
              Ouvir também é liderança.
            </ShortPerception>

            <ShortPerception date="25 SET 2026" rotate="right">
              Algumas certezas envelhecem antes de nós.
            </ShortPerception>

          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="border-t border-[var(--line)] bg-[var(--ink)] text-[var(--paper)]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="editorial text-4xl">minhas percepções
              <span className="text-[var(--wine)]">.</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
              Um caderno público de pensamentos, dúvidas, experiências e ideias
              em permanente construção.
            </p>
          </div>

          <div className="lg:text-right">
            <p className="editorial text-3xl italic">
              Observar. Questionar. Mudar.
            </p>
            <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-white/40">
              Paulo Felipe Leitão · 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}