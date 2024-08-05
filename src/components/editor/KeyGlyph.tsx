'use client'

import React from 'react'
import draw from '@/lib/draw'

type Props = React.PropsWithChildren & {
  glyphText: string
}

function KeyGlyph({ glyphText }: Props) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: draw(glyphText, { lineWrap: 0, scale: 1 }).glyphSvg,
      }}
    />
  )
}

export default KeyGlyph
