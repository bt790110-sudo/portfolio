import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { about } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-mist-100 dark:bg-ink-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeading path="/about" title="About me" subtitle="A short version of my story." />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-400 dark:text-mist-500">
                {p}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 pt-2">
              {about.interests.map((interest) => (
                <span
                  key={interest}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-ink-600 text-ink-900 dark:text-mist-100"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="console-frame rounded-2xl p-6 text-center hover:border-signal-teal transition-colors"
              >
                <div className="font-display text-3xl sm:text-4xl font-semibold text-signal-amber">
                  {stat.number}
                </div>
                <div className="mt-1 text-sm text-ink-400 dark:text-mist-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
