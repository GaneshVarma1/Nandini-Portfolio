"use client";

interface ExtendedCanvasRenderingContext2D extends CanvasRenderingContext2D {
  running: boolean;
  frame: number;
}

let ctx: ExtendedCanvasRenderingContext2D;
let f: NoiseGenerator;
const pos = { x: 0, y: 0 };
let lines: Line[] = [];

const E = {
  debug: true,
  friction: 0.5,
  trails: 80,
  size: 50,
  dampening: 0.025,
  tension: 0.99,
};

class Node {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
}

class NoiseGenerator {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;

  constructor(
    config: {
      phase?: number;
      offset?: number;
      frequency?: number;
      amplitude?: number;
    } = {}
  ) {
    this.phase = config.phase || 0;
    this.offset = config.offset || 0;
    this.frequency = config.frequency || 0.001;
    this.amplitude = config.amplitude || 1;
  }

  update(): number {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }
}

class Line {
  spring: number;
  friction: number;
  nodes: Node[];

  constructor(config: { spring: number }) {
    this.spring = config.spring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    this.nodes = Array(E.size)
      .fill(null)
      .map(() => {
        const node = new Node();
        node.x = pos.x;
        node.y = pos.y;
        return node;
      });
  }

  update(): void {
    let spring = this.spring;
    const first = this.nodes[0];
    first.vx += (pos.x - first.x) * spring;
    first.vy += (pos.y - first.y) * spring;

    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      if (i > 0) {
        const prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * E.dampening;
        node.vy += prev.vy * E.dampening;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= E.tension;
    }
  }

  draw(): void {
    if (!ctx) return;
    const first = this.nodes[0];
    ctx.beginPath();
    ctx.moveTo(first.x, first.y);

    for (let i = 1; i < this.nodes.length - 2; i++) {
      const node = this.nodes[i];
      const next = this.nodes[i + 1];
      const x = (node.x + next.x) * 0.5;
      const y = (node.y + next.y) * 0.5;
      ctx.quadraticCurveTo(node.x, node.y, x, y);
    }

    const secondLast = this.nodes[this.nodes.length - 2];
    const last = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y);
    ctx.stroke();
    ctx.closePath();
  }
}

function render(): void {
  try {
    if (!ctx?.running) return;

    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = `hsla(${Math.round(f.update())},100%,50%,0.025)`;
    ctx.lineWidth = 10;

    lines.forEach((line) => {
      line.update();
      line.draw();
    });

    ctx.frame++;
    requestAnimationFrame(render);
  } catch (error) {
    console.error("Canvas render error:", error);
  }
}

function initLines(): void {
  lines = [];
  for (let i = 0; i < E.trails; i++) {
    lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
  }
}

function handleMouse(e: MouseEvent | TouchEvent): void {
  if ("touches" in e) {
    pos.x = e.touches[0].pageX;
    pos.y = e.touches[0].pageY;
  } else {
    pos.x = e.clientX;
    pos.y = e.clientY;
  }

  if (lines.length === 0) {
    initLines();
    render();
  }
}

function resizeCanvas(): void {
  if (!ctx?.canvas) return;
  ctx.canvas.width = window.innerWidth - 20;
  ctx.canvas.height = window.innerHeight;
}

export function renderCanvas(): () => void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {};
  }

  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvas) return () => {};

  ctx = canvas.getContext("2d") as ExtendedCanvasRenderingContext2D;
  if (!ctx) return () => {};

  ctx.running = true;
  ctx.frame = 1;
  f = new NoiseGenerator({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });

  document.addEventListener("mousemove", handleMouse);
  document.addEventListener("touchstart", handleMouse);
  document.addEventListener("touchmove", handleMouse);
  window.addEventListener("resize", resizeCanvas);

  resizeCanvas();
  initLines();
  render();

  return () => {
    if (ctx) ctx.running = false;
    document.removeEventListener("mousemove", handleMouse);
    document.removeEventListener("touchstart", handleMouse);
    document.removeEventListener("touchmove", handleMouse);
    window.removeEventListener("resize", resizeCanvas);
  };
}
