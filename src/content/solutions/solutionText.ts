import { createElement, Fragment } from "react";
import Link from "next/link";

type SolutionText = string | (string | { text: string; href: string })[];

// Preserve paragraph spacing and internal links in solution-page content files.
export function solutionText(text: SolutionText) {
  if (typeof text === "string") return text;
  return text.map((part, index) => typeof part === "string"
    ? createElement(Fragment, { key: index }, part)
    : createElement(Link, {
        key: index,
        href: part.href,
        className: "font-semibold text-[var(--color-accent)] underline decoration-[var(--color-accent)]/35 underline-offset-4 hover:text-[var(--color-accent-strong)]",
      }, part.text));
}

export function solutionParagraphs(items: SolutionText[]) {
  return items.map((item, index) => createElement("span", {
    key: index,
    className: index > 0 ? "mt-4 block" : "block",
  }, solutionText(item)));
}
