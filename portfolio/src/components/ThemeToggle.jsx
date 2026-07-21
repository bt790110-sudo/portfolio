import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={darkMode}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-ink-600 text-ink-900 dark:text-mist-100 hover:border-signal-teal hover:text-signal-teal transition-colors"
    >
      {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
}
