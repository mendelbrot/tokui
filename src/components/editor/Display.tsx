'use client'

import React from 'react'

type Props = {
  glyphSvg: string
  cursorPosition: number[] | null
  moveTo: (position: number[]) => void
}

function Display({ glyphSvg, cursorPosition, moveTo }: Props) {
  return (
    <div className="overflow-auto">
      {glyphSvg && <div dangerouslySetInnerHTML={{ __html: glyphSvg }} />}
    </div>
  )
}

export default Display
