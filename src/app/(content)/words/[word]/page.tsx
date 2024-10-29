'use client'

import { useParams } from 'next/navigation'
import WordDetails from '@/components/words/WordDetails'
import NavContainer from '@/components/nav/NavContainer'
import NavButton from '@/components/nav/NavButton'
import RandomWordButton from '@/components/nav/RandomWordButton'

const WordDetailsPage = () => {
  const params = useParams()
  const word: string =
    typeof params.word == 'string' ? decodeURIComponent(params.word) : ''

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
      <div className="max-w-prose p-[16px]">
        <WordDetails word={word} />
      </div>
    </div>
  )
}

export default WordDetailsPage
