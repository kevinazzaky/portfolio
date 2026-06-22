import { useEffect, useRef } from "react";

function ScrollReveal({ children, className = "", delay = 0 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("show");
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay]);

  return (
    <div ref={elementRef} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export default ScrollReveal;
