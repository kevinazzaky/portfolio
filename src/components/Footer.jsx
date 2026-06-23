import { translations } from "../data/translations";

function Footer({ lang }) {
  const footerText = translations[lang].footer;

  return (
    <footer className="px-4 pb-8 pt-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>

        <div className="flex flex-col gap-6 py-7 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-black tracking-tight text-white">
              Kevin Azzaky
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href="https://github.com/kevinazzaky"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-400 transition hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/kevinazzakyy/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-400 transition hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/6281529500457"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-400 transition hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-slate-600 md:text-left">
          {footerText.copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
