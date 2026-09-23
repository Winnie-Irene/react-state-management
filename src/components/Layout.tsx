import type { ReactNode } from "react";
import { useTheme } from "../hooks/useTheme";
import { LIGHT_THEME } from "../constants/theme";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();
  const themeClass = theme === LIGHT_THEME ? styles.light : styles.dark;

  return <div className={`${styles.layout} ${themeClass}`}>{children}</div>;
};

export default Layout;