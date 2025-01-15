"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  defaultActive?: string;
}

export function AnimeNavBar({ items, defaultActive = "Home" }: NavBarProps) {
  const [mounted, setMounted] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>(defaultActive);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-2 left-0 right-0 z-[9999] px-2 md:top-5">
      <div className="flex justify-center">
        <motion.div
          className="flex items-center gap-2 rounded-full border bg-background/60 px-2 py-1.5 shadow-lg backdrop-blur-lg dark:bg-background/30 dark:border-border/10 md:gap-3 md:px-3 md:py-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {items.map((item) => {
            const Icon = item.icon;
            const isHovered = hoveredTab === item.name;
            const isActive = activeTab === item.name;

            return (
              <a
                key={item.name}
                href={item.url}
                className={cn(
                  "relative flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium transition-colors md:gap-2 md:px-3 md:py-1.5 md:text-sm",
                  {
                    "text-primary": isActive,
                    "text-muted-foreground hover:text-foreground": !isActive,
                  }
                )}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                onClick={() => setActiveTab(item.name)}
              >
                <motion.span
                  className="relative z-10 md:hidden"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} strokeWidth={2.5} />
                </motion.span>

                <span className="hidden md:inline">{item.name}</span>

                <AnimatePresence>
                  {(isHovered || isActive) && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className={cn(
                        "absolute inset-0 -z-10 rounded-full",
                        isActive
                          ? "bg-primary/10 dark:bg-primary/20"
                          : "bg-background dark:bg-white/10"
                      )}
                    />
                  )}
                </AnimatePresence>
              </a>
            );
          })}

          <div className="ml-2 border-l border-border/10 pl-2">
            <ModeToggle />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
