// components/RippleButton.tsx
"use client"

import { MouseEvent, ReactNode, useRef } from "react"

export default function RippleButton({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null)

  const createRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = ref.current!
    const rect = btn.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    const ripple = document.createElement("span")
    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    ripple.className = "ripple"

    btn.appendChild(ripple)
    ripple.addEventListener("animationend", () => {
      ripple.remove()
    })
  }

  return (
    <button
      {...props}
      ref={ref}
      onClick={(e) => {
        createRipple(e)
        props.onClick?.(e)
      }}
      className={`${props.className} ripple-container`}
    >
      {children}
    </button>
  )
}
