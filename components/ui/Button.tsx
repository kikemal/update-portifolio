import Link from "next/link";
import { cx } from "@/lib/utils";

type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  ghost?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  download?: boolean;
  external?: boolean;
};

export function Button({
  href,
  children,
  className,
  ghost,
  type = "button",
  disabled,
  onClick,
  download,
  external,
}: Props) {
  const classes = cx("btn", ghost && "btn-ghost", disabled && "is-disabled", className);
  const inner = (
    <>
      <span>{children}</span>
      <span className="arrow" aria-hidden="true">
        →
      </span>
    </>
  );

  if (href && !disabled) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noreferrer">
          {inner}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} download={download}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {inner}
    </button>
  );
}
