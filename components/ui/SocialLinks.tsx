import { socials } from "@/lib/content";

export function SocialIcon({ id }: { id: string }) {
  const props = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (id) {
    case "github":
      return (
        <svg {...props}>
          <path
            d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.55 1.43.21 2.49.1 2.75.64.72 1.03 1.64 1.03 2.76 0 3.96-2.34 4.82-4.57 5.08.36.32.68.95.68 1.92v2.85c0 .27.18.59.69.49A10.17 10.17 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
            fill="currentColor"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...props}>
          <path
            d="M6.54 21H3.56V8.86h2.98V21ZM5.04 7.4A1.73 1.73 0 1 1 5.05 3.94 1.73 1.73 0 0 1 5.04 7.4ZM21 21h-2.97v-6.52c0-1.55-.03-3.55-2.16-3.55-2.17 0-2.5 1.69-2.5 3.44V21H10.4V8.86h2.85v1.66h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.57V21Z"
            fill="currentColor"
          />
        </svg>
      );
    case "telegram":
      return (
        <svg {...props}>
          <path
            d="M21.5 4.3c.2.17.27.43.2.67L18.4 20.1c-.1.4-.5.56-.86.4l-4.78-2.42-2.3 2.22c-.26.25-.67.18-.8-.15l-.86-2.32-4.4-1.4c-.5-.16-.52-.86-.03-1.05L20.7 4.18c.26-.1.56-.04.8.12ZM9.7 13.86l.52 3.5 1.16-1.12 6.3-6.04-7.98 3.66Z"
            fill="currentColor"
          />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...props}>
          <path
            d="M19.2 4.8A9.9 9.9 0 0 0 2.7 17.1L2 22l5-1.3A9.9 9.9 0 1 0 19.2 4.8ZM12.1 20.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.1.81.83-3.03-.2-.31A8.2 8.2 0 1 1 12.1 20.2Zm4.5-6.14c-.24-.12-1.46-.72-1.69-.8-.22-.09-.39-.12-.55.12s-.64.8-.78.97c-.15.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.01-.39.1-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.34-.76-1.84-.2-.48-.4-.41-.55-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.06s.88 2.39 1 2.55c.12.17 1.74 2.66 4.22 3.73 2.48 1.07 2.48.71 2.93.67.45-.03 1.45-.59 1.65-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28Z"
            fill="currentColor"
          />
        </svg>
      );
    case "x":
      return (
        <svg {...props}>
          <path
            d="M17.8 3H20.8L13.9 10.9 22 21h-5.5l-4.3-5.6L7.1 21H4L11.4 12.5 3.5 3h5.6l3.9 5.1L17.8 3Zm-1 16.2h1.6L7.4 4.7H5.7l11.1 14.5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg {...props}>
          <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...props}>
          <path
            d="M14.2 21v-7.4h2.5l.38-2.9H14.2V8.8c0-.8.22-1.35 1.38-1.35H17.3V4.8c-.4-.05-1.38-.13-2.5-.13-2.5 0-4.2 1.52-4.2 4.32v1.7H8.2v2.9h2.4V21h3.6Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path
            d="M19.4 4.7a7 7 0 0 0-11.6 6.6L3 20.4l9.3-4.4a7 7 0 0 0 7.1-11.3Z"
            stroke="currentColor"
            strokeWidth="1.8"
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
            rel="noopener noreferrer"
            aria-label={`${item.label} (opens in a new tab)`}
          >
            <SocialIcon id={item.id} />
            {item.label}
          </a>
        ) : (
          <span
            key={item.id}
            className="social-pill is-pending"
            title={`Add your ${item.label} URL in lib/content.ts`}
          >
            <SocialIcon id={item.id} />
            {item.label} · add URL
          </span>
        ),
      )}
    </div>
  );
}
