// @ts-ignore
import wordData_ from '@/data/wordData.yaml'
const wordData = wordData_ as WordData
import RandomWordButton from '@/components/nav/RandomWordButton'
import NavButton from '@/components/nav/NavButton'
import NavContainer from '@/components/nav/NavContainer'
import React from 'react'
import WritingBlock from './WritingBlock'
import { WordData } from '@/data/wordDataTypes'
import lnWord from '@/lib/ln-word'

type Props = { word: string }
type Comp = React.FunctionComponent<Props>

const WordDetails: Comp = ({ word }) => {
  //@ts-ignore
  const definitions: string[] = wordData.definitions[word] || ['WORD NOT FOUND']
  const soundedOutLnWord = lnWord(word)

  return (
    <div>
      <NavContainer>
        <NavButton
          href="/words"
          imgSrc="/icons/chevron-back.svg"
          imgAlt="back to words page"
        />
        <RandomWordButton />
      </NavContainer>
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
    </div>
  )
}

export default WordDetails
