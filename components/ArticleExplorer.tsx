"use client"

import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useMemo, useState } from "react";
import Link from "next/link";

type ArticleSummary = {
    slug: string;
    title: string;
    category: string;
    description: string;
    date: string;
    readingtime: string;
};

type props = {
    articles: ArticleSummary[];
    initialCategory?: string;
};

const categories = [
    "Todas",
    "Liderança",
    "Política",
    "Fé",
    "Sociedade",
    "Cotidiano",
    "Lições",
];

export default function ArticleExplorer({ articles, initialCategory = "Todas" }: Props) {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState(initialCategory);

    const filtered = useMemo(() => {
        const search = query
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();

        return articles.filter((article: { category: any; title: any; description: any; }) => {
            const matchescategory = category === "Todas" || article.category === category;
            const searchable = [
                article.title,
                article.description,
                article.category,
            ]
                .join(" ")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase();

            return (
                matchescategory && searchable.includes(search)
            );
        });
    }, [articles, query, category]);

    return (
        <div>
            <input
                type="search"
                value={query}
                onChange={(event) =>
                    setQuery(event.target.value)
                }
                placeholder="Buscar percepções..."
                aria-label="Buscar artigos"
                className="w-full border border-[var(--line)] bg-transparent px-5 py-4 text-sm outline-none focus:border-[var(--wine)]"
            />

            <div className="mt-7 flex flex-wrap gap-2">
                {categories.map((item) => (
                    <button
                        key={item}
                        type="button"
                        onClick={() => setCategory(item)}
                        aria-pressed={category === item}
                        className={`cursor-pointer border px-4 py-2 text-xs transition-colors ${category === item
                                ? "border-[var(--wine)] bg-[var(--wine)] text-white"
                                : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--wine)]"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <p className="mt-10 text-xs text-[var(--muted)]">
                {filtered.length}{" "}
                {filtered.length === 1
                    ? "percepção encontrada"
                    : "percepções encontradas"}
            </p>

            <div className="mt-5 divide-y divide-[var(--line)]">
                {filtered.map((article: { slug: Key | null | undefined; category: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; readingTime: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
                    <Link
                        key={article.slug}
                        href={`/artigos/${article.slug}`}
                        className="group block py-9"
                    >
                        <p className="text-xs uppercase tracking-widest text-[var(--wine)]">
                            {article.category}
                        </p>

                        <h2 className="editorial mt-3 text-3xl transition-colors group-hover:text-[var(--wine)] md:text-4xl">
                            {article.title}
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                            {article.description}
                        </p>

                        <p className="mt-4 text-xs text-[var(--muted)]">
                            {article.readingTime} de leitura
                        </p>
                    </Link>
                ))}
            </div>

            {filtered.length === 0 && (
                <p className="py-12 text-center text-sm text-[var(--muted)]">
                    Nenhuma percepção encontrada.
                    Experimente outra palavra ou categoria.
                </p>
            )}
        </div>
    );
}