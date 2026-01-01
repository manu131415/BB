"use client"

import { motion } from "framer-motion"
import "./home.css"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Moving Background */}
      <div className="absolute inset-0 hero-bg" />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center bg-white bg-opacity-50 p-8 rounded-lg overflow-hidden">

          {/* Rolling Heading */}
          <motion.h1
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut"
            }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Where Brands Grow{" "}
            <motion.span
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: 0.2
              }}
              className="text-blue-400 inline-block"
            >
              With Purpose
            </motion.span>
          </motion.h1>

          {/* Rolling Subtext (looping drift) */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: [0, 0, 0],
              opacity: 1
            }}
            transition={{
              duration: 4,
              ease: "easeInOut"
            }}
            className="text-lg md:text-xl text-black"
          >
            Bloom Branding helps businesses shape clear identities through
            strategy, design, and storytelling.
          </motion.p>

        </div>
      </div>
    </section>
  )
}
