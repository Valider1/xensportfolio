"use client"

import { motion } from "framer-motion"
import React, { useRef } from "react"

interface Event {
  year: string
  description: string
}

const events: Event[] = [
  { year: "2023", description: "Built my first Discord bot & launched a Roblox horror game." },
  { year: "2024", description: "Started a basketball YouTube channel & grew a 20K-view baseball page." },
  { year: "2025", description: "Graduated, accepted to BYU-Idaho, and deployed this portfolio!" },
]

export default function TimelineCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={carouselRef}
      className="overflow-x-auto cursor-grab py-8"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="flex space-x-8 pl-4"
        drag="x"
        dragConstraints={carouselRef}
        dragElastic={0.1}
      >
        {events.map((e) => (
          <motion.div
            key={e.year}
            className="min-w-[200px] p-4 bg-gray-800 dark:bg-gray-100 rounded-2xl text-white dark:text-gray-900 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl font-bold mb-2">{e.year}</div>
            <p className="text-sm">{e.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
