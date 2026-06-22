import ScrollReveal from "./ScrollReveal";
import { translations } from "../data/translations";

function Contact({ lang }) {
  const contactText = translations[lang].contact;

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal delay={100}>
          <div className="glass-panel contact-panel overflow-hidden rounded-[2rem] p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="section-label">
                  {contactText.label}
                </p>

                <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight md:text-5xl">
                  {contactText.title}
                </h2>

                <p className="mt-5 max-w-2xl leading-relaxed text-slate-400">
                  {contactText.description}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:kevinazzaky1@gmail.com"
                  className="rounded-2xl border border-lime-400/40 bg-lime-400 px-5 py-4 text-center font-semibold text-[#050807] transition hover:bg-lime-300"
                >
                  {contactText.email} ↗
                </a>

                <a
                  href="https://github.com/kevinazzaky"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 px-5 py-4 text-center font-semibold text-slate-300 transition hover:border-lime-400/40 hover:text-lime-300"
                >
                  {contactText.github} ↗
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Contact;
