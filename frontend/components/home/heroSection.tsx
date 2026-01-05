"use client"

import { motion } from "framer-motion"
import "./home.css"

const headline = ["Where", "Brands", "Bloom"]

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Brand Gradient Background */}
      <div className="absolute inset-0 hero-bg" />
      <div className="absolute inset-0 hero-overlay" />

      {/* Soft Bloom Shape */}
      <div className="bloom-shape" />

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.18 } }
          }}
          className="hero-card"
        >
          {/* Headline */}
          <h1 className="hero-title">
            {headline.map((word, i) => (
              <motion.span
                key={i}
                className="hero-word"
                variants={{
                  hidden: { y: "120%" },
                  show: {
                    y: "0%",
                    transition: { duration: 0.9, ease: "easeOut" }
                  }
                }}
              >
                {word === "Bloom" ? (
                  <span className="hero-gradient-text">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="hero-subtext"
          >
            Helping brands grow through strategy, design,
            and meaningful storytelling.
          </motion.p>

          {/* CTA */}
          <motion.a
            href="/contact"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 1.2,
              type: "spring",
              stiffness: 90,
              damping: 15
            }}
            className="hero-cta">
            Let’s Build Your Brand
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
