'use client'

import React from 'react'
import draw from '@/lib/draw'
import Key from '../Key'
import KeyGlyph from '../KeyGlyph'

type Props = {
  handleKeyboardPress: (keyboardKey: string) => void
  pressedKey: string | null
  setPressedKey: React.Dispatch<React.SetStateAction<string | null>>
}

function Normal0({ handleKeyboardPress, pressedKey, setPressedKey }: Props) {
  return (
    <div>
      <div className="grid grid-cols-6 gap-2">
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['+']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="+" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['-']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="-" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['*']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="*" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['/']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="/" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['4']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="4" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['5']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="5" />
        </Key>

        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['=']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="=" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={[':']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText=":" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['.']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="." />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['7']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="7" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['2']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="2" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['3']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="3" />
        </Key>

        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['Alt']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: 'alt' }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          // keyboardKeys={['']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          {/* <KeyGlyph glyphText="" /> */}
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          // keyboardKeys={['']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          {/* <KeyGlyph glyphText="" /> */}
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['6']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="6" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['0']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="0" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['1']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="1" />
        </Key>

        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['#']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          #
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['_']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          space
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={[' ']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
          positioningStyle="col-span-2 h-12"
        >
          next word
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['Enter']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          return
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['Backspace']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          bks
        </Key>
      </div>
    </div>
  )
}

export default Normal0
