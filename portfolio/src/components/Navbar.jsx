import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { navLinks, profile } from "../data/portfolioData";
import useActiveSection from "../hooks/useActiveSection";

// Computed once at module load so useActiveSection gets a stable array
// reference instead of a new one on every render.
const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "console-frame" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-display font-semibold text-lg text-ink-900 dark:text-mist-100 flex items-center gap-2"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal-amber text-ink-950 font-mono text-sm font-bold">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name.split(" ")[0]}.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`transition-colors ${
                    isActive
                      ? "text-signal-amber"
                      : "text-ink-400 dark:text-mist-500 hover:text-signal-teal"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={profile.resumeUrl}
            download
            className="font-mono text-sm text-ink-400 dark:text-mist-500 hover:text-signal-teal transition-colors"
          >
            Resume
          </a>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-600 text-ink-900 dark:text-mist-100"
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden console-frame border-t px-6 py-6 flex flex-col gap-5 font-mono text-base">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-ink-900 dark:text-mist-100 hover:text-signal-teal transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            onClick={() => setMenuOpen(false)}
            className="text-signal-amber"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
