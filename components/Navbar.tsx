// components/Navbar.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"
import { Menu, X } from "lucide-react"

const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false })

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Add a shadow once you scroll past 50px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`
        fixed w-full z-50 top-0 backdrop-blur transition-shadow
        ${scrolled ? "bg-white/70 dark:bg-gray-900/70 shadow-md" : "bg-transparent"}
      `}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="relative text-2xl font-bold group">
          <span className="inline-block transform transition-transform group-hover:-translate-y-1">
            XensPortfolio()
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href
            return (
              <li key={href} className="relative">
                <Link
                  href={href}
                  className={`
                    px-1 py-1 text-sm font-medium transition-colors
                    ${active
                      ? "text-cyan-600 dark:text-cyan-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-300"}
                  `}
                >
                  {label}
                </Link>
                {/* underline */}
                <span
                  className={`
                    absolute left-0 right-0 h-0.5 bg-cyan-500 dark:bg-cyan-300
                    transition-all duration-300
                    ${active ? "bottom-0 w-full" : "bottom-0 w-0 group-hover:w-full"}
                  `}
                />
              </li>
            )
          })}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900/95 backdrop-blur-sm shadow-lg">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`
                      block px-2 py-2 rounded-md transition-colors
                      ${active
                        ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"}
                    `}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
