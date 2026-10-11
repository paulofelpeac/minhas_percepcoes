import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const articlesDirectory = path.join(
  process.cwd(),
  "content",
  "artigos"
);

export type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  published: boolean;
  readingTime: string;
  content: string;
  coverImage?: string;
  coverAlt?: string;
};

function findMdxFiles(directory: string): string[] {
  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  return entries.flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return findMdxFiles(fullPath);
    }

    if (entry.name.endsWith(".mdx")) {
      return [fullPath];
    }

    return [];
  });
}

export function getAllArticles(): Article[] {
  const files = findMdxFiles(articlesDirectory);

  const articles = files.map((filePath) => {
    const file = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(file);

    const stats = readingTime(content);

    return {
      slug: data.slug,
      title: data.title,
      date: data.date,
      category: data.category,
      description: data.description,
      published: data.published ?? false,
      readingTime: Math.ceil(stats.minutes) + " min",
      coverImage: data.coverImage,
      coverAlt: data.coverAlt,
      content,
    };
  });

  return articles
    .filter((article) => article.published)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );
}

export function getArticleBySlug(
  slug: string
): Article | undefined {
  return getAllArticles().find(
    (article) => article.slug === slug
  );
}