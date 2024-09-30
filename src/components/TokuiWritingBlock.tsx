'use client'

import React from 'react'
import Editor from '@/lib/Editor'
import { SoftSettingsValue } from '@/lib/EditorTypes'

type Props = React.PropsWithChildren & {
  text: string
  settings?: SoftSettingsValue
}

function TokuiWritingBlock({ text, settings }: Props) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: Editor.draw(text, settings),
      }}
    />
  )
}

export default TokuiWritingBlock
