'use client'

import RandomWordButton from '@/components/nav/RandomWordButton'
import NavButton from '@/components/nav/NavButton'
import NavContainer from '@/components/nav/NavContainer'
import React from 'react'
import WordSearchList from '@/components/words/WordSearchList'
import WordGlyphsList from '@/components/words/WordGlyphsList'

function Words() {
  const [searchMode, setSearchMode] = React.useState<boolean>(false)

  const exitSearch = () => {
    setSearchMode(false)
  }

  const enterSearch = () => {
    setSearchMode(true)
  }

  return (
    <div className="max-w-prose p-4">
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
      {searchMode ? <WordSearchList /> : <WordGlyphsList />}
    </div>
  )
}

export default Words
