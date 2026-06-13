import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { footerInfo } from "../data/info";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} {footerInfo.name}. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href={footerInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={footerInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={`mailto:${footerInfo.email}`}
              className="rounded-md text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
