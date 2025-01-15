import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript (ES6+)", "TypeScript", "SQL", "PL/SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Spring Core",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Hibernate ORM",
      "React.js",
      "Angular",
      "Vue.js",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "CI/CD",
      "Terraform",
    ],
  },
  {
    title: "Databases",
    skills: ["SQL Server", "MongoDB", "PostgreSQL", "MySQL", "CosmosDB"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
          Technical Skills
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
