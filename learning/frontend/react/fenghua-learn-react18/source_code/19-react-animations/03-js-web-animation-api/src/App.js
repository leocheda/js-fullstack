import { useEffect, useRef } from "react";
import "./App.css";
function App() {
  const linkRef = useRef(null);

  useEffect(() => {
    if (linkRef.current !== null) {
      linkRef.current.animate(
        [
          {
            opacity: 1,
          },
          {
            opacity: 0.5,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1000,
          iterations: Infinity,
        }
      );
    }
  }, []);

  return (
    <main className="container">
      <a href="#" ref={linkRef}>
        超链接
      </a>
    </main>
  );
}

export default App;
