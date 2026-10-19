import { cx } from "@/lib/utils";

export function SplitText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={cx("split", className)}>
      <span>
        <span>{text}</span>
        <span aria-hidden="true">{text}</span>
      </span>
    </span>
  );
}
