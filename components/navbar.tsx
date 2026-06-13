"use client";

import type React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { aboutMeInfo } from "@/data/info";

const navLinks = [
  { name: "About", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getSectionHref = (hash: string) => (isHomePage ? hash : `/${hash}`);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    if (!isHomePage) {
      setIsOpen(false);
      return;
    }

    const section = document.getElementById(sectionId);

    if (!section) {
      setIsOpen(false);
      return;
    }

    e.preventDefault();
    setIsOpen(false);

    const offset = 80;
    const sectionTop =
      section.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b bg-background/85 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav aria-label="Primary" className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex min-w-0 items-center gap-2">
            <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-primary/20">
              <Image
                src={aboutMeInfo.profileImg}
                alt={`${aboutMeInfo.name} profile photo`}
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>
            <Link
              href="/"
              className="truncate text-lg font-bold tracking-tight transition-colors hover:text-primary"
            >
              {aboutMeInfo.name}
            </Link>
          </div>

          <div className="hidden items-center space-x-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={getSectionHref(link.href)}
                onClick={(e) => handleScrollToSection(e, link.id)}
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}

            <div className="ml-4 flex items-center space-x-2">
              <ModeToggle />
              <Button variant="outline" size="sm" asChild>
                <a href="/resume.pdf" download={`${aboutMeInfo.name} resume.pdf`}>
                  Resume <Download className="h-3 w-3" />
                </a>
              </Button>
              <Button size="sm" asChild>
                <a
                  href={getSectionHref("#contact")}
                  onClick={(e) => handleScrollToSection(e, "contact")}
                >
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen((current) => !current)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" className="border-b bg-background md:hidden">
          <div className="container mx-auto space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={getSectionHref(link.href)}
                onClick={(e) => handleScrollToSection(e, link.id)}
                className="block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <div className="grid gap-2 px-3 pt-3">
              <Button variant="outline" size="sm" asChild>
                <a href="/resume.pdf" download={`${aboutMeInfo.name} resume.pdf`}>
                  Resume <Download className="h-3 w-3" />
                </a>
              </Button>
              <Button size="sm" asChild>
                <a
                  href={getSectionHref("#contact")}
                  onClick={(e) => handleScrollToSection(e, "contact")}
                >
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
