"use client"

import { useState, useRef, useEffect } from "react"
import Hero from "../components/Hero"
import Services from "../components/Services"
import { motion } from "framer-motion"

export default function Home() {
  const [introDone, setIntroDone] = useState(false)
  const servicesRef = useRef<HTMLElement>(null)

  // when intro completes, scroll services into view
  useEffect(() => {
    if (introDone && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [introDone])

  return (
    <>
      <Hero onDone={() => setIntroDone(true)} />
      {introDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Services ref={servicesRef} />
        </motion.div>
      )}
    </>
  )
}
