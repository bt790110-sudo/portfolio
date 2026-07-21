import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white dark:bg-ink-800/40">
      <div className="max-w-4xl mx-auto">
        <SectionHeading path="/experience" title="Experience" subtitle="Where I've worked and what I did there." />

        <ol className="relative border-l border-ink-600/50 pl-8 space-y-10">
          {experience.map((item, i) => (
            <motion.li
              key={item.role + item.period}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-signal-amber ring-4 ring-mist-100 dark:ring-ink-900" />
              <span className="font-mono text-xs text-signal-teal">{item.period}</span>
              <h3 className="font-display text-xl font-semibold mt-1 text-ink-900 dark:text-mist-100">
                {item.role}
              </h3>
              <p className="text-sm text-ink-400 dark:text-mist-500">{item.org}</p>
              <p className="mt-2 text-ink-400 dark:text-mist-500 leading-relaxed">{item.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
