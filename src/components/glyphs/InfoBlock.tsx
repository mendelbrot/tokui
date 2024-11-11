'use client'

import React from 'react'
import InfoGlyph from '@/components/glyphs/InfoGlyph'
import { SoftSettingsValue } from '@/lib/EditorTypes'

type Props = {
  children: string | Object | Array<string | Object>
  subtitle?: boolean
  translation?: string
  translationClassName?: string
  settings?: SoftSettingsValue
  className?: string
}

function retrieveLineText(line: string | Object): string {
  if (typeof line === 'object') {
    if (
      // @ts-ignore
      line?.props?.children &&
      // @ts-ignore
      typeof line.props.children === 'string'
    ) {
      // @ts-ignore
      return line.props.children
    }
  } else if (typeof line === 'string') {
    return line
  }
  return ''
}

function InfoBlock(props: Props) {
  let text: string[] = ['']
  if (Array.isArray(props.children)) {
    text = props.children.map((line) => retrieveLineText(line))
  } else {
    text[0] = retrieveLineText(props.children)
  }

  const words = text.map((line) => line.split(' '))

  return (
    <div className="my-5">
      {words.map((wordLine, index) => (
        <div key={index} className="flex flex-wrap">
          {wordLine.map((word, index) => (
            <InfoGlyph
              settings={props.settings}
              className={props.className}
              key={index}
            >
              {word}
            </InfoGlyph>
          ))}
        </div>
      ))}
      {props.subtitle &&
        text.map((words, index) => (
          <div key={index} className="font-bold">
            {words.replace(' . ', '. ') + '.'}
          </div>
        ))}
      {props.translation && (
        <div className={props.translationClassName || 'italic'}>
          {props.translation}
        </div>
      )}
    </div>
  )
}

export default InfoBlock
