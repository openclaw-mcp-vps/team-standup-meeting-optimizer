import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StandupOpt — Make Daily Standups Shorter & More Effective',
  description: 'Analyze standup patterns and get actionable insights to reduce meeting time and boost team engagement.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7cf0dd78-e905-4bed-8fb6-c45091aae7c1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
