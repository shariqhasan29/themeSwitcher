import { useTheme } from "../../../context";
import type { Theme } from "../../../utils/themeConfig";
import { DropdownMenu } from "../../ui/dropdownMenu";

const themeOptions = [
  { value: "theme1", label: "Theme 1 (Minimal)" },
  { value: "theme2", label: "Theme 2 (Dark)" },
  { value: "theme3", label: "Theme 3 (Playful)" },
];

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu
      options={themeOptions}
      value={theme}
      onChange={(value) => setTheme(value as Theme)}
    />
  );
};
