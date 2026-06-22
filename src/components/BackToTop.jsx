import { useEffect, useState } from "react";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="#home"
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-lime-400/40 bg-[#0B120D] text-lime-300 shadow-xl shadow-lime-500/10 transition hover:bg-lime-400 hover:text-[#050807]"
      aria-label="Back to top"
    >
      ↑
    </a>
  );
}

export default BackToTop;
