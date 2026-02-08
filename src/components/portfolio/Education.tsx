import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Trophy, Award, Medal } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
    institution: "Chandigarh University",
    location: "Mohali, India",
    period: "2024 – 2028",
    current: true,
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "Google Gen AI Exchange Hackathon",
    description: "Finalist, recognized among top-performing teams nationwide",
    highlight: true,
  },
  {
    icon: Award,
    title: "Zinnovatio Hackathon",
    description: "Winner, awarded for innovative problem-solving and technical execution",
    highlight: true,
  },
  {
    icon: Medal,
    title: "University Coding Competition",
    description: "Secured 2nd Position, demonstrating strong algorithmic skills",
  },
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

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
                  className={`bg-card rounded-xl p-5 shadow-md border ${
                    achievement.highlight
                      ? "border-primary/30 bg-gradient-to-r from-card to-primary/5"
                      : "border-border"
                  }`}
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
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
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
