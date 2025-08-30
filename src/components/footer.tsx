import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="w-full border-t border-border/40 bg-background py-12">
      <div className="container flex max-w-screen-2xl flex-col items-center gap-6 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="mailto:mradul.gupta.cse22@ggsipu.ac.in" target="_blank" rel="noopener noreferrer" aria-label="Email">
             <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/mradul-gupta-034852258/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
             <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://github.com/mradul2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
             <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
            </Button>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          © {year} Mradul Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
