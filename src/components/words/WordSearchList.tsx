'use client'

// @ts-ignore
import wordData_ from '@/data/wordData.yaml'
const wordData = wordData_ as WordData
import WritingBlock from '@/components/glyphs/WritingBlock'
import { WordData } from '@/data/wordDataTypes'
import React from 'react'
import Spanner from '@/components/Spanner'
import Link from 'next/link'
import lnWord from '@/lib/lnWord'

function WordSearchList() {
  const [searchQueryA, setSearchQueryA] = React.useState<string>('')
  const [searchQueryB, setSearchQueryB] = React.useState<string>('')

  return (
    <div>
      <div className="fixed top-0 w-11/12 sm:w-[62ch] bg-white content-box flex">
        <input
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          className="my-4 p-2 border border-slate-500 rounded-md mr-2 w-24"
          value={searchQueryA}
          onChange={(e) => setSearchQueryA(e.target.value)}
        />
        <input
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          className="my-4 p-2 border border-slate-500 rounded-md flex-1"
          value={searchQueryB}
          onChange={(e) => setSearchQueryB(e.target.value)}
        />
      </div>
      <ul className="mt-[64px]">
        {Object.entries(wordData.definitions)
          .filter(([wordName, _wordDefinitions]) =>
            wordName.includes(searchQueryA)
          )
          .filter(([_wordName, wordDefinitions]) =>
            wordDefinitions.some((definition) =>
              definition.includes(searchQueryB)
            )
          )
          .map(([wordName, wordDefinitions]) => {
            const soundedOutLnWord = lnWord(wordName)
            return (
              <li
                key={wordName}
                className="flex items-start mt-4 pt-4 border-t"
              >
                <div>
                  <Link href={'/words/' + wordName}>
                    <WritingBlock
                      className="p-2 border-2 rounded-lg mr-2"
                      settings={{ scale: 2 }}
                    >
                      {wordName}
                    </WritingBlock>
                  </Link>
                  <h2>
                    {soundedOutLnWord
                      ? `${wordName} (${soundedOutLnWord})`
                      : wordName}
                  </h2>
                </div>
                <div>
                  <ul className="prose">
                    {wordDefinitions.map((i) => (
                      <li key={wordName + i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
      </ul>
      <Spanner />
    </div>
  )
}

export default WordSearchList
