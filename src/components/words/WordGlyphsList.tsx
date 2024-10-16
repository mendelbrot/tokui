'use client'

// @ts-ignore
import wordData_ from '@/data/wordData.yaml'
const wordData = wordData_ as WordData
import { WordData } from '@/data/wordDataTypes'
import React from 'react'
import InfoGlyph from '../glyphs/InfoGlyph'
import useBoundingClientRect from '@/lib/useBoundingClientRect'

export const BoundaryContext = React.createContext<DOMRect | null>(null)

function WordGlyphsList() {
  const boundaryRef = React.useRef<HTMLDivElement | null>(null)
  const boundingRect = useBoundingClientRect(boundaryRef)

  return (
    <BoundaryContext.Provider value={boundingRect}>
      <div className="prose" ref={boundaryRef}>
        {Object.entries(wordData.groups).map(([groupName, groupWords]) => (
          <div key={groupName}>
            <h2>{groupName}</h2>
            <div className="flex flex-wrap">
              {groupWords.map((word) => (
                <InfoGlyph key={word}>{word}</InfoGlyph>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BoundaryContext.Provider>
  )
}

export default WordGlyphsList
