'use client'

import WritingBlock from '@/components/glyphs/WritingBlock'
import useWindowDimensions from '@/lib/useWindowDimensions'
import Link from 'next/link'

const screens = { sm: 640 }

const navItems = [
  {
    url: '/learn',
    label: 'Learn',
  },
  {
    url: '/words',
    label: 'Words',
  },
  {
    url: '/editor',
    label: 'Editor',
  },
]

export default function Home() {
  const windowDimensions = useWindowDimensions()
  const smallScreen = windowDimensions[0] < screens.sm

  return (
    <main>
      <div className="prose">
        <h1 className="mb-2 pb-2">
          <WritingBlock settings={{ scale: smallScreen ? 1.6 : 2.3 }}>
            o kam pon lon lip tokui
          </WritingBlock>
        </h1>
        <h2
          className="mt-0 pt-0"
          style={!smallScreen ? { fontSize: '2.25em' } : undefined}
        >
          o kam pon lon lip tokui
        </h2>
        <p>
          Welcome to the website of the tokui language: a conlang based on{' '}
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
        <h2>the purpose of tokui</h2>
        <p>
          Tokui is a clone of Toki Pona that is designed to be augmented with
          extensions. Extensions are extra, optional features that can be added
          either individually or in combination. Some tokui extensions are:
        </p>
        <ul>
          <li>
            <a href="https://ithkuil.net/newithkuil_04_case.htm">
              The Ithkuil cases
            </a>
          </li>
          <li>
            <a href="https://ithkuil.net/newithkuil_03_morphology.htm">
              Ithkuil configuration, affiliation, and extension
            </a>
          </li>
          <li>
            <a href="https://youtu.be/qID2B4MK7Y0">A base six number system</a>
          </li>
        </ul>
        <p>
          The name tokui is meant to be a mix of Toki Pona and Ithkuil. When I
          started working on tokui, I wanted a language with Ithkiul&apos;s
          innovative case grammar and matrix like morphology, but that was much
          easier to learn than Ithkuil (so that I could learn it). I wanted to
          keep the same principles of Ithkuil construction, but trade some of
          the precision for a smaller phonology and morphology. I was also
          interested in Toki Pona and thinking about using ideas from there in
          this language, perhaps using Toki Pona style word composition to keep
          the vocabulary small.
        </p>
        <p>
          I started out trying to make a Toki Pona / Ithkuil hybrid language.
          Then it occurred to me that I could do what I wanted and maybe get a
          better result from modifying Toki Pona and adding Ithkuil inspired
          features to it, as extensions.
        </p>
        <p>
          Now that I have put together this language with words from Toki Pona
          and Ithkuil, it&apos;s time to try using it and discover what&apos;s
          next.
        </p>
      </div>
    </main>
  )
}
