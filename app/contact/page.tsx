"use client"

import { useState, ChangeEvent, FormEvent } from "react"

type Status = "idle" | "sending" | "success" | "error"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<Status>("idle")

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Get In Touch</h1>

        <label className="block mb-4">
          <span className="block text-sm font-medium mb-1">Name</span>
          <input
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-cyan-400 outline-none"
          />
        </label>

        <label className="block mb-4">
          <span className="block text-sm font-medium mb-1">Email</span>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-cyan-400 outline-none"
          />
        </label>

        <label className="block mb-6">
          <span className="block text-sm font-medium mb-1">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-cyan-400 outline-none resize-none"
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 rounded-md font-semibold transition"
        >
          {status === "sending"
            ? "Sending..."
            : status === "success"
            ? "Sent!"
            : status === "error"
            ? "Try Again"
            : "Send Message"}
        </button>

        {status === "success" && (
          <p className="mt-4 text-center text-green-400">
            Thanks! I’ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-center text-red-400">
            Oops! Something went wrong.
          </p>
        )}
      </form>
    </div>
  )
}
