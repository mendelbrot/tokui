import './globals.css'
import type { Metadata } from 'next'
import Nav from '@/components/nav'

export const metadata: Metadata = {
  title: 'to kui',
  description: 'the website of the to kui language',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="m-4">
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  )
}
