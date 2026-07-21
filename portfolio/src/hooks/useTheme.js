import { useEffect, useState } from "react";

export default function useTheme() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;
    const saved = window.localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return { darkMode, setDarkMode };
}
