import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  compact?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubLink,
  liveLink,
  compact = false,
}: ProjectCardProps) => {
  return (
    <CardContainer className="w-full">
      <CardBody
        className={`relative z-10 bg-card group/card border border-border rounded-xl h-auto w-full ${
          compact ? "p-4" : "p-6"
        }`}
      >
        <CardItem
          translateZ={50}
          className={`${compact ? "text-lg" : "text-xl"} font-bold text-foreground`}
        >
          {title}
        </CardItem>

        <CardItem
          as="p"
          translateZ={60}
          className={`text-muted-foreground text-sm mt-2 ${
            compact ? "line-clamp-2" : "line-clamp-3"
          }`}
        >
          {description}
        </CardItem>

        {image ? (
          <CardItem translateZ={100} className="w-full mt-4">
            <img
              src={image}
              alt={title}
              className={`w-full object-cover rounded-xl group-hover/card:shadow-xl ${
                compact ? "h-44" : "h-56"
              }`}
              loading="lazy"
            />
          </CardItem>
        ) : null}

        <CardItem translateZ={50} className="w-full mt-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardItem>

        <div className={`flex items-center justify-between ${compact ? "mt-4" : "mt-6"}`}>
          {githubLink ? (
            <CardItem
              translateZ={20}
              as="a"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-xl text-xs font-normal text-foreground/80 hover:text-foreground hover:bg-muted transition-colors flex items-center gap-2 ${
                compact ? "px-3 py-1.5" : "px-4 py-2"
              }`}
            >
              <Github className="h-4 w-4" />
              View Code
            </CardItem>
          ) : (
            <span />
          )}

          {liveLink ? (
            <CardItem
              translateZ={20}
              as="a"
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-xl bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 ${
                compact ? "px-3 py-1.5" : "px-4 py-2"
              }`}
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </CardItem>
          ) : null}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
