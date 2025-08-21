import About from "@/components/about"
import Navbar from "@/components/navbar"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import CommunicationSkills from "@/components/communication-skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Volunteering from "@/components/volunteering"
import Achievements from "@/components/achievements"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        {/* <Volunteering /> */}
        {/* <CommunicationSkills /> */}
        {/* <Achievements /> */}
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
