import { useEffect, useState } from "react";

export type ScreenSize = "mobile" | "tablet" | "desktop";

export const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(() => {
    if (typeof window === "undefined") return "desktop";
    const width = window.innerWidth;
    return getScreenSize(width);
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

const getScreenSize = (width: number): ScreenSize => {
  if (width < 640) return "mobile"; // < 640px
  if (width < 1024) return "tablet"; // 640px - 1023px
  return "desktop"; // ≥ 1024px
};
