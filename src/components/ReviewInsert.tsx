import React from "react";

type ReviewInsertProps = {
  name: string;
  text: string;
  className?: string;
};

const ReviewInsert = ({ name, text, className = "" }: ReviewInsertProps) => {
  const articleClassName = [
    "rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.05)] sm:p-6",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article key={name} className={articleClassName}>
      <div
        className="text-sm font-semibold tracking-[0.12em] text-amber-500"
        aria-label="Five star review"
      >
        ★★★★★
      </div>
      <p className="mt-3 font-semibold text-[var(--color-ink)]">{name}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
        “{text}”
      </p>
    </article>
  );
};

export default ReviewInsert;
