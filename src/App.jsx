import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FocusArea from "./components/FocusArea";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  const [lang, setLang] = useState("id");

  return (
    <div className="portfolio-shell min-h-screen overflow-x-hidden text-white">
      <div className="fixed inset-0 -z-10 tech-grid"></div>

      <div className="fixed inset-0 -z-10">
        <div className="ambient-glow ambient-glow-left"></div>
        <div className="ambient-glow ambient-glow-right"></div>
      </div>

      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <FocusArea lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      <BackToTop />
    </div>
  );
}

export default App;
