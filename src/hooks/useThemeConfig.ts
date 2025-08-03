import { useTheme } from "../context";
import { themeConfig } from "../utils";
import type { Theme } from "../utils/themeConfig";

export const useThemeConfig = () => {
  const { theme } = useTheme();
  return themeConfig[theme as Theme];
};
