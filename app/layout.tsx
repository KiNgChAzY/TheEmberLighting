import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Ember Lighting | Premium Holiday Lighting Services in Bluffton, SC',
  description: 'The Ember Lighting provides premium holiday and event lighting services in Bluffton, SC. Expert installations for the best price.',
  keywords: 'holiday lighting, christmas lights, lighting installation, Bluffton SC, Hilton Head Island',
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

