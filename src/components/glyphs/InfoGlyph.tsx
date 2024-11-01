'use client'

import React from 'react'
import Editor from '@/lib/Editor'
import { SoftSettingsValue } from '@/lib/EditorTypes'
import InfoPopup from './InfoPopup'

type Props = {
  children: string
  settings?: SoftSettingsValue
  className?: string
}

function InfoGlyph({ children, settings, className = undefined }: Props) {
  const [showInfo, setShowInfo] = React.useState(false)

  const closeInfo = () => {
    setShowInfo(false)
  }

  const openInfo = () => {
    setShowInfo(true)
  }

  return (
    <div className="relative">
      {showInfo && <InfoPopup word={children} close={closeInfo} />}
      <button
        className={
          'rounded-lg hover:bg-purple-100 ' +
          (showInfo ? 'bg-purple-100 ' : '') +
          className
        }
        onClick={openInfo}
        dangerouslySetInnerHTML={{
          __html: Editor.draw(children, settings),
        }}
      ></button>
    </div>
  )
}

export default InfoGlyph
