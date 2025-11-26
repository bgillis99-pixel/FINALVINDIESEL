import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carb Clean Truck Check',
  description: 'Truck compliance and cleanliness verification system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
