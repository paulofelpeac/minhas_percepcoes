
import type { Metadata } from "next";
import Link from "next/link";

import { getAllArticles } from "@/lib/articles";
import ArticleExplorer from "@/components/ArticleExplorer";

export const metadata: Metadata = {
  title: "Todas as percepções",
  description:
    "Reflexões sobre liderança, política, fé, sociedade, cotidiano e lições de vida.",
};

export default function ArticlesPage() {
  const articles = getAllArticles().map(
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
        href="/"
        className="text-xs uppercase tracking-widest text-[var(--wine)] hover:underline"
      >
        ← Página inicial
      </Link>

      <header className="mt-16 mb-14">
        <p className="handwritten text-3xl text-[var(--wine)]">
          Um caderno aberto
        </p>

        <h1 className="editorial mt-4 text-5xl md:text-7xl">
          Todas as percepções
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Reflexões sobre o mundo, as pessoas e as
          experiências que nos transformam. Algumas
          certezas, muitas perguntas e a liberdade
          de mudar de ideia.
        </p>
      </header>

      <ArticleExplorer articles={articles} />
    </main>
  );
}
