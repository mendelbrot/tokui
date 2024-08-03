'use client'

import React from 'react'
import draw, { HardSettings, defaultSettings } from '@/lib/draw'
import Keyboard from '@/components/editor/Keyboard'
import Display from './Display'

const maxScaleValue = 5
const minScaleValue = 0.5
const scaleIncrementValue = 0.5

const downloadSvgAsync = async (glyphSvg: string) => {
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

function Editor() {
  const [text, setText] = React.useState<string>('')
  const [cursorPosition, setCursorPosition] = React.useState<number[]>([0, 0])
  const [settingsValue, setSettingsValue] =
    React.useState<HardSettings>(defaultSettings)
  const [windowDimensions, setWindowDimensions] = React.useState<number[]>([
    0, 0,
  ])

  const { glyphSvg, cursorMap } = draw(text, settingsValue)
  // console.table(cursorMap)

  const handleDownloadSvg = () => {
    downloadSvgAsync(glyphSvg)
  }

  const handleScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettingsValue({ ...settingsValue, ...{ scale: Number(e.target.value) } })
  }

  const handleLineWrapChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettingsValue({
      ...settingsValue,
      ...{ lineWrap: Number(e.target.value) },
    })
  }

  const settings = {
    incrementLineWrap: () => {
      setSettingsValue({
        ...settingsValue,
        ...{ scale: settingsValue.lineWrap - 1 },
      })
    },
    decrementLineWrap: () => {
      if (settingsValue.lineWrap > 0) {
        setSettingsValue({
          ...settingsValue,
          ...{ scale: settingsValue.lineWrap - 1 },
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
    moveTo: (position: number[]) => {},
    up: () => {},
    down: () => {},
    left: () => {},
    right: () => {},
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

  return (
    <div>
      <div className="flex flex-col max-w-2xl h-screen">
        <div className="flex flex-row mt-2 border-2">
          <input
            type="number"
            min="0.5"
            max="5.0"
            step="0.5"
            onChange={handleScaleChange}
            value={settingsValue.scale}
          />
          <button onClick={handleDownloadSvg} className="border p">
            Download SVG
          </button>
        </div>
        <div className="border-2 rounded-lg p-2 flex-1">
          <Display
            glyphSvg={glyphSvg}
            cursorPosition={cursorPosition}
            moveTo={cursor.moveTo}
          />
        </div>
        <Keyboard
          text={text}
          setText={setText}
          windowWidth={windowDimensions[0]}
        />
      </div>
    </div>
  )
}

export default Editor
