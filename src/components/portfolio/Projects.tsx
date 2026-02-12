import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ProjectCard from "./ProjectCard";
import { Shield, Brain, ShoppingCart, Newspaper, Bot } from "lucide-react";

const projects = [
  {
    title: "Advanced Fake News Detection",
    description:
      "Engineered an end-to-end NLP pipeline for fake news classification using TF-IDF, feature engineering, and optimized machine learning models with high validation accuracy. Focused on model evaluation, performance tuning, and scalable architecture design. Published at CISES 2025 international conference.",
    icon: Brain,
    image: "/images/fake-news.png",
    technologies: ["Python", "NLP", "Scikit-learn", "TensorFlow", "Machine Learning"],
    category: "AI/ML Engineering",
    github: "https://github.com/IamMradul/Advance-Fake-News-Detection",
    live: "",
    featured: true,
  },
  {
    title: "Gesture-Based CAPTCHA System",
    description:
      "Developed a real-time gesture-based CAPTCHA system achieving ~98% detection accuracy using MediaPipe and OpenCV. Implemented pose estimation, head-orientation liveness verification, and secure Flask backend validation to prevent automated bot bypass and strengthen authentication security.",
    icon: Shield,
    image: "/images/Gesture-captcha.jpg",
    technologies: ["Python", "MediaPipe", "OpenCV", "Flask", "Computer Vision"],
    category: "Security Engineering",
    github: "https://github.com/IamMradul/Gesture-Based-CAPTCHA-System",
    live: "",
    featured: true,
  },
  {
    title: "Kalaamitra – AI E-Commerce",
    description:
      "Built a full-stack AI-powered e-commerce platform with semantic search and vector embeddings for intelligent product discovery. Integrated recommendation logic, scalable backend services, and a modern frontend using Next.js and TypeScript. Patent filed for AI-driven commerce innovation.",
    icon: ShoppingCart,
    image: "/images/Kalamitra.png",
    technologies: ["Next.js", "TypeScript", "Supabase", "Vector DB", "AI/ML"],
    category: "Full-Stack Engineering",
    github: "https://github.com/IamMradul/KalaMitra",
    live: "https://www.kalamitra.store/",
    featured: true,
  },
  {
    title: "Ira – Anti-Distraction Bot",
    description:
      "Designed and implemented an automation bot to reduce digital distractions through intelligent monitoring and scheduled intervention logic. Built with Python using modular architecture and task automation to improve productivity and system efficiency.",
    icon: Bot,
    image: "/images/Ira.png",
    technologies: ["Python", "Automation", "Bot Development"],
    category: "Automation Systems",
    github: "https://github.com/IamMradul/Ira-The-Anti-Distraction-Bot",
    live: "",
  },
  {
    title: "News App",
    description:
      "Developed a real-time news aggregation application with optimized REST API integration and efficient client-side data fetching. Implemented responsive UI with performance-focused rendering and structured state management for smooth user experience.",
    icon: Newspaper,
    image: "/images/News_app.png",
    technologies: ["React", "JavaScript", "REST API", "Tailwind CSS"],
    category: "Frontend Engineering",
    github: "https://github.com/IamMradul/News-app",
    live: "https://newsly-global.vercel.app/",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-12 md:py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my work in cybersecurity, AI/ML, and full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {projects.filter((p) => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                githubLink={project.github}
                liveLink={project.live}
                compact
              />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter((p) => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                githubLink={project.github}
                liveLink={project.live}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
