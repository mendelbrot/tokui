'use client'

// @ts-ignore
import wordData_ from '@/data/wordData.yaml'
const wordData = wordData_ as WordData
import { WordData } from '@/data/wordDataTypes'
import React from 'react'
import InfoGlyph from '../glyphs/InfoGlyph'

function WordGlyphsList() {
  return (
    <div className="prose">
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
  )
}

export default WordGlyphsList
