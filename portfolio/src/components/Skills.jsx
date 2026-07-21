import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-ink-800/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading path="/skills" title="Skills & tools" subtitle="What I reach for when building." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="console-frame rounded-2xl p-6 hover:border-signal-teal transition-colors"
            >
              <h3 className="font-mono text-sm text-signal-teal mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full bg-ink-900/5 dark:bg-mist-100/5 text-ink-900 dark:text-mist-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
