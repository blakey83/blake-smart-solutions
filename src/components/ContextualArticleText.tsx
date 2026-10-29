import Link from "next/link";

// Add a link to an existing phrase without changing the surrounding article copy.
export function ContextualArticleText({
  text,
  links,
}: {
  text: string;
  links: { phrase: string; href: string }[];
}) {
  const match = links.find(({ phrase }) => text.includes(phrase));
  if (!match) return text;

  const position = text.indexOf(match.phrase);
  return (
    <>
      {text.slice(0, position)}
      <Link href={match.href} className="underline">
        {match.phrase}
      </Link>
      {text.slice(position + match.phrase.length)}
    </>
  );
}
