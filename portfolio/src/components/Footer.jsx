import { FiArrowUp } from "react-icons/fi";
import SocialLinks from "./SocialLinks";
import { profile, navLinks } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink-900 text-mist-500 px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-lg font-semibold text-mist-100">{profile.name}</p>
          <p className="mt-2 text-sm leading-relaxed">{profile.title}</p>
        </div>

        <div>
          <p className="font-mono text-xs text-signal-teal mb-3">Quick links</p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-signal-teal transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs text-signal-teal mb-3">Elsewhere</p>
          <SocialLinks />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-ink-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>© {year} {profile.name}. All rights reserved.</p>
        <a
          href="#home"
          className="inline-flex items-center gap-1.5 hover:text-signal-teal transition-colors"
        >
          Back to top <FiArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}
