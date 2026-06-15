"use client";
import { useEffect, useRef, useState } from "react";

const ScrollReveal = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [state, setState] = useState("init");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (inViewport) {
      setState("visible");
      return;
    }

    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: state === "visible" ? 1 : state === "hidden" ? 0 : 1,
        transform: state === "visible" ? "translateY(0)" : state === "hidden" ? "translateY(20px)" : "translateY(0)",
        transition: "opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
