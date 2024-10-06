'use client'

// @ts-ignore
import wordData_ from '@/data/wordData.yaml'
const wordData = wordData_ as WordData
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { WordData } from '@/data/wordDataTypes'

const RandomWord = () => {
  const router = useRouter()

  const handleRandom = () => {
    const wordsList = Object.keys(wordData.definitions)
    const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)]
    const slug = encodeURI(randomWord)
    router.push('/words/' + slug)
  }

  return (
    <button
      onClick={handleRandom}
      className="border-2 rounded-lg bg-opacity-70 bg-white hover:bg-emerald-200 hover:bg-opacity-70"
    >
      <Image
        className="opacity-30 rounded-lg"
        src="/icons/random.png"
        alt="go to random word"
        width="64"
        height="64"
      />
    </button>
  )
}

export default RandomWord
