import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Badge } from "@/components/ui/badge";
import { Github, Shield, Brain, ShoppingCart, Newspaper, Bot } from "lucide-react";
import projectCaptcha from "@/assets/project-captcha.jpg";
import projectFakenews from "@/assets/project-fakenews.jpg";
import projectKalaamitra from "@/assets/project-kalaamitra.jpg";

const projects = [
  {
    title: "Gesture-Based CAPTCHA System",
    description:
      "Real-time gesture-based CAPTCHA system using MediaPipe, OpenCV, and Flask with ~98% gesture detection accuracy. Implements pose estimation and head-orientation-based liveness verification.",
    icon: Shield,
    image: projectCaptcha,
    technologies: ["Python", "MediaPipe", "OpenCV", "Flask", "Computer Vision"],
    category: "Security",
    github: "https://github.com/IamMradul",
    featured: true,
  },
  {
    title: "Advanced Fake News Detection",
    description:
      "End-to-end ML and NLP pipeline to classify news as real or fake with high accuracy. Published at CISES 2025 international conference.",
    icon: Brain,
    image: projectFakenews,
    technologies: ["Python", "NLP", "Scikit-learn", "Machine Learning", "TensorFlow"],
    category: "AI/ML",
    github: "https://github.com/IamMradul",
    featured: true,
  },
  {
    title: "Kalaamitra – AI E-Commerce",
    description:
      "Full-stack AI-driven e-commerce platform with semantic search, vector embeddings, and AI-based product recommendations. Patent filed.",
    icon: ShoppingCart,
    image: projectKalaamitra,
    technologies: ["Next.js", "TypeScript", "Supabase", "AI/ML", "Vector DB"],
    category: "Full-Stack",
    github: "https://github.com/IamMradul",
    featured: true,
  },
  {
    title: "News App",
    description:
      "Modern news application providing real-time news updates with clean UI and efficient data fetching.",
    icon: Newspaper,
    technologies: ["React", "JavaScript", "REST API", "Tailwind CSS"],
    category: "Frontend",
    github: "https://github.com/IamMradul",
  },
  {
    title: "Ira – Anti-Distraction Bot",
    description:
      "Intelligent bot designed to help users maintain focus and reduce digital distractions.",
    icon: Bot,
    technologies: ["Python", "Automation", "Bot Development"],
    category: "Productivity",
    github: "https://github.com/IamMradul",
  },
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Security: "bg-cyber/10 text-cyber border-cyber/20",
    "AI/ML": "bg-purple-500/10 text-purple-600 border-purple-500/20",
    "Full-Stack": "bg-primary/10 text-primary border-primary/20",
    Frontend: "bg-accent/10 text-accent border-accent/20",
    Productivity: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  };
  return colors[category] || "bg-secondary text-secondary-foreground";
};

const FeaturedProjectCard = ({ project, index, isVisible }: { project: typeof projects[0]; index: number; isVisible: boolean }) => (
  <motion.div
    key={project.title}
    initial={{ opacity: 0, y: 30 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
  >
    <CardContainer containerClassName="py-4">
      <CardBody className="bg-card relative group/card border border-border rounded-xl overflow-hidden h-auto w-full">
        {/* Project Image */}
        {'image' in project && project.image && (
          <CardItem translateZ={30} className="w-full">
            <div className="h-40 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
              />
            </div>
          </CardItem>
        )}

        <div className="p-6">
          <CardItem translateZ={50} className="w-full">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <project.icon className="h-5 w-5 text-primary" />
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                {project.category}
              </span>
            </div>
          </CardItem>

          <CardItem translateZ={60} className="w-full">
            <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
          </CardItem>

          <CardItem translateZ={40} className="w-full">
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
          </CardItem>

          <CardItem translateZ={30} className="w-full">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs">+{project.technologies.length - 4}</Badge>
              )}
            </div>
          </CardItem>

          <CardItem translateZ={70} className="w-full">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  </motion.div>
);

const OtherProjectCard = ({ project, index, isVisible }: { project: typeof projects[0]; index: number; isVisible: boolean }) => (
  <motion.div
    key={project.title}
    initial={{ opacity: 0, y: 30 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
    className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border"
  >
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <project.icon className="h-5 w-5 text-primary" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-foreground">{project.title}</h3>
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
            {project.category}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
          ))}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="h-4 w-4" />
          View Code
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my work in cybersecurity, AI/ML, and full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {projects.filter((p) => p.featured).map((project, index) => (
            <FeaturedProjectCard key={project.title} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter((p) => !p.featured).map((project, index) => (
            <OtherProjectCard key={project.title} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
