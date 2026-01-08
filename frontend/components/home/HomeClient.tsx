"use client"

import { motion } from "framer-motion"

export default function HomeMotion({
  children,
}: {
  children: React.ReactNode
}) {
  return <motion.main>{children}</motion.main>
}
