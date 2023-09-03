'use client'

import GlyphSymbol from '@/components/glyph-symbol'
import GlyphMulti, {
  GlyphSymbolMulti,
  GlyphTextMulti,
} from '@/components/glyph-multi'

export default function Learn() {
  return (
    <main>
      <div className="prose max-w-prose">
        <h1>Sounds and writing</h1>

        <h2>Sounds and letters</h2>

        <p>
          There are 12 consonants and five vowels. The sounds and letters are
          the same as Toki Pona, except with the added consonants <b>g</b>,{' '}
          <b>f</b>, and <b>h</b>. The letter <b>h</b> is intended to be voiced
          as in Bach, but it can be unvoiced if the speaker prefers. The Toki
          Pona letter <b>j</b> is replaced with <b>y</b>. As in Toki Pona, the
          five vowels are pronounced: l<b>ee</b> w<b>ay</b> l<b>aw</b> l
          <b>ow</b> m<b>oo</b>.
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
          Words don&apos;t end with the consonants <b>h</b>, <b>w</b>, or{' '}
          <b>y</b> because a vowel followed by one of these consonants can be
          hard to pronounce.
        </p>

        <p>
          When there are two vowels in a row, they are pronounced distinctly.
          There are no blended vowels or diphthongs. Also, vowels aren&apos;t
          doubled: two vowels in a row must be different from each other.
        </p>

        <h2>Writing system</h2>

        <p>
          There is a writing system for tokui. Each atomic word gets one
          character for each. The frame of the character is the starting
          consonant. Inside the frame, the first vowel is placed at the top, and
          the final vowel or consonant is placed at the bottom.
        </p>

        <p>
          The characters for the consonants map to the place and manner of
          articulation.
        </p>

        <table className="table-fixed">
          <caption>consonant characters</caption>
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
      </div>
    </main>
  )
}
