'use client'

import React from 'react'
import GlyphSymbol from '@/components/glyph-symbol'
import GlyphMulti, {
  GlyphSymbolMulti,
  GlyphTextMulti,
} from '@/components/glyph-multi'

type WordTokenProps = { words: string }
type WordTokenCopm = React.FunctionComponent<WordTokenProps>

const WordToken: WordTokenCopm = ({ words }) => (
  <div className="border-2 rounded-lg p-1 m-1 inline-block">
    <GlyphMulti sizeClass="w-12" words={words} />
  </div>
)

export default function Learn() {
  return (
    <main className="prose max-w-prose">
      <h1>Sounds and writing</h1>

      <h2>Sounds and letters</h2>

      <p>
        There are 12 consonants and five vowels. The sounds and letters are the
        same as Toki Pona, except with the added consonants <b>g</b>, <b>f</b>,
        and <b>h</b>. The letter <b>h</b> is intended to be voiced as in Bach,
        but it can be unvoiced if the speaker prefers. The Toki Pona letter{' '}
        <b>j</b> is replaced with <b>y</b>. As in Toki Pona, the five vowels are
        pronounced: l<b>ee</b> w<b>ay</b> l<b>aw</b> l<b>ow</b> m<b>oo</b>.
      </p>

      <table className="table-fixed">
        <caption>tokui letters</caption>
        <thead>
          <tr>
            <th className="border">Vowels</th>
            <th className="border">Consonants</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border">i e a o u</td>
            <td className="border">m n g f s h p t k w l y</td>
          </tr>
        </tbody>
      </table>

      <p>
        All of the basic, atomic words in tokui are short, two or three letter
        words. Atomic words have one of these three forms; here <b>C</b> is a
        consonant and <b>V</b> is a vowel:
      </p>

      <ul>
        <li>CV</li>
        <li>CVV</li>
        <li>CVC</li>
      </ul>

      <p>
        Words don&apos;t end with the consonants <b>h</b>, <b>w</b>, or <b>y</b>{' '}
        because a vowel followed by one of these consonants can be hard to
        pronounce.
      </p>

      <p>
        When there are two vowels in a row, they are pronounced distinctly.
        There are no blended vowels or diphthongs. Also, vowels aren&apos;t
        doubled: two vowels in a row must be different from each other.
      </p>

      <h2>Writing system</h2>

      <p>
        There is a writing system for tokui: Each atomic word gets one
        character. The frame of the character is the starting consonant. Inside
        the frame, the first vowel is placed at the top, and the second vowel or
        the second consonant is placed at the bottom.
      </p>

      <p>The consonant symbols map to the place and manner of articulation.</p>

      <table className="table-fixed">
        <caption>consonant symbols</caption>
        <thead>
          <tr>
            <th className="border">Manner \ Place</th>
            <th className="border">Front</th>
            <th className="border">Middle</th>
            <th className="border">Back</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="border">Nasal</th>
            <td className="border">
              <div className="w-12">
                <GlyphSymbol letters="m" />
              </div>
              m
            </td>
            <td className="border">
              <div className="w-12">
                <GlyphSymbol letters="n" />
              </div>
              n
            </td>
            <td className="border">
              <div className="w-12">
                <GlyphSymbol letters="g" />
              </div>
              g
            </td>
          </tr>
          <tr>
            <th className="border">Stop</th>
            <td className="border">
              <div className="w-12">
                <GlyphSymbol letters="p" />
              </div>
              p
            </td>
            <td className="border">
              <div className="w-12">
                <GlyphSymbol letters="t" />
              </div>
              t
            </td>
            <td className="border">
              <div className="w-12">
                <GlyphSymbol letters="k" />
              </div>
              k
            </td>
          </tr>
          <tr>
            <th className="border">Frictive</th>
            <td className="border">
              <div className="w-12">
                <GlyphSymbol letters="f" />
              </div>
              f
            </td>
            <td className="border">
              <div className="w-12">
                <GlyphSymbol letters="s" />
              </div>
              s
            </td>
            <td className="border">
              <div className="w-12">
                <GlyphSymbol letters="h" />
              </div>
              h
            </td>
          </tr>
          <tr>
            <th className="border">Approxomant</th>
            <td className="border">
              <div className="w-12">
                <GlyphSymbol letters="w" />
              </div>
              w
            </td>
            <td className="border">
              <div className="w-12">
                <GlyphSymbol letters="l" />
              </div>
              l
            </td>
            <td className="border">
              <div className="w-12">
                <GlyphSymbol letters="y" />
              </div>
              y
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table-fixed">
        <caption>vowel symbols</caption>
        <thead>
          <tr>
            <th className="border"></th>
            <th className="border">i</th>
            <th className="border">e</th>
            <th className="border">a</th>
            <th className="border">o</th>
            <th className="border">u</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="border"> First vowel</th>
            <th className="border">
              <div className="w-12">
                <GlyphSymbol letters="-i" />
              </div>
            </th>
            <th className="border">
              <div className="w-12">
                <GlyphSymbol letters="-e" />
              </div>
            </th>
            <th className="border">
              <div className="w-12">
                <GlyphSymbol letters="-a" />
              </div>
            </th>
            <th className="border">
              <div className="w-12">
                <GlyphSymbol letters="-o" />
              </div>
            </th>
            <th className="border">
              <div className="w-12">
                <GlyphSymbol letters="-u" />
              </div>
            </th>
          </tr>
          <tr>
            <th className="border"> Second vowel</th>
            <th className="border">
              <div className="w-12">
                <GlyphSymbol letters="--i" />
              </div>
            </th>
            <th className="border">
              <div className="w-12">
                <GlyphSymbol letters="--e" />
              </div>
            </th>
            <th className="border">
              <div className="w-12">
                <GlyphSymbol letters="--a" />
              </div>
            </th>
            <th className="border">
              <div className="w-12">
                <GlyphSymbol letters="--o" />
              </div>
            </th>
            <th className="border">
              <div className="w-12">
                <GlyphSymbol letters="--u" />
              </div>
            </th>
          </tr>
        </tbody>
      </table>

      <p>
        here are some examples of how these symbols are combined to make a
        character for an atomic word:
      </p>

      <table className="table-fixed">
        <caption>CV word examples</caption>
        <tbody>
          <tr>
            <td className="border">
              <WordToken words="mi" />
              <WordToken words="ne" />
              <WordToken words="ga" />
              <WordToken words="po" />
              <WordToken words="tu" />
              <WordToken words="ki" />
              <WordToken words="fe" />
              <WordToken words="sa" />
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table-fixed">
        <caption>CVV word examples</caption>
        <tbody>
          <tr>
            <td className="border">
              <WordToken words="fie" />
              <WordToken words="sia" />
              <WordToken words="heo" />
              <WordToken words="weu" />
              <WordToken words="lai" />
              <WordToken words="yae" />
              <WordToken words="moa" />
              <WordToken words="nou" />
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table-fixed">
        <caption>CVC word examples</caption>
        <tbody>
          <tr>
            <td className="border">
              <WordToken words="tik" />
              <WordToken words="fes" />
              <WordToken words="hal" />
              <WordToken words="wom" />
              <WordToken words="yun" />
              <WordToken words="gip" />
              <WordToken words="tek" />
              <WordToken words="faf" />
            </td>
          </tr>
        </tbody>
      </table>

      <h1>Words</h1>

      <h2>pi</h2>

      <h2>Pronouns</h2>

      <h2>Configuration and affiliation</h2>

      <h1>Sentences</h1>

      <h2>Clauses</h2>

      <h2>Semantic roles</h2>

      <h2>Sub-clauses</h2>

      <h1>Math</h1>
    </main>
  )
}
