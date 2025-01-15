"use client";

import { useEffect } from "react";
import { renderCanvas } from "@/lib/canvas-effect";

export function Canvas() {
  useEffect(() => {
    const cleanup = renderCanvas();
    return cleanup;
  }, []);

  return (
    <canvas id="canvas" className="pointer-events-none absolute inset-0 z-30" />
  );
}
