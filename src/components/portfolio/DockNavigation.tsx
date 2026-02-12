import { Dock, DockIcon } from "@/components/ui/dock";
import { Instagram, Github, Linkedin, Twitter, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socialItems = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mradul_5/" },
  { icon: Github, label: "GitHub", href: "https://github.com/IamMradul" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mradul-gupta26/" },
  { icon: Twitter, label: "X (Twitter)", href: "https://x.com/MardulGupta" },
  { icon: Mail, label: "Email", href: "mailto:mradulg306@gmail.com" },
];

const DockNavigation = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Dock className="bg-background/80 backdrop-blur-lg border-border shadow-lg">
        {socialItems.map((item) => (
          <Tooltip key={item.label}>
            <TooltipTrigger asChild>
              <DockIcon
                className="bg-secondary/50 hover:bg-primary/20 transition-colors duration-200"
              >
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5 text-foreground" />
                </a>
              </DockIcon>
            </TooltipTrigger>
            <TooltipContent side="top" className="mb-2">
              {item.label}
            </TooltipContent>
          </Tooltip>
        ))}
      </Dock>
    </div>
  );
};

export default DockNavigation;
