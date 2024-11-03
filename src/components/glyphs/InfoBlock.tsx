'use client'

import React from 'react'
import InfoGlyph from '@/components/glyphs/InfoGlyph'

type Props = {
  children: string | Object
  subtitle?: boolean
  translation?: string
  comment?: string | Array<string | Object>
}

function InfoBlock(props: Props) {
  console.log(props.children)
  console.log(typeof props.children)
  let text: string = ''
  if (typeof props.children === 'object') {
    if (
      // @ts-ignore
      props.children?.props?.children &&
      // @ts-ignore
      typeof props.children.props.children === 'string'
    ) {
      // @ts-ignore
      text = props.children.props.children
    }
  } else if (typeof props.children === 'string') {
    text = props.children
  }
  const words = text.split(' ')

  return (
    <div className="my-5">
      <div className="flex flex-wrap">
        {words.map((word, index) => (
          <InfoGlyph key={index}>{word}</InfoGlyph>
        ))}
      </div>
      {props.subtitle && (
        <div className="font-bold">{text.replace(' . ', '. ') + '.'}</div>
      )}
      {props.translation && <div className="italic">{props.translation}</div>}
      {props.comment && <div>{props.comment}</div>}
    </div>
  )
}

export default InfoBlock
