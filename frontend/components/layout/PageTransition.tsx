"use client"

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  cubicBezier,
} from "framer-motion"
import { usePathname } from "next/navigation"
import React from "react"

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(6px)",
  },
}

export default function PageTransition({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const shouldReduceMotion = useReducedMotion()

  const transition = {
    duration: shouldReduceMotion ? 0 : 0.6,
    ease: cubicBezier(0.22, 1, 0.36, 1), // ✅ typed correctly
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
