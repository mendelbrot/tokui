'use client'

import React from 'react'
import I from '@/components/glyphs/InfoGlyph'

type Props = {
  children: string
}

function InfoBlockSubtitle({ children }: Props) {
  const words = children.split(' ')
  return (
    <div className="my-5">
      <div className="flex flex-wrap">
        {words.map((word, index) => (
          <I key={index}>{word}</I>
        ))}
      </div>
      <b>{children.replace(' . ', '. ') + '.'}</b>
    </div>
  )
}

export default InfoBlockSubtitle
