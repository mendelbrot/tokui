'use client'

import React from 'react'
import Normal0 from './keyboardLayers/Normal0'
import Normal1 from './keyboardLayers/Normal1'
import Small0 from './keyboardLayers/Small0'
import Small1 from './keyboardLayers/Small1'

type Props = {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  smallScreen: boolean
  cursor: {
    moveTo: (position: number[]) => void
    up: () => void
    down: () => void
    left: () => void
    right: () => void
  }
  cursorPosition: number[]
  setCursorPosition: React.Dispatch<React.SetStateAction<number[]>>
  cursorMap: number[][]
}

function Keyboard({
  text,
  setText,
  smallScreen,
  cursor,
  cursorPosition,
  setCursorPosition,
  cursorMap,
}: Props) {
  const [pressedKey, setPressedKey] = React.useState<string | null>(null)
  const [layer, setLayer] = React.useState<number>(0)

  const handleKeyboardPress = React.useCallback(
    (keyboardKey: string) => {
      // console.clear()
      // console.log('cursorPosition', cursorPosition.toString())
      // // console.log('text', text)
      // console.table(cursorMap)
      // console.log(
      //   'break index',
      //   cursorMap[cursorPosition[1]][cursorPosition[0]]
      // )

      // const textBefore = text.slice(
      //   0,
      //   cursorMap[cursorPosition[0]][cursorPosition[1]]
      // )
      // const textAfter = text.slice(
      //   cursorMap[cursorPosition[0]][cursorPosition[1]]
      // )

      // console.log('textBefore', textBefore)
      // console.log('textAfter', textAfter)

      switch (keyboardKey) {
        case 'Alt': {
          setLayer((layer + 1) % 2)
          break
        }
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
          setText(text + keyboardKey + ' ')
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
          setText(text + keyboardKey)
          break
        }
        default: {
          break
        }
      }
    },
    [text, setText, layer, setLayer, cursor, cursorMap, cursorPosition]
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
