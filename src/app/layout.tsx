import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'tokui',
  description: 'the website of the tokui conlan',
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center w-full">{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
