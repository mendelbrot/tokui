import './globals.css'
import type { Metadata } from 'next'

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
      <body>
        <div className="flex flex-col items-center w-screen">
            {children}
        </div>
      </body>
    </html>
  )
}
