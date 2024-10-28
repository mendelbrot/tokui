'use client'

// @ts-ignore
import wordData_ from '@/data/wordData.yaml'
const wordData = wordData_ as WordData
import { WordData } from '@/data/wordDataTypes'
import React from 'react'
import InfoGlyph from '../glyphs/InfoGlyph'

function WordGlyphsList() {
  return (
    <div className="prose pb-[186px]">
      {Object.values(wordData.groups).map(({ heading, members }) => (
        <div key={heading}>
          <h2>{heading}</h2>
          <div className="flex flex-wrap">
            {
              // @ts-ignore
              members.map((word) => (
                <InfoGlyph key={word}>{word}</InfoGlyph>
              ))
            }
          </div>
        </div>
      ))}
    </div>
  )
}

export default WordGlyphsList
