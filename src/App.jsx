import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // Set initial theme based on system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    // Apply theme class to <html>
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen font-nunito bg-[#fdfdfd] text-gray-900 flex items-center justify-center p-4 dark:bg-[#1a1c2c] dark:text-white transition-colors duration-500">
      {/* Theme toggle button */}
      <button
        type="button"
        onClick={handleThemeSwitch}
        className={`fixed z-10 right-3 top-3 sm:right-6 sm:top-6 text-lg p-2 rounded-full transition-transform duration-300 hover:scale-110 ${
          theme === "dark"
            ? "bg-[#bae6fd] text-black hover:bg-[#7dd3fc]"
            : "bg-[#fde68a] text-black hover:bg-[#fcd34d]"
        }`}
      >
        {theme === "dark" ? "🌙" : "🌞"}
      </button>

      {/* Main container */}
      <div className="w-full max-w-2xl bg-[#fefefe] dark:bg-[#32344a] border border-gray-200 dark:border-[#475569] rounded-2xl p-6 shadow-lg transition-all duration-500">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
