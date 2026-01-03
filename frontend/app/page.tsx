"use client"

import HeroSection from "@/components/home/heroSection"
import Testimonials from "@/components/home/testimonials"
import MembersSection from "@/components/home/membersection"
import JourneySection from "@/components/home/journeySection"


export default function Home() {
  return (
    <main> 
      <HeroSection />
      <MembersSection />
      <JourneySection />
      <Testimonials />
    </main>
  )
}
