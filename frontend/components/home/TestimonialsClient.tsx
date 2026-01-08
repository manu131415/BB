'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { type SanityDocument } from "next-sanity"
import { urlFor } from "@/src/sanity/image"
import "./home.css"

export default function TestimonialsClient({
  testimonials,
}: {
  testimonials: SanityDocument[]
}) {
  // Parent variants for staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="testimonials">
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="testimonials-title"
      >
        What Our Clients Say
      </motion.h2>

      {/* GRID */}
      <motion.div
        className="testimonial-grid"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {testimonials.map((item) => (
          <motion.div
            key={item._id}
            className="testimonial-card"
            variants={itemVariants}
          >
            {/* CLIENT IMAGE */}
            {item.clientImage && (
              <div className="testimonial-logo">
                <Image
                  src={urlFor(item.clientImage)
                    .width(160)
                    .height(160)
                    .quality(90)
                    .auto("format")
                    .url()}
                  alt={item.clientName ?? "Client"}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              </div>
            )}

            {/* TEXT TESTIMONIAL */}
            {item.testimonialText && (
              <p className="quote">“{item.testimonialText}”</p>
            )}

            {/* VIDEO TESTIMONIAL */}
            {item.video && (
              <video
                src={item.video}
                controls
                playsInline
                muted
                loop
                className="testimonial-video"
              />
            )}

            {/* FOOTER */}
            <div className="testimonial-footer">
              <h4>{item.clientName ?? "Anonymous"}</h4>
              {item.brandName && <span>{item.brandName}</span>}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
