// app/projects/page.tsx

import React from "react"
import Link from "next/link"
import { Code, Box, Database, Cpu } from "lucide-react"

const projects = [
  {
    title: "Custom Discord Bot",
    icon: <Code size={48} className="text-cyan-400" />,
    desc: "Full-featured bot with commands, moderation, and logging.",
    href: "/projects/discord-bot",
  },
  {
    title: "Web App Portal",
    icon: <Box size={48} className="text-cyan-400" />,
    desc: "Responsive portal for user sign-up, dashboards, and data views.",
    href: "/projects/web-portal",
  },
  {
    title: "Staff Management System",
    icon: <Database size={48} className="text-cyan-400" />,
    desc: "Admin dashboard with permissions, staff profiles, and reports.",
    href: "/projects/staff-system",
  },
  {
    title: "Custom API",
    icon: <Cpu size={48} className="text-cyan-400" />,
    desc: "Roblox APIs or bespoke endpoints.",
    href: "/projects/api-development",
  },
]

export default function Projects() {
  return (
    <section className="py-20 px-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className="group block bg-gray-800 p-6 rounded-2xl hover:shadow-lg hover:shadow-cyan-400/30 transition"
          >
            <div className="mb-4">{p.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-cyan-400">
              {p.title}
            </h3>
            <p className="text-gray-400">{p.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
