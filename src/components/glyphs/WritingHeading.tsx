'use client'

import React from 'react'
import WritingBlock from './WritingBlock'
import useWindowDimensions from '@/lib/useWindowDimensions'

const screens = { sm: 640 }

type Props = {
  children: string
}

function WritingHeading({ children }: Props) {
  const windowDimensions = useWindowDimensions()
  const smallScreen = windowDimensions[0] < screens.sm

  return (
    <h1 className="mb-2 pb-2">
      <WritingBlock settings={{ scale: smallScreen ? 1.6 : 2.3 }}>
        {children}
      </WritingBlock>
    </h1>
  )
}

export default WritingHeading
