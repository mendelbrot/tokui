'use client'
 
import { useParams } from 'next/navigation'
import WordDetails from '@/components/word-details'

const WordDetailsPage = () => {

  const params = useParams()
  const letters: string = typeof params.letters == 'string' ? params.letters : ''

  return <main><WordDetails letters={letters} /></main>
}

export default WordDetailsPage