'use client'

import React from 'react'
import draw from '@/lib/draw'
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
          <div dangerouslySetInnerHTML={{ __html: draw('m').glyphSvg }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['n']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('n').glyphSvg }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['g']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('g').glyphSvg }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['p']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('p').glyphSvg }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['t']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('t').glyphSvg }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['k']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('k').glyphSvg }} />
        </Key>

        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['f']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('f').glyphSvg }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['s']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('s').glyphSvg }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['h']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('h').glyphSvg }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['w']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('w').glyphSvg }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['l']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('l').glyphSvg }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['y']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('y').glyphSvg }} />
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
          <div dangerouslySetInnerHTML={{ __html: draw('i').glyphSvg }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['e']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('e').glyphSvg }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['a']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('a').glyphSvg }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['o']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('o').glyphSvg }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['u']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('u').glyphSvg }} />
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
