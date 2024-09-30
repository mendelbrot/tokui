'use client'

import React from 'react'
import Link from 'next/link'
import GlyphMulti from './glyph-multi'
import {WordItem} from '@/data/words'
import { WordEntry } from '@/data/words/wordTypes'

type Props = { wordEntry: WordEntry }

function WordCard({ wordEntry }: Props) {
  const { word, meanings, tokipona } = wordEntry;
  return (
    <div className="p-2 border-2 rounded-lg mr-2 mb-2 hover:bg-emerald-200 hover:bg-opacity-70">
      <Link href={`/words/${encodeURI(word)}`}>
        <div className="w-56 h-28 flex overflow-y-hidden">
          <div>
            <GlyphMulti words={word} sizeClass="w-12" />
          </div>
          <div className="prose ml-2 border-l-2">
            <ul>
              {meanings &&
                meanings.length > 0 &&
                meanings.map((m) => (
                  <div key={m}>
                    <li>{m}</li>
                  </div>
                ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default WordCard
