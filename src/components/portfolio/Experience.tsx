import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Backend Intern",
    company: "Kai Logic LLP",
    period: "May 2025 - Jul 2025",
    description: [
      "Developed and tested backend REST APIs using Flask for internal tools",
      "Performed basic security analysis and debugging of backend services",
      "Used Git for version control and collaborated in an agile engineering environment",
      "Improved platform reliability by identifying bugs and optimizing API responses",
    ],
    technologies: ["Flask", "Python", "REST APIs", "Git", "Security Analysis", "Debugging"],
  },
  {
    title: "Web Developer Intern",
    company: "Trigent Software Pvt. Ltd.",
    period: "May 2026 – Jun 2026",
    description: [
      "Contributed to software development projects involving web application design and implementation",
      "Developed and tested Python-based application modules under the guidance of senior engineers",
      "Performed debugging, testing, and issue resolution to improve application quality and reliability",
      "Collaborated with technical teams using Git-based workflows and industry-standard development practices"
    ],
    technologies: ["Python", "Web Development", "Software Testing", "Debugging", "Git", "Agile Development"],
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-12 md:py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Professional experience in backend development and engineering
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative pl-6 pb-8 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/30" />

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-primary border-4 border-background" />

              <div className="relative z-10 bg-card rounded-xl p-4 shadow-md ml-4">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      {exp.title}
                    </h3>
                    <p className="text-base text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground mt-1 sm:mt-0">
                    <Calendar className="h-3.5 w-3.5" />
                    <span className="text-xs">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-1 mb-4 text-sm">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
