import { ThemeProvider } from "styled-components";
import "./App.css";
import Button from "./components/Button";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme.green}>
      <main className="container">
        <Button />
      </main>
    </ThemeProvider>
  );
}

export default App;
