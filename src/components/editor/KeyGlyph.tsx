'use client'

import React from 'react'
import Editor from '@/lib/Editor'

type Props = React.PropsWithChildren & {
  glyphText: string
}

function KeyGlyph({ glyphText }: Props) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: Editor.draw(glyphText, { lineWrap: null, scale: 1 }),
      }}
    />
  )
}

export default KeyGlyph
