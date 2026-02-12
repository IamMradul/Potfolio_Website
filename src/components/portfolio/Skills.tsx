import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Shield, Code, Layers, Brain, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Backend & Security Engineering",
    icon: Shield,
    highlight:false,
    skills: [
      "Authentication & Authorization",
      "Secure API Design",
      "Backend Architecture",
      "Input Validation & Sanitization",
      "RESTful Services",
      "System Reliability",
      "Linux Fundamentals",
    ],
  },
  {
    title: "AI/ML Systems",
    icon: Brain,
    skills: [
      "Machine Learning",
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Model Evaluation & Optimization",
      "Feature Engineering",
      "Scikit-learn",
      "TensorFlow",
    ],
  },
  {
    title: "Core Tech Stack",
    icon: Code,
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Flask",
      "Next.js",
      "Node.js",
    ],
  },
  {
    title: "Databases & Data Systems",
    icon: Database,
    skills: [
      "PostgreSQL",
      "SQLite",
      "Vector Databases",
      "Supabase",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Vercel",
    ],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-12 md:py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technical expertise across backend development, AI/ML, and modern frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`relative z-10 bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border ${
                category.highlight
                  ? "border-cyber/30"
                  : "border-border"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    category.highlight ? "bg-cyber/20" : "bg-primary/10"
                  }`}
                >
                  <category.icon
                    className={`h-5 w-5 ${
                      category.highlight ? "text-cyber" : "text-primary"
                    }`}
                  />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
                {category.highlight && (
                  <span className="cyber-badge text-xs">Featured</span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant={category.highlight ? "default" : "secondary"}
                    className={`text-xs ${
                      category.highlight
                        ? "bg-cyber/10 text-cyber hover:bg-cyber/20 border border-cyber/20"
                        : ""
                    }`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
