'use client'

import React from 'react'
import Editor from '@/lib/Editor'
import { SoftSettingsValue } from '@/lib/EditorTypes'

type Props = {
  children: string
  settings?: SoftSettingsValue
}

function WritingBlock({ children, settings }: Props) {
  console.log(children)
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: Editor.draw(children, settings),
      }}
    />
  )
}

export default WritingBlock
