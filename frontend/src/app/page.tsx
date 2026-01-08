'use client'
import HomeMotion from "@/components/home/HomeClient"
import HeroSection from "@/components/home/heroSection"
import Testimonials from "@/components/home/testimonials"
import MembersSection from "@/components/home/membersection"
import JourneySection from "@/components/home/journeySection"
import Services from "@/components/home/services"


export default function Home() {
  return (
    <main>
    <HomeMotion>
      <HeroSection />
      <Services />
      <MembersSection />
      <JourneySection />
      <Testimonials />
      </HomeMotion>
    </main>
  )
}
