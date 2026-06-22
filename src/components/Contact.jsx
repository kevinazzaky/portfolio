import ScrollReveal from "./ScrollReveal";
import { translations } from "../data/translations";

function Contact({ lang }) {
  const contactText = translations[lang].contact;

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const subject = formData.get("subject").trim();
    const message = formData.get("message").trim();
    const body = `${message}\n\n${contactText.sender}: ${name}\nEmail: ${email}`;

    window.location.href = `mailto:kevinazzaky1@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const fieldClass =
    "mt-2 w-full rounded-xl border border-white/10 bg-[#0a0b0e] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-lime-400/60";

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal delay={100}>
          <div className="glass-panel contact-panel overflow-hidden rounded-[2rem] p-8 md:p-10">
            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="section-label">{contactText.label}</p>

                <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight md:text-5xl">
                  {contactText.title}
                </h2>

                <p className="mt-5 max-w-2xl leading-relaxed text-slate-400">
                  {contactText.description}
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="mailto:kevinazzaky1@gmail.com"
                    className="rounded-2xl border border-lime-400/40 bg-lime-400 px-5 py-4 text-center font-semibold text-[#050807] transition hover:bg-lime-300"
                  >
                    {contactText.email} -&gt;
                  </a>

                  <a
                    href="https://github.com/kevinazzaky"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 px-5 py-4 text-center font-semibold text-slate-300 transition hover:border-lime-400/40 hover:text-lime-300"
                  >
                    {contactText.github} -&gt;
                  </a>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 md:p-6"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-slate-300">
                    {contactText.name}
                    <input
                      required
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder={contactText.namePlaceholder}
                      className={fieldClass}
                    />
                  </label>

                  <label className="block text-sm font-semibold text-slate-300">
                    {contactText.formEmail}
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="nama@email.com"
                      className={fieldClass}
                    />
                  </label>
                </div>

                <label className="mt-5 block text-sm font-semibold text-slate-300">
                  {contactText.subject}
                  <input
                    required
                    name="subject"
                    type="text"
                    placeholder={contactText.subjectPlaceholder}
                    className={fieldClass}
                  />
                </label>

                <label className="mt-5 block text-sm font-semibold text-slate-300">
                  {contactText.message}
                  <textarea
                    required
                    name="message"
                    rows="5"
                    placeholder={contactText.messagePlaceholder}
                    className={`${fieldClass} resize-y`}
                  ></textarea>
                </label>

                <button
                  type="submit"
                  className="mt-5 w-full rounded-xl bg-lime-400 px-5 py-3.5 font-semibold text-[#050807] transition hover:bg-lime-300"
                >
                  {contactText.send}
                </button>

                <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
                  {contactText.sendNote}
                </p>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Contact;
