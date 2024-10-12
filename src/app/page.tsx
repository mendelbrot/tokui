'use client'

import WritingBlock from '@/components/WritingBlock'
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
      <div className="prose max-w-prose p-[16px]">
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
          <a href="https://tokipona.org/">Toki Pona</a> with some ideas from{' '}
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
          As a starting point, tokui is a clone of Toki Pona. For me, the reason
          for creating tokui is to have a basic framework of a language to add
          extensions to. I choose to build from Toki Pona because I admire the
          language, it&apos;s simple and minimal, and has an active community.
          Because it&apos;s minimal, it works well as the core of my language.
          Also, learning tokui has a side benefit of learning some Toki Pona,
          and learning tokui is easier if one already knows some Toki Pona.
        </p>
        <p>
          Toki Pona is the core of the language, but the main purpose is the
          extensions. Extensions are extra, optional features that can be added
          either individually or in combination. Some tokui extensions are:
        </p>
        <ul>
          <li>
            <a href="https://youtu.be/qID2B4MK7Y0">A base six number system</a>
          </li>
          <li>
            <a href="https://ithkuil.net/newithkuil_04_case.htm">
              Ithkuil case grammar
            </a>
          </li>
          <li>
            Select Ithkuil morphology components, including case, configuration,
            affiliation, and extension
          </li>
        </ul>
        <p>
          Components from Ithkuil feature prominently in the extensions. The
          name tokui is meant to be a mix of Toki Pona and Ithkuil. When I
          started working on the language, I wasn&apos;t planning to clone Toki
          Pona, I was thinking about creating a new language that bridged Toki
          Pona and Ithkuil.
        </p>
        <p>
          Ithkuil is complicated, phonetically packed, and notoriously
          difficult. I found some ideas in Ithkuil very interesting, but the
          number of nuanced option in the morphology is daunting, the script has
          too many permutations for me to learn, and there are too many sounds I
          can&apos;t pronounce. So instead of putting in massive effort to learn
          Ithkuil, I started focusing on the concepts and trying to make a
          simplified language that incorporated some of the concepts from
          Ithkuil as I was learning them.
        </p>
        <p>
          To me, an Ithkuil sentence is somewhat loosely analogous to a tensor
          equation. Ithkuil words are multi-dimensional matrix-like structures.
          They narrow down the meaning by specifying a number of parameters.
          Each parameter&apos;s value is specified by a letter or letter group
          in a specific place order called a slot. There are practically
          limitless possible combinations of morphemes to build words. This
          construction allows the words to be compact and they don&apos;t need
          to be memorized. Only the seed root words and the possible values for
          the morphemes need to be memorized. (That being said, there are
          thousands of root words, and the number of morpheme and affix values
          is in the high hundreds.)
        </p>
        <p>
          Another notable thing about Ithkuil is, it doesn&apos;t take full
          advantage of composition. In a sense the matrix like morphology can be
          thought of as a kind of composition, but I think it&apos;s more
          accurate to call it something else, like transformation. In contrast,
          composition is how Toki Pona compound words are built from basic
          words. The choice of basic words and their order creates a structure
          with a meaning that can be interpreted from the words. Ithkuil, as far
          as I know, does not use this tool. Root words can&apos;t be combined
          with eachother to make new words. I speculate that a reason this type
          of composition isn&apos;t included in Ithkuil may be because it is
          fuzzy and imprecise, and a goal of Ithkuil is to be both nuanced and
          precise.
        </p>
        <p>
          I started out trying to make a Toki Pona / Ithkuil hybrid language.
          Then it occurred to me that I could do what I wanted and maybe get a
          better result from modifying Toki Pona and adding Ithkuil inspired
          features to it, as extensions.
        </p>
      </div>
    </main>
  )
}
