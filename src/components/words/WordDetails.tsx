// @ts-ignore
import wordData_ from '@/data/wordData.yaml'
const wordData = wordData_ as WordData
import React from 'react'
import WritingBlock from '@/components/glyphs/WritingBlock'
import { WordData } from '@/data/wordDataTypes'
import lnWord from '@/lib/lnWord'
import Spanner from '../Spanner'

type Props = { word: string }

function WordDetails({ word }: Props) {
  //@ts-ignore
  const definitions: string[] = wordData.definitions[word] || ['WORD NOT FOUND']
  const soundedOutLnWord = lnWord(word)

  return (
    <div>
      <div className="flex items-end prose">
        <WritingBlock
          className="p-2 border-2 rounded-lg mr-2"
          settings={{ scale: 3 }}
        >
          {word}
        </WritingBlock>
        <h2>{soundedOutLnWord ? `${word} (${soundedOutLnWord})` : word}</h2>
      </div>
      <div className="prose">
        <div>
          <ul>
            {definitions.map((i) => (
              <li key={word + i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
      <Spanner />
    </div>
  )
}

export default WordDetails
