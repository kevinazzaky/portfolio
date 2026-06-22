import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { projects } from "../data/projects";
import { translations } from "../data/translations";

const featuredProjects = projects.filter((project) => project.featured);
const previewProjects =
  featuredProjects.length > 0 ? featuredProjects : projects;

function getSafeLang(lang) {
  if (lang === "id" || lang === "en") return lang;
  if (lang?.lang === "id" || lang?.lang === "en") return lang.lang;
  return "id";
}

function getText(value, lang) {
  if (typeof value === "string") return value;
  if (value && typeof value === "object") {
    return value[lang] || value.id || value.en || "";
  }
  return "";
}

function getGreeting(lang) {
  const currentLang = getSafeLang(lang);
  const greetings =
    translations[currentLang]?.hero?.greetings ||
    translations.id.hero.greetings;

  const hour = new Date().getHours();

  if (hour < 11) return greetings.morning;
  if (hour < 15) return greetings.noon;
  if (hour < 18) return greetings.afternoon;
  return greetings.evening;
}

function Hero({ lang }) {
  const currentLang = getSafeLang(lang);

  const [roleIndex, setRoleIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);

  const heroText = translations[currentLang]?.hero || translations.id.hero;
  const roles = heroText.roles || [];

  const activeProject = previewProjects[projectIndex] || previewProjects[0];
  const greeting = getGreeting(currentLang);

  useEffect(() => {
    if (roles.length <= 1) return;

    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    if (previewProjects.length <= 1) return;

    const interval = setInterval(() => {
      setProjectIndex((prev) => (prev + 1) % previewProjects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!activeProject) {
    return null;
  }

  return (
    <section id="home" className="hero-orbits relative min-h-screen px-6 pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <ScrollReveal delay={100}>
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <span className="h-2.5 w-2.5 rounded-full bg-lime-400 shadow-lg shadow-lime-400/50"></span>
              {greeting}, {heroText.intro}{" "}
              <span className="font-semibold text-lime-300">
                {heroText.name}
              </span>
            </div>

            <p className="section-label mb-4">
              {heroText.badge}
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              {heroText.title1}
              <span className="block text-lime-400">{heroText.title2}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              {heroText.description}
            </p>

            <div className="mt-6 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-lime-400/30 text-lime-300">
                ⌁
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  {heroText.currentFocus}
                </p>

                <p className="mt-1 font-semibold text-lime-300">
                  {roles[roleIndex] || "Web Development"}
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {(heroText.stacks || []).map((stack) => (
                <span
                  key={stack}
                  className="rounded-full border border-white/10 bg-[#0B120D]/90 px-3 py-1.5 text-xs font-semibold text-slate-300"
                >
                  {stack}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-lime-400 px-7 py-3 font-semibold text-[#050807] shadow-lg shadow-lime-500/20 transition hover:-translate-y-1 hover:bg-lime-300"
              >
                {heroText.viewProjects} ↗
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 px-7 py-3 font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-lime-400 hover:text-lime-300"
              >
                {heroText.contactMe} ↗
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div className="flex justify-center md:justify-end">
            <div className="float-soft w-full max-w-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B120D]/90 shadow-2xl shadow-lime-500/5">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-lime-400"></span>
                  <span className="text-sm font-semibold text-slate-300">
                    {heroText.featuredProject}
                  </span>
                </div>

                <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs font-semibold text-lime-300">
                  {heroText.autoPreview}
                </span>
              </div>

              <div
                key={
                  activeProject.slug ||
                  getText(activeProject.title, currentLang)
                }
                className="project-card-enter p-6"
              >
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#050807] p-6">
                  <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-lime-400/10 blur-2xl"></div>

                  <div className="relative">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-2xl font-black text-lime-300">
                        {String(projectIndex + 1).padStart(2, "0")}
                      </div>

                      <span className="rounded-full bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-400">
                        {getText(activeProject.status, currentLang)}
                      </span>
                    </div>

                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
                      {activeProject.category}
                    </p>

                    <h3 className="text-2xl font-black leading-tight text-white">
                      {getText(activeProject.title, currentLang)}
                    </h3>

                    <p className="mt-4 min-h-[72px] text-sm leading-relaxed text-slate-400">
                      {getText(activeProject.description, currentLang)}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {activeProject.tools?.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-white/10 bg-[#0B120D] px-3 py-1.5 text-xs font-semibold text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    key={
                      activeProject.slug ||
                      getText(activeProject.title, currentLang)
                    }
                    className="project-progress h-full rounded-full bg-lime-400"
                  ></div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <div className="flex gap-2">
                    {previewProjects.map((project, index) => (
                      <button
                        key={
                          project.slug || getText(project.title, currentLang)
                        }
                        onClick={() => setProjectIndex(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          projectIndex === index
                            ? "w-8 bg-lime-400"
                            : "w-2.5 bg-white/20 hover:bg-lime-400/60"
                        }`}
                        aria-label={getText(project.title, currentLang)}
                      ></button>
                    ))}
                  </div>

                  <a
                    href="#projects"
                    className="rounded-full border border-lime-400/40 px-4 py-2 text-sm font-semibold text-lime-300 transition hover:bg-lime-400 hover:text-[#050807]"
                  >
                    {heroText.viewAllProjects}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Hero;
