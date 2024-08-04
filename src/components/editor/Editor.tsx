'use client'

import React from 'react'
import draw, { HardSettings, defaultSettings } from '@/lib/draw'
import Keyboard from '@/components/editor/Keyboard'
import Display from './Display'
import { IoCodeDownload } from 'react-icons/io5'
import { HiMagnifyingGlassMinus, HiMagnifyingGlassPlus } from 'react-icons/hi2'
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci'
import { BsFiletypeTxt } from 'react-icons/bs'
import { BsCopy } from 'react-icons/bs'

const maxScaleValue = 5
const minScaleValue = 0.5
const scaleIncrementValue = 0.5

const iconSize = '32px'

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
  const [textMode, setTextMode] = React.useState<boolean>(false)
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null)

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
    moveTo: (position: number[]) => {},
    up: () => {},
    down: () => {},
    left: () => {},
    right: () => {},
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
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
    <div>
      <div className="flex flex-col h-screen w-[344px] sm:w-[568px] p-[16px]">
        <div className="flex flex-row justify-between">
          <div>
            <button
              onClick={settings.decrementScale}
              className="active:bg-lime-300 p-1 rounded-lg"
            >
              <HiMagnifyingGlassMinus size={iconSize} />
            </button>
            <button
              onClick={settings.incrementScale}
              className="active:bg-lime-300 p-1 rounded-lg"
            >
              <HiMagnifyingGlassPlus size={iconSize} />
            </button>
          </div>
          <div>
            <button
              onClick={settings.decrementLineWrap}
              className="active:bg-lime-300 p-1 rounded-lg"
            >
              <CiSquareMinus size={iconSize} />
            </button>
            <button
              onClick={settings.incrementLineWrap}
              className="active:bg-lime-300 p-1 rounded-lg"
            >
              <CiSquarePlus size={iconSize} />
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setTextMode(!textMode)
              }}
              className={
                textMode ? 'bg-lime-300 p-1 rounded-lg' : 'p-1 rounded-lg'
              }
            >
              <BsFiletypeTxt size={iconSize} />
            </button>
            <button
              className="active:bg-lime-300 p-1 rounded-lg"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(text)
                } catch (e) {
                  alert(e)
                }
              }}
            >
              <BsCopy size={iconSize} />
            </button>
          </div>
          <div>
            <button
              onClick={handleDownloadSvg}
              className="active:bg-lime-300 p-1 rounded-lg"
            >
              <IoCodeDownload size={iconSize} />
            </button>
          </div>
        </div>
        <Display
          glyphSvg={glyphSvg}
          cursorPosition={cursorPosition}
          moveTo={cursor.moveTo}
        />
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
