// components/Cursor.tsx
"use client"

import { useEffect, useState } from "react"

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
      className="fixed pointer-events-none w-6 h-6 rounded-full border-2 border-cyan-400 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 z-[1000]"
      style={{
        left: pos.x,
        top: pos.y,
      }}
    />
  )
}
