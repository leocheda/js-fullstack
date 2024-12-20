import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("Light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main className="container">
        <div>
          <h1>主题切换</h1>
          <ThemeSwitcher />
          <p>当前主题：{theme}</p>
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
