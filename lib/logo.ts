export const LOGO_VIEWBOX = "0 0 70 64";

/** Interlocking KK: two slab-serif Ks sharing an overlapping stem. */
export const LOGO_PATHS = [
  "M4 8H16V56H4Z",
  "M2 8H16V11.5H2Z",
  "M2 52.5H16V56H2Z",
  "M16 8L34 8L40 14L22 30L16 23Z",
  "M16 41L22 34L40 50L34 56H16Z",
  "M33 8H45V56H33Z",
  "M45 8L63 8L66 13L51 30L45 23Z",
  "M45 41L51 34L66 51L63 56H45Z",
] as const;

/** Coral inlay in the first K's counter — the one signature detail. */
export const LOGO_ACCENT = "M24 27.2L29.4 32L24 36.8L18.6 32Z";
