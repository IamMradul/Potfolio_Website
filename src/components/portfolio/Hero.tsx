import { motion } from "framer-motion";
import { Mail, Calendar, Download, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-background overflow-hidden pt-20"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50" />
      <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] max-w-6xl mx-auto">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left flex flex-col justify-center pt-12 lg:pt-0"
          >
            {/* Top Avatar Group (Optional, mimicking "120+ Satisfied Clients" style) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=1" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=2" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                  +5
                </div>
              </div>
              <div className="text-sm font-medium text-muted-foreground flex flex-col items-start">
                <span className="text-foreground font-bold">Top Rated</span>
                <span>Developer</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 font-black uppercase leading-[1.1] tracking-tight"
            >
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] text-foreground">
                IT'S ME
              </div>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] text-primary">
                MRADUL GUPTA
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-base sm:text-lg lg:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              CSE student specializing in backend systems and AI/ML — ranked among the top competitive coders at my university and passionate about building software that's secure, fast, and built to last.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button size="lg" onClick={scrollToContact} className="rounded-2xl px-8 py-6 shadow-xl shadow-primary/25 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold gap-3 w-full sm:w-auto">
                <Calendar className="h-5 w-5 text-primary-foreground" />
                Contact Me
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-2xl px-8 py-6 border-primary/50 hover:border-primary text-foreground bg-transparent hover:bg-primary/10 gap-2 w-full sm:w-auto">
                <a href="/Resume_Mradul_Gupta.pdf" download>
                  <Download className="h-5 w-5 text-primary" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Photo as ID Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end relative h-full items-center lg:py-10"
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-card/40 backdrop-blur-xl relative group/card border border-primary/20 w-[300px] sm:w-[340px] h-auto rounded-[2.5rem] p-6 shadow-2xl flex flex-col items-center">

                {/* ID Card Top */}
                <CardItem translateZ="30" className="w-full flex justify-between items-center mb-6 pb-4 border-b border-border/50">
                  <div className="font-bold text-lg text-primary font-mono tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    ID: AXZCMG
                  </div>
                  <div className="text-[10px] font-bold px-2.5 py-1 bg-primary/20 text-primary rounded-full uppercase tracking-wider">
                    Official
                  </div>
                </CardItem>

                {/* Profile Photo */}
                <CardItem translateZ="80" className="w-full flex justify-center mb-6">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-[6px] border-background shadow-2xl relative">
                    <img
                      src="/ProfilePhoto.jpg"
                      alt="Mradul Gupta"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full"></div>
                  </div>
                </CardItem>

                {/* Details */}
                <CardItem translateZ="50" className="text-center flex flex-col items-center w-full">
                  <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-1 tracking-tight">MRADUL GUPTA</h2>
                  <p className="text-primary font-semibold text-sm sm:text-base uppercase tracking-[0.2em] mb-8">Software Engineer</p>

                  {/* Fake Barcode / QR Section */}
                  <div className="w-full flex items-center justify-between mt-auto pt-4 border-t border-border/50 opacity-80">
                    <div className="flex flex-col items-start gap-1">
                      <div className="w-24 h-1.5 bg-foreground/20 rounded-full"></div>
                      <div className="w-32 h-1.5 bg-foreground/20 rounded-full"></div>
                      <div className="w-20 h-1.5 bg-foreground/20 rounded-full"></div>
                    </div>
                    <QrCode className="w-10 h-10 text-foreground/40" />
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
