'use client'

import React from 'react'
import I from '@/components/glyphs/InfoGlyph'

type Props = {
  children: string
}

function InfoBlock({ children }: Props) {
  const words = children.split(' ')
  return (
    <div className="flex flex-wrap my-5">
      {words.map((word, index) => (
        <I key={index}>{word}</I>
      ))}
    </div>
  )
}

export default InfoBlock
