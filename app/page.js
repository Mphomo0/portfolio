"use client"

import Hero from "@/components/HomePage/Hero"
import AboutHome from "@/components/HomePage/AboutHome"
import HomeProjects from "@/components/HomePage/HomeProjects"
import CallToAction from "@/components/CallToAction"


export default function Home() {
  return (
    <main>
      {/* Render the Hero component */}
      <Hero />
      {/* Render the AboutHome component */}
      <AboutHome />
      {/* Render the HomeProjects component */}
      <HomeProjects />
      {/* Render the CallToAction component */}
      <CallToAction />
    </main>
  )
}
