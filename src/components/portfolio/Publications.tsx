import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText } from "lucide-react";

const publications = [
  {
    type: "Research Paper",
    icon: FileText,
    title: "Advanced Fake News Detection",
    venue: "International Conference on Intelligent and Secure Engineering Solutions (CISES 2025)",
    status: "Published",
    description:
      "Presented research on machine learning and NLP-based approaches for automated misinformation detection with high accuracy.",
  },
  {
    type: "Research Paper",
    icon: FileText,
    title: "From Detection to Repair: A Hybrid LLM-Based Framework for Vulnerability Analysis in Open-Source Software",
    venue: "Research Paper",
    status: "In Progress",
    description:
      "A hybrid LLM-based framework for identifying and repairing vulnerabilities in open-source software.",
  },
];

const Publications = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="publications" className="py-12 md:py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Publications</h2>
          <p className="section-subtitle">
            Research contributions and published work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Publications */}
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10 bg-card rounded-xl p-6 shadow-lg border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <pub.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {pub.type}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-2 py-0.5 bg-cyber/10 text-cyber text-xs rounded-full">
                      {pub.status}
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {pub.title}
              </h3>

              <p className="text-sm text-primary font-medium mb-3">{pub.venue}</p>

              <p className="text-sm text-muted-foreground">{pub.description}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Publications;
