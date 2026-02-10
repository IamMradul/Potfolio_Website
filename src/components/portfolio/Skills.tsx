import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Shield, Code, Layers, Brain, Database, Wrench } from "lucide-react";
import AnimatedSkillBar from "@/components/ui/animated-skill-bar";

const skillCategories = [
  {
    title: "Cybersecurity & Core Concepts",
    icon: Shield,
    highlight: true,
    skills: [
      "Authentication & Authorization",
      "API Security",
      "Secure Backend Architecture",
      "Input Validation",
      "Basic Threat Analysis",
      "Debugging",
      "Linux Fundamentals",
      "Version Control",
      "System Reliability",
    ],
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C++", "Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & Technologies",
    icon: Layers,
    skills: ["Flask", "Next.js", "React", "Node.js", "REST APIs"],
  },
  {
    title: "AI/ML & Security Analytics",
    icon: Brain,
    skills: [
      "Machine Learning",
      "NLP",
      "OpenCV",
      "MediaPipe",
      "Scikit-learn",
      "TensorFlow (basic)",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "SQLite", "Supabase", "Vector Databases"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Linux", "Vercel", "VS Code", "Docker (basic)"],
  },
];

const topSkills = [
  { name: "Python", level: 90, color: "bg-primary" },
  { name: "Cybersecurity", level: 85, color: "bg-cyber" },
  { name: "Machine Learning", level: 80, color: "bg-purple-500" },
  { name: "React / Next.js", level: 78, color: "bg-accent" },
  { name: "Backend (Flask/Node)", level: 82, color: "bg-orange-500" },
  { name: "Database Design", level: 75, color: "bg-emerald-500" },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24">
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
            Technical expertise with a strong focus on cybersecurity and secure development
          </p>
        </motion.div>

        {/* Animated Skill Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-16 bg-card rounded-xl p-6 border border-border shadow-md"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">Proficiency Overview</h3>
          <div className="space-y-4">
            {topSkills.map((skill, i) => (
              <AnimatedSkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={skill.color}
                delay={0.2 + i * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border ${
                category.highlight
                  ? "border-cyber/30 bg-gradient-to-br from-card to-cyber/5"
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
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + skillIdx * 0.03 }}
                  >
                    <Badge
                      variant={category.highlight ? "default" : "secondary"}
                      className={`text-xs ${
                        category.highlight
                          ? "bg-cyber/10 text-cyber hover:bg-cyber/20 border border-cyber/20"
                          : ""
                      }`}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
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
