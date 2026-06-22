import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { translations } from "../data/translations";

const focusMeta = [
  { icon: "</>", tags: ["Responsive UI", "Web Apps"] },
  { icon: "{ }", tags: ["Clean Code", "Workflow"] },
  { icon: "UI", tags: ["React", "Interaction"] },
  { icon: "API", tags: ["REST API", "Auth"] },
  { icon: "FS", tags: ["Frontend", "Backend"] },
  { icon: "DB", tags: ["Query", "Data Model"] },
];

function FocusArea({ lang }) {
  const focusText = translations[lang].focus;
  const [activeFocus, setActiveFocus] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const dragRef = useRef(null);

  const selectRelativeFocus = (direction) => {
    setActiveFocus((current) => {
      const next = (current + direction + focusText.items.length) % focusText.items.length;
      return next;
    });
    setRotation((current) => current + direction * 60);
  };

  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = { startX: event.clientX, startRotation: rotation };
  };

  const handlePointerMove = (event) => {
    if (!dragRef.current) return;

    const nextRotation =
      dragRef.current.startRotation + (event.clientX - dragRef.current.startX) * 0.65;
    const nextFocus =
      ((Math.round(nextRotation / 60) % focusText.items.length) +
        focusText.items.length) %
      focusText.items.length;

    setRotation(nextRotation);
    setActiveFocus(nextFocus);
  };

  const handlePointerUp = (event) => {
    if (!dragRef.current) return;

    event.currentTarget.releasePointerCapture(event.pointerId);
    const snappedRotation = Math.round(rotation / 60) * 60;
    setRotation(snappedRotation);
    dragRef.current = null;
  };

  const handleGlobeKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectRelativeFocus(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectRelativeFocus(1);
    }
  };

  return (
    <section id="focus" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal delay={100}>
          <div className="focus-showcase glass-panel grid items-center gap-10 overflow-hidden rounded-[2rem] p-7 md:grid-cols-[1.25fr_0.75fr] md:p-10">
            <div className="relative z-10 max-w-3xl">
              <p className="section-label">{focusText.label}</p>

              <h2 className="mt-5 text-2xl font-black tracking-tight text-white md:text-3xl">
                {focusText.title}
              </h2>

              <p className="mt-5 max-w-2xl leading-relaxed text-slate-400">
                {focusText.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="focus-summary-pill">06 Focus Areas</span>
                <span className="focus-summary-pill">Web & Software</span>
              </div>
            </div>

            <div
              className="focus-orb-stage"
              role="slider"
              tabIndex="0"
              aria-label={lang === "id" ? "Pilih bidang pengembangan" : "Select a focus area"}
              aria-valuemin="1"
              aria-valuemax={focusText.items.length}
              aria-valuenow={activeFocus + 1}
              aria-valuetext={focusText.items[activeFocus].title}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onKeyDown={handleGlobeKeyDown}
              style={{
                "--globe-turn": `${rotation}deg`,
                "--globe-shift": `${rotation * 1.4}px`,
              }}
            >
              <div className="focus-orbit-shell">
                <div className="focus-orbit focus-orbit-one"></div>
                <div className="focus-orbit focus-orbit-two"></div>
                <span className="focus-node focus-node-one"></span>
                <span className="focus-node focus-node-two"></span>
                <span className="focus-node focus-node-three"></span>
              </div>
              <div className="focus-orb">
                <span key={focusText.items[activeFocus].title} className="focus-orb-title">
                  {focusText.items[activeFocus].title}
                </span>
              </div>

            </div>
          </div>
        </ScrollReveal>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            {showAll ? focusText.allAreas : focusText.selectedArea}
          </p>
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
            className="rounded-full border border-lime-400/30 px-5 py-2.5 text-sm font-semibold text-lime-300 transition hover:bg-lime-400 hover:text-[#050807]"
          >
            {showAll ? focusText.showOne : focusText.showAll}
          </button>
        </div>

        <div className={`mt-5 ${showAll ? "grid gap-5 md:grid-cols-2 lg:grid-cols-3" : "mx-auto max-w-xl"}`}>
          {(showAll
            ? focusText.items.map((item, index) => ({ item, index }))
            : [{ item: focusText.items[activeFocus], index: activeFocus }]
          ).map(({ item, index }) => (
            <ScrollReveal
              key={`${showAll ? "all" : "single"}-${item.title}`}
              delay={showAll ? index * 80 : 0}
              className="h-full"
            >
              <article
                className={`focus-card group ${activeFocus === index ? "is-active" : ""} ${!showAll ? "is-single" : ""}`}
              >
                <div className="focus-card-glow"></div>

                <div className="focus-card-content relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="focus-card-icon">
                      {focusMeta[index].icon}
                    </div>
                    <span className="focus-card-number">
                      / {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {focusMeta[index].tags.map((tag) => (
                      <span key={tag} className="focus-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="focus-card-line"></div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FocusArea;
