"use client";

import { useCallback, useEffect, useRef } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  ease?: number;
  color?: string;
  refresh?: boolean;
}

interface Circle {
  context: CanvasRenderingContext2D;
  x: number;
  y: number;
  radius: number;
  color: string;
  alpha: number;
  velocity: { x: number; y: number };
  draw: () => void;
}

export const Particles = ({
  className = "",
  quantity = 30,
  ease = 50,
  color = "#ffffff",
  refresh = false,
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  const draw = useCallback(() => {
    if (!context.current) return;
    context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
    circles.current.forEach((circle: Circle) => {
      circle.draw();
    });
  }, []);

  const createCircle = useCallback(() => {
    if (!context.current) return;
    const circle = {
      context: context.current,
      x: Math.random() * canvasSize.current.w,
      y: Math.random() * canvasSize.current.h,
      radius: Math.random() * 3,
      color: color,
      alpha: 0.5,
      velocity: {
        x: (Math.random() - 0.5) * 0.8,
        y: (Math.random() - 0.5) * 0.8,
      },
      draw() {
        if (!this.context) return;
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = this.color;
        this.context.fill();
      },
    };
    return circle;
  }, [color]);

  const resizeCanvas = useCallback(() => {
    if (!canvasRef.current || !context.current) return;
    canvasSize.current.w = window.innerWidth;
    canvasSize.current.h = window.innerHeight;
    canvasRef.current.width = canvasSize.current.w * dpr;
    canvasRef.current.height = canvasSize.current.h * dpr;
    canvasRef.current.style.width = `${canvasSize.current.w}px`;
    canvasRef.current.style.height = `${canvasSize.current.h}px`;
    context.current.scale(dpr, dpr);
  }, [dpr]);

  const animate = useCallback(() => {
    draw();
    circles.current.forEach((circle: Circle) => {
      const dx = mouse.current.x - circle.x;
      const dy = mouse.current.y - circle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 100;

      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance;
        circle.velocity.x -= (dx / distance) * force * 0.02;
        circle.velocity.y -= (dy / distance) * force * 0.02;
      }

      circle.x += circle.velocity.x * ease;
      circle.y += circle.velocity.y * ease;
      if (circle.x < 0 || circle.x > canvasSize.current.w) {
        circle.velocity.x *= -1;
      }
      if (circle.y < 0 || circle.y > canvasSize.current.h) {
        circle.velocity.y *= -1;
      }
    });
    requestAnimationFrame(animate);
  }, [draw, ease]);

  useEffect(() => {
    if (!canvasRef.current) return;
    context.current = canvasRef.current.getContext("2d");
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas]);

  useEffect(() => {
    circles.current = Array.from({ length: quantity }, createCircle).filter(
      (circle): circle is Circle => circle !== undefined
    );
    animate();
  }, [quantity, createCircle, animate, refresh]);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={(e) => {
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;
      }}
      className={className}
    />
  );
};
