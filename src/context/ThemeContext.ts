import { createContext } from "react";
import { LIGHT_THEME, DARK_THEME } from "../constants/theme";

export type Theme = typeof LIGHT_THEME | typeof DARK_THEME;

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);