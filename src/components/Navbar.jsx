import { useEffect, useState } from "react";
import { translations } from "../data/translations";

const menus = [
  { key: "home", id: "home" },
  { key: "about", id: "about" },
  { key: "focus", id: "focus" },
  { key: "skills", id: "skills" },
  { key: "projects", id: "projects" },
  { key: "contact", id: "contact" },
];

function CvMenu({ navText, mobile = false, onSelect }) {
  return (
    <details className={`cv-menu ${mobile ? "mt-3" : "group relative"}`}>
      <summary
        className={`cursor-pointer border border-lime-400/60 text-center text-sm font-semibold text-white transition hover:bg-lime-400 hover:text-[#050807] ${
          mobile ? "rounded-xl px-4 py-3" : "rounded-full px-5 py-2.5"
        }`}
      >
        {navText.cv} <span aria-hidden="true">+</span>
      </summary>

      <div
        className={
          mobile
            ? "mt-2 grid grid-cols-2 gap-2"
            : "absolute right-0 top-[calc(100%+0.75rem)] w-52 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0b0e] p-2 shadow-2xl shadow-black/40"
        }
      >
        <a
          href="/CV-Kevin-Azzaky.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={onSelect}
          className={`text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-lime-300 ${
            mobile
              ? "rounded-xl border border-white/10 px-3 py-3 text-center"
              : "block rounded-xl px-4 py-3"
          }`}
        >
          {navText.previewCv}
        </a>
        <a
          href="/CV-Kevin-Azzaky.pdf"
          download="CV-Kevin-Azzaky.pdf"
          onClick={onSelect}
          className={`bg-lime-400 text-sm font-semibold text-[#050807] transition hover:bg-lime-300 ${
            mobile
              ? "rounded-xl px-3 py-3 text-center"
              : "mt-1 block rounded-xl px-4 py-3"
          }`}
        >
          {navText.downloadCv}
        </a>
      </div>
    </details>
  );
}

function Navbar({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const navText = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      const current = menus.find((menu) => {
        const section = document.getElementById(menu.id);
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 180 && rect.bottom >= 180;
      });

      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChangeLanguage = () => {
    setLang(lang === "id" ? "en" : "id");
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050807]/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-6 px-4 py-4 sm:px-6 lg:grid-cols-[auto_1fr_auto]">
        <a href="#home" className="whitespace-nowrap text-xl font-black tracking-tight">
          <span className="text-white">Kevin</span>
          <span className="text-lime-400">Azzaky</span>
        </a>

        <div className="hidden justify-center lg:flex">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
            {menus.map((menu) => (
              <a
                key={menu.id}
                href={`#${menu.id}`}
                className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === menu.id
                    ? "text-lime-400"
                    : "text-slate-300 hover:text-lime-300"
                }`}
              >
                {navText[menu.key]}
                {active === menu.id && (
                  <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-lime-400"></span>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden items-center justify-end gap-3 lg:flex">
          <button
            onClick={handleChangeLanguage}
            className="rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-lime-400/40 hover:text-lime-300"
          >
            {lang === "id" ? "ID" : "EN"}
          </button>
          <CvMenu navText={navText} />
        </div>

        <div className="flex justify-end lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-200"
          >
            {open ? navText.close : navText.menu}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-73px)] overflow-y-auto border-t border-white/10 bg-[#050807] px-4 py-4 sm:px-6 lg:hidden">
          <div className="flex flex-col gap-2">
            {menus.map((menu) => (
              <a
                key={menu.id}
                href={`#${menu.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm transition ${
                  active === menu.id
                    ? "bg-lime-400 text-[#050807]"
                    : "text-slate-300 hover:bg-white/10 hover:text-lime-300"
                }`}
              >
                {navText[menu.key]}
              </a>
            ))}

            <button
              onClick={handleChangeLanguage}
              className="mt-2 rounded-xl border border-white/10 px-4 py-3 text-left text-sm font-semibold text-slate-300 transition hover:border-lime-400/40 hover:text-lime-300"
            >
              {navText.language}:{" "}
              <span className="text-lime-300">
                {lang === "id" ? navText.indonesia : navText.english}
              </span>
            </button>

            <CvMenu navText={navText} mobile onSelect={() => setOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
