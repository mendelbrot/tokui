'use client'

import React from 'react'
import KeyGlyph from '../KeyGlyph'
import Key from '../Key'

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
          keyboardKeys={['m']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="m" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['n']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="n" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['g']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="g" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['p']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="p" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['t']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="t" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['k']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="k" />
        </Key>

        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['f']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="f" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['s']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="s" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['h']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="h" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['w']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="w" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['l']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="l" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['y']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="y" />
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
          keyboardKeys={['i']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="i" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['e']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="e" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['a']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="a" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['o']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="o" />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['u']}
          pressedKey={pressedKey}
        >
          <KeyGlyph glyphText="u" />
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
