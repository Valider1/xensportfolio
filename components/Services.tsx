// components/Services.tsx
"use client"

import React, { forwardRef } from "react"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { Code, Box, Database, Cpu } from "lucide-react"

interface Service {
  title: string
  icon: React.ReactNode
  desc: string
}

const services: Service[] = [
  {
    title: "Discord Bots",
    icon: <Code size={48} />,
    desc: "Custom bots with every feature you need.",
  },
  {
    title: "Web Development",
    icon: <Box size={48} />,
    desc: "Websites, portals, and modern SPAs.",
  },
  {
    title: "Staff & Management",
    icon: <Database size={48} />,
    desc: "Hiring portals, dashboards, and moderation tools.",
  },
  {
    title: "API Development",
    icon: <Cpu size={48} />,
    desc: "Roblox APIs or bespoke endpoints.",
  },
]

const Services = forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    className="py-20 px-8 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100"
  >
    <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s, i) => (
        <Tilt
          key={s.title}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable
          glareMaxOpacity={0.2}
          scale={1.02}
          className="group"
        >
          <motion.div
            className="
              relative p-6 rounded-2xl overflow-hidden
              bg-gradient-to-br from-white to-gray-50
              dark:from-gray-800 dark:to-gray-700
              shadow-lg transition
              group-hover:shadow-xl
            "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Decorative gradient overlay */}
            <div className="
              absolute inset-0 opacity-0 group-hover:opacity-30
              bg-gradient-to-tr from-cyan-400 to-purple-400
              mix-blend-soft-light
              transition-opacity
            " />

            <div className="relative flex flex-col items-center text-center z-10">
              <motion.div
                className="mb-4 text-cyan-400"
                whileHover={{ scale: 1.2 }}
              >
                {s.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
  </section>
))

Services.displayName = "Services"
export default Services
