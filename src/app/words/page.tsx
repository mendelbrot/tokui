'use client'

// @ts-ignore
import wordData_ from '@/data/wordData.yaml'
const wordData = wordData_ as WordData
import RandomWordButton from '@/components/nav/RandomWordButton'
import NavButton from '@/components/nav/NavButton'
import NavContainer from '@/components/nav/NavContainer'
import WritingBlock from '@/components/WritingBlock'
import Link from 'next/link'
import { WordData } from '@/data/wordDataTypes'
import React from 'react'

function Words() {
  const [searchQuery, setSearchQuery] = React.useState<string>('')
  const [searchMode, setSearchMode] = React.useState<boolean>(false)

  const exitSearch = () => {
    setSearchQuery('')
    setSearchMode(false)
  }

  const enterSearch = () => {
    setSearchMode(true)
  }
  return (
    <div className="max-w-prose p-[16px]">
      <NavContainer>
        <NavButton href="/" imgAlt="home" imgSrc="/icons/tomo.svg" />
        {searchMode ? (
          <NavButton
            onClick={exitSearch}
            imgAlt="exit search"
            imgSrc="/icons/exit.svg"
          />
        ) : (
          <NavButton
            onClick={enterSearch}
            imgAlt="enter search"
            imgSrc="/icons/search.svg"
          />
        )}
        <RandomWordButton />
      </NavContainer>
      {searchMode ? (
        <div>
          <div className="fixed top-0 w-11/12 sm:w-[65ch] bg-white">
            <input
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              className="my-4 p-2 border border-slate-500 rounded-md w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <ul className="mt-[74px]">
            {Object.entries(wordData.definitions)
              .filter(([wordName, wordDefinitions]) => {
                return (
                  wordName.includes(searchQuery) ||
                  wordDefinitions.some((definition) =>
                    definition.includes(searchQuery)
                  )
                )
              })
              .map(([wordName, wordDefinitions]) => (
                <li
                  key={wordName}
                  className="flex prose items-start mt-4 pt-4 border-t"
                >
                  <div>
                    <WritingBlock
                      className="p-2 border-2 rounded-lg mr-2"
                      settings={{ scale: 2 }}
                    >
                      {wordName}
                    </WritingBlock>
                    <h2 className="m-0">{wordName}</h2>
                  </div>
                  <div>
                    <ul className="m-0">
                      {wordDefinitions.map((i) => (
                        <li key={wordName + i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ) : (
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
      )}
      <span>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </span>
    </div>
  )
}

export default Words
