'use client'

import React from 'react'
import Editor from '@/lib/Editor'
import { SoftSettingsValue } from '@/lib/EditorTypes'

type Props = {
  children: string
  settings?: SoftSettingsValue
  className?: string
}

function WritingBlock({ children, settings, className = undefined }: Props) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: Editor.draw(children, settings),
      }}
    />
  )
}

export default WritingBlock
