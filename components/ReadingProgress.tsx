
"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollable =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (scrollable <= 0) {
        setProgress(100);
        return;
      }

      const percentage =
        (window.scrollY / scrollable) * 100;

      setProgress(
        Math.min(100, Math.max(0, percentage))
      );
    }

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-[3px]"
    >
      <div
        className="h-full bg-[var(--wine)] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
