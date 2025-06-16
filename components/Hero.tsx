// components/Hero.tsx
"use client"

import React from "react"
import Typewriter from "typewriter-effect"

interface HeroProps {
  onDone: () => void
}

export default function Hero({ onDone }: HeroProps) {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-black text-green-400 font-mono px-6">
      <div className="w-full max-w-2xl text-left text-lg space-y-1">
        <Typewriter
          onInit={(tw) => {
            tw
              .typeString("<span class='text-green-200'>&gt; cd ~/xensportfolio</span>")
              .pauseFor(800)
              .typeString("\n<span class='text-green-200'>&gt; npm install bots-web-apis</span>")
              .pauseFor(800)
              .typeString("\n<span class='text-green-200'>&gt; npm run deploy</span>")
              // once everything’s typed, trigger onDone
              .callFunction(() => onDone())
              .start()
          }}
          options={{
            cursor: "|",
            delay: 75,
            deleteSpeed: 20,
            loop: false,
            html: true,
            wrapperClassName: "",
            cursorClassName: "animate-pulse",
          }}
        />
      </div>
    </section>
  )
}
