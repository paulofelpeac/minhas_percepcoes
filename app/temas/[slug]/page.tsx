
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getAllArticles } from "@/lib/articles";
import ArticleExplorer from "@/components/ArticleExplorer";

const themes: Record<string, {
  title: string;
  description: string;
}> = {
  lideranca: {
    title: "Liderança",
    description:
      "Reflexões sobre caráter, responsabilidade, autoridade e a arte de conduzir pessoas.",
  },
  politica: {
    title: "Política",
    description:
      "Pensamentos sobre poder, decisões públicas, instituições e vida em sociedade.",
  },
  fe: {
    title: "Fé",
    description:
      "Perguntas, crenças e reflexões sobre espiritualidade e sentido.",
  },
  sociedade: {
    title: "Sociedade",
    description:
      "Observações sobre o comportamento humano e o mundo em que vivemos.",
  },
  cotidiano: {
    title: "Cotidiano",
    description:
      "Pequenos acontecimentos que despertam grandes pensamentos.",
  },
  licoes: {
    title: "Lições",
    description:
      "Aprendizados que a experiência e o tempo nos oferecem.",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(themes).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const theme = themes[slug];

  if (!theme) return {};

  return {
    title: theme.title,
    description: theme.description,
  };
}

export default async function ThemePage({
  params,
}: Props) {
  const { slug } = await params;
  const theme = themes[slug];

  if (!theme) notFound();

  const articles = getAllArticles()
    .filter(
      (article) =>
        article.category === theme.title
    )
    .map(
      ({
        slug,
        title,
        category,
        description,
        date,
        readingTime,
      }) => ({
        slug,
        title,
        category,
        description,
        date,
        readingTime,
      })
    );

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <Link
        href="/artigos"
        className="text-xs uppercase tracking-widest text-[var(--wine)] hover:underline"
      >
        ← Todas as percepções
      </Link>

      <header className="mt-16 mb-14">
        <p className="handwritten text-3xl text-[var(--wine)]">
          Sobre o que penso
        </p>

        <h1 className="editorial mt-4 text-5xl md:text-7xl">
          {theme.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          {theme.description}
        </p>
      </header>

      <ArticleExplorer
        articles={articles}
        initialCategory={theme.title}
      />
    </main>
  );
}
