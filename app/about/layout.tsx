// app/about/layout.tsx

export const metadata = {
  title: "About — XensPortfolio",
  description:
    "Learn more about Jaden (Xens), his background, skills, and journey.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
