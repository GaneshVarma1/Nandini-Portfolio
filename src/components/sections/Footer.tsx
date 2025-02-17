"use client";

import { Mail, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t flex items-center min-h-[120px]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center justify-center gap-6">
            <a
              href="mailto:nandinishiram@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/morlanandini"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/morla-nandini"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Built with{" "}
            <a
              href="https://reactwind.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Reactwind
            </a>
            . Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
