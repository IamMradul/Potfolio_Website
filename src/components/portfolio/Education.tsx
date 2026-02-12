import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Trophy, Award, Medal, ChevronDown } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering (B.E.) – Computer Science & Engineering",
    institution: "Chandigarh University",
    location: "Mohali, India",
    period: "2024 – 2028",
    current: true,
    highlights: [
      "Specialization: Backend Systems, AI/ML, and Secure Architecture",
      "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Systems, Computer Networks",
    ],
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "Google Gen AI Exchange Hackathon – Finalist",
    description:
      "Selected among top-performing teams nationwide for building AI-powered solutions using Google Generative AI technologies.",
    year: "2025",
    highlight: true,
  },
  {
  icon: Award,
  title: "GDG TechSprint Hackathon – 5× Winner",
  description:
    "Secured 1st place in five Google Developer Group (GDG) TechSprint hackathons hosted at five different universities, demonstrating consistent technical excellence, architecture design, and competitive performance.",
  year: "2026",
  highlight: true,
},
  {
    icon: Medal,
    title: "Zinnovatio Hackathon – Winner",
    description:
      "Recognized for innovative problem-solving, architecture design, and impactful technical implementation.",
    year: "2024",
  },
  {
    icon: Medal,
    title: "University Coding Competition – 2nd Rank",
    description:
      "Secured 2nd position, demonstrating strong algorithmic thinking and competitive programming skills.",
    year: "2024",
  },
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [expandedAchievements, setExpandedAchievements] = useState<number | null>(null);

  const toggleAchievementExpand = (index: number) => {
    setExpandedAchievements(expandedAchievements === index ? null : index);
  };

  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education & Achievements</h2>
          <p className="section-subtitle">
            Academic background and notable accomplishments
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>

            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md border border-border"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                    {edu.current && (
                      <span className="block mt-1 text-xs text-primary font-medium">
                        Currently Pursuing
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mt-4 pt-4 border-t border-border">
                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="text-sm text-muted-foreground flex gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  onClick={() => toggleAchievementExpand(index)}
                  className={`bg-card rounded-xl p-5 shadow-md border cursor-pointer transition-colors ${
                    achievement.highlight
                      ? "border-primary/30 bg-gradient-to-r from-card to-primary/5 hover:border-primary/60"
                      : "border-border hover:border-primary/50"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        achievement.highlight ? "bg-primary/20" : "bg-secondary"
                      }`}
                    >
                      <achievement.icon
                        className={`h-5 w-5 ${
                          achievement.highlight ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {achievement.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">{achievement.year}</p>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedAchievements === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="shrink-0"
                        >
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Description */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      expandedAchievements === index
                        ? { opacity: 1, height: "auto" }
                        : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
