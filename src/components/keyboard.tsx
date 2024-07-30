'use client'

import React from 'react'
import draw from '@/lib/draw'

type KeyProps = React.PropsWithChildren & {
  handleKeyboardPress: (keyboardKey: string) => void
  keyboardKeys: string[]
  columnsStyle?: string
  pressedKey: string | null
  setPressedKey: React.Dispatch<React.SetStateAction<string | null>>
}

function Key({
  children,
  handleKeyboardPress,
  keyboardKeys,
  columnsStyle = '',
  pressedKey,
  setPressedKey,
}: KeyProps) {
  const style = `flex items-center justify-center border-2 rounded-md border-black w-12 h-12 ${columnsStyle} ${
    keyboardKeys.some((key) => key === pressedKey) ? 'border-lime-500' : ''
  }`

  return (
    <div
      className={style}
      onClick={() => handleKeyboardPress(keyboardKeys[0])}
      onPointerDown={() => setPressedKey(keyboardKeys[0])}
      onPointerUp={() => setPressedKey(null)}
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

  const handleKeyDown = (key: string) => {
    setPressedKey(key)
  }
  const handleKeyUp = () => {
    setPressedKey(null)
  }

  const appendSequence = (s: string) => {
    setText(text + s)
  }

  const backspace = () => {
    if (text.endsWith('_ ')) {
      setText(text.slice(0, -2))
    } else {
      setText(text.slice(0, -1))
    }
  }

  const handleKeyboardPress = (keyboardKey: string) => {
    console.log(0, keyboardKey)
    switch (keyboardKey) {
      case 'backspace': {
        backspace()
        break
      }
      default: {
        console.log(1, keyboardKey)
        appendSequence(keyboardKey)
        break
      }
    }
  }

  React.useEffect(() => {
    const handleKeyDownEvent = (event: KeyboardEvent) =>
      setPressedKey(event.key)
    const handleKeyUpEvent = (_event: KeyboardEvent) => setPressedKey(null)
    // const handleKeyPressEvent = (event: KeyboardEvent) =>
    //   setPressedKey(event.key)
    window.addEventListener('keydown', handleKeyDownEvent)
    window.addEventListener('keyup', handleKeyUpEvent)
    return () => {
      window.removeEventListener('keydown', handleKeyDownEvent)
      window.removeEventListener('keyup', handleKeyUpEvent)
    }
  }, [setPressedKey])

  return (
    <div>
      <div className="grid sm:grid-cols-10 grid-cols-6 gap-2 overflow-x-auto">
        <Key
          handleKeyboardPress={handleKeyboardPress}
          keyboardKeys={['e']}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
        >
          <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        </Key>
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />

        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />

        <div
          className="flex items-center justify-center border-2 rounded-md border-black w-12 h-12"
          onClick={() => appendSequence('e')}
          dangerouslySetInnerHTML={{ __html: draw('e') }}
        />
        <div
          className="flex items-center justify-center border-2 rounded-md border-black w-12 h-12"
          dangerouslySetInnerHTML={{ __html: draw('e') }}
        />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />

        <div
          className="flex items-center justify-center border-2 rounded-md border-black w-12 h-12"
          onClick={() => appendSequence(' #')}
          dangerouslySetInnerHTML={{ __html: '#' }}
        />
        <div
          className="sm:col-span-2 flex items-center justify-center border-2 rounded-md border-black h-12"
          onClick={() => appendSequence(' _ ')}
          dangerouslySetInnerHTML={{ __html: 'space' }}
        />
        <div
          className="sm:col-span-4 col-span-2 flex items-center justify-center border-2 rounded-md border-black h-12"
          onClick={() => appendSequence(' ')}
          dangerouslySetInnerHTML={{ __html: 'next word' }}
        />
        <div
          className="sm:col-span-2  flex items-center justify-center border-2 rounded-md border-black h-12"
          onClick={() => appendSequence('\n')}
          dangerouslySetInnerHTML={{ __html: 'return' }}
        />
        <div
          className="flex items-center justify-center border-2 rounded-md border-black w-12 h-12"
          onClick={backspace}
          dangerouslySetInnerHTML={{ __html: 'bks' }}
        />
      </div>
    </div>
  )
}

export default Keyboard
