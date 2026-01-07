"use client"
import { motion } from "framer-motion"
import HeroSection from "@/components/home/heroSection"
import Testimonials from "@/components/home/testimonials"
import MembersSection from "@/components/home/membersection"
import JourneySection from "@/components/home/journeySection"


export default function Home() {
  return (
    <motion.main
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>

      <HeroSection />
      <MembersSection />
      <JourneySection />
      <Testimonials />
    </motion.main>
  )
}
