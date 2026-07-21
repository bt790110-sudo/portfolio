import { motion } from "framer-motion";

/**
 * `path` is a route-style label (e.g. "/about") that echoes the nav's
 * anchor links — it's a real cross-reference to the section id, not
 * decoration, which fits a developer's mental model of the page.
 */
export default function SectionHeading({ path, title, subtitle, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      <span className="font-mono text-sm text-signal-teal">
        {path}
      </span>
      <h2 className="font-display mt-2 text-3xl sm:text-4xl font-semibold text-ink-900 dark:text-mist-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-ink-400 dark:text-mist-500 max-w-xl mx-auto md:mx-0" style={align === "center" ? { marginLeft: "auto", marginRight: "auto" } : undefined}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
