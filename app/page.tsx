import { AboutSection } from '@/components/layout/AboutSection'
import { ExperienceSection } from '@/components/layout/Experiencesection'
import HeroSection from '@/components/layout/HeroSection'
import PhilosophySection from '@/components/layout/PhilosophySection'
import { ProjectsSection } from '@/components/layout/ProjectsSection'
import TechStackSection from '@/components/layout/TechStackSection'
import ContactSection from '@/components/layout/ContactSection'
import { FAQSection } from '@/components/layout/FAQSection'
import { TestimonialsSection } from '@/components/layout/TestimonialsSection'

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ExperienceSection />
      <PhilosophySection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
