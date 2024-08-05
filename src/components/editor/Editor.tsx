'use client'

import React from 'react'
import draw, {
  HardSettings,
  defaultSettings,
  glyphBaseDimensions,
} from '@/lib/draw'
import Keyboard from '@/components/editor/Keyboard'
import Display from './Display'
import SettingsBar from './SettingsBar'

const maxScaleValue = 5
const minScaleValue = 0.5
const scaleIncrementValue = 0.5

function Editor() {
  const [text, setText] = React.useState<string>('')
  const [cursorPosition, setCursorPosition] = React.useState<number[]>([0, 0])
  const [settingsValue, setSettingsValue] =
    React.useState<HardSettings>(defaultSettings)
  const [windowDimensions, setWindowDimensions] = React.useState<number[]>([
    0, 0,
  ])
  const [textMode, setTextMode] = React.useState<boolean>(false)
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null)

  const { glyphSvg, cursorMap } = draw(text, settingsValue)
  // console.table(cursorMap)

  const settings = {
    incrementLineWrap: () => {
      setSettingsValue({
        ...settingsValue,
        ...{ lineWrap: settingsValue.lineWrap + 1 },
      })
    },
    decrementLineWrap: () => {
      if (settingsValue.lineWrap > 0) {
        setSettingsValue({
          ...settingsValue,
          ...{ lineWrap: settingsValue.lineWrap - 1 },
        })
      }
    },
    incrementScale: () => {
      if (settingsValue.scale < maxScaleValue) {
        setSettingsValue({
          ...settingsValue,
          ...{ scale: settingsValue.scale + scaleIncrementValue },
        })
      }
    },
    decrementScale: () => {
      if (settingsValue.scale > minScaleValue) {
        setSettingsValue({
          ...settingsValue,
          ...{ scale: settingsValue.scale - scaleIncrementValue },
        })
      }
    },
  }

  const cursor = {
    moveTo: (position: number[]) => {
      if (position[0] < cursorMap.length && position[1] < cursorMap[0].length) {
        setCursorPosition(position)
      }
    },
    up: () => {},
    down: () => {},
    left: () => {},
    right: () => {},
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const downloadSvgAsync = async () => {
    try {
      const options = {
        suggestedName: 'writing.svg',
        types: [
          {
            accept: {
              'image/svg+xml': ['.svg'],
            },
          },
        ],
      }

      const handle = await window.showSaveFilePicker(options)
      const writable = await handle.createWritable()
      await writable.write(glyphSvg)
      await writable.close()
    } catch (e) {
      alert(e)
    }
  }

  React.useEffect(() => {
    setWindowDimensions([window.innerWidth, window.innerHeight])

    const handleWindowResize = () => {
      setWindowDimensions([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  React.useEffect(() => {
    if (textMode && textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [textMode])

  return (
    <div className="flex flex-col items-center w-screen">
      <div className="flex flex-col h-screen w-[344px] sm:w-[568px] p-[16px]">
        <div>
          <SettingsBar
            settings={settings}
            textMode={textMode}
            setTextMode={setTextMode}
            text={text}
            downloadSvgAsync={downloadSvgAsync}
          />
        </div>
        <div className="w-[312px] sm:w-[536px] border rounded-lg p-2 my-2 flex-1 overflow-auto border-slate-700">
          <Display
            glyphSvg={glyphSvg}
            cursorMap={cursorMap}
            cursorPosition={cursorPosition}
            moveTo={cursor.moveTo}
            glyphSize={settingsValue.scale * glyphBaseDimensions[0]}
            gridMode
          />
        </div>

        <div className={!textMode ? 'hidden' : 'h-[216px]'}>
          <textarea
            ref={textareaRef}
            value={text}
            onChange={handleTextChange}
            className="border border-slate-700 rounded-lg p-2 h-[216px] w-[312px] sm:w-[536px]"
          />
        </div>
        {!textMode && (
          <div className="flex flex-row items-center">
            <Keyboard
              text={text}
              setText={setText}
              windowWidth={windowDimensions[0]}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Editor
