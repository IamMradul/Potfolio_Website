"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Briefcase,
  Zap,
  GitFork,
  Star,
  ExternalLink,
  GraduationCap,
  Award,
  BookOpen,
  PhoneCallIcon,
} from "lucide-react";
import { useEffect } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const experiences = [
  {
    role: "Intern – Cohatch",
    company: "Cohatch",
    period: "Jun 2025 – Sep 2025",
    description:
      "Assisted in backend development and system security analysis for internal tools. Gained hands-on experience with Flask APIs, Git version control, and debugging production environments. Collaborated with the engineering team to improve platform reliability and security practices.",
    technologies: ["Flask", "Git", "APIs", "Security"],
  },
];

const projects = [
  {
    title: "Gesture-Based CAPTCHA System Personal Project",
    description:
      "Built a Flask web app that verifies user gestures using OpenCV and MediaPipe. Added features: audio prompts, GIF previews, and SQLite-based logging. Achieved 98% detection accuracy; implemented responsive UI for mobile support.",
    technologies: ["Flask", "OpenCV", "MediaPipe", "SQLite"],
    link: "https://github.com/iamMradul/gesture-captcha-project",
    image: "https://picsum.photos/600/400",
    imageHint: "gesture recognition",
  },
  {
    title: "E-Commerce Platform for Traditional & Antique Items",
    description:
      "Full-stack web development. Emphasize backend, authentication, database design. If you have good backend work (Flask/Django, MySQL, payment integration)",
    technologies: ["Flask", "Django", "MySQL", "Authentication"],
    link: "https://github.com/iamMradul/ecommerce-antique",
    image: "https://picsum.photos/600/401",
    imageHint: "ecommerce",
  },
  {
    title: "Advanced Fake News Detection",
    description:
      "Built and compared multiple ML and deep learning models (TF-IDF + LR, LSTM, BERT) for classifying fake news. Deployed model as an API with FastAPI and tested with Postman. Documented the entire project on GitHub with README and usage examples.",
    technologies: ["FastAPI", "ML", "BERT", "Postman"],
    link: "https://github.com/iamMradul/fake-news-detection",
    image: "https://picsum.photos/600/402",
    imageHint: "machine learning",
  },
];

const skills = {
  languages: ["Python", "Java", "C++", "C"],
  devTools: ["FastAPI", "Git", "SQLite", "OpenCV", "MediaPipe", "scikit-learn", "pandas", "Linux", "Postman"],
  concepts: ["Cybersecurity", "Machine Learning", "Image Processing", "OOP"],
  interpersonal: ["Leadership", "Public Speaking", "Collaboration", "Time Management"],
};

const education = [
  {
    institution: "Chandigarh University",
    degree: "Bachelor of Technology in Computer Science Engineering",
    period: "2024 - 2028",
    details:
      "Relevant Courses: Network Security, Python Programming, ML & AI, Data Structures.",
  },
];

const achievements = [
  {
    title: "2nd Rank – University Coding Competition",
    description: "Secured 2nd place in a competitive coding event at Chandigarh University.",
    icon: <Award className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Finalist – Google Gen Ai Exchange Hackathon",
    description: "Reached the finals in a Google Gen Ai Exchange hackathon event.",
    icon: <Star className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Finalist – Zinnovaatio Hackathon",
    description: "Reached the finals in a national-level hackathon event.",
    icon: <Star className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Publication: 'Advanced Fake News Detection'",
    description: "Published at the 3rd International Conference on Intelligent and Secure Engineering Solutions (CISES 2025).",
    icon: <BookOpen className="h-4 w-4 text-muted-foreground" />,
  },
];

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, { threshold: 0.15 });
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <div className="absolute top-0 z-[-2] h-screen w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] animate-gradient-move" />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="w-full py-20 md:py-32 lg:py-40 reveal">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 text-left">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Mradul Gupta</h1>
                  <div className="flex flex-wrap gap-4 items-center mt-2">
                    <a href="mailto:mradul306@gmail.com" className="text-primary font-medium flex items-center gap-1"><Mail className="h-4 w-4" /> mradul306@gmail.com</a>
                    <a href="https://www.linkedin.com/in/mradul-gupta-033438332" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-1"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                    <a href="https://github.com/iamMradul" target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-1"><Github className="h-4 w-4" /> GitHub</a>
                  </div>
                  <p className="max-w-xl text-muted-foreground md:text-xl mt-4 leading-relaxed">
                    Motivated and fast-learning Computer Science student with strong foundations in Python, backend development, and cybersecurity. Proven experience in building real-time gesture authentication systems, chatbots, and ML pipelines. Seeking internship opportunities in Cybersecurity, AI/ML, or Backend Development to apply my skills in solving real-world problems.
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <Button asChild size="lg" className="shadow-md hover:scale-105 transition">
                    <a href="#contact">Contact Me</a>
                  </Button>
                  <Button asChild variant="secondary" size="lg" className="shadow-md hover:scale-105 transition">
                    <a href="/resume_mradul_gupta.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
              <Avatar className="h-64 w-64 lg:h-96 lg:w-96 shadow-xl border-4 border-primary/30 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <AvatarImage src="/Mradul_Photo.jpg" data-ai-hint="professional portrait" alt="Mradul Gupta" />
                  <AvatarFallback className="text-3xl font-bold">MG</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </section>
        
        {/* Work Experience Section */}
        <section id="experience" className="w-full bg-background/50 py-12 md:py-24 lg:py-32 reveal">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-start justify-center space-y-4 text-left">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">My professional journey and hands-on experience in the tech industry.</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12">
              {experiences.map((exp, index) => (
                <Card key={index} className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-left">{exp.role}</CardTitle>
                        <CardDescription className="text-left">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="shrink-0">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground text-left">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Extracurriculars Section */}
        <section
          id="extracurriculars"
          className="w-full bg-background/50 py-12 md:py-24 lg:py-32 reveal"
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-start justify-center space-y-4 text-left">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">
                  Extracurriculars
                </h2>

                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Clubs, volunteering, and creative pursuits.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Card Template */}
              <Card>
                <CardContent>
                  <div className="h-8 w-8 mb-3 text-primary">
                    {/* Users Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-5-4M9 20H4v-2a4 4 0 015-4m8-6a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="mb-2 font-semibold text-primary">Core Team Member, Google Developer Groups</div>
                  <div className="text-muted-foreground text-sm">
                    Contributing to tech community growth through workshops, hackathons, and collaborative events.
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="h-8 w-8 mb-3 text-primary">
                    {/* Code Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                    </svg>
                  </div>
                  <div className="mb-2 font-semibold text-primary">Member, Coding Club - Chandigarh University</div>
                  <div className="text-muted-foreground text-sm">
                    Participated in coding challenges and knowledge-sharing sessions to strengthen problem-solving skills.
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="h-8 w-8 mb-3 text-primary">
                    {/* Hackathon Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="mb-2 font-semibold text-primary">Hackathon Enthusiast</div>
                  <div className="text-muted-foreground text-sm">
                    Implemented projects like "LLMs to Detect Vulnerability in Open-Source Software" and Gesture-based CAPTCHA.
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="h-8 w-8 mb-3 text-primary">
                    {/* Presentation Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M4 11h16M12 11v10m-4-4h8" />
                    </svg>
                  </div>
                  <div className="mb-2 font-semibold text-primary">Conference Presenter, CISES 2025</div>
                  <div className="text-muted-foreground text-sm">
                    Co-author of research paper on Advanced Fake News Detection presented at the 3rd International Conference on Intelligent and Secure Engineering Solutions.
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="h-8 w-8 mb-3 text-primary">
                    {/* Handshake Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v1H6v2h3v1c0 1.657 1.343 3 3 3h1v3h2v-3h1c1.657 0 3-1.343 3-3v-1h3v-2h-3v-1c0-1.657-1.343-3-3-3h-1V5h-2v3h-1z" />
                    </svg>
                  </div>
                  <div className="mb-2 font-semibold text-primary">Volunteer, Tech Awareness NGO</div>
                  <div className="text-muted-foreground text-sm">
                    Spread digital literacy and cybersecurity awareness through community sessions and workshops.
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="h-8 w-8 mb-3 text-primary">
                    {/* Camera Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h4l2-3h6l2 3h4v12H3V8z" />
                    </svg>
                  </div>
                  <div className="mb-2 font-semibold text-primary">Photography & Sketching</div>
                  <div className="text-muted-foreground text-sm">
                    Passionate about creative arts, with a portfolio showcasing photography and hand-drawn sketches.
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="h-8 w-8 mb-3 text-primary">
                    {/* Sports Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6a3 3 0 00-6 0 3 3 0 00-6 0v12a3 3 0 006 0 3 3 0 006 0V6z" />
                    </svg>
                  </div>
                  <div className="mb-2 font-semibold text-primary">Sports Enthusiast</div>
                  <div className="text-muted-foreground text-sm">
                    Active in university-level sports including cricket and badminton for fitness and teamwork.
                  </div>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>

        {/* Projects Section */}
<section id="projects" className="w-full py-12 md:py-24 lg:py-32 reveal">
  <div className="container mx-auto px-4 md:px-8">
    <div className="flex flex-col items-start justify-center space-y-4 text-left">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          A selection of projects that I'm proud of.
        </p>
      </div>
    </div>

    <div className="mx-auto grid gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Gesture-Based CAPTCHA",
          description: "A web-based CAPTCHA system that uses computer vision and pose detection to verify human users through gesture recognition.",
          image: "/images/gesture-captcha.png",
          technologies: ["Flask", "OpenCV", "MediaPipe", "SQLite"],
          link: "https://github.com/IamMradul/Gesture-Based-CAPTCHA-System"
        },
        {
          title: "Fake News Detection",
          description: "A machine learning system to detect fake news using advanced NLP techniques and ensemble models.",
          image: "/images/fake-news.png",
          technologies: ["Python", "Scikit-Learn", "NLP", "Flask"],
          link: "https://github.com/IamMradul/Advance-Fake-News-Detection"
        },
        {
          title: "E-commerce Website",
          description: "A complete MVP web application that connects artisans with art lovers through a beautiful, culturally-inspired marketplace.",
          image: "/images/KalaMitra.png",
          technologies: ["TypeScript", "TailwindCSS", "JavaScript"],
          link: "https://github.com/IamMradul/KalaaMitra"
        },
        {
          title: "News App",
          description: "An AI-powered chatbot for answering queries in real-time using NLP and a Flask backend.",
          image: "/images/News_app.png",
          technologies: ["TypeScript", "TailwindCSS", "JavaScript"],
          link: "https://github.com/IamMradul/News-app"
        },
        {
          title: "Ira – The Anti‑Distraction Bot",
          description: "Ira is a Windows desktop study companion that helps you stick to focus sessions, take structured breaks, and stay hydrated. It speaks motivating prompts using Edge TTS, shows a modern Tkinter UI, tracks progress with a color bar, and can use your webcam to detect if you leave your seat and remind you to return.",
          image: "/images/Ira.png",
          technologies: ["Flask", "OpenCV", "MediaPipe", "SQLite"],
          link: "https://github.com/IamMradul/Ira-The-Anti-Distraction-Bot"
        }
      ].map((project, index) => (
        <Card key={index} className="flex flex-col overflow-hidden">
          <CardHeader className="p-0">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="aspect-[3/2] object-cover"
            />
          </CardHeader>
          <CardContent className="flex flex-1 flex-col p-6 text-left">
            <CardTitle className="mb-2">{project.title}</CardTitle>
            <p className="flex-1 text-muted-foreground">{project.description}</p>
            <div className="my-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
            <Button asChild className="mt-auto w-full">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

        {/* Skills Section */}
        <section id="skills" className="w-full bg-background/50 py-12 md:py-24 lg:py-32 reveal">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-start justify-center space-y-4 text-left">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Programming languages, development tools, technical concepts, and interpersonal skills.</p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <CardContent className="grid gap-6 p-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-lg font-semibold">Programming Languages</h3>
                    <div className="flex flex-wrap gap-2">{skills.languages.map((skill) => (<Badge key={skill}>{skill}</Badge>))}</div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-lg font-semibold">Development Tools</h3>
                    <div className="flex flex-wrap gap-2">{skills.devTools.map((tool) => (<Badge key={tool}>{tool}</Badge>))}</div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-lg font-semibold">Technical Concepts</h3>
                    <div className="flex flex-wrap gap-2">{skills.concepts.map((concept) => (<Badge key={concept}>{concept}</Badge>))}</div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-lg font-semibold">Interpersonal Skills</h3>
                    <div className="flex flex-wrap gap-2">{skills.interpersonal.map((skill) => (<Badge key={skill}>{skill}</Badge>))}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Education Section */}
<section id="education" className="w-full py-12 md:py-24 lg:py-32 reveal">
  <div className="container mx-auto px-4 md:px-8">
    <div className="flex flex-col items-start justify-center space-y-4 text-left">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Education, Achievements & Publication</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Academic background, key accomplishments, and publication.
        </p>
      </div>
    </div>

    <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
      {/* Education Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><GraduationCap /> Education</CardTitle>
        </CardHeader>
        <CardContent>
          {[
            {
              institution: "Lucknow Public School",
              degree: "Class 10 (CBSE)",
              period: "2022",
              details: "Scored 90.6% in CBSE Board Examination."
            },
            {
              institution: "Lucknow Public School",
              degree: "Class 12 (CBSE)",
              period: "2024",
              details: "Scored 85.9% in CBSE Board Examination."
            },
            {
              institution: "Chandigarh University",
              degree: "B.E. in Computer Science and Engineering",
              period: "2024 - 2028",
              details: "Currently pursuing 2nd year. First-year CGPA: 8.67 (86.7%)."
            }
          ].map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{edu.institution}</h3>
              <p className="text-sm text-muted-foreground">{edu.degree}</p>
              <p className="mb-2 text-sm text-muted-foreground">{edu.period}</p>
              <p className="text-sm">{edu.details}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Achievements & Publications Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Award /> Achievements & Publication</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {achievements.map((ach, index) => (
            <div key={index} className="flex items-start gap-4">
              {ach.icon}
              <div>
                <h3 className="font-semibold">{ach.title}</h3>
                <p className="text-sm text-muted-foreground">{ach.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  </div>
</section>

        {/* Summary Section (centered for best look) */}
        <section id="summary" className="w-full py-12 md:py-24 lg:py-32 reveal">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Summary</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Second-year B.E. Computer Science student at Chandigarh University with a strong interest in Cybersecurity, Machine Learning, and Backend Development. Skilled in Python, FastAPI, and OpenCV, with hands-on experience building gesture-based authentication systems, multilingual legal chatbots, and fake news detection models.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Tailwind custom animation classes (add to your global CSS or tailwind.config.js)
/*
@layer utilities {
  .animate-fade-in-up {
    opacity: 1 !important;
    transform: translateY(0) !important;
    transition: opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1);
  }
  .reveal {
    opacity: 0;
    transform: translateY(40px);
  }
  .animate-gradient-move {
    animation: gradientMove 8s ease-in-out infinite alternate;
  }
  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }
}
*/
