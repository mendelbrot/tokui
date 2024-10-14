'use client'

// @ts-ignore
import wordData_ from '@/data/wordData.yaml'
const wordData = wordData_ as WordData
import WritingBlock from '@/components/WritingBlock'
import Link from 'next/link'
import { WordData } from '@/data/wordDataTypes'
import React from 'react'

function WordGlyphsList() {
  return (
    <div>
      <div className="prose">
        {Object.entries(wordData.groups).map(([groupName, groupWords]) => (
          <div key={groupName}>
            <h2>{groupName}</h2>

            <div className="flex flex-wrap">
              {groupWords.map((word) => (
                <Link key={word} href={'/words/' + word}>
                  <WritingBlock>{word}</WritingBlock>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WordGlyphsList
