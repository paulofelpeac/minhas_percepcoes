import Link from "next/link";
import { formatDate } from "@/lib/date";

type ArticleCardProps = {
  slug: string;
  category: string;
  date: string;
  title: string;
  description: string;
  readingTime?: string;
};

export default function ArticleCard({
  slug,
  category,
  date,
  title,
  description,
  readingTime = "5 min",
}: ArticleCardProps) {
  return (
    <Link href={`/artigos/${slug}`} className="block">
      <article
        className="
          group
          grid
          gap-5
          border-b
          border-[var(--line)]
          py-10
          md:grid-cols-[180px_1fr_auto]
        "
      >
        <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--wine)]">
          {category}

          <div className="mt-2 text-[var(--muted)]">
            {formatDate(date)}
          </div>
        </div>

        <div>
          <h3
            className="
              editorial
              text-3xl
              transition-colors
              group-hover:text-[var(--wine)]
              md:text-4xl
            "
          >
            {title}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">
            {description}
          </p>

          <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
            {readingTime} de leitura
          </p>
        </div>

        <div
          className="
            editorial
            self-center
            text-3xl
            transition-transform
            group-hover:translate-x-2
          "
        >
          →
        </div>
      </article>
    </Link>
  );
}