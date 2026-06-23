import ScrollReveal from "./ScrollReveal";
import { translations } from "../data/translations";

function About({ lang }) {
  const aboutText = translations[lang].about;

  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <ScrollReveal delay={100}>
            <div>
              <p className="section-label">{aboutText.label}</p>

              <h2 className="mt-5 text-2xl font-black leading-snug tracking-tight text-white md:text-3xl">
                {aboutText.title}
              </h2>
            </div>
          </ScrollReveal>

          <div className="sm:border-l sm:border-white/10 sm:pl-6 md:pl-8">
            {aboutText.paragraphs.map((paragraph, index) => (
              <ScrollReveal key={paragraph} delay={index * 120}>
                <p className="mb-5 leading-7 text-slate-400">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}

            <div className="mt-8 grid grid-cols-3 border-t border-white/10 pt-6">
              {aboutText.stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 120}>
                  <div className={index > 0 ? "border-l border-white/10 pl-5" : ""}>
                    <h3 className="text-2xl font-black text-lime-400">
                      {stat.value}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                      {stat.label}
                    </p>
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
