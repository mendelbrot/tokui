'use client'

import React from 'react'
import Normal0 from './keyboardLayers/Normal0'
import Normal1 from './keyboardLayers/Normal1'
import Small0 from './keyboardLayers/Small0'
import Small1 from './keyboardLayers/Small1'
import Editor from '@/lib/Editor'

type Props = {
  smallScreen: boolean
  writing: Editor['writing']
  cursor: Editor['cursor']
}

function Keyboard({ smallScreen, writing, cursor }: Props) {
  const [pressedKey, setPressedKey] = React.useState<string | null>(null)
  const [layer, setLayer] = React.useState<number>(0)

  const handleKeyboardPress = React.useCallback(
    (keyboardKey: string) => {
      switch (keyboardKey) {
        case 'Alt': {
          setLayer((layer + 1) % 2)
          break
        }
        case 'Backspace': {
          writing.delete()
          break
        }
        case 'Enter': {
          writing.insert('\n')
          break
        }
        case 'ArrowUp': {
          cursor.up()
          break
        }
        case 'ArrowDown': {
          cursor.down()
          break
        }
        case 'ArrowLeft': {
          cursor.left()
          break
        }
        case 'ArrowRight': {
          cursor.right()
          break
        }
        case '#':
        case '_':
          writing.insert(keyboardKey)
          break
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
        case ':':
        case '.':
        case '6':
        case '7': {
          writing.insert(keyboardKey)
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
        case ' ': {
          writing.insert(keyboardKey)
          break
        }
        default: {
          break
        }
      }
    },
    [writing, cursor, layer]
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
  }, [handleKeyboardPress])

  if (smallScreen) {
    if (layer === 0) {
      return (
        <Small0
          handleKeyboardPress={handleKeyboardPress}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        />
      )
    } else {
      return (
        <Small1
          handleKeyboardPress={handleKeyboardPress}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        />
      )
    }
  } else {
    if (layer === 0) {
      return (
        <Normal0
          handleKeyboardPress={handleKeyboardPress}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        />
      )
    } else {
      return (
        <Normal1
          handleKeyboardPress={handleKeyboardPress}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        />
      )
    }
  }
}

export default Keyboard
