import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Code, Brain, Trophy } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Security-Focused",
    description: "Building secure RESTful APIs and implementing robust authentication mechanisms",
  },
  {
    icon: Code,
    title: "Backend Development",
    description: "Experienced in Flask, Next.js, and creating scalable backend architectures",
  },
  {
    icon: Brain,
    title: "AI/ML Integration",
    description: "Developing intelligent systems for threat detection and misinformation analysis",
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
            secure and innovative digital solutions
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
              cybersecurity fundamentals, backend development, and secure system
              design. Skilled in building secure RESTful APIs, implementing
              authentication and authorization mechanisms, performing basic
              security analysis, and developing AI/ML pipelines for threat and
              misinformation detection.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Strong foundation in Linux, API security, debugging, and system
              reliability. Seeking opportunities to contribute to secure,
              scalable, production-grade systems.
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
              I'm fascinated by the intersection of security and innovation. In
              an increasingly connected world, I believe that building secure
              systems isn't just a technical challenge—it's a responsibility.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Whether it's creating gesture-based CAPTCHA systems for enhanced
              authentication or developing AI pipelines to combat misinformation,
              I'm always looking for ways to make technology safer and more
              reliable for everyone.
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
