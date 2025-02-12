"use client";
import { useTheme } from "next-themes";
import { Plus, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";
import { Canvas } from "@/components/ui/canvas";

function Hero() {
  const { theme } = useTheme();

  return (
    <section id="home" className="relative min-h-screen">
      <Particles
        className="absolute inset-0 z-10 pointer-events-auto"
        quantity={100}
        ease={0.5}
        color={
          theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"
        }
        refresh={false}
      />
      <div className="animate-fadeIn relative z-20 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="mb-10 mt-4 md:mt-6">
          <div className="px-2">
            <div className="relative mx-auto h-full max-w-7xl rounded-lg border-2 border-border/20 bg-transparent p-6 backdrop-blur-[1px] hover:border-border/30 transition-colors duration-300 md:px-12 md:py-20">
              <h1 className="flex  select-none flex-col  px-3 py-2 text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
                <Plus
                  strokeWidth={4}
                  className="text-ali absolute -left-5 -top-5 h-10 w-10"
                />
                <Plus
                  strokeWidth={4}
                  className="text-ali absolute -bottom-5 -left-5 h-10 w-10"
                />
                <Plus
                  strokeWidth={4}
                  className="text-ali absolute -right-5 -top-5 h-10 w-10"
                />
                <Plus
                  strokeWidth={4}
                  className="text-ali absolute -bottom-5 -right-5 h-10 w-10"
                />
                Hi,<br></br>This is Nandini.Great to see you here!
              </h1>
              <div className="flex items-center justify-center gap-1">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs text-green-500">Available To Work</p>
              </div>
            </div>
          </div>

          <h1 className="mt-8 text-2xl md:text-2xl">
            Welcome to my professional life! I&#39;m{" "}
            <span className="text-ali font-bold">Software Engineer. </span>
          </h1>

          <p className="md:text-md mx-auto mb-6 mt-2 max-w-2xl px-6 text-sm text-primary/60 sm:px-6 md:max-w-4xl md:px-20 lg:text-lg">
            "I build scalable systems and craft intuitive designs, empowering
            brands with innovation and technology 🚀✨."
          </p>
          <div className="flex justify-center gap-2">
            <a href="#projects">
              <Button variant="default" size="lg">
                Check out my projects
              </Button>
            </a>
            <a
              href="https://drive.google.com/file/d/1KLexDkcr9fSnIMektSv27unj5w6Zwkhm/view?usp=sharing"
              target="_blank"
            >
        
            </a>
          </div>
        </div>
      </div>
      <Canvas />
    </section>
  );
}

export default Hero;
