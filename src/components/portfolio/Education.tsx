import { motion } from "framer-motion";
import { useEffect, useState, type SyntheticEvent } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Trophy, Award, Medal, ChevronDown, Images, X } from "lucide-react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

const education = [
  {
    degree: "Bachelor of Engineering (B.E.) – Computer Science & Engineering",
    institution: "Chandigarh University",
    location: "Mohali, India",
    period: "2024 – 2028",
    current: true,
    highlights: [
      "Specialization: Backend Systems, AI/ML, and Secure Architecture",
      "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Systems, Computer Networks",
    ],
  },
];

const schooling = [
  {
    level: "Senior Secondary (Class 12)",
    institution: "Lucknow Public Schools and Colleges",
    location: "Science (Physics, Chemistry, Mathematics)",
    period: "2023 – 2024",
    grade: "85.9%",
    highlights: [
      "Focused on Physics, Chemistry, and Mathematics",
      "Built a strong academic base for engineering and software development",
    ],
  },
  {
    level: "Secondary Education (Class 10)",
    institution: "Lucknow Public Schools and Colleges",
    location: "General Studies",
    period: "2021 – 2022",
    grade: "90.6%",
    highlights: [
      "Completed foundational schooling with emphasis on mathematics and science",
      "Developed consistent academic discipline and problem-solving habits",
    ],
  },
];

type Achievement = {
  icon: typeof Trophy;
  title: string;
  description: string;
  year: string;
  highlight?: boolean;
  link?: string;
  linkLabel?: string;
  photos: string[];
};

const achievements: Achievement[] = [
  {
    icon: Award,
    title: "Google Gen AI Exchange Hackathon – Finalist",
    description:
      "Selected among top-performing teams nationwide for building AI-powered solutions using Google Generative AI technologies.",
    year: "2025",
    highlight: true,
    photos: [
      "/images/Mradul Gupta top 10 AI-Powered Marketplace Assistant for Local Artisans Google Gen AI.png",
      "/images/Google Gen Ai 1.jpeg",
      "/images/Google Gen Ai 2.jpeg",
      "/images/Google Gen Ai 3.jpeg",
    ],
  },
  {
  icon: Trophy,
  title: "GDG TechSprint Hackathon – 5× Winner",
  description:
    "Secured 1st place in five Google Developer Group (GDG) TechSprint hackathons hosted at five different universities, demonstrating consistent technical excellence, architecture design, and competitive performance.",
  year: "2026",
  highlight: true,
  photos: [
    "/images/winner CUSAT.png",
    "/images/GDG_IMACE_Winner.jpg",
    "/images/Devfusion.jpg",
  ],
},
  {
    icon: Award,
    title: "Hackshastra 2.0 – UI/UX Winner",
    description:
      "Participated in Hackshastra 2.0, a 30-hour hackathon, and won in the UI/UX category for creating an impactful and user-centered product experience.",
    year: "2026",
    highlight: true,
    photos: [
      "/images/Hackshastra2.0.jpeg",
      "/images/Hackshastra 2.0 2.jpeg",
    ],
  },
  {
    icon: Award,
    title: "Hacksagon 2026 – Finalist",
    description:
      "Reached the Finals of Hacksagon 2026, a competitive hackathon that brought together talented teams to tackle real-world challenges, demonstrating strong technical skills, creative problem-solving, and collaborative innovation under pressure.",
    year: "2026 ",
    photos: [
      "/images/Hacksagon_Finalist.jpg",
      "/images/Hacksagon_1.jpeg",
      "/images/Hacksagon_2.jpeg",
      "/images/Hacksagon_3.jpeg",
    ],
  },
  {
    icon: Medal,
    title: "Zinnovatio Hackathon – Winner",
    description:
      "Recognized for innovative problem-solving, architecture design, and impactful technical implementation.",
    year: "2024",
    photos: [],
  },
  {
    icon: Medal,
    title: "University Coding Competition – 2nd Rank",
    description:
      "Secured 2nd position, demonstrating strong algorithmic thinking and competitive programming skills.",
    year: "2024",
    photos: [
      "/images/Coding_Competition.jpg"
    ],
  },
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [expandedAchievements, setExpandedAchievements] = useState<number | null>(null);
  const [activePhotos, setActivePhotos] = useState<number | null>(null);
  const [photoOrientations, setPhotoOrientations] = useState<Record<string, "landscape" | "portrait" | "square">>({});
  const selectedAchievement = activePhotos !== null ? achievements[activePhotos] : null;
  const selectedPhotos = selectedAchievement?.photos ?? [];
  const handlePhotoLoad = (photo: string) => (event: SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    const orientation =
      naturalWidth > naturalHeight
        ? "landscape"
        : naturalWidth < naturalHeight
          ? "portrait"
          : "square";

    setPhotoOrientations((current) =>
      current[photo] === orientation ? current : { ...current, [photo]: orientation },
    );
  };

  const photoCards = selectedPhotos.map((photo, index) => {
    const orientation = photoOrientations[photo] ?? "landscape";
    const layoutClasses = [
      "top-10 left-[10%] rotate-[-6deg]",
      "top-20 left-[34%] rotate-[5deg]",
      "top-14 left-[58%] rotate-[-4deg]",
      "top-28 left-[72%] rotate-[7deg]",
      "top-[46%] left-[16%] rotate-[3deg]",
      "top-[50%] left-[42%] rotate-[-6deg]",
      "top-[52%] left-[66%] rotate-[5deg]",
    ];

    return {
      title: `${selectedAchievement?.title ?? "Photo"} ${index + 1}`,
      image: photo,
      className: `absolute ${layoutClasses[index % layoutClasses.length]}`,
      orientation,
    };
  });

  const toggleAchievementExpand = (index: number) => {
    if (expandedAchievements === index) {
      setExpandedAchievements(null);
      setActivePhotos(null);
      return;
    }

    setExpandedAchievements(index);
    setActivePhotos(null);
  };

  const togglePhotos = (index: number) => {
    setActivePhotos(activePhotos === index ? null : index);
  };

  useEffect(() => {
    if (activePhotos !== null) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "";
  }, [activePhotos]);

  return (
    <section id="education" className="py-12 md:py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education & Achievements</h2>
          <p className="section-subtitle">
            Academic background and notable accomplishments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>

            {education.map((edu, index) => (
              <div
                key={index}
                className="relative z-10 bg-card rounded-xl p-6 shadow-md border border-border"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                    {edu.current && (
                      <span className="block mt-1 text-xs text-primary font-medium">
                        Currently Pursuing
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mt-4 pt-4 border-t border-border">
                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="text-sm text-muted-foreground flex gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-6">
              <h4 className="text-base md:text-lg font-semibold mb-4 text-foreground">
                Schooling
              </h4>

              <div className="space-y-4">
                {schooling.map((school, index) => (
                  <motion.div
                    key={school.level}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="relative z-10 bg-card rounded-xl p-5 shadow-md border border-border"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {school.level}
                        </h4>
                        <p className="text-primary font-medium">{school.institution}</p>
                        <p className="text-sm text-muted-foreground">{school.location}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{school.period}</span>
                    </div>

                    {school.grade && (
                      <p className="mt-2 text-sm text-foreground">
                        Grade: <span className="font-medium">{school.grade}</span>
                      </p>
                    )}

                    <div className="mt-4 pt-4 border-t border-border">
                      <ul className="space-y-2">
                        {school.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-6 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className={`relative z-10 bg-card rounded-xl p-5 shadow-md border transition-colors ${
                    achievement.highlight
                      ? "border-primary/30 hover:border-primary/60"
                      : "border-border hover:border-primary/50"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start gap-4 cursor-pointer" onClick={() => toggleAchievementExpand(index)}>
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        achievement.highlight ? "bg-primary/20" : "bg-secondary"
                      }`}
                    >
                      <achievement.icon
                        className={`h-5 w-5 ${
                          achievement.highlight ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {achievement.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">{achievement.year}</p>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedAchievements === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="shrink-0"
                        >
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Description */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      expandedAchievements === index
                        ? { opacity: 1, height: "auto" }
                        : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>

                      {achievement.link && (
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex mt-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          {achievement.linkLabel || "View Achievement"}
                        </a>
                      )}

                      {achievement.photos && achievement.photos.length > 0 && (
                        <div className="mt-4">
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              togglePhotos(index);
                            }}
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            <Images className="h-4 w-4" />
                            Photos
                          </button>

                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {activePhotos !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm px-4 py-8 md:p-10"
          onClick={() => setActivePhotos(null)}
        >
          <div
            className="relative w-full max-w-6xl mx-auto h-full flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePhotos(null)}
              className="absolute right-2 top-2 md:right-4 md:top-4 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-background/90 border border-border hover:border-primary/60 transition-colors"
              aria-label="Close photos"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="w-full h-full max-h-[88vh]">
              <p className="text-center text-sm md:text-base text-white/90 font-medium mb-4">
                {selectedAchievement?.title} - Photos
              </p>

              <DraggableCardContainer className="w-full h-[78vh] md:h-[82vh] overflow-clip rounded-3xl bg-white/5 border border-white/10">
                {photoCards.map((item) => (
                  <DraggableCardBody
                    key={item.title}
                    className={`${item.className} ${
                      item.orientation === "landscape"
                        ? "w-80 md:w-[22rem]"
                        : item.orientation === "portrait"
                          ? "w-56 md:w-64"
                          : "w-72 md:w-80"
                    }`}
                  >
                    <a href={item.image} target="_blank" rel="noopener noreferrer" className="block">
                      <img
                        src={item.image}
                        alt={item.title}
                        onLoad={handlePhotoLoad(item.image)}
                        className={`pointer-events-none relative z-10 mx-auto block max-w-full h-auto w-auto rounded-xl object-contain object-center ${
                          item.orientation === "landscape"
                            ? "max-h-80 md:max-h-[22rem]"
                            : item.orientation === "portrait"
                              ? "max-h-60 md:max-h-72"
                              : "max-h-72 md:max-h-80"
                        }`}
                        loading="lazy"
                      />
                    </a>
                    <h3 className="mt-3 text-center text-base font-semibold text-neutral-200">
                      {item.title}
                    </h3>
                  </DraggableCardBody>
                ))}
              </DraggableCardContainer>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
