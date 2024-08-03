'use client'

import React from 'react'
import KeyGlyph from '../KeyGlyph'
import Key from '../Key'

type Props = {
  handleKeyboardPress: (keyboardKey: string) => void
  pressedKey: string | null
  setPressedKey: React.Dispatch<React.SetStateAction<string | null>>
}

function Normal0({ handleKeyboardPress, pressedKey, setPressedKey }: Props) {
  return (
    <div>
      <div className="grid grid-cols-6 gap-2 overflow-x-auto">
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
          keyboardKeys={['Alt']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: 'alt' }} />
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
          keyboardKeys={['#']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: '#' }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['_']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: 'space' }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={[' ']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
          positioningStyle="col-span-2 h-12"
        >
          <div dangerouslySetInnerHTML={{ __html: 'next word' }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['Enter']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: 'return' }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['Backspace']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: 'bks' }} />
        </Key>
      </div>
    </div>
  )
}

export default Normal0
