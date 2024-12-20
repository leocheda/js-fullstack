import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <main className="container">
        <div>
          <h1>主题切换</h1>
          <ThemeSwitcher />
          <DisplayTheme />
        </div>
      </main>
    </ThemeProvider>
  );
}

function DisplayTheme() {
  const { theme } = useTheme();
  return <p>当前主题：{theme}</p>;
}

export default App;
