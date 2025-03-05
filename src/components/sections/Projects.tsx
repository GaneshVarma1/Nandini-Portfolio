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
    title: "Resume and JD Match % generator",
    description:
"The Resume Matching Analysis Tool analyzes the content of a resume and compares it to a provided JD. It calculates a match % based on overlapping skills, tools, and experiences, and provides suggestions to improve the resume for better alignment with the job requirements.",   
 technologies: ["Streamlit", "PyMuPDF", "PDFPlumber", "LangChain", "Ollama", "Python"],
    demoLink: "https://drive.google.com/file/d/1pZICLuflrcLkZa0ZvZYLl-iro8PU3jDx/view?usp=sharing",
    githubLink: "https://github.com/morlanandini/resume_JD_matcher",
    image: "/images/Screenshot 2025-02-14 at 3.25.29 PM.png",
    video : "/images/resume.mov"
  },
  {
    title: "RocketApply paltform",
    description:
"A website to Streamline your job search with our AI-powered platform. Create a profile, upload your resume, and let us apply for jobs on your behalf. Effortless applications, smarter job matches—start today and let AI find your next opportunity. Currently under-development, landing page is done!",
    technologies: ["NextJS", "Tailwind-CSS", "typescript", "react", "Babel", "Vercel"],
    demoLink: "https://rocket-apply.vercel.app/",
    githubLink: "https://github.com/morlanandini/rocket_apply",
    image: "/images/Screenshot 2025-02-14 at 3.25.29 PM.png",
    video : "/images/rocketapply.mov"
  },
  {
    title: "Keywords generation for YouTube Videos",
    description:
"This project is a YouTube & Local Video SEO Keyword Generator that extracts transcripts from YouTube videos or local video files and generate optimized SEO keywords. It supports both YouTube URLs and local uploads. The generated keywords enhance video discoverability and improve search engine rankings. 🚀",
    technologies: ["LangChain", "Whisper", "FFmpeg", "MoviePy", "Streamlit", "python"],
    demoLink: "",
    githubLink: "https://drive.google.com/file/d/19dkoGHNv3P9XM_qoNquWxE1Av5ZOQQeT/view",
    image: "/images/Screenshot 2025-02-14 at 3.25.29 PM.png",
    video : "/images/keywords.mov"
  },
  {
    title: "Take a break website",
    description:
"Take a Break is your personalized relaxation companion designed to help you recharge during busy workdays. The app asks you 5 quick questions about your work style, stress levels, and preferred break activities. Using your responses, it curates a tailored music therapy session to help you unwind, refocus, and stay productive.",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Shadcn/UI Components", "Vercel Deployment"],
    demoLink: "https://take-break-phi.vercel.app/",
    githubLink: "https://github.com/morlanandini/take-a-break",
    image: "/images/Screenshot 2025-02-14 at 3.25.29 PM.png",
    video : "/images/take_a_break.mov"
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
    technologies: ["LangChain", "Streamlit", "Ollama", "prompts", "chains", "Chatbot"],
    demoLink: "https://drive.google.com/file/d/1jLqrZ_3Az8am1GFKkZbAxtiRNilo_--p/view?usp=sharing",
    githubLink: "https://github.com/morlanandini/chatbot_streamlit_ollama",
    image: "/images/personal-assistant.png",
    video : "/images/final.mov"
  },
  {
    title: "SheNeeds - E-commerce Website",
    description:
      "SheNeeds – A full-stack e-commerce platform built with Next.js, TypeScript, and an integrated database for seamless product and image management. Designed with Tailwind CSS for a modern UI, it offers a smooth shopping experience. The platform is also integrated with Stripe for secure and efficient payment processing.",
    technologies: ["Next.js", "TypeScript", "Sanity", "Tailwind CSS","Stripe", "Authentication"],
    // demoLink: "https://github.com/morlanandini/ecommerce-website-SheNeeds",
    githubLink: "https://github.com/morlanandini/ecommerce-website-SheNeeds",
    image: "/images/Screenshot 2025-02-14 at 3.25.29 PM.png",
    video : "/images/she_needs.mov"
  },
  {
    title: "Arena Games",
    description:
      "A 2-player gaming platform built with React and TypeScript, featuring fun and interactive games. Currently, it includes Tic-Tac-Toe and a Memory Game, offering an engaging experience for players. More exciting games can be added to expand the collection! 🎮",
    technologies: ["React.js", "Tailwind CSS", "TypeScript", "API Integration", "Lucide-React"],
    demoLink: "https://2-player-games.vercel.app/",
    githubLink: "https://github.com/morlanandini/2-player-games",
    image: "https://www.pexels.com/search/beautiful/",
    video : "/images/arena-games.mov",

  },
  {
    title: "Memory Game",
    description:
      " An interactive card-matching game built with Next.js and TypeScript, featuring image flipping mechanics and score tracking. Designed for an engaging user experience, players can test and improve their memory skills. The game is styled with Tailwind CSS for a smooth and responsive interface.",
    technologies: ["NextJS", "TypeScript", "Vercel", "Tailwind CSS", "React Hooks", "Use Effect"],
    demoLink: "https://memory-game-xi-black.vercel.app",
    githubLink: "https://github.com/morlanandini/memory-game",
    image: "/images/memory-game.png",
    video : "/images/memory-game.mov"

  },
  {
    title: "Interesting Blogs about SEO",
    description:
      "Checkout my blogs about SEO and Content Writing, You can learn 3 common mistakes in SEO and how to avoid them, 5 unique ways that no-one does to improve website ranking, How to choose relevant Keywords, Ten productive tools that can significantly enhance your SEO efforts.",
    technologies: ["WebFlow", "SEO", "Content Writing", "Keyword Research", "SEO Tools"],
    demoLink: "https://seo-for-beginners-essential-tips-to-boo.webflow.io/all-posts",
    // githubLink: "https://github.com/morlanandini/2-player-games",
    image: "https://www.pexels.com/search/beautiful/",
    video : "/images/seo.mov",

  },
  {
    title: "AddTips - Social Tips Platform",
    description:
      "A social platform where users can share and discover tips across various topics. Built with Next.js and styled with Tailwind CSS, it offers a seamless and responsive user experience. The platform features user authentication with Google providers and securely manages data using MongoDB Atlas.",
    technologies: ["Next.js", "MongoDb Atlas", "Auth", "Tailwind CSS", "Google Providers"],
    demoLink: "https://addtips.vercel.app",
    githubLink: "https://github.com/morlanandini/addtips",
    image: "/images/addtips.png",
    video : "/images/tips.mov"

  },
  {
    title: "Pridiction of crude oil price using Ensemble Learning",
    description:
      "A machine learning project utilizing ensemble learning techniques such as Random Forest Regression, Decision Tree Regression, Linear Regression, and Support Vector Regression to predict future crude oil prices based on historical data. Built with Python, Django, and machine learning libraries.",
    technologies: ["Python", "Django", "Scikit-Learn", "Pandas"," NumPy", "Matplotlib"   ],
    demoLink: "https://drive.google.com/file/d/13vsHEJZqGrBa4p_9-CLRo_D5sChEfdd4/view?usp=drive_link",
    githubLink: "https://github.com/morlanandini/predict_crude_oil_prices",
    image: "/images/expense-tracker.png",
    video : "/images/nandini-portfolio.mp4"

  },
  {
    "title": "Hybrid Image Creation Using OpenCV and NumPy",
    "description": "A project that creates a hybrid image by applying high-pass and low-pass filters to two input images using OpenCV and NumPy. This technique combines low-frequency components from one image and high-frequency details from another, resulting in an image that changes based on viewing distance.",
    "technologies": ["OpenCV", "NumPy", "Python", "Matplotlib", "Gaussian filter", "cv2"],
    "githubLink": "https://github.com/morlanandini/image_processing_projects",
    "image": "/images/hybrid-image.png",
    "video": "/images/hybrid_images.mov"
  },  
  // {
  //   title: "Expense Tracker",
  //   description:
  //     "A responsive expense tracking application built with React and TypeScript for managing personal finances",
  //   technologies: ["React", "TypeScript", "Tailwind CSS"],
  //   demoLink: "https://github.com/morlanandini/expense-tracker",
  //   githubLink: "https://github.com/morlanandini/expense-tracker",
  //   image: "/images/expense-tracker.png",
  //   video : "/images/final.mov"

  // },
  
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

