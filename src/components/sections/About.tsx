import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BentoGridItemProps {
  name: string;
  icon: string;
  className?: string;
}

const BentoGridItem = ({ name, icon, className }: BentoGridItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
      className={cn(
        "group relative flex flex-col items-center p-4 transition-all hover:scale-105",
        className
      )}
    >
      <div className="relative z-10">
        <img src={icon} alt={name} className="h-12 w-12 object-contain" />
      </div>
      <span className="relative z-10 mt-2 text-sm text-muted-foreground">
        {name}
      </span>
    </motion.div>
  );
};

const skills = [
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
  },
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
  },
  {
    name: "Docker",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
  },
  {
    name: "Kubernetes",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: "Jenkins",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
  },
  {
    name: "Azure",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
  },
  {
    name: "AWS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",
  },
  {
    name: "GraphQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
  },
  {
    name: "Java",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Hibernate",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/hibernate/hibernate-plain.svg",
  },
  {
    name: "JIRA",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg",
  },
  {
    name: "ELK Stack",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/elasticsearch/elasticsearch-original.svg",
  },
  {
    name: "Prometheus",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prometheus/prometheus-original.svg",
  },
  {
    name: "Grafana",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg",
  },
  {
    name: "TensorFlow",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "PyTorch",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "Scikit-Learn",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  {
    name: "JUnit",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  },
  {
    name: "Vercel",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Redux",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "Sass",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
  },
  {
    name: "Figma",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
  },
  {
    name: "Adobe XD",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Nginx",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
  },
  {
    name: "Linux",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
  },
  {
    name: "Cypress",
    icon: "https://raw.githubusercontent.com/cypress-io/cypress-icons/master/src/icons/icon_48x48.png",
  },
  {
    name: "Storybook",
    icon: "https://raw.githubusercontent.com/storybookjs/brand/master/icon/icon-storybook-default.svg",
  },
  {
    name: "Netlify",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/netlify/netlify-original.svg",
  },
  {
    name: "Jest",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg",
  },
  {
    name: "Webpack",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg",
  },
  {
    name: "Babel",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/babel/babel-original.svg",
  },
  {
    name: "Azure DevOps",
    icon: "https://www.svgrepo.com/show/448271/azure-devops.svg",
  },
  {
    name: "ElasticSearch",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/elasticsearch/elasticsearch-original.svg",
  },
  {
    name: "Kafka",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apachekafka/apachekafka-original.svg",
  },
];

const experience = [
  {
    role: "Java J2EE Developer",
    company: "Career Soft Solutions",
    location: "New Jersey",
    duration: "May 2023 - Present",
    responsibilities: [
      "Developed and maintained enterprise-grade applications using Core Java, ensuring 99% code efficiency.",
      "Enhanced maintainability of applications by 30% through the application of Spring Framework features.",
      "Optimized database operations using Hibernate ORM, reducing data access time by 25%.",
      "Utilized both MongoDB and Postgres to accomdate both structured and unstructured data flow.",
      "Designed and implemented scalable microservices using Spring Boot.",
      "Exposed RESTful APIs to integrate front-end systems and third-party services.",
      "Utilized AWS services (EC2, Lambda, RDS, S3) for cloud-native application design.",
      "Established CI/CD pipelines with Jenkins and Docker for streamlined application deployment.",
    ],
    technologies: [
      "Java",
      "Spring Framework",
      "Spring Boot",
      "Hibernate",
      "RESTful APIs",
      "AWS",
      "Jenkins",
      "Docker",
    ],
  },
  {
    role: "Full Stack Software Engineer",
    company: "Larsen & Toubro",
    location: "India",
    duration: "July 2021 - Aug 2022",
    responsibilities: [
      "Developed an internal ticketing CRUD application using spring boot, hibernate ORM and REST API's",
      "Created responsive front-end applications with React.js, javascript and tailwind CSS.",
      "Built and deployed cloud-based applications on AWS services.",
      "Established and maintained CI/CD pipelines with Jenkins, CodeBuild, and CodeDeploy, streamlining code deployment and ensuring quick, reliable releases.",
    ],
    technologies: [
      "Spring Boot Framework",
      "Java EE",
      "React.js",
      "AWS",
      "DevOPS",
      "Hibernate ORM",
    ],
  },
  {
    role: "Java Developer",
    company: "Virtusa",
    location: "India",
    duration: "Oct 2020 - June 2021",
    responsibilities: [
      "Designed Java-based applications using OOP principles for enhanced modularity.",
      "Implemented microservices architecture using Spring Boot.",
      "Leveraged AWS services to improve scalability and application availability.",
      "Developed responsive UI interfaces with Angular, CSS, and JavaScript.",
    ],
    technologies: ["Java", "Spring Boot", "AWS", "HTML", "CSS", "JavaScript"],
  },
];

const education = [
  {
    type: "degree",
    degree: "Master's degree in Computer Science",
    school: "State University of New York (SUNY), New Paltz",
    duration: "August 2022 - May 2023",
    achievements: [
      "Graduated with the Outstanding Graduate Award.",
      "Teaching Assistant for all four semesters, mentoring students and leading workshops.",
    ],
  },
  {
    type: "degree",
    degree: "Bachelor's degree in Computer Science",
    school: "MLR Institute of Technology",
    duration: "August 2017 - July 2021",
    achievements: [],
  },
];

const certifications = [
  {
    type: "certification",
    name: "AWS Certified Solutions Architect – Associate",
    organization: "Amazon Web Services (AWS)",
    issuedDate: "June 2023",
    description:
      "Validated expertise in designing and deploying scalable systems on AWS.",
  },
  {
    type: "certification",
    name: "Certified Kubernetes Administrator (CKA)",
    organization: "Cloud Native Computing Foundation",
    issuedDate: "April 2023",
    description:
      "Demonstrated proficiency in managing Kubernetes clusters for production environments.",
  },
  {
    type: "certification",
    name: "Microsoft Certified: Azure Developer Associate",
    organization: "Microsoft",
    issuedDate: "December 2022",
    description:
      "Specialized in building, testing, and maintaining cloud applications using Azure services.",
  },
];

const About = () => {
  const [activeSection, setActiveSection] = useState<
    "experience" | "education"
  >("experience");

  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--tw-gradient-from)_0%,var(--tw-gradient-to)_100%)] from-purple-900/20 to-transparent dark:from-purple-900/40" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-center text-3xl font-bold">About Me</h2>
          <p className="mt-10">I am a passionate full stack developer with over 4 years of experience in building scalable applications for complex problems. In these 4 years, I’ve gained hands on experience in backend frameworks like Django(python), Spring Boot, Spring Security and Hibernate ORM. For Instance, in my current role at Lowes, I played a crucial role in migrating monolithic application to micro services architecture using Spring Boot which improved scalability by 20%. Also, security was our main priority, for that I Implemented secure, stateless authentication using OAuth version 2.0 & spring security. Not only backend, I am also well versed in frontend, I’ve built dynamic user interfaces using React.js and implemented server side rendering that improved the performance of the website. Cloud computing is another area where I thrive. At Lowe’s, I designed and deployed scalable, cloud-native solutions on AWS, including EC2 and Lambda. This effort enabled seamless scaling during peak traffic and improved infrastructure efficiency by 50%. In addition to development, I actively mentor junior team members, sharing best practices and helping them grow technically. I’ve also worked cross-functionally with devops and testing teams to deliver high quality applications. 
      </p>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a passionate Full Stack Developer with a Master's degree in
              Computer Science from SUNY New Paltz. With over 4+ years of
              experience in software development, I specialize in building
              scalable web applications and enterprise solutions using modern
              technologies.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently working as a Java J2EE Developer at Lowe's, I focus on
              developing high-performance applications and microservices. My
              expertise spans both front-end and back-end development, with a
              strong foundation in cloud technologies and DevOps practices.
            </p>

            {/* Key Achievements Section */}
            <div className="mt-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-background/50 p-6 backdrop-blur">
                  <h4 className="mb-4 text-xl font-semibold">
                    Recent Highlights at Lowe's
                  </h4>
                  <ul className="space-y-2 text-left text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Developed enterprise-grade applications using Core Java,
                        achieving high code efficiency and scalability.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Utilized the Spring Framework with dependency injection
                        to improve flexibility and testability.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Designed and built microservices using Spring Boot to
                        support distributed and scalable architectures.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Integrated Kafka for real-time data flow, enhancing
                        messaging efficiency within microservices.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-background/50 p-6 backdrop-blur">
                  <h4 className="mb-4 text-xl font-semibold">
                    Academic Achievements
                  </h4>
                  <ul className="space-y-2 text-left text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Outstanding Graduate Merit Award recipient in the
                        master's program.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Teaching assistant for all four semesters of the
                        master's program, mentoring students and leading
                        workshops.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Completed advanced coursework in Distributed Systems,
                        Cloud Computing, and Machine Learning algorithms.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Led research projects in AI/ML applications, resulting
                        in practical implementations of modern algorithms.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Collaboration Statement */}
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground font-semibold">
              I am open to collaborating on innovative projects and sharing
              insights on full-stack development, back-end architecture, and
              emerging technologies. I aim to contribute to impactful projects
              that leverage my technical expertise and problem-solving skills.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-semibold">Skills</h3>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {skills.map((skill) => (
              <BentoGridItem
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>

        {/* New Toggle Section */}
        <div className="mb-8 flex flex-col items-center">
          <div className="inline-flex rounded-lg border p-1 bg-background/50 backdrop-blur">
            <Button
              variant={activeSection === "experience" ? "default" : "ghost"}
              className="relative px-6"
              onClick={() => setActiveSection("experience")}
            >
              Experience
            </Button>
            <Button
              variant={activeSection === "education" ? "default" : "ghost"}
              className="relative px-6"
              onClick={() => setActiveSection("education")}
            >
              Education
            </Button>
          </div>
        </div>

        {/* Updated Experience & Education Section */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-4">
            {activeSection === "experience" ? (
              experience.map((item, index) => (
                <Card
                  key={index}
                  className="border-none bg-background/50 dark:bg-background/20 shadow-xl backdrop-blur transition-all hover:bg-background/60"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{item.role}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">{item.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.duration}
                    </p>
                    <div className="mt-4 space-y-2">
                      {item.responsibilities.map((responsibility, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          • {responsibility}
                        </p>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : activeSection === "education" ? (
              <>
                <h3 className="mb-6 text-xl font-semibold">Education</h3>
                <div className="space-y-4">
                  {education.map((item, index) => (
                    <Card
                      key={index}
                      className="border-none bg-background/50 dark:bg-background/20 shadow-xl backdrop-blur transition-all hover:bg-background/60"
                    >
                      <CardHeader>
                        <CardTitle className="text-xl">{item.degree}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-medium">{item.school}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.duration}
                        </p>
                        {item.achievements.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <p
                                key={i}
                                className="text-sm text-muted-foreground"
                              >
                                • {achievement}
                              </p>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <h3 className="mb-6 mt-8 text-xl font-semibold">
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <Card
                      key={index}
                      className="border-none bg-background/50 dark:bg-background/20 shadow-xl backdrop-blur transition-all hover:bg-background/60"
                    >
                      <CardHeader>
                        <CardTitle className="text-xl">{cert.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-medium">{cert.organization}</p>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuedDate}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {cert.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              education.map((item, index) => (
                <Card
                  key={index}
                  className="border-none bg-background/50 dark:bg-background/20 shadow-xl backdrop-blur transition-all hover:bg-background/60"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{item.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">{item.school}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.duration}
                    </p>
                    <div className="mt-4 space-y-2">
                      {item.achievements?.map((achievement, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          • {achievement}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
