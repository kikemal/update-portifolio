import { existsSync } from "fs";
import path from "path";
import type { ProjectMedia } from "./content";

export function publicFileExists(src?: string) {
  if (!src) return false;
  return existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
}

export function usableMedia(items: ProjectMedia[]) {
  return items.filter((item) => {
    if (item.type === "placeholder") return true;
    return publicFileExists(item.src);
  });
}
