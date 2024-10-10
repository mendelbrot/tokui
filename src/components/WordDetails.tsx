// @ts-ignore
import wordData_ from '@/data/wordData.yaml'
const wordData = wordData_ as WordData
import RandomWord from '../components/RandomWord'
import React from 'react'
import WritingBlock from './WritingBlock'
import { WordData } from '@/data/wordDataTypes'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

type Props = { word: string }
type Comp = React.FunctionComponent<Props>

const WordDetails: Comp = ({ word }) => {
  //@ts-ignore
  const definitions: string[] = wordData.definitions[word] || ['WORD NOT FOUND']
  const router = useRouter()

  return (
    <div>
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => router.push('/words')}
          className="border-2 rounded-lg bg-opacity-70 bg-white hover:bg-emerald-200 hover:bg-opacity-70 mr-4"
        >
          <Image
            className="opacity-30 rounded-lg"
            src="/icons/chevron-back.svg"
            alt="back to words page"
            width="64"
            height="64"
          />
        </button>
        <RandomWord />
      </div>
      <div className="flex items-end prose">
        <WritingBlock className="p-2 border-2 rounded-lg mr-2">
          {word}
        </WritingBlock>
        <h2>{word}</h2>
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
