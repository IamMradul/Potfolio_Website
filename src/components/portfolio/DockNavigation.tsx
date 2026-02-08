import { Dock, DockIcon } from "@/components/ui/dock";
import {
  Home,
  User,
  Briefcase,
  FolderKanban,
  Wrench,
  GraduationCap,
  FileText,
  Heart,
  Mail,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navItems = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: User, label: "About", href: "#about" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: FolderKanban, label: "Projects", href: "#projects" },
  { icon: Wrench, label: "Skills", href: "#skills" },
  { icon: GraduationCap, label: "Education", href: "#education" },
  { icon: FileText, label: "Publications", href: "#publications" },
  { icon: Heart, label: "Interests", href: "#extracurriculars" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const DockNavigation = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Dock className="bg-background/80 backdrop-blur-lg border-border shadow-lg">
        {navItems.map((item) => (
          <Tooltip key={item.label}>
            <TooltipTrigger asChild>
              <DockIcon
                className="bg-secondary/50 hover:bg-primary/20 transition-colors duration-200"
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="w-full h-full flex items-center justify-center"
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5 text-foreground" />
                </button>
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
