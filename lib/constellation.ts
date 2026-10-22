export type PixelTone = 0 | 1 | 2 | 3 | 4;
export type PixelTier = 1 | 2 | 3;

export type Pixel = {
  x: number;
  y: number;
  size: number;
  tone: PixelTone;
  op: number;
  delay: number;
  live?: number;
  glow?: boolean;
  drift?: number;
  sync?: boolean;
  tier: PixelTier;
};

function mulberry32(seed: number) {
  return function rand() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function noise(x: number, y: number) {
  return (
    Math.sin(x * 1.73 + y * 0.91) * 0.5 +
    Math.sin(x * 0.41 + y * 1.27) * 0.32 +
    Math.sin(x * 2.18 - y * 1.08) * 0.18
  );
}

function pickTone(rand: () => number, brightBias: number): PixelTone {
  const n = rand() + brightBias;
  if (n > 0.97) return 4;
  if (n > 0.9) return 3;
  if (n > 0.72) return 2;
  if (n > 0.4) return 1;
  return 0;
}

function pickTier(x: number, y: number, rand: () => number, edge: "left" | "right"): PixelTier {
  const outer = edge === "left" ? 1 - x / 100 : x / 100;
  if (outer < 0.22 && rand() < 0.4) return 3;
  if (y < 10 || y > 90) return rand() < 0.5 ? 3 : 2;
  if (rand() < 0.32) return 1;
  if (rand() < 0.58) return 2;
  return 3;
}

function makePixel(
  x: number,
  y: number,
  rand: () => number,
  edge: "left" | "right",
  brightBias: number,
): Pixel | null {
  if (x < 1 || x > 99 || y < 2 || y > 98) return null;
  const size = 5 + Math.round(rand() * 4);
  const liveRoll = rand();
  return {
    x: Number(x.toFixed(2)),
    y: Number(y.toFixed(2)),
    size,
    tone: pickTone(rand, brightBias),
    op: Number((0.38 + rand() * 0.5).toFixed(2)),
    delay: Number((0.04 + rand() * 0.85).toFixed(2)),
    live: liveRoll > 0.48 ? Math.floor(rand() * 6) : undefined,
    glow: liveRoll > 0.9,
    drift: liveRoll > 0.68 ? Math.floor(rand() * 6) : undefined,
    tier: pickTier(x, y, rand, edge),
  };
}

function generateLeft(): Pixel[] {
  const rand = mulberry32(2026);
  const pixels: Pixel[] = [];
  const spacing = 6.8;

  for (let row = 0; row < 26; row += 1) {
    for (let col = 0; col < 13; col += 1) {
      const jitterX = (rand() - 0.5) * 3.4;
      const jitterY = (rand() - 0.5) * 2.8;
      const wave = Math.sin(row * 0.33 + col * 0.19) * 5.2;
      const x = 3 + col * spacing + (row % 2) * (spacing * 0.48) + wave * 0.35 + jitterX;
      const y = 5 + row * (spacing * 0.82) + Math.sin(col * 0.47) * 2.1 + jitterY;
      const towardCenter = x / 100;
      const field = noise(col * 0.37, row * 0.29);
      const keep = 0.62 - towardCenter * 0.52 + field * 0.16;
      if (rand() > keep) continue;
      const pixel = makePixel(x, y, rand, "left", towardCenter < 0.35 ? 0.04 : 0);
      if (pixel) pixels.push(pixel);
    }
  }

  const islands = [
    { cx: 18, cy: 22, r: 10, n: 7 },
    { cx: 26, cy: 58, r: 8, n: 6 },
    { cx: 14, cy: 78, r: 9, n: 6 },
  ];
  for (const island of islands) {
    for (let i = 0; i < island.n; i += 1) {
      const a = rand() * Math.PI * 2;
      const d = rand() ** 0.65 * island.r;
      const pixel = makePixel(island.cx + Math.cos(a) * d, island.cy + Math.sin(a) * d, rand, "left", 0.08);
      if (pixel) pixels.push(pixel);
    }
  }

  return markSync(pixels, "left");
}

function generateRight(): Pixel[] {
  const rand = mulberry32(53);
  const pixels: Pixel[] = [];

  const clusters = [
    { cx: 78, cy: 16, r: 12, n: 11 },
    { cx: 88, cy: 34, r: 10, n: 8 },
    { cx: 68, cy: 42, r: 8, n: 5 },
    { cx: 82, cy: 63, r: 13, n: 10 },
    { cx: 92, cy: 78, r: 9, n: 6 },
    { cx: 70, cy: 86, r: 7, n: 4 },
    { cx: 60, cy: 24, r: 6, n: 4 },
  ];

  for (const cluster of clusters) {
    for (let i = 0; i < cluster.n; i += 1) {
      const a = rand() * Math.PI * 2;
      const d = rand() ** 0.55 * cluster.r;
      const pixel = makePixel(cluster.cx + Math.cos(a) * d, cluster.cy + Math.sin(a) * d, rand, "right", 0.06);
      if (pixel) pixels.push(pixel);
    }
  }

  for (let i = 0; i < 12; i += 1) {
    const t = i / 17;
    const x = 58 + t * 28 + Math.sin(t * 3.1) * 6 + (rand() - 0.5) * 3;
    const y = 12 + t * 54 + Math.cos(t * 2.4) * 8 + (rand() - 0.5) * 4;
    if (rand() < 0.28) continue;
    const pixel = makePixel(x, y, rand, "right", 0.02);
    if (pixel) pixels.push(pixel);
  }

  for (let i = 0; i < 6; i += 1) {
    const pixel = makePixel(55 + rand() * 42, 8 + rand() * 84, rand, "right", 0);
    if (pixel) pixels.push(pixel);
  }

  return markSync(pixels, "right");
}

function markSync(pixels: Pixel[], edge: "left" | "right") {
  const candidates = pixels
    .filter((pixel) =>
      edge === "left"
        ? pixel.x > 46 && pixel.y > 38 && pixel.y < 64
        : pixel.x < 54 && pixel.y > 36 && pixel.y < 66,
    )
    .sort((a, b) => (edge === "left" ? b.x - a.x : a.x - b.x));

  candidates.slice(0, 3).forEach((pixel) => {
    pixel.sync = true;
    pixel.live = undefined;
    pixel.drift = undefined;
    pixel.glow = undefined;
  });

  return pixels;
}

export const LEFT_PIXELS = generateLeft();
export const RIGHT_PIXELS = generateRight();
