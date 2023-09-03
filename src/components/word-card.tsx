import React from 'react'
import Link from 'next/link'
import GlyphMulti from './glyph-multi'
import { WordItem } from '@/data/words'

type Props = { word: WordItem }
type Comp = React.FunctionComponent<Props>

const WordCard: Comp = ({ word }) => {
  return (
    <div className="p-2 border-2 rounded-lg mr-2 mb-2 hover:bg-emerald-200 hover:bg-opacity-70">
      <Link href={`/words/${encodeURI(word.written)}`}>
        <div className="w-56 h-56">
          <div>
            <GlyphMulti words={word.written} sizeClass="w-12" />
          </div>
          {word.meanings && word.meanings.length > 0 && (
            <div className="prose h-[84px]">
              <p>{word.meanings[0]}</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}

export default WordCard
