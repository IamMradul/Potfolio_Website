import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText, Lightbulb, ExternalLink } from "lucide-react";

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
];

const patents = [
  {
    type: "Patent",
    icon: Lightbulb,
    title: "Kalaamitra: AI-Powered E-Commerce Platform",
    description: "Web-Based AI E-Commerce System with semantic search and intelligent product recommendations.",
    status: "Filed",
  },
];

const Publications = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="publications" className="py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Publications & Patents</h2>
          <p className="section-subtitle">
            Research contributions and intellectual property
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Publications */}
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-xl p-6 shadow-lg border border-border hover:border-primary/30 transition-colors duration-300"
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

          {/* Patents */}
          {patents.map((patent, index) => (
            <motion.div
              key={patent.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-xl p-6 shadow-lg border border-border hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <patent.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {patent.type}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full">
                      {patent.status}
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3">
                {patent.title}
              </h3>

              <p className="text-sm text-muted-foreground">{patent.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
