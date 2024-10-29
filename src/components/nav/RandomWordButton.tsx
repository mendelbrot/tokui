'use client'

// @ts-ignore
import wordData_ from '@/data/wordData.yaml'
const wordData = wordData_ as WordData
import { useRouter } from 'next/navigation'
import { WordData } from '@/data/wordDataTypes'
import NavButton from './NavButton'

const RandomWordButton = () => {
  const router = useRouter()

  const handleRandom = () => {
    const wordsList = Object.keys(wordData.definitions)
    const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)]
    const slug = encodeURIComponent(randomWord)
    router.push('/words/' + slug)
  }

  return (
    <NavButton
      onClick={handleRandom}
      imgSrc="/icons/random.png"
      imgAlt="go to random word"
    />
  )
}

export default RandomWordButton
