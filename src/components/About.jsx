import ScrollReveal from "./ScrollReveal";
import { translations } from "../data/translations";

function About({ lang }) {
  const aboutText = translations[lang].about;

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <ScrollReveal delay={100}>
            <div>
              <p className="section-label">
                {aboutText.label}
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">
                {aboutText.title}
              </h2>
            </div>
          </ScrollReveal>

          <div className="glass-panel rounded-[2rem] p-6 md:p-8">
            {aboutText.paragraphs.map((paragraph, index) => (
              <ScrollReveal key={paragraph} delay={index * 120}>
                <p className="mb-5 leading-relaxed text-slate-400">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {aboutText.stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 120}>
                  <div className="stat-card rounded-[1.5rem] p-5">
                    <h3 className="text-3xl font-black text-lime-400">
                      {stat.value}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
