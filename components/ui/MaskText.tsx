export function MaskText({
  text,
  as: Tag = "span",
  delay = 0,
  className,
}: {
  text: string;
  as?: "span" | "h1" | "h2" | "p";
  delay?: number;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <Tag id={Tag === "h1" ? "hero-title" : undefined} className={className}>
      {words.map((word, index) => (
        <span className="mask-word" key={`${word}-${index}`}>
          <span style={{ animationDelay: `${delay + index * 70}ms` }}>{word}</span>
        </span>
      ))}
    </Tag>
  );
}
