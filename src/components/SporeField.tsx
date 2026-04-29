import { useEffect, useRef } from "react";

interface Spore {
  x: number;
  y: number;
  vy: number;
  vx: number;
  size: number;
  opacity: number;
  pulse: number;
}

export const SporeField = ({ density = 60, className = "" }: { density?: number; className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let spores: Spore[] = [];

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      spores = Array.from({ length: density }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vy: -0.2 - Math.random() * 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        size: 0.5 + Math.random() * 1.8,
        opacity: 0.2 + Math.random() * 0.6,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;
      ctx.clearRect(0, 0, w, h);

      spores.forEach((s) => {
        s.y += s.vy;
        s.x += s.vx;
        s.pulse += 0.02;
        if (s.y < -10) {
          s.y = h + 10;
          s.x = Math.random() * w;
        }
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;

        const o = s.opacity * (0.6 + Math.sin(s.pulse) * 0.4);
        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 4);
        grad.addColorStop(0, `hsla(145, 90%, 60%, ${o})`);
        grad.addColorStop(0.4, `hsla(150, 80%, 45%, ${o * 0.4})`);
        grad.addColorStop(1, `hsla(150, 80%, 45%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(140, 100%, 80%, ${o})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
    />
  );
};
