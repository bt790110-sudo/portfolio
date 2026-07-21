import { FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiInstagram, FiLink } from "react-icons/fi";
import { socialLinks } from "../data/portfolioData";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  facebook: FiFacebook,
  instagram: FiInstagram,
};

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon] ?? FiLink;
        return (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-600 text-ink-900 dark:text-mist-100 hover:border-signal-teal hover:text-signal-teal hover:-translate-y-0.5 transition-all duration-200"
            >
              <Icon size={17} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
