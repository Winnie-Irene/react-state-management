import { useTheme } from "../hooks/useTheme";
import { LIGHT_THEME } from "../constants/theme";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const themeClass = theme === LIGHT_THEME ? styles.light : styles.dark;
  const nextThemeLabel = theme === LIGHT_THEME ? "Dark" : "Light";

  return (
    <nav className={`${styles.navbar} ${themeClass}`}>
      <span className={styles.brand}>React App</span>
      <button type="button" className={styles.toggleButton} onClick={toggleTheme}>
        Switch to {nextThemeLabel} Mode
      </button>
    </nav>
  );
};

export default Navbar;