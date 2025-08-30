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
} from "lucide-react";

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
    role: "Software Engineer Intern",
    company: "Tech Solutions Inc.",
    period: "May 2023 - Aug 2023",
    description:
      "Contributed to the development of a customer-facing web application. Collaborated with a team of developers to implement new features, fix bugs, and improve application performance.",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    role: "Open Source Contributor",
    company: "Innovate Labs (Summer of Code)",
    period: "Jun 2022 - Jul 2022",
    description:
      "Participated in a summer program focused on open-source contributions. Added new features and documentation to a popular data visualization library.",
    technologies: ["JavaScript", "D3.js", "Git", "GitHub"],
  },
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio to showcase my skills and projects. Built with a mobile-first approach and a focus on clean design and user experience.",
    technologies: ["Next.js", "Tailwind CSS", "ShadCN UI", "TypeScript"],
    link: "https://github.com/mradul-gupta/portfolio",
    image: "https://picsum.photos/600/400",
    imageHint: "abstract tech",
  },
  {
    title: "E-commerce Platform API",
    description:
      "A robust backend for an e-commerce website, featuring product management, user authentication, and order processing.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
    link: "https://github.com/mradul-gupta/ecommerce-api",
    image: "https://picsum.photos/600/401",
    imageHint: "code terminal",
  },
  {
    title: "Real-time Chat Application",
    description:
      "A full-stack chat application that allows users to communicate in real-time. Implemented using WebSockets for instant messaging.",
    technologies: ["React", "Socket.IO", "Node.js", "Express"],
    link: "https://github.com/mradul-gupta/chat-app",
    image: "https://picsum.photos/600/402",
    imageHint: "communication network",
  },
];

const skills = {
  languages: ["C++", "Java", "Python", "JavaScript", "TypeScript"],
  frontend: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Redux"],
  backend: ["Node.js", "Express.js", "REST APIs"],
  databases: ["MongoDB", "MySQL", "PostgreSQL"],
  tools: ["Git", "GitHub", "Docker", "VS Code", "Figma"],
};

const education = [
  {
    institution: "XYZ College of Engineering",
    degree: "Bachelor of Technology in Computer Science",
    period: "2022 - 2026",
    details:
      "Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems.",
  },
];

const achievements = [
  {
    title: "Winner, Smart India Hackathon 2023",
    description: "Developed a solution for a government ministry, leading a team of 4.",
    icon: <Award className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "5-Star Coder on HackerRank",
    description: "Achieved top ratings in problem-solving and algorithm challenges.",
    icon: <Star className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Research Publication",
    description: "Co-authored a paper on 'Efficient Machine Learning Models' for a national conference.",
    icon: <BookOpen className="h-4 w-4 text-muted-foreground" />,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section id="home" className="w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Mradul Gupta
                  </h1>
                  <p className="text-xl text-primary font-medium">
                    CSE Engineer & Full-Stack Developer
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A passionate computer science student with a knack for building elegant and efficient software solutions. Eager to leverage my skills in a challenging internship role.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <a href="#contact">Contact Me</a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <a href="/Mradul_Gupta_Resume.pdf" target="_blank" rel="noopener noreferrer">
                      View Resume
                    </a>
                  </Button>
                </div>
              </div>
              <Avatar className="mx-auto h-48 w-48 lg:h-72 lg:w-72">
                <AvatarImage
                  src="https://picsum.photos/300/300"
                  data-ai-hint="professional portrait"
                  alt="Mradul Gupta"
                />
                <AvatarFallback>MG</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My professional journey and hands-on experience in the tech industry.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <CardTitle>{exp.role}</CardTitle>
                        <CardDescription>{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="shrink-0">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{exp.description}</p>
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

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of projects that I'm proud of.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index} className="flex flex-col overflow-hidden">
                  <CardHeader className="p-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      data-ai-hint={project.imageHint}
                      className="aspect-[3/2] object-cover"
                    />
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col p-6">
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <p className="flex-1 text-muted-foreground">{project.description}</p>
                    <div className="my-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
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

        <section id="skills" className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The technologies and tools I work with.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Card>
                <CardContent className="grid gap-6 p-6 md:grid-cols-2">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h3 className="mb-3 text-lg font-semibold capitalize">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill}>{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="education" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Education & Achievements</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My academic background and key accomplishments.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap /> Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {education.map((edu, index) => (
                    <div key={index}>
                      <h3 className="font-semibold">{edu.institution}</h3>
                      <p className="text-sm text-muted-foreground">{edu.degree}</p>
                      <p className="mb-2 text-sm text-muted-foreground">{edu.period}</p>
                      <p className="text-sm">{edu.details}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award /> Achievements
                  </CardTitle>
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
      </main>
      <Footer />
    </div>
  );
}
