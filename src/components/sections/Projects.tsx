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
    title: "Personal Assistant chatbot",
    description:
      "Build an interactive and intelligent chatbot using Ollama's powerful language models, seamlessly integrated with Streamlit's easy-to-use framework for creating beautiful web applications. This chatbot allows real-time conversations, providing users with quick and accurate responses. Leveraging Ollama's natural language processing capabilities and Streamlit's dynamic interface, this solution delivers a smooth and engaging user experience for diverse use cases.",
    technologies: ["LangChain", "Streamlit", "Ollama"],
    demoLink: "https://drive.google.com/file/d/1jLqrZ_3Az8am1GFKkZbAxtiRNilo_--p/view?usp=sharing",
    githubLink: "https://github.com/morlanandini/chatbot_streamlit_ollama",
  },
  {
    title: "SheNeeds - E-commerce Website",
    description:
      "A full-stack e-commerce platform built with Next.js and integrated database for product and image management",
    technologies: ["Next.js", "TypeScript", "Database", "Tailwind CSS"],
    demoLink: "https://github.com/morlanandini/ecommerce-website-SheNeeds",
    githubLink: "https://github.com/morlanandini/ecommerce-website-SheNeeds",
  },
  {
    title: "Arena Games",
    description:
      "An intelligent chatbot that can analyze and respond to queries about any website's content when given its URL",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "API Integration"],
    demoLink: "https://2-player-games.vercel.app/",
    githubLink: "https://github.com/morlanandini/2-player-games",
  },
  {
    title: "AddTips - Social Tips Platform",
    description:
      "A social platform where users can share and discover tips, featuring user authentication and PostgreSQL database",
    technologies: ["Next.js", "PostgreSQL", "Auth", "Tailwind CSS"],
    demoLink: "https://addtips.vercel.app",
    githubLink: "https://github.com/morlanandini/addtips",
  },
  {
    title: "Expense Tracker",
    description:
      "A responsive expense tracking application built with React and TypeScript for managing personal finances",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    demoLink: "https://github.com/morlanandini/expense-tracker",
    githubLink: "https://github.com/morlanandini/expense-tracker",
  },
  {
    title: "Memory Game",
    description:
      "An interactive memory card game with image flipping mechanics and score tracking",
    technologies: ["React", "JavaScript", "CSS"],
    demoLink: "https://memory-game-xi-black.vercel.app",
    githubLink: "https://github.com/morlanandini/memory-game",
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
