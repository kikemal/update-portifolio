import { socials } from "@/lib/content";

function Icon({ id }: { id: string }) {
  const props = {
    width: 14,
    height: 14,
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (id) {
    case "github":
      return (
        <svg {...props}>
          <path
            d="M8 1.5A6.5 6.5 0 0 0 6.5 14c.33.06.45-.14.45-.32v-1.12c-1.84.4-2.23-.79-2.23-.79-.3-.76-.73-.96-.73-.96-.6-.41.04-.4.04-.4.67.05 1.02.69 1.02.69.59 1 1.55.71 1.93.54.06-.43.23-.71.42-.88-1.47-.17-3.02-.74-3.02-3.28 0-.73.26-1.32.68-1.79-.07-.17-.3-.85.06-1.77 0 0 .56-.18 1.83.67a6.3 6.3 0 0 1 3.33 0c1.27-.85 1.83-.67 1.83-.67.36.92.13 1.6.07 1.77.42.47.68 1.06.68 1.79 0 2.55-1.55 3.11-3.03 3.27.24.21.45.61.45 1.23v1.83c0 .18.12.39.46.32A6.5 6.5 0 0 0 8 1.5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...props}>
          <path
            d="M4.2 14H2.1V5.7h2.1V14ZM3.15 4.7A1.22 1.22 0 1 1 3.16 2.3a1.22 1.22 0 0 1 0 2.4ZM14 14h-2.1V9.8c0-1-.03-2.28-1.39-2.28-1.4 0-1.61 1.09-1.61 2.21V14H6.8V5.7h2.02v1.13h.03c.28-.53 1-1.1 2.05-1.1 2.2 0 2.6 1.44 2.6 3.32V14Z"
            fill="currentColor"
          />
        </svg>
      );
    case "x":
      return (
        <svg {...props}>
          <path
            d="M12.8 2H15L10.2 7.46 15.8 14h-4.04L8.5 9.9 4.7 14H2.5l5.14-5.84L2 2h4.14L8.9 5.7 12.8 2Zm-.7 10.8h1.12L4.96 3.14H3.76L12.1 12.8Z"
            fill="currentColor"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg {...props}>
          <rect x="2.2" y="2.2" width="11.6" height="11.6" rx="3.2" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="8" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="11.4" cy="4.6" r="0.7" fill="currentColor" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...props}>
          <path
            d="M9.6 14V8.7h1.8l.27-2.1H9.6V5.3c0-.6.17-1 .97-1H11.8V2.3C11.5 2.26 10.8 2.2 10 2.2 8.2 2.2 7 3.3 7 5.1v1.5H5.2v2.1H7V14h2.6Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path
            d="M12.7 3.1a4.6 4.6 0 0 0-7.7 4.4L2 13.6l6.2-2.9a4.6 4.6 0 0 0 4.5-7.6Z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export function SocialLinks() {
  return (
    <div className="social-row">
      {socials.map((item) =>
        item.url ? (
          <a
            key={item.id}
            className="social-pill"
            href={item.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${item.label} (opens in a new tab)`}
          >
            <Icon id={item.id} />
            {item.label}
          </a>
        ) : (
          <span
            key={item.id}
            className="social-pill is-pending"
            title={`Add your ${item.label} URL in lib/content.ts`}
          >
            <Icon id={item.id} />
            {item.label} · add URL
          </span>
        ),
      )}
    </div>
  );
}
