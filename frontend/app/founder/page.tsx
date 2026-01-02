"use client"

import { motion } from "framer-motion"

export default function FounderPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/founder.jpg"
            alt="Founder"
            className="w-80 h-80 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Founder Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Hi, I’m <span className="text-black">Your Name</span>
          </h1>

          <h3 className="text-lg text-gray-600 mb-6">
            Founder & Creative Director
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            I started this journey with a simple belief — brands grow best when
            purpose meets clarity. With years of experience in strategy, design,
            and storytelling, I help businesses build identities that truly
            connect.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            My approach blends thoughtful strategy with meaningful design,
            creating brands that feel authentic, confident, and timeless.
          </p>

          <motion.a
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-black text-white font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let’s Work Together
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
