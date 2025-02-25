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
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
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
    name: "Django",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
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
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/junit/junit-original.svg",
  },
  {
    name: "Vercel",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
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
    name: "Bootstrap",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
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


];

const experience = [
  {
    role: "Full Stack Engineer",
    company: "Career Soft Solutions",
    location: "New Jersey",
    duration: "June 2023 - Present",
    responsibilities: [
      "Provide assistance with internal application problem analysis, technical solutions/alternatives, evaluating   design proposals, and reviewing program code.",
      "Assists with a variety of department and company- wide projects to develop scalable web applications.",
      "Translatating designs and wireframes into high-quality Next.js code and optimizing components for maximum performance across a vast array of web-capable devices and browsers.",
      "Designing and implementing robust backend components using MongoDb and MySQL database.",
        ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "MySQL",
      "AWS",
      "Redis"
    ],
  },
  {
    role: "Founding Software Engineer",
    company: "Tiny Archives",
    location: "New York",
    duration: "June 2024 - Oct 2024",
    responsibilities: [
      "Built and optimized web applications for managing archival data, leveraging React, TypeScript, and Tailwind CSS for a scalable front-end architecture.",
"Collaborated with a team of 6 engineers to design the platform, with minimal response time and improving overall user satisfaction.",
"Developed back-end services using Python, Django, and AWS (S3, Lambda), focusing on performance and security compliance.",
"Implemented authentication using AWS Cogntito for safe and secure user verifications. Integrated AWS Cognito with Django framework to simultaneously update passowrds in databse (postgreSQL) and AWS",
"Implemented version control practices using Git and GitHub, ensuring efficient collaboration and CI/CD pipelines for seamless deployments.",
"Researched on AWS Bedrock, LLM's and AWS sagemaker to know which is best to develop a chatbot for Tiny Archives. Utilized Scrappy and Beautiful soup for scraping important data from vast training data."
    ],
    technologies: [
      "React.js",
      "Django",
      "Tailwind CSS",
      "PostgreSQL",
      "AWS",
      "CI/CD",
      "Git",
      "Docker",
      "TypeScript"
    ],
  },
  {
    role: "Full Stack Software Engineer",
    company: "Larsen & Toubro",
    location: "India",
    duration: "July 2021 - Aug 2022",
    responsibilities: [
      "Worked with a team of five in redesigning a monolithic application into a micro-frontend architecture using React achieving a 30% performance boost.",
      "Implemented a serverless architecture to optimize resource utilization and operational efficiency, reducing deployment costs by 30% .",
      "Optimized front-end performance using React and Redux, ensuring compliance with WCAG accessibility guidelines, which improved the platform’s accessibility score by 15% and significantly enhanced user-friendliness for all clients.",
      "Built and optimized RESTful APIs for real-time financial data processing in Spring Boot, leveraging efficient database design in PostgreSQL and MongoDB, leading to a 20% improvement in query response times.",
      "Implemented Kafka for real-time transaction processing, ensuring seamless integration of high-volume financial data across multiple services, improving data consistency and system reliability.",
    ],
    technologies: [
      "Spring Boot Framework",
      "Java EE",
      "React.js",
      "AWS",
      "DevOPS",
      "Hibernate ORM",
      "Kafka",
      "PostgreSQL",
      "MongoDB",
      "Redux",
      "TypeScript",
      
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Virtusa",
    location: "India",
    duration: "June 2020 - July 2021",
    responsibilities: [
      "Developed a consolidated dashboard to compare trends, storage utilization, and traffic across AWS, GCP, and Azure clouds, improving cross-cloud visibility by 40%.",
      "Built a responsive UI using React.js, CSS, and JavaScript, enhancing user experience and reducing load times by 25%. ",
      "Developed responsive UI interface with React.js, CSS, and JavaScript.",
     "Designed Java-based back-end applications using spring boot for enhanced modularity.",
      "Leveraged AWS services to improve scalability and application availability.",
      "Utilized AWS dynamoDB, Lambda functions and S3 buckets to fetch and store data from multiple clouds."
    ],
    technologies: ["Java", "Spring Boot", "AWS", "React.js", "CSS", "JavaScript", "TypeScript", "Redux", "Kafka", "PostgreSQL", "MongoDB"],
  },
];

const education = [
  {
    type: "degree",
    degree: "Master's degree in Computer Science",
    school: "State University of New York (SUNY), New Paltz",
    duration: "",
    achievements: [
      "Graduated with the Outstanding Graduate Award.",
      "Teaching Assistant for all four semesters, mentoring students and leading workshops.",
    ],
  },
  {
    type: "degree",
    degree: "Bachelor's degree in Computer Science",
    school: "MLR Institute of Technology",
    duration: "",
    achievements: [],
  },
];

const certifications = [
  {
    type: "certification",
    name: "Oracle certified Professional Java SE 11 Developer ",
    organization: "Oracle",
    issuedDate: "Sept 2021",
    description:
      "Validated expertise in core java.",
  },
  {
    type: "certification",
    name: "Python and Django Full Stack Web Developer Bootcamp",
    organization: "Udemy",
    issuedDate: "Sept 2020",
    description:
      "Learned Python, Django, HTML, CSS, JavaScript, and SQL.",
  },
  {
    type: "certification",
    name: "SQL for Data Science",
    organization: "Coursera",
    issuedDate: "Nov 2020",
    description:
      "An online non-credit course authorized by University of California, Davis and offered through Coursera",
  },
  {
    type: "certification",
    name: "Programming Foundations with JavaScript, HTML and CSS",
    organization: "Coursera",
    issuedDate: "May 2020",
    description:
      "An online non-credit course authorized by Duke University and offered through Coursera",
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
              Currently working as a Full Stack Developer at CSS, I focus on
              developing high-performance applications and microservices. My
              expertise spans both front-end and back-end development, with a
              building foundation in cloud technologies and LLM's.
            </p>

            {/* Key Achievements Section */}
            <div className="mt-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-background/50 p-6 backdrop-blur">
                  <h4 className="mb-4 text-xl font-semibold">
                    Recent Highlights
                  </h4>
                  <ul className="space-y-2 text-left text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Spreadheaded performance improvements in multiple projects using React.js and Next.js boosting the page load time.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Designed and implemented front-end for a startup called Tiny Archives.
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
                        Completed advanced coursework in Cyber Security, Artificial Intelligence, 
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
              insights on full-stack development, LLM's , Computer Vision and
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
