import React from 'react'
import Link from 'next/link'
import GlyphMulti from './glyph-multi'
import { WordItem } from '@/data/words'

type Props = { word: WordItem }
type Comp = React.FunctionComponent<Props>

const WordCard: Comp = ({ word }) => {
  return (
    <div className="flex p-2 sm:py-4 border-b-2 sm:mr-12 hover:bg-yellow-50">
      <Link href={`/words/${encodeURI(word.written)}`}>
        <div>
          <div className="w-48">
            <GlyphMulti words={word.written} sizeClass="w-12 mr-1" />
          </div>
          {word.meanings && word.meanings.length > 0 && (
            <div className="prose w-36">
              <p>{word.meanings[0]}</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}

export default WordCard
