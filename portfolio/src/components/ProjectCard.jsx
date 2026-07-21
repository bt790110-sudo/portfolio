import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      className="group console-frame rounded-2xl overflow-hidden flex flex-col hover:border-signal-teal hover:-translate-y-1.5 transition-all duration-300"
    >
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-ink-800 to-ink-900 dark:from-ink-700 dark:to-ink-900 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <span className="font-mono text-4xl text-mist-100/20 select-none">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        )}
        {project.featured && (
          <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-signal-amber text-ink-950 text-xs font-medium px-2.5 py-1">
            <FiStar size={12} /> Featured
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-mist-100">
            {project.title}
          </h3>
          <span className="font-mono text-[11px] text-signal-teal shrink-0">{project.category}</span>
        </div>

        <p className="mt-2 text-sm text-ink-400 dark:text-mist-500 leading-relaxed">
          {project.description}
        </p>

        {project.features?.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-sm text-ink-400 dark:text-mist-500">
            {project.features.slice(0, 3).map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-signal-amber">›</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2 py-1 rounded-md bg-ink-900/5 dark:bg-mist-100/5 text-ink-900 dark:text-mist-100"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-ink-600/30 flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink-900 dark:text-mist-100 hover:text-signal-teal transition-colors"
            >
              <FiGithub size={15} /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink-900 dark:text-mist-100 hover:text-signal-teal transition-colors"
            >
              <FiExternalLink size={15} /> Live demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
