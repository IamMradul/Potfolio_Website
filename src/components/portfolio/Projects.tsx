import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ProjectCard from "./ProjectCard";
import { Shield, Brain, ShoppingCart, Newspaper, Bot, PawPrintIcon, FileText, GraduationCap, Code2, Vote, ShieldCheck, ScanText } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Aniwoo – Smart Pet Care Platform",
    description: "Built a full-stack pet care web application offering AI-powered disease detection, veterinary services, a pet nutrition shop, grooming products, and a local pet mating connect feature. The AI scanner analyzes pet photos in seconds to surface potential health concerns with vet-friendly summaries.",
    icon: PawPrintIcon,
    image: "/images/aniwoo.jpg",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "AI/ML", "Vercel"],
    category: "Full Stack Web Development",
    github: "https://github.com/IamMradul/aniwoo",
    live: "https://aniwoo.vercel.app/",
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
    title: "Ira – Anti-Distraction Bot",
    description:
      "Designed and implemented an automation bot to reduce digital distractions through intelligent monitoring and scheduled intervention logic. Built with Python using modular architecture and task automation to improve productivity and system efficiency.",
    icon: Bot,
    image: "/images/Ira.png",
    technologies: ["Python", "Automation", "Bot Development"],
    category: "Automation Systems",
    github: "https://github.com/IamMradul/Ira-The-Anti-Distraction-Bot",
    live: "",
    featured: false,
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
    featured: false,
  },
  {
    title: "Cloud Document Sharing Platform",
    description:
      "Developed a secure cloud-based document management and sharing platform with authentication, file uploads, access control, and real-time document collaboration. Focused on scalable architecture, secure storage, and seamless user experience.",
    icon: FileText,
    image: "/images/cloud-docs.png",
    technologies: ["Next.js", "TypeScript", "Supabase", "Storage", "Authentication"],
    category: "Full-Stack Engineering",
    github: "https://github.com/IamMradul/Cloud-Document-Sharing-Platform",
    live: "",
    featured: true,
  },
  {
    title: "StudyNX",
    description:
      "Built a modern educational platform designed to enhance student learning through structured resources, progress tracking, and an intuitive user interface. Implemented responsive design and scalable frontend architecture.",
    icon: GraduationCap,
    image: "/images/studynx.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    category: "EdTech Platform",
    github: "https://github.com/IamMradul/StudyNX",
    live: "",
    featured: false,
  },
  {
    title: "CP Companion",
    description:
      "Created a competitive programming assistant to help users organize coding challenges, track problem-solving progress, manage practice sessions, and improve interview preparation efficiency.",
    icon: Code2,
    image: "/images/cp-companion.png",
    technologies: ["React", "TypeScript", "DSA", "Analytics"],
    category: "Developer Tools",
    github: "https://github.com/IamMradul/CP-Companion",
    live: "",
    featured: false,
  },
  {
    title: "VoteWise",
    description:
      "Developed a civic-tech platform aimed at increasing voter awareness through candidate information, issue tracking, election insights, and data-driven decision support. Designed for accessibility and public engagement.",
    icon: Vote,
    image: "/images/votewise.png",
    technologies: ["Next.js", "TypeScript", "Supabase", "Data Visualization"],
    category: "Civic Technology",
    github: "https://github.com/IamMradul/VoteWise",
    live: "",
    featured: false,
  },
  {
    title: "EduGuard",
    description:
      "Built an education-focused platform designed to improve digital safety, awareness, and accessibility for students through modern web technologies and user-centric design.",
    icon: ShieldCheck,
    image: "/images/eduguard.png",
    technologies: ["JavaScript", "Web Development", "Education Technology"],
    category: "EdTech Solution",
    github: "https://github.com/IamMradul/Eduguard",
    live: "",
    featured: false,
  },
  {
    title: "Text Extractor",
    description:
      "Developed an OCR-powered application capable of extracting and processing text from images using computer vision techniques. Improved document digitization workflows and text accessibility.",
    icon: ScanText,
    image: "/images/text-extractor.png",
    technologies: ["Python", "OpenCV", "Tesseract OCR", "Computer Vision"],
    category: "Computer Vision",
    github: "https://github.com/IamMradul/Text_Extractor",
    live: "",
    featured: false,
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="py-12 md:py-20 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
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

        <div className="flex justify-center mt-8">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => setShowMore(!showMore)}
            className="min-w-[150px]"
          >
            {showMore ? "Show Less" : "Show More"}
          </Button>
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[500px] p-2 custom-scrollbar pr-4">
              {projects.filter((p) => !p.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
