"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      // Close mobile menu if open
      if (isOpen) setIsOpen(false)

      // Calculate offset (accounting for fixed header)
      const offset = 80 // Adjust this value based on your header height
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - offset

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      })
    }
  }

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-01-13%2011.18.52.jpg-N2gGSRKoNG1rLVJ2VoyYRnF6QkKsm9.jpeg"
                alt="Ahmad Al-Shahal"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <Link href="/" className="text-lg font-bold tracking-tighter hover:text-primary transition-colors">
              Ahmad Al-Shahal
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.id)}
                  className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center ml-4 space-x-2">
              <ModeToggle />
              <div className="relative group">
                <a href="/resume.pdf" download="ahmad-alshahal-resume.pdf">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    Resume <Download className="h-3 w-3" />
                  </Button>
                </a>
              </div>
              <Button size="sm" asChild>
                <a href="#contact" onClick={(e) => handleScrollToSection(e, "contact")}>
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.id)}
                className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-2 p-3">
              <a href="/resume.pdf" download="ahmad-alshahal-resume.pdf">
                <Button variant="outline" size="sm" className="flex items-center justify-center gap-1">
                  Resume <Download className="h-3 w-3" />
                </Button>
              </a>
              <Button size="sm" asChild>
                <a href="#contact" onClick={(e) => handleScrollToSection(e, "contact")}>
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
