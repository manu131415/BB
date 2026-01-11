"use client"

import "./services.css"
import { motion } from "framer-motion"

const Services = () => {
  const lines = [
    ["We", "don't", "just", "build", "brands"],
    ["We", "create", "systems"],
    ["that", "help", "them", "bloom", "!"],
    ["With", "clarity,", "consistency", "and", "intent."]
  ]

  return (
    <section className="services-section">
      <motion.div
        className="services-hero-wrapper"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="services-hero">
          <div className="hero-left">

            {/* Eyebrow */}
            <motion.span
              className="services-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              SERVICES
            </motion.span>

            {/* Title */}
            <h1 className="services-title">
              {lines.map((line, lineIndex) => (
                <div key={lineIndex} className="line">
                  {line.map((word, wordIndex) => (
                    <motion.span
                      key={wordIndex}
                      className="word"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: lineIndex * 0.22 + wordIndex * 0.06,
                        duration: 0.45,
                        ease: "easeOut",
                      }}
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </div>
              ))}
            </h1>
          </div>

          {/* Image */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img src="/services.jpeg" alt="Services visual" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Services
