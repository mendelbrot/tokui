'use client'

import words from '../data/words'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const RandomWord = () => {
  const router = useRouter()

  const handleRandom = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    const slug = encodeURI(randomWord.written)
    router.push('/words/' + slug)
  }

  return (
    <button
      onClick={handleRandom}
      className="border-2 rounded-lg bg-opacity-70 bg-white hover:bg-yellow-50 hover:bg-opacity-70"
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
