import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Publications from "@/components/portfolio/Publications";
import Extracurriculars from "@/components/portfolio/Extracurriculars";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import DockNavigation from "@/components/portfolio/DockNavigation";

const Index = () => {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Publications />
      <Extracurriculars />
      <Contact />
      <Footer />
      <DockNavigation />
    </main>
  );
};

export default Index;
