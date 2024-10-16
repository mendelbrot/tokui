// @ts-ignore
import wordData_ from '@/data/wordData.yaml'
const wordData = wordData_ as WordData
import React from 'react'
import { WordData } from '@/data/wordDataTypes'
import lnWord from '@/lib/ln-word'
import Link from 'next/link'
import Image from 'next/image'
import { BoundaryContext } from '../words/WordGlyphsList'

type Props = { word: string; close: () => void }

function InfoPopup({ word, close }: Props) {
  //@ts-ignore
  const definitions: string[] = wordData.definitions[word] || ['WORD NOT FOUND']
  const soundedOutLnWord = lnWord(word)

  const popupRef = React.useRef<HTMLDivElement | null>(null)
  const boundingRect = React.useContext(BoundaryContext)

  React.useEffect(() => {
    if (popupRef.current && boundingRect) {
      const popupBoundingRect = popupRef.current.getBoundingClientRect()
      const rightOverflow = popupBoundingRect.right - boundingRect.right
      if (rightOverflow > 0) {
        popupRef.current.style.left = `-${Math.trunc(rightOverflow + 8)}px`
      }
    }
  }, [popupRef, boundingRect])

  React.useEffect(() => {
    const closeOnClickOutside = (event: MouseEvent) => {
      if (popupRef.current) {
        const popupBoundingRect = popupRef.current.getBoundingClientRect()
        if (
          event.x > popupBoundingRect.right ||
          event.x < popupBoundingRect.left ||
          event.y < popupBoundingRect.top ||
          event.y > popupBoundingRect.bottom
        )
          close()
      }
    }
    window.setTimeout(() => {
      window.addEventListener('click', closeOnClickOutside)
    }, 100)

    return () => {
      window.removeEventListener('click', closeOnClickOutside)
    }
  }, [close])

  return (
    <div
      ref={popupRef}
      className="absolute bottom-[-186px] prose w-64 border rounded-lg bg-emerald-100 z-30"
    >
      <div className="flex px-4 pt-2 text-lg justify-between">
        <Link href={'/words/' + word}>
          {soundedOutLnWord ? `${word} (${soundedOutLnWord})` : word}
        </Link>
        <button onClick={close}>
          <Image
            className="m-0"
            src="/icons/exit.svg"
            alt="close"
            width="32"
            height="32"
          />
        </button>
      </div>
      <div className="p-2 overflow-y-auto h-36">
        <ul className="m-0">
          {definitions.map((i) => (
            <li className="m-0" key={word + i}>
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default InfoPopup
