import words from '@/data/wordData.json'
import RandomWord from '../components/RandomWord'
import React from 'react'
import WritingBlock from './WritingBlock'

type Props = { word: string }
type Comp = React.FunctionComponent<Props>

const WordDetails: Comp = ({ word }) => {
  //@ts-ignore
  const definitions: string[] = words.definitions[word] || ['WORD NOT FOUND']

  return (
    <div className="max-w-[444px]">
      <div className="fixed bottom-6 right-6">
        <RandomWord />
      </div>
      <div className="p-2 border-2 rounded-lg inline-block">
        <WritingBlock>{word}</WritingBlock>
      </div>

      <div className="prose">
        <div>
          <div className="flex flex-wrap">
            {definitions.map((m) => (
              <div
                key={'m ' + m}
                className="border-2 mr-1 mb-1 px-2 py-1 rounded-lg w-36"
              >
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WordDetails
