import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { projects } from "../data/projects";
import { translations } from "../data/translations";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

function Projects({ lang }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectText = translations[lang].projects;

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal delay={100}>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">{projectText.label}</p>

              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
                {projectText.title}
              </h2>

              <p className="mt-4 max-w-xl leading-relaxed text-slate-400">
                {projectText.description}
              </p>
            </div>

            <a
              href="https://github.com/kevinazzaky"
              target="_blank"
              rel="noreferrer"
              className="w-fit rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-400/40 hover:text-slate-100"
            >
              {projectText.githubProfile} -&gt;
            </a>
          </div>
        </ScrollReveal>

        <div className="mt-8 space-y-5">
          {featuredProjects.map((project, index) => (
            <ScrollReveal
              key={project.slug}
              delay={index * 120}
              className="w-full"
            >
              <article className="group grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] transition hover:-translate-y-1 hover:border-slate-400/35 hover:bg-white/[0.04] md:grid-cols-[13rem_1fr]">
                <div className="flex items-start justify-between gap-4 border-b border-white/10 bg-[#050807]/60 p-5 md:flex-col md:border-b-0 md:border-r md:p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-400/20 bg-slate-400/10 text-sm font-black text-slate-200">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="flex flex-wrap justify-end gap-2 md:justify-start">
                    <span className="rounded-full border border-indigo-300/20 bg-indigo-400/10 px-2.5 py-1 text-xs font-semibold text-slate-200">
                      {project.status[lang]}
                    </span>
                    <span className="rounded-full border border-white/10 bg-transparent px-2.5 py-1 text-xs font-semibold text-slate-400">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                      {projectText.detail} {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
                      {project.title[lang]}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
                      {project.description[lang]}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-slate-400"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 lg:max-w-[18rem] lg:justify-end">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="rounded-full bg-gradient-to-r from-slate-600 to-indigo-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:from-slate-500 hover:to-indigo-300"
                    >
                      {projectText.detail}
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-400/40 hover:text-slate-100"
                    >
                      {projectText.github} -&gt;
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-400/40 hover:text-slate-100"
                      >
                        {projectText.demo} -&gt;
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
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6">
          <div className="max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-[1.5rem] border border-white/10 bg-[#0B120D] p-5 shadow-2xl shadow-indigo-500/10 sm:max-h-[85vh] sm:rounded-[2rem] sm:p-6">
            <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-5 sm:gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
                  {selectedProject.category}
                </p>

                <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                  {selectedProject.title[lang]}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="shrink-0 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-slate-400/40 hover:text-slate-100"
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
                    className="rounded-full border border-slate-400/20 bg-slate-400/10 px-3 py-1.5 text-sm font-semibold text-slate-300"
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
                className="rounded-full bg-gradient-to-r from-slate-600 to-indigo-400 px-5 py-3 text-sm font-semibold text-white transition hover:from-slate-500 hover:to-indigo-300"
              >
                {projectText.openGithub} -&gt;
              </a>

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-400/30 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-400/10 hover:text-slate-100"
                >
                  {projectText.openDemo} -&gt;
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
