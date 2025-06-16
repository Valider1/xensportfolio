// app/layout.tsx

import "./globals.css"
import ThemeClientLoader from "../components/ThemeClientLoader"
import Layout from "../components/Layout"

export const metadata = {
  title: "XensPortfolio",
  description: "High-tech portfolio by Xens",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeClientLoader>
          <Layout>{children}</Layout>
        </ThemeClientLoader>
      </body>
    </html>
  )
}
