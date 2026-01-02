"use client"

import React from "react"
import { motion } from "framer-motion"
import "./membersection.css"

interface CardProps {
  title: string
  description: string
  imageUrl?: string
  tags?: string[]
  link?: string
  className?: string
}

/* -------------------- Member Card -------------------- */

const MemberCard: React.FC<CardProps & { index: number }> = ({
  title,
  description,
  imageUrl,
  tags = [],
  link,
  className = "",
  index
}) => {
  return (
    <motion.div
      className={`member-card ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15, // stagger effect
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {imageUrl && (
        <motion.div
          className="card-image"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="card-img"
            loading="lazy"
          />
        </motion.div>
      )}

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>

        {tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                className="tag"
                whileHover={{ scale: 1.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}

        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Profile
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}

/* -------------------- Data -------------------- */

const teamMembers = [
  {
    title: "John Doe",
    description:
      "Founder & CEO with 10+ years of experience in web development and digital strategy.",
    imageUrl: "a1.jpg",
    tags: ["Leadership", "Strategy", "Development"],
    link: "#"
  },
  {
    title: "Jane Smith",
    description:
      "Lead Designer specializing in beautiful UI/UX design and interactive experiences.",
    imageUrl: "a2.jpg",
    tags: ["UI/UX", "Product Design", "Branding"],
    link: "#"
  },
  {
    title: "Alex Johnson",
    description:
      "Senior Developer with expertise in React, Node.js and modern full-stack architecture.",
    imageUrl: "a3.jpg",
    tags: ["Frontend", "Backend", "DevOps"],
    link: "#"
  },
  {
    title: "Sarah Williams",
    description:
      "Marketing Director focused on growth, storytelling, and impactful brand presence.",
    imageUrl: "a4.jpg",
    tags: ["Marketing", "SEO", "Content Strategy"],
    link: "#"
  }
]

/* -------------------- Section -------------------- */

const MembersSection: React.FC = () => {
  return (
    <section className="members-section">
      {/* Header */}
      <motion.div
        className="team-section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <h2>Meet Our Team</h2>
        <p>
          A team of passionate dreamers, creators, and innovators coming together
          to build meaningful digital experiences.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="members-grid">
        {teamMembers.map((member, index) => (
          <MemberCard key={index} index={index} {...member} />
        ))}
      </div>
    </section>
  )
}

export default MembersSection
