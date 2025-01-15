export function renderCanvas() {
  const SPACING = 20;
  const ITERATIONS = 3;
  const MOUSE = { x: 0, y: 0 };

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let dpr: number;
  let width: number;
  let height: number;
  let requestId: number;

  const initialize = () => {
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    dpr = window.devicePixelRatio || 1;

    const updateSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    document.addEventListener("mousemove", (e) => {
      MOUSE.x = e.clientX;
      MOUSE.y = e.clientY;
    });
  };

  const noise = (x: number, y: number) => {
    const sin = Math.sin(x / 100) * Math.sin(y / 100);
    return (sin * 10000) % 1;
  };

  const render = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < ITERATIONS; i++) {
      const distance = SPACING * (ITERATIONS - i);
      const intensity = 1 - i / ITERATIONS;

      for (let x = -distance; x < width + distance; x += SPACING) {
        for (let y = -distance; y < height + distance; y += SPACING) {
          const n = noise(x + Date.now() * 0.0005, y);
          const size = (Math.sin(n * Math.PI * 2) + 1) * 1.5;

          ctx.fillStyle = `rgba(123, 31, 162, ${0.03 * intensity})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    requestId = requestAnimationFrame(render);
  };

  initialize();
  render();

  return () => {
    cancelAnimationFrame(requestId);
    window.removeEventListener("resize", initialize);
  };
}
