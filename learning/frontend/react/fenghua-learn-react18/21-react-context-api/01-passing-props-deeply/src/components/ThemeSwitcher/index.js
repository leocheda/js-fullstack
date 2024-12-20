import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
      切换为 {theme === "Light" ? "Dark" : "Light"} 主题
    </button>
  );
}

export default ThemeSwitcher;
