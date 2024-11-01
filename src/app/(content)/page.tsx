import WritingHeading from '@/components/glyphs/WritingHeading'
import Link from 'next/link'

const navItems = [
  {
    url: '/docs',
    label: 'docs',
  },
  {
    url: '/words',
    label: 'words',
  },
  {
    url: '/editor',
    label: 'editor',
  },
]

function Home() {
  return (
    <main>
      <div className="prose">
        <WritingHeading>o kam pon on lip tokui</WritingHeading>
        <h1 className="mt-0 pt-0 text-2xl sm:text-4xl">
          o kam pon on lip tokui
        </h1>
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
            <Link href="/docs/semantic-roles">
              semantic role grammar inspired by Ithkuil case morphology
            </Link>
          </li>
          <li>
            <Link href="/docs/math">
              basic math operations on a base 6 number system
            </Link>
          </li>
        </ul>
        <p>
          The name tokui is meant to be a mix of Toki Pona and Ithkuil. My goal
          is to experiment with language creation using interesting features
          from Ithkuil in a context that is much easier to learn and use than
          Ithkuil. I also wanted to experiment with developing a writing system.
          It turned out to be a character-based system inspired by Chinese and
          Korean characters. Tokui is a work in progress.
        </p>
      </div>
    </main>
  )
}

export default Home
