import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Take a break website",
    description:
"Take a Break is your personalized relaxation companion designed to help you recharge during busy workdays. The app asks you 5 quick questions about your work style, stress levels, and preferred break activities. Using your responses, it curates a tailored music therapy session to help you unwind, refocus, and stay productive. Whether you need calming tunes for a quick breather or energizing beats to power through your tasks, Take a Break offers the perfect escape, one song at a time.",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Shadcn/UI Components", "Vercel Deployment"],
    demoLink: "https://take-break-phi.vercel.app/",
    githubLink: "https://github.com/morlanandini/take-a-break",
    image: "/images/Screenshot 2025-02-14 at 3.25.29 PM.png",
    video : "/images/take-a-break.mov"
  },
  {
    title: "Plantify E-commerce website",
    description:
        "Plantify is a modern e-commerce platform that bridges the gap between technology and nature, making indoor plants more accessible and affordable for everyone. Built with Next.js and cutting-edge web technologies, this platform offers a seamless shopping experience for plant enthusiasts.",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Shadcn/UI Components", "Server Actions", "Vercel Deployment"],
    demoLink: "https://plantify-ecommerce-tau.vercel.app/",
    githubLink: "https://github.com/morlanandini/plantify_ecommerce",
    image: "/images/Screenshot 2025-02-14 at 3.25.29 PM.png",
    video : "/images/plantify.mov"
  },
  {
    title: "Ask Questions from your PDF",
    description:
        "I built an AI-powered PDF Chat Assistant that enables users to upload PDF documents and interact with the content through natural language queries. The application uses LangChain, Ollama, and a locally hosted LLaMA 3 model to process and analyze the text from PDFs, providing context-aware responses in real-time.",
    technologies: ["Python", "Streamlit", "LangChain", "Ollama", "PyMuPDF", "TikToken","LLaMA"],
    demoLink: "https://drive.google.com/file/d/1jLqrZ_3Az8am1GFKkZbAxtiRNilo_--p/view?usp=sharing",
    githubLink: "https://github.com/morlanandini/chatbot_streamlit_ollama",
    image: "/images/Screenshot 2025-02-14 at 3.25.29 PM.png",
    video : "/images/pdf_final.mov"
  },
  {
    title: "Personal Assistant chatbot",
    description:
      "Build an interactive and intelligent chatbot using Ollama's powerful language models, seamlessly integrated with Streamlit's easy-to-use framework for creating beautiful web applications. This chatbot allows real-time conversations, providing users with quick and accurate responses.",
    technologies: ["LangChain", "Streamlit", "Ollama"],
    demoLink: "https://drive.google.com/file/d/1jLqrZ_3Az8am1GFKkZbAxtiRNilo_--p/view?usp=sharing",
    githubLink: "https://github.com/morlanandini/chatbot_streamlit_ollama",
    image: "/images/personal-assistant.png",
    video : "/images/final.mov"
  },
  {
    title: "SheNeeds - E-commerce Website",
    description:
      "A full-stack e-commerce platform built with Next.js and integrated database for product and image management",
    technologies: ["Next.js", "TypeScript", "Database", "Tailwind CSS"],
    demoLink: "https://github.com/morlanandini/ecommerce-website-SheNeeds",
    githubLink: "https://github.com/morlanandini/ecommerce-website-SheNeeds",
    image: "/images/Screenshot 2025-02-14 at 3.25.29 PM.png",
    video : "/images/she_needs.mov"
  },
  {
    title: "Arena Games",
    description:
      "An intelligent chatbot that can analyze and respond to queries about any website's content when given its URL",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "API Integration"],
    demoLink: "https://2-player-games.vercel.app/",
    githubLink: "https://github.com/morlanandini/2-player-games",
    image: "https://www.pexels.com/search/beautiful/",
    video : "/images/arena-games.mov",

  },
  {
    title: "AddTips - Social Tips Platform",
    description:
      "A social platform where users can share and discover tips, featuring user authentication and PostgreSQL database",
    technologies: ["Next.js", "PostgreSQL", "Auth", "Tailwind CSS"],
    demoLink: "https://addtips.vercel.app",
    githubLink: "https://github.com/morlanandini/addtips",
    image: "/images/addtips.png",
    video : "/images/tips.mov"

  },
  {
    title: "Expense Tracker",
    description:
      "A responsive expense tracking application built with React and TypeScript for managing personal finances",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    demoLink: "https://github.com/morlanandini/expense-tracker",
    githubLink: "https://github.com/morlanandini/expense-tracker",
    image: "/images/expense-tracker.png",
    video : "/images/final.mov"

  },
  {
    title: "Memory Game",
    description:
      "An interactive memory card game with image flipping mechanics and score tracking",
    technologies: ["React", "JavaScript", "CSS"],
    demoLink: "https://memory-game-xi-black.vercel.app",
    githubLink: "https://github.com/morlanandini/memory-game",
    image: "/images/memory-game.png",
    video : "/images/memory-game.mov"

  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">My Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                {/* <img src={project.image} alt={project.title} className="w-full h-128 object-cover rounded-t-lg" /> */}
                <video
                    src={project.video}
                    className="w-full h-64 object-cover rounded-t-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  {project.demoLink && (
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(project.demoLink, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;