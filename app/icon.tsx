import { ImageResponse } from "next/og";
import { LOGO_ACCENT, LOGO_PATHS, LOGO_VIEWBOX } from "@/lib/logo";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F4EFE6",
        }}
      >
        <svg width="28" height="26" viewBox={LOGO_VIEWBOX} fill="none">
          {LOGO_PATHS.map((d) => (
            <path key={d} d={d} fill="#1B1612" />
          ))}
          <path d={LOGO_ACCENT} fill="#E8836B" />
        </svg>
      </div>
    ),
    size,
  );
}
