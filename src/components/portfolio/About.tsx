import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, Brain, Trophy, Layers } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Backend Development",
    description: "Building robust RESTful APIs and scalable backend architectures with Flask & Next.js",
  },
  {
    icon: Layers,
    title: "Full-Stack Skills",
    description: "Experienced across the stack — from React frontends to Python and Node.js backends",
  },
  {
    icon: Brain,
    title: "AI/ML Integration",
    description: "Developing intelligent systems for real-world applications like misinformation detection",
  },
  {
    icon: Trophy,
    title: "Published Researcher",
    description: "Published at CISES 2025 and filed patent for AI-powered e-commerce platform",
  },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A passionate Computer Science Engineering student dedicated to building
            innovative and scalable digital solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Professional Summary
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Computer Science Engineering student with hands-on experience in
              backend development, AI/ML pipelines, and building scalable
              systems. Skilled in creating RESTful APIs, implementing
              authentication mechanisms, and developing intelligent solutions
              for real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Strong foundation in Python, JavaScript/TypeScript, and modern
              frameworks. Seeking opportunities to contribute to impactful,
              production-grade systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              What Drives Me
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm fascinated by the power of technology to solve real-world
              problems. From building AI pipelines to combat misinformation to
              creating gesture-based authentication systems — I love tackling
              challenging problems with creative solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              I believe in writing clean, maintainable code and continuously
              learning new technologies to stay at the forefront of innovation.
            </p>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
