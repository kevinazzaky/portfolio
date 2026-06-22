import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { projects } from "../data/projects";
import { translations } from "../data/translations";

const featuredProjects = projects.filter((project) => project.featured);
const previewProjects = featuredProjects.length ? featuredProjects : projects;

function getText(value, lang) {
  if (typeof value === "string") return value;
  return value?.[lang] || value?.id || value?.en || "";
}

function getGreeting(lang) {
  const greetings = translations[lang].hero.greetings;
  const hour = new Date().getHours();

  if (hour < 11) return greetings.morning;
  if (hour < 15) return greetings.noon;
  if (hour < 18) return greetings.afternoon;
  return greetings.evening;
}

function Hero({ lang }) {
  const currentLang = lang === "en" ? "en" : "id";
  const heroText = translations[currentLang].hero;
  const [roleIndex, setRoleIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const activeProject = previewProjects[projectIndex];

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((current) => (current + 1) % heroText.roles.length);
    }, 2000);

    return () => clearInterval(roleTimer);
  }, [heroText.roles.length]);

  useEffect(() => {
    if (previewProjects.length <= 1) return undefined;

    const projectTimer = setInterval(() => {
      setProjectIndex((current) => (current + 1) % previewProjects.length);
    }, 3500);

    return () => clearInterval(projectTimer);
  }, []);

  if (!activeProject) return null;

  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pb-20 pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-2">
        <ScrollReveal delay={100}>
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
              <span className="h-2 w-2 rounded-full bg-lime-400 shadow-lg shadow-lime-400/50"></span>
              {getGreeting(currentLang)}, {heroText.intro}{" "}
              <span className="font-semibold text-lime-300">{heroText.name}</span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Kevin Azzaky<span className="text-lime-400">.</span>
            </h1>

            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              {heroText.description}
            </p>

            <div className="mt-7 max-w-md border-l-2 border-lime-400/60 pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {heroText.currentFocus}
              </p>
              <p
                key={roleIndex}
                className="project-card-enter mt-1 text-lg font-semibold text-lime-300"
              >
                {heroText.roles[roleIndex]}
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-lime-400 px-7 py-3 font-semibold text-[#050807] transition hover:-translate-y-1 hover:bg-lime-300"
              >
                {heroText.viewProjects}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-7 py-3 font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-lime-400 hover:text-lime-300"
              >
                {heroText.contactMe}
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B120D]/90 shadow-2xl shadow-black/20">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-lime-400"></span>
                <span className="text-sm font-semibold text-slate-300">
                  {heroText.featuredProject}
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                {String(projectIndex + 1).padStart(2, "0")} / {String(previewProjects.length).padStart(2, "0")}
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <div
                key={activeProject.slug}
                className="project-card-enter rounded-[1.5rem] border border-white/10 bg-[#050807] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-xl font-black text-lime-300">
                    {String(projectIndex + 1).padStart(2, "0")}
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-slate-400">
                    {activeProject.category}
                  </span>
                </div>

                <h2 className="mt-7 text-2xl font-black text-white">
                  {getText(activeProject.title, currentLang)}
                </h2>
                <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-slate-400">
                  {getText(activeProject.description, currentLang)}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {activeProject.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-[#0B120D] px-3 py-1.5 text-xs font-semibold text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 h-1 overflow-hidden rounded-full bg-white/10">
                <div
                  key={activeProject.slug}
                  className="project-progress h-full rounded-full bg-lime-400"
                  style={{ animationDuration: "3.5s" }}
                ></div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  {previewProjects.map((project, index) => (
                    <button
                      key={project.slug}
                      type="button"
                      onClick={() => setProjectIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        projectIndex === index
                          ? "w-7 bg-lime-400"
                          : "w-2.5 bg-white/20 hover:bg-lime-400/60"
                      }`}
                      aria-label={getText(project.title, currentLang)}
                    ></button>
                  ))}
                </div>

                <a
                  href="#projects"
                  className="text-sm font-semibold text-lime-300 transition hover:text-white"
                >
                  {heroText.viewAllProjects} -&gt;
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Hero;
