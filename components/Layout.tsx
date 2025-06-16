// components/Layout.tsx
"use client"

import React from "react"
import Cursor from "./Cursor"
import ParticleBackground from "./ParticleBackground"
import Navbar from "./Navbar"
import Footer from "./Footer"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative cursor-none">
      <Cursor />
      <ParticleBackground />
      <div
        className="
          min-h-screen flex flex-col relative z-10
          bg-white text-gray-900
          dark:bg-gray-900 dark:text-whitev
        "
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
