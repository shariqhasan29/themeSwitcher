export type Theme = "theme1" | "theme2" | "theme3";

interface ThemeConfig {
  name: string;
  description: string;
  showHero: boolean;
  showProducts: boolean;
  layout: "default" | "grid" | "minimal";
}

export const themeConfig: Record<Theme, ThemeConfig> = {
  theme1: {
    name: "Minimalist Layout",
    description: " with simple sans-serif font",
    showHero: true,
    showProducts: false,
    layout: "default",
  },
  theme2: {
    name: "Dark Theme",
    description: "Sophisticated dark interface and side bar layout",
    showHero: true,
    showProducts: false,
    layout: "grid",
  },
  theme3: {
    name: "Colorful Playful Theme",
    description: "Colorful and playful experience",
    showHero: false,
    showProducts: true,
    layout: "default",
  },
};
