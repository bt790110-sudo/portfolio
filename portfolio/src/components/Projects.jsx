import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.category))],
    []
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesQuery =
      query.trim() === "" ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="projects" className="py-24 px-6 bg-mist-100 dark:bg-ink-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeading path="/projects" title="Selected projects" subtitle="A few things I've built recently." />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "bg-signal-amber border-signal-amber text-ink-950"
                    : "border-ink-600 text-ink-400 dark:text-mist-500 hover:border-signal-teal hover:text-signal-teal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <label className="relative w-full sm:w-56">
            <span className="sr-only">Search projects</span>
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400 dark:text-mist-500" size={15} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              className="w-full pl-9 pr-3 py-2 rounded-full border border-ink-600 bg-transparent text-sm text-ink-900 dark:text-mist-100 placeholder:text-ink-400 dark:placeholder:text-mist-500 focus:outline-none focus:border-signal-teal transition-colors"
            />
          </label>
        </div>

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        ) : (
          <p className="text-center text-ink-400 dark:text-mist-500 py-16 font-mono text-sm">
            No projects match "{query}" in {activeCategory}.
          </p>
        )}
      </div>
    </section>
  );
}
