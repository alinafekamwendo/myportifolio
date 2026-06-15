"use client";
import React, { useEffect, useRef, useMemo } from "react";

const PARTICLE_SPEED = 0.15;
const CONNECTION_DIST = 200;
const MOUSE_RADIUS = 180;
const MOUSE_FORCE = 0.3;

function createParticle(w, h, index) {
  const angle = Math.random() * Math.PI * 2;
  const speed = PARTICLE_SPEED * (0.6 + Math.random() * 0.8);
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    baseSpeed: speed,
    angle,
    phase: Math.random() * Math.PI * 2,
    pulseSpeed: 0.3 + Math.random() * 0.4,
  };
}

const AnimatedBackground = ({ children }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const reducedMotion = useRef(false);

  const count = useMemo(() => {
    if (typeof window === "undefined") return 30;
    return window.innerWidth < 768 ? 18 : 35;
  }, []);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    let w, h;
    let particles = [];
    let animId;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(createParticle(w, h, i));
      }
    };

    resize();
    init();

    const onMouse = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const onLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    const drawParticle = (p, alpha) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(225, 40%, 70%, ${alpha * 0.5})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(225, 40%, 70%, ${alpha * 0.08})`;
      ctx.fill();
    };

    const drawConnection = (a, b) => {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > CONNECTION_DIST) return;

      const t = 1 - dist / CONNECTION_DIST;
      const alpha = t * t * 0.12;

      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = `hsla(225, 35%, 65%, ${alpha})`;
      ctx.lineWidth = t * 0.8;
      ctx.stroke();
    };

    const animate = () => {
      time += 0.004;
      ctx.clearRect(0, 0, w, h);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particles) {
        const dxM = mx - p.x;
        const dyM = my - p.y;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);

        if (distM < MOUSE_RADIUS && distM > 0) {
          const force = (1 - distM / MOUSE_RADIUS) * MOUSE_FORCE;
          p.vx -= (dxM / distM) * force;
          p.vy -= (dyM / distM) * force;
        }

        p.angle += (Math.random() - 0.5) * 0.008;
        p.vx += Math.cos(p.angle) * p.baseSpeed * 0.005;
        p.vy += Math.sin(p.angle) * p.baseSpeed * 0.005;

        p.vx *= 0.992;
        p.vy *= 0.992;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          drawConnection(particles[i], particles[j]);
        }
      }

      for (const p of particles) {
        const breathe = Math.sin(time * p.pulseSpeed + p.phase) * 0.3 + 0.7;
        drawParticle(p, breathe);
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        animId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animId);
    };
  }, [count]);

  if (reducedMotion.current) {
    return <>{children}</>;
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none hidden dark:block"
        style={{ zIndex: -10 }}
        aria-hidden="true"
      />

      <div
        className="fixed inset-0 pointer-events-none block dark:hidden"
        style={{
          zIndex: -10,
          background: `
            radial-gradient(ellipse 80% 60% at 15% 20%, rgba(165,180,252,0.15) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 75%, rgba(196,181,253,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 50% 50%, rgba(147,197,253,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 70% 50% at 30% 80%, rgba(165,243,252,0.06) 0%, transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="noise-overlay" aria-hidden="true" />

      {children}
    </>
  );
};

export default AnimatedBackground;
