export type PlatformKey = "mobile" | "laptop" | "tablet";
export function platform(key?: PlatformKey): boolean {
  const w = window.innerWidth;

  if (!key) {
    return w <= 1280;
  }

  if (key === "laptop") {
    return  w <= 1280 && w >= 1025;
  }

  if (key === "tablet") {
    return  w <= 1024 && w >= 769;
  }

  return w <= 768 && w >= 320;
}
