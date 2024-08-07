'use client'

import React from 'react'
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
      <div className="grid grid-cols-10 gap-2">
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
          keyboardKeys={['m']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="m" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['n']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="n" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['g']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="g" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['p']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="p" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['t']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="t" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['k']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="k" />
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
          keyboardKeys={['f']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="f" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['s']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="s" />
        </Key>

        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['h']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="h" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['w']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="w" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['l']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="l" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['y']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="y" />
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
          keyboardKeys={['i']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="i" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['e']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="e" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['a']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="a" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['o']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="o" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['u']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <KeyGlyph glyphText="u" />
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
          keyboardKeys={['Alt']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          alt
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
          positioningStyle="col-span-2 h-12"
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
          positioningStyle="col-span-2 h-12"
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
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['Alt']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          alt
        </Key>
      </div>
    </div>
  )
}

export default Normal0
