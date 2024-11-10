// @ts-ignore
import wordData_ from '@/data/wordData.yaml'
const wordData = wordData_ as WordData
import React from 'react'
import WritingBlock from '@/components/glyphs/WritingBlock'
import { WordData } from '@/data/wordDataTypes'
import lnWord from '@/lib/lnWord'
import Spanner from '../Spanner'
import { SoftSettingsValue } from '@/lib/EditorTypes'

type Props = { word: string; settings?: SoftSettingsValue; className?: string }

function WordDetails(props: Props) {
  //@ts-ignore
  const definitions: string[] = wordData.definitions[props.word] || [
    'WORD NOT FOUND',
  ]
  const soundedOutLnWord = lnWord(props.word)

  return (
    <div className={props.className}>
      <div className="flex items-end prose">
        <WritingBlock
          className="p-2 border-2 rounded-lg mr-2"
          settings={props.settings || { scale: 3 }}
        >
          {props.word}
        </WritingBlock>
        <h2>
          {soundedOutLnWord
            ? `${props.word} (${soundedOutLnWord})`
            : props.word}
        </h2>
      </div>
      <div className="prose">
        <div>
          <ul>
            {definitions.map((i) => (
              <li key={props.word + i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
      <Spanner />
    </div>
  )
}

export default WordDetails
