import { AboutSection } from '@/components/layout/AboutSection'
import { ExperienceSection } from '@/components/layout/Experiencesection'
import HeroSection from '@/components/layout/HeroSection'
import PhilosophySection from '@/components/layout/PhilosophySection'
import { ProjectsSection } from '@/components/layout/ProjectsSection'
import TechStackSection from '@/components/layout/TechStackSection'
import ContactSection from '@/components/layout/ContactSection'

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <PhilosophySection />
      <ContactSection />
    </>
  )
}
