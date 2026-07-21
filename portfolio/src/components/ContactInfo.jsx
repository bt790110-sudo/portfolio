import { FiMail, FiMessageCircle, FiMapPin, FiPhone } from "react-icons/fi";
import SocialLinks from "./SocialLinks";
import { contactChannels } from "../data/portfolioData";

const iconMap = {
  email: FiMail,
  whatsapp: FiMessageCircle,
  location: FiMapPin,
  phone: FiPhone,
};

export default function ContactInfo() {
  return (
    <div className="console-frame rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between">
      <div>
        <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-mist-100">
          Let's talk
        </h3>
        <p className="mt-2 text-ink-400 dark:text-mist-500 leading-relaxed">
          Have a project, an opportunity, or just want to say hi? Reach out through
          whichever channel is easiest for you.
        </p>

        <ul className="mt-6 space-y-4">
          {contactChannels.map((channel) => {
            const Icon = iconMap[channel.icon];
            const content = (
              <>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900/5 dark:bg-mist-100/5 text-signal-teal shrink-0">
                  <Icon size={16} />
                </span>
                <span>
                  <span className="block font-mono text-xs text-ink-400 dark:text-mist-500">
                    {channel.label}
                  </span>
                  <span className="block text-sm text-ink-900 dark:text-mist-100">
                    {channel.value}
                  </span>
                </span>
              </>
            );

            return (
              <li key={channel.label}>
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 hover:text-signal-teal transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-center gap-3">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-8 pt-6 border-t border-ink-600/30">
        <span className="block font-mono text-xs text-ink-400 dark:text-mist-500 mb-3">
          Find me elsewhere
        </span>
        <SocialLinks />
      </div>
    </div>
  );
}
