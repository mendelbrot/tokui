'use client'

import React from 'react'
import draw, { Settings, defaultSettings } from '@/lib/draw'
import Keyboard from '@/components/editor/Keyboard'
import Display from './Display'

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
  const [settings, setSettings] = React.useState<Settings>(defaultSettings)

  const { glyphSvg, cursorMap } = draw(text, settings)
  console.table(cursorMap)

  const handleDownloadSvg = () => {
    downloadSvgAsync(glyphSvg)
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, ...{ scale: Number(e.target.value) } })
  }

  const cursor = {
    moveTo: (position: number[]) => {},
    up: () => {},
    down: () => {},
    left: () => {},
    right: () => {},
  }

  return (
    <div>
      <div className="grid grid-rows-4 justify-items-center max-w-2xl pt-2 sm:pt-4">
        <div className="border-2 rounded-lg p-2">
          <Display
            glyphSvg={glyphSvg}
            cursorPosition={cursorPosition}
            moveTo={cursor.moveTo}
          />
        </div>
        <Keyboard text={text} setText={setText} />
        <div className="flex row-span-1">
          <textarea
            value={text}
            onChange={handleTextChange}
            className="border-2 rounded-lg p-2 m-2 mt-4 w-[50vw] sm:w-96"
          />
          <div className="flex flex-col mt-2">
            <input
              type="number"
              min="0.5"
              max="5.0"
              step="0.5"
              onChange={handleScaleChange}
              value={settings.scale}
            />
            <button
              onClick={handleDownloadSvg}
              className="border-2 rounded-lg p-2 m-2 hover:border-black"
            >
              Download SVG
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor
