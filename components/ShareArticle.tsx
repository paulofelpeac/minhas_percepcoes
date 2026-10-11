
"use client";

import { useState } from "react";

type Props = {
  title: string;
};

export default function ShareArticle({ title }: Props) {
  const [copied, setCopied] = useState(false);

  function shareWhatsApp() {
    const text = `${title}\n${window.location.href}`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(
        window.location.href
      );

      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-5">
      <button
        type="button"
        onClick={shareWhatsApp}
        className="cursor-pointer text-sm text-[var(--wine)] hover:underline"
      >
        Compartilhar no WhatsApp ↗
      </button>

      <button
        type="button"
        onClick={copyLink}
        className="cursor-pointer text-sm text-[var(--wine)] hover:underline"
      >
        {copied ? "Link copiado ✓" : "Copiar link"}
      </button>
    </div>
  );
}
