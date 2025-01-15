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

const projects = [
  {
    title: "Enterprise Applications at Lowe's",
    description:
      "Led development of high-performance Java applications with 99% code efficiency",
    technologies: ["Java", "Spring Boot", "AWS", "Microservices"],
    achievements: [
      "Improved system maintainability by 30%",
      "Reduced data access time by 25%",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    title: "Cloud Solutions at L&T",
    description:
      "Developed enterprise-level applications using Spring Framework and Azure",
    technologies: ["Spring", "Azure", "Vue.js", "SQL Server"],
    achievements: [
      "Implemented automated workflows",
      "Enhanced data pipeline management",
      "Optimized database performance",
    ],
  },
  {
    title: "Microservices at Virtusa",
    description:
      "Built scalable microservices architecture using Spring Boot and AWS",
    technologies: ["Java", "Spring Boot", "AWS", "Microservices"],
    achievements: [
      "Improved system scalability",
      "Enhanced application availability",
      "Optimized cloud infrastructure",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-4 pt-20">
        <h2 className="mb-8 text-center text-3xl font-bold">My Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
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
                <CardFooter className="flex flex-col gap-2">
                  <div className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        • {achievement}
                      </p>
                    ))}
                  </div>
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
