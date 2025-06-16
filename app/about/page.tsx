// app/about/page.tsx
"use client"

import Image from "next/image"
import React from "react"
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import { Code, Box, Database, Cpu, Star } from "lucide-react"
import TimelineCarousel from "../../components/TimelineCarousel"

const skills = [
  { name: "JavaScript & TypeScript", level: 90, icon: <Code /> },
  { name: "Next.js & React", level: 85, icon: <Box /> },
  { name: "Tailwind & Framer Motion", level: 80, icon: <Database /> },
  { name: "Lua & Roblox Studio", level: 75, icon: <Cpu /> },
  { name: "APIs & SendGrid", level: 70, icon: <Star /> },
  { name: "Git / GitHub / Vercel", level: 85, icon: <Star /> },
]

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-8 py-20">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      {/* Bio & Photo */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Tilt glareEnable glareMaxOpacity={0.3} scale={1.05}>
          <Image
            src="https://i.ibb.co/d4cS4N6b/IMG-3641.jpg"
            alt="Jaden Jenkins"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
          />
        </Tilt>
        <div className="space-y-4 max-w-2xl">
          <p>
            Hey, I’m <strong>Jaden “Xen” Jenkins</strong>, a high-school senior turned
            web & bot developer. I’ve been building Roblox games, custom
            Discord bots, and web portals since 2020—passionate about clean
            code, sleek UIs, and automating anything that moves.
          </p>
          <p>
            Outside coding, I work at Chick-fil-A, coach first base, and prepare for an LDS mission.
            I love learning Japanese, lifting weights, and capturing action
            shots with my Canon Rebel T7.
          </p>
          <p>
            This fall I’m off to BYU for Computer Science, aiming to
            join the Air Force as a cyberwarfare officer.
          </p>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold mb-6">Skills & Tools</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <div key={s.name} className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="text-cyan-400">{s.icon}</div>
                <span className="font-medium">{s.name}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-cyan-400 h-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Timeline Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Journey Timeline</h2>
        <TimelineCarousel />
      </motion.div>
    </section>
  )
}
