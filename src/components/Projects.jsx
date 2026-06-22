import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { projects } from "../data/projects";
import { translations } from "../data/translations";

const categories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

function Projects({ lang }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projectText = translations[lang].projects;

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal delay={100}>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">
                {projectText.label}
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                {projectText.title}
              </h2>

              <p className="mt-5 max-w-2xl leading-relaxed text-slate-400">
                {projectText.description}
              </p>
            </div>

            <a
              href="https://github.com/kevinazzaky"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-lime-400/40 px-5 py-3 text-sm font-semibold text-lime-300 transition hover:bg-lime-400 hover:text-[#050807]"
            >
              {projectText.githubProfile} ↗
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-lime-400 text-[#050807]"
                    : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-lime-400/40 hover:text-lime-300"
                }`}
              >
                {category === "All" ? projectText.all : category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B120D]/90 transition hover:-translate-y-2 hover:border-lime-400/40 hover:shadow-xl hover:shadow-lime-500/5">
                <div className="relative border-b border-white/10 bg-[#050807] p-6">
                  <div className="absolute right-[-40px] top-[-40px] h-28 w-28 rounded-full bg-lime-400/10 blur-2xl transition group-hover:bg-lime-400/20"></div>

                  <div className="relative flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-xl font-black text-lime-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-semibold text-lime-300">
                          {project.status[lang]}
                        </span>
                      )}

                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-400">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-black leading-tight text-white">
                    {project.title[lang]}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description[lang]}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tools.slice(0, 4).map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-[#050807] px-3 py-1.5 text-xs font-semibold text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-[#050807] transition hover:bg-lime-300"
                    >
                      {projectText.detail}
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-lime-400/40 hover:text-lime-300"
                    >
                      {projectText.github} ↗
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-lime-400/40 px-5 py-2.5 text-sm font-semibold text-lime-300 transition hover:bg-lime-400 hover:text-[#050807]"
                      >
                        {projectText.demo} ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm">
          <div className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0B120D] p-6 shadow-2xl shadow-lime-500/10">
            <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
                  {selectedProject.category}
                </p>

                <h3 className="mt-3 text-3xl font-black text-white">
                  {selectedProject.title[lang]}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-lime-400/40 hover:text-lime-300"
              >
                {projectText.close}
              </button>
            </div>

            <p className="mt-6 leading-relaxed text-slate-400">
              {selectedProject.detail[lang]}
            </p>

            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-slate-500">
                {projectText.toolsUsed}:
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1.5 text-sm font-semibold text-lime-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-lime-400 px-5 py-3 text-sm font-semibold text-[#050807] transition hover:bg-lime-300"
              >
                {projectText.openGithub} ↗
              </a>

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-lime-400/40 px-5 py-3 text-sm font-semibold text-lime-300 transition hover:bg-lime-400 hover:text-[#050807]"
                >
                  {projectText.openDemo} ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
