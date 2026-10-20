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
    if (external || download) {
      return (
        <a
          href={href}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          download={download || undefined}
          data-cursor="Open"
        >
          {inner}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} data-cursor="Open">
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      data-cursor="Open"
    >
      {inner}
    </button>
  );
}
