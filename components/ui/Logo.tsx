import { site } from "@/lib/content";
import { LOGO_ACCENT, LOGO_PATHS, LOGO_VIEWBOX } from "@/lib/logo";
import { cx } from "@/lib/utils";

type LogoProps = {
  variant?: "mark" | "nav" | "lockup";
  tone?: "brand" | "mono";
  className?: string;
};

const sizes = {
  mark: { width: 39, height: 36 },
  nav: { width: 39, height: 36 },
  lockup: { width: 46, height: 42 },
} as const;

export function Logo({ variant = "mark", tone = "brand", className }: LogoProps) {
  const size = sizes[variant];
  const showWord = variant === "nav" || variant === "lockup";

  return (
    <span className={cx("logo", `logo-${variant}`, tone === "mono" && "logo-mono", className)}>
      <svg
        className="logo-mark"
        viewBox={LOGO_VIEWBOX}
        width={size.width}
        height={size.height}
        fill="none"
        aria-hidden="true"
        focusable="false"
        shapeRendering="geometricPrecision"
      >
        <g className="logo-k">
          {LOGO_PATHS.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <path className="logo-accent" d={LOGO_ACCENT} />
      </svg>
      {showWord ? (
        <span className="logo-wordmark">
          {variant === "lockup" ? (
            site.name
          ) : (
            <>
              <span className="logo-given">{site.shortName}</span>
              <span className="logo-family"> Kemal</span>
            </>
          )}
        </span>
      ) : null}
    </span>
  );
}
