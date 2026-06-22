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
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-6 px-6 py-4 md:grid-cols-[auto_1fr_auto]">
        <a href="#home" className="whitespace-nowrap text-xl font-black tracking-tight">
          <span className="text-white">Kevin</span>
          <span className="text-lime-400">Azzaky</span>
        </a>

        <div className="hidden justify-center md:flex">
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

        <div className="hidden items-center justify-end gap-3 md:flex">
          <button
            onClick={handleChangeLanguage}
            className="rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-lime-400/40 hover:text-lime-300"
          >
            {lang === "id" ? "ID" : "EN"}
          </button>

          <a
            href="/CV-Kevin-Azzaky.pdf"
            download
            className="rounded-full border border-lime-400/60 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-lime-400 hover:text-[#050807]"
          >
            {navText.download} ↓
          </a>
        </div>

        <div className="flex justify-end md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-200"
          >
            {open ? navText.close : navText.menu}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#050807] px-6 py-4 md:hidden">
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

            <a
              href="/CV-Kevin-Azzaky.pdf"
              download
              className="mt-3 rounded-xl border border-lime-400/60 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-lime-400 hover:text-[#050807]"
            >
              {navText.download} ↓
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
