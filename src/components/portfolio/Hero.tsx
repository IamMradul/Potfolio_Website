import { motion } from "framer-motion";
import { Mail, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const loadParticles = async () => {
      // Load tsParticles from CDN
      if (!(window as any).tsParticles) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js";
        script.async = true;
        script.onload = () => {
          initParticles();
        };
        document.body.appendChild(script);
      } else {
        initParticles();
      }
    };

    const initParticles = () => {
      const tsParticles = (window as any).tsParticles;
      if (tsParticles) {
        tsParticles.load("tsparticles", {
          background: {
            color: "transparent",
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            number: {
              value: 80,
            },
            size: {
              value: {
                min: 1,
                max: 3,
              },
            },
            move: {
              enable: true,
              speed: 1,
              random: true,
              direction: "random" as const,
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            opacity: {
              value: {
                min: 0.3,
                max: 0.7,
              },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.3,
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 4,
              },
            },
            detectsOn: "window",
          },
          retina_detect: true,
        });
      }
    };

    loadParticles();
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-secondary/30 overflow-hidden"
    >
      {/* tsParticles Canvas */}
      <div
        id="tsparticles"
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

      <div className="section-container py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="cyber-badge mb-6"
            >
            Engineer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Mradul Gupta</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6"
            >
            Engineering Secure & Scalable Systems
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Computer Science Engineering student specializing in backend systems and AI/ML solutions. Co-author of an IEEE conference paper on Fake News Detection and university rank holder in competitive coding. Passionate about building secure, scalable, and production-grade systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start mb-8 w-full sm:w-auto"
            >
              <Button size="lg" onClick={scrollToContact} className="w-full sm:w-auto">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <a href="/Resume_Mradul_Gupta.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>


          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/ProfilePhoto.jpg"
                  alt="Mradul Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/10 scale-110 animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-accent/20 scale-125" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </motion.button>
    </section>
  );
};

export default Hero;
