
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

import {
  getAllArticles,
  getArticleBySlug,
} from "@/lib/articles";

import { formatDate } from "@/lib/date";

import Percepcao from "@/components/editorial/Percepcao";
import Nota from "@/components/editorial/Nota";
import MinhaPercepcaoMudou from "@/components/editorial/MinhaPercepcaoMudou";
import ReadingProgress from "@/components/ReadingProgress";
import ShareArticle from "@/components/ShareArticle";

const mdxComponents = {
  Percepcao,
  Nota,
  MinhaPercepcaoMudou,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      images: article.coverImage
        ? [article.coverImage]
        : [],
    },
  };
}

export default async function ArticlePage({
  params,
}: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const related = getAllArticles()
    .filter(
      (item) =>
        item.slug !== article.slug &&
        item.category === article.category
    )
    .slice(0, 3);

  return (
    <>
      <ReadingProgress />

      <main className="mx-auto max-w-5xl px-6 py-12 md:py-20">
        <Link
          href="/"
          className="text-xs uppercase tracking-widest text-[var(--wine)] hover:underline"
        >
          ← Voltar às percepções
        </Link>

        <article>
          <header className="mx-auto max-w-3xl pt-14 pb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--wine)]">
              {article.category}
            </p>

            <h1 className="editorial mt-5 text-5xl leading-tight md:text-7xl">
              {article.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              {article.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-xs text-[var(--muted)]">
              <span>Paulo Felipe Leitão</span>
              <span>·</span>
              <span>{formatDate(article.date)}</span>
              <span>·</span>
              <span>{article.readingTime} de leitura</span>
            </div>
          </header>

          {article.coverImage && (
            <figure className="mb-16">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={article.coverImage}
                  alt={article.coverAlt || article.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                />
              </div>
            </figure>
          )}

          <div className="article-content mx-auto max-w-3xl">
            <MDXRemote
              source={article.content}
              components={mdxComponents}
            />
          </div>

          <footer className="mx-auto mt-20 max-w-3xl border-t border-[var(--line)] pt-10">
            <p className="handwritten mb-8 text-3xl text-[var(--wine)]">
              Observar. Questionar. Mudar.
            </p>

            <ShareArticle title={article.title} />
          </footer>
        </article>

        {related.length > 0 && (
          <section className="mx-auto mt-24 max-w-3xl border-t border-[var(--line)] pt-12">
            <h2 className="editorial text-4xl">
              Outras percepções
            </h2>

            <div className="mt-8 divide-y divide-[var(--line)]">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/artigos/${item.slug}`}
                  className="block py-6"
                >
                  <p className="text-xs text-[var(--wine)]">
                    {item.category}
                  </p>

                  <h3 className="editorial mt-2 text-2xl hover:text-[var(--wine)]">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
