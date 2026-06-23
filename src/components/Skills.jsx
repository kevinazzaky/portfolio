import ScrollReveal from "./ScrollReveal";
import { translations } from "../data/translations";

const iconMap = {
  HTML: ["html5", "E34F26"],
  CSS: ["css", "663399"],
  JavaScript: ["javascript", "F7DF1E"],
  TypeScript: ["typescript", "3178C6"],
  React: ["react", "61DAFB"],
  "Next.js": ["nextdotjs", "FFFFFF"],
  Vite: ["vite", "646CFF"],
  "Tailwind CSS": ["tailwindcss", "06B6D4"],
  "Node.js": ["nodedotjs", "5FA04E"],
  "Express.js": ["express", "FFFFFF"],
  Laravel: ["laravel", "FF2D20"],
  Django: ["django", "44B78B"],
  JWT: ["jsonwebtokens", "FFFFFF"],
  "Prisma ORM": ["prisma", "2D3748"],
  MySQL: ["mysql", "4479A1"],
  MariaDB: ["mariadb", "C0765A"],
  PostgreSQL: ["postgresql", "4169E1"],
  Kotlin: ["kotlin", "7F52FF"],
  "Android Studio": ["androidstudio", "3DDC84"],
  "Material UI": ["mui", "007FFF"],
  "C++": ["cplusplus", "00599C"],
  ESP32: ["espressif", "E7352C"],
  PlatformIO: ["platformio", "F5822A"],
  ThingSpeak: ["/thingspeak.svg"],
  Git: ["git", "F05032"],
  GitHub: ["github", "FFFFFF"],
  Postman: ["postman", "FF6C37"],
  Swagger: ["swagger", "85EA2D"],
  "VS Code": [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  ],
  Vercel: ["vercel", "FFFFFF"],
};

function SkillItem({ skill }) {
  const icon = iconMap[skill];
  const iconUrl = icon[0].startsWith("http") || icon[0].startsWith("/")
    ? icon[0]
    : `https://cdn.simpleicons.org/${icon[0]}/${icon[1]}`;

  return (
    <div className="skill-marquee-item">
      <img
        src={iconUrl}
        alt=""
        className="h-9 w-9 object-contain md:h-11 md:w-11"
        loading="lazy"
      />
      <span>{skill}</span>
    </div>
  );
}

function MarqueeRow({ skills, reverse = false }) {
  return (
    <div className="skills-marquee">
      <div className={`skills-marquee-track${reverse ? " is-reverse" : ""}`}>
        {[false, true].map((duplicate) => (
          <div
            key={String(duplicate)}
            className="skills-marquee-group"
            aria-hidden={duplicate || undefined}
          >
            {skills.map((skill) => (
              <SkillItem key={skill} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills({ lang }) {
  const skillsText = translations[lang].skills;
  const uniqueSkills = [
    ...new Set(skillsText.groups.flatMap((group) => group.skills)),
  ].filter((skill) => iconMap[skill]);
  const splitAt = Math.ceil(uniqueSkills.length / 2);

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal delay={100}>
          <div className="max-w-3xl">
            <p className="section-label">
              {skillsText.label}
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              {skillsText.title}
            </h2>
            <p className="mt-5 leading-relaxed text-slate-400">
              {skillsText.description}
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={200}>
        <div className="mt-12 space-y-4">
          <MarqueeRow skills={uniqueSkills.slice(0, splitAt)} />
          <MarqueeRow skills={uniqueSkills.slice(splitAt)} reverse />
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Skills;
