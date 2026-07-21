import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-mist-100 dark:bg-ink-900">
      <div className="max-w-4xl mx-auto">
        <SectionHeading path="/education" title="Education" subtitle="What I studied and where." />

        <ol className="relative border-l border-ink-600/50 pl-8 space-y-10">
          {education.map((item, i) => (
            <motion.li
              key={item.degree + item.period}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-signal-teal ring-4 ring-mist-100 dark:ring-ink-900" />
              <span className="font-mono text-xs text-signal-teal">{item.period}</span>
              <h3 className="font-display text-xl font-semibold mt-1 text-ink-900 dark:text-mist-100">
                {item.degree}
              </h3>
              <p className="text-sm text-ink-400 dark:text-mist-500">{item.school}</p>
              <p className="mt-2 text-ink-400 dark:text-mist-500 leading-relaxed">{item.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
