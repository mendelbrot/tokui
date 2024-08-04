'use client'

import React from 'react'

type Props = {
  glyphSvg: string
  cursorPosition: number[] | null
  moveTo: (position: number[]) => void
}

function Display({ glyphSvg, cursorPosition, moveTo }: Props) {
  return (
    <div className="border rounded-lg p-2 my-2 flex-1 overflow-auto border-slate-700">
      {glyphSvg && <div dangerouslySetInnerHTML={{ __html: glyphSvg }} />}
    </div>
  )
}

export default Display
