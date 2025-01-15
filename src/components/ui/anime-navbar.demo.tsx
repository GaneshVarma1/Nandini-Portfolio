"use client";

import { Home, User, Briefcase, Mail } from "lucide-react";
import { AnimeNavBar } from "@/components/ui/anime-navbar";

const items = [
  {
    name: "Home",
    url: "#home",
    icon: Home,
  },
  {
    name: "About",
    url: "#about",
    icon: User,
  },
  {
    name: "Projects",
    url: "#projects",
    icon: Briefcase,
  },
  {
    name: "Contact",
    url: "#contact",
    icon: Mail,
  },
];

export function AnimeNavBarDemo() {
  return <AnimeNavBar items={items} defaultActive="Home" />;
}
