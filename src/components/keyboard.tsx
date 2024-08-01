'use client'

import React from 'react'
import draw from '@/lib/draw'

type KeyProps = React.PropsWithChildren & {
  handleKeyboardPress: (keyboardKey: string) => void
  keyboardKeys: string[]
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
}: KeyProps) {
  const style = `flex items-center justify-center border-2 rounded-md border-black ${
    positioningStyle || 'w-12 h-12'
  } ${keyboardKeys.some((key) => key === pressedKey) ? 'border-lime-500' : ''}`

  return (
    <div
      className={style}
      onPointerDown={() => setPressedKey(keyboardKeys[0])}
      onPointerUp={() => {
        setPressedKey(null)
        handleKeyboardPress(keyboardKeys[0])
      }}
    >
      {children}
    </div>
  )
}

type Props = {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
}

function Keyboard({ text, setText }: Props) {
  const [pressedKey, setPressedKey] = React.useState<string | null>(null)

  const handleKeyboardPress = React.useCallback(
    (keyboardKey: string) => {
      switch (keyboardKey) {
        case 'Backspace': {
          if (text.endsWith('_ ')) {
            setText(text.slice(0, -2))
          } else {
            setText(text.slice(0, -1))
          }
          break
        }
        case 'Enter': {
          setText(text + '\n')
          break
        }
        case '#': {
          setText(text + ' #')
          break
        }
        case '_': {
          setText(text + ' _ ')
          break
        }
        case 'm':
        case 'n':
        case 'g':
        case 'p':
        case 't':
        case 'k':
        case 'f':
        case 's':
        case 'h':
        case 'w':
        case 'l':
        case 'y':
        case 'i':
        case 'e':
        case 'a':
        case 'o':
        case 'u':
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case ' ': {
          setText(text + keyboardKey)
          break
        }
        default: {
          break
        }
      }
    },
    [text, setText]
  )

  React.useEffect(() => {
    const handleKeyDownEvent = (event: KeyboardEvent) => {
      if (event.key === ' ') {
        // prevent space key press from scrolling the page down
        event.preventDefault()
      }
      setPressedKey(event.key)
      handleKeyboardPress(event.key)
    }

    const handleKeyUpEvent = (_event: KeyboardEvent) => setPressedKey(null)

    window.addEventListener('keydown', handleKeyDownEvent)
    window.addEventListener('keyup', handleKeyUpEvent)
    return () => {
      window.removeEventListener('keydown', handleKeyDownEvent)
      window.removeEventListener('keyup', handleKeyUpEvent)
    }
  }, [setPressedKey, handleKeyboardPress])

  return (
    <div>
      <div className="grid sm:grid-cols-10 grid-cols-6 gap-2 overflow-x-auto">
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['_']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('_') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['_']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('_') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['m']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('m') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['n']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('n') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['g']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('g') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['p']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('p') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['t']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('t') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['k']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('k') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['4']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('4') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['5']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('5') }} />
        </Key>

        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={[' ']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw(' ') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={[' ']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw(' ') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['f']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('f') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['s']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('s') }} />
        </Key>

        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['h']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('h') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['w']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('w') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['l']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('l') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['y']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('y') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['2']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('2') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['3']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('3') }} />
        </Key>

        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['_']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('_') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['_']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('_') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['i']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('i') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['e']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['a']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('a') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['o']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('o') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['u']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('u') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['_']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('_') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['0']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('0') }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['1']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('1') }} />
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
          positioningStyle="sm:col-span-2 h-12"
        >
          <div dangerouslySetInnerHTML={{ __html: 'space' }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={[' ']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
          positioningStyle="sm:col-span-4 col-span-2 h-12"
        >
          <div dangerouslySetInnerHTML={{ __html: 'next word' }} />
        </Key>
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['Enter']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
          positioningStyle="sm:col-span-2 h-12"
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

export default Keyboard
