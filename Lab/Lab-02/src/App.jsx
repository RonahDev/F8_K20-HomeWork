import { useEffect } from "react";
import Orchids from "./components/Orchids";
import useTheme from "./hooks/useTheme";
import "./App.css";

function App() {
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div>
      <button onClick={toggleTheme}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      <Orchids />
    </div>
  );
}

export default App;