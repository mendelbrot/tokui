'use client'

import { useParams } from 'next/navigation'
import WordDetails from '@/components/WordDetails'

const WordDetailsPage = () => {
  const params = useParams()
  const word: string =
    typeof params.word == 'string' ? decodeURI(params.word) : ''

  return (
    <main>
      <WordDetails word={word} />
    </main>
  )
}

export default WordDetailsPage
