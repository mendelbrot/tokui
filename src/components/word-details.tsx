import words from '@/data/words'
import RandomWord from '../components/random-word'
import React from 'react'
import GlyphMulti from './glyph-multi'

type Props = { letters: string }
type Comp = React.FunctionComponent<Props>

const WordDetails: Comp = ({ letters }) => {
  const thisWord = words.filter((w) => w.tokui === letters)[0]

  const meanings = thisWord.meaning.split('/')

  return (
    <div className="max-w-[444px]">
      <div className="fixed bottom-6 right-6">
        <RandomWord />
      </div>
      <div className="p-2 border-2 rounded-lg inline-block">
        <GlyphMulti words={letters} sizeClass="w-16" />
      </div>

      {thisWord && (
        <div className="prose">
          {meanings && meanings.length > 0 && (
            <div>
              <h3>meanings</h3>
              <div className="flex flex-wrap">
                {meanings.map((m) => (
                  <div
                    key={'m ' + m}
                    className="border-2 mr-1 mb-1 px-2 py-1 rounded-lg w-36"
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>
          )}
          {thisWord.category && (
            <div>
              <h3>category</h3>
              <p>{thisWord.category}</p>
            </div>
          )}
          {thisWord.tokipona && (
            <div>
              <h3>toki pona equivalent</h3>
              <p>{thisWord.tokipona}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default WordDetails
