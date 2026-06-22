import { translations } from "../data/translations";

function Footer({ lang }) {
  const footerText = translations[lang].footer;

  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Kevin Azzaky.</p>
        <p>{footerText.text}</p>
      </div>
    </footer>
  );
}

export default Footer;
