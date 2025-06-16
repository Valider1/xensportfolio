/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",   // ← add this line
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
}
