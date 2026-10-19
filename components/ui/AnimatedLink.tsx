import Link from "next/link";
import { cx } from "@/lib/utils";
import { SplitText } from "./SplitText";

type Props = {
  href: string;
  children: string;
  className?: string;
  split?: boolean;
  external?: boolean;
};

export function AnimatedLink({
  href,
  children,
  className,
  split = false,
  external = false,
}: Props) {
  const classes = cx(split ? undefined : "ink", className);
  const content = split ? <SplitText text={children} /> : children;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
