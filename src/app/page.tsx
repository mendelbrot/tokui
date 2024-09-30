'use client'

import TokuiWritingBlock from '@/components/TokuiWritingBlock'
import useWindowDimensions from '@/lib/useWindowDimensions'
import Link from 'next/link'

const screens = { sm: 640 }

const navItems = [
  {
    url: '/learn',
    label: 'Learn',
  },
  {
    url: '/editor',
    label: 'Editor',
  },
  {
    url: '/words',
    label: 'Words',
  },
]

export default function Home() {
  const windowDimensions = useWindowDimensions()
  const smallScreen = windowDimensions[0] < screens.sm

  return (
    <main>
      <div className="prose max-w-prose p-[16px]">
        <h1 className="mb-2 pb-2">
          <TokuiWritingBlock
            text={'o kam pon lon lip tokui'}
            settings={{ scale: smallScreen ? 1.6 : 2.3 }}
          />
        </h1>
        <h2 className="mt-0 pt-0" style={!smallScreen ? {fontSize: '2.25em'} : undefined}>
          o kam pon lon lip tokui
        </h2>
        <p>
          Welcome to the website of tokui language: a conlang based on{' '}
          <a href="https://tokipona.org/">Toki Pona</a> and{' '}
          <a href="https://www.ithkuil.net/">Ithkuil</a>.
        </p>
        <ul>
          {navItems.map((item) => (
            <li key={item.url}>
              <Link href={item.url} key={item.url}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
