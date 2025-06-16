// components/ParticleBackground.tsx
"use client"

import { useCallback, useMemo } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine, Container } from "tsparticles-engine"
import { useTheme } from "next-themes"

export default function ParticleBackground() {
  const { theme } = useTheme()

  // Choose your colors per theme
  const isDark = theme === "dark"
  const particleColor = isDark ? "#00FFFF" : "#0066CC"
  const linkColor     = isDark ? "#00FFFF" : "#0066CC"
  const background    = isDark ? "transparent" : "transparent"

  const options = useMemo(() => ({
    fullScreen: { enable: true, zIndex: 0 },
    detectRetina: true,
    fpsLimit: 60,
    background: { color: background },
    particles: {
      number: { value: 80, density: { enable: true, area: 800 } },
      color: { value: particleColor },
      shape: { type: "circle" },
      opacity: { value: 0.3, random: true },
      size: { value: { min: 1, max: 3 }, random: true },
      links: {
        enable: true,
        distance: 150,
        color: linkColor,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: { default: "bounce" },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 },
      },
    },
  }), [particleColor, linkColor, background])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  )

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  )
}
