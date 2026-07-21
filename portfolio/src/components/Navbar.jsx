import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="shadow-md">

      <div className="flex justify-between items-center px-8 py-5">

        <h1 className="
text-2xl
font-bold
text-blue-600
">

Bikram.dev

</h1>

        {/* Desktop */}

        <ul className="hidden md:flex gap-8">

          <li>Home</li>

          <li>About</li>

          <li>Projects</li>

          <li>Skills</li>

          <li>Contact</li>

        </ul>

        <div className="hidden md:block">
          <ThemeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden flex flex-col gap-5 px-8 pb-6">

          <a>Home</a>

          <a>About</a>

          <a>Projects</a>

          <a>Skills</a>

          <a>Contact</a>

          <ThemeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

        </div>

      )}

    </nav>
  );
}

export default Navbar;