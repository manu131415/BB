"use client"

import "./home.css"
import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    type: "text",
    quote:
      "Bloom Branding helped us define our voice with clarity and purpose. The impact was immediate.",
    name: "Alex P.",
    role: "Founder, StartupX",
    logo: "/bloom.jpg",
  },
  {
    type: "video",
    video: "/client1.mp4",
    name: "Jamie L.",
    role: "Marketing Head, Nova Co.",
    logo: "/nova.png",
  },
  {
    type: "text",
    quote:
      "Every decision felt intentional. Strategy, design, and storytelling were perfectly aligned.",
    name: "Morgan S.",
    role: "Creative Director, Orbit",
    logo: "/orbit.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Logo (ALL testimonials) */}
            <div className="testimonial-logo">
              <Image
                src={item.logo}
                alt={`${item.name} company logo`}
                width={90}
                height={40}
                className="object-contain"
              />
            </div>

            {/* TEXT TESTIMONIAL */}
            {item.type === "text" && (
              <p className="quote">“{item.quote}”</p>
            )}

            {/* VIDEO TESTIMONIAL */}
            {item.type === "video" && (
              <video
                src={item.video}
                controls
                className="testimonial-video"
              />
            )}

            <div className="testimonial-footer">
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
