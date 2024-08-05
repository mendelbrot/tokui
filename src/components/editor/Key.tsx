'use client'

import React from 'react'
import draw from '@/lib/draw'

type Props = React.PropsWithChildren & {
  handleKeyboardPress: (keyboardKey: string) => void
  keyboardKeys?: string[]
  positioningStyle?: string
  pressedKey: string | null
  setPressedKey: React.Dispatch<React.SetStateAction<string | null>>
}

function Key({
  children,
  handleKeyboardPress,
  keyboardKeys,
  pressedKey,
  setPressedKey,
  positioningStyle,
}: Props) {
  const style = `flex items-center justify-center border rounded-md border-slate-700 active:bg-lime-200 ${
    positioningStyle || 'w-12 h-12'
  } ${
    keyboardKeys && keyboardKeys.some((key) => key === pressedKey)
      ? 'bg-lime-200'
      : ''
  }`

  return (
    <button
      className={style}
      onClick={() => {
        if (keyboardKeys) {
          handleKeyboardPress(keyboardKeys[0])
        }
      }}
    >
      {children}
    </button>
  )
}

export default Key
