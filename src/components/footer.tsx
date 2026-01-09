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
          <Button variant="outline" size="icon" asChild>
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=mradulg306@gmail.com&su=Hello%20Mradul&body=I%20would%20like%20to%20connect%20with%20you."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Email"
  >
    <Mail className="h-5 w-5" />
  </a>
</Button>



          <Button variant="outline" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/mradul-gupta26" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/IamMradul" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
            </Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          © {year} Mradul Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
