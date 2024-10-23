'use client'

import React from 'react'
import Key from '../Key'
import KeyGlyph from '../KeyGlyph'

type Props = {
  handleKeyboardPress: (keyboardKey: string) => void
  pressedKey: string | null
}

function Normal0({ handleKeyboardPress, pressedKey }: Props) {
  return (
    <div>
      <div className="grid grid-cols-6 gap-2">
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['+']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="+" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['-']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="-" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['*']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="*" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['/']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="/" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['4']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="4" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['5']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="5" />
        </Key>

        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['=']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="=" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={[':']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText=":" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['.']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="." />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['7']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="7" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['2']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="2" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['3']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="3" />
        </Key>

        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['Alt']}
          pressedKey={pressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: 'alt' }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          // keyboardKeys={['']}
          pressedKey={pressedKey}
        >
          {/* <KeyGlyph glyphText="" /> */}
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          // keyboardKeys={['']}
          pressedKey={pressedKey}
        >
          {/* <KeyGlyph glyphText="" /> */}
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['6']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="6" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['0']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="0" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['1']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="1" />
        </Key>

        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['#']}
          pressedKey={pressedKey}
        >
          #
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['_']}
          pressedKey={pressedKey}
        >
          space
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={[' ']}
          pressedKey={pressedKey}
          positioningStyle="col-span-2 h-12"
        >
          next word
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['Enter']}
          pressedKey={pressedKey}
        >
          return
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['Backspace']}
          pressedKey={pressedKey}
        >
          bks
        </Key>
      </div>
    </div>
  )
}

export default Normal0
