'use client'

import React from 'react'
import draw, { HardSettings, defaultSettings } from '@/lib/draw'
import Keyboard from '@/components/editor/Keyboard'
import Display from './Display'
import { IoCodeDownload } from 'react-icons/io5'
import { HiMagnifyingGlassMinus, HiMagnifyingGlassPlus } from 'react-icons/hi2'
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci'
import { BsFiletypeTxt } from 'react-icons/bs'

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
      <div className="flex flex-col h-screen w-[344px] sm:w-[568px] p-[16px]">
        <div className="flex flex-row mt-2 justify-between">
          <div>
            <button onClick={settings.decrementScale}>
              <HiMagnifyingGlassMinus size={iconSize} />
            </button>
            <button onClick={settings.incrementScale}>
              <HiMagnifyingGlassPlus size={iconSize} />
            </button>
          </div>
          <div>
            <button onClick={settings.decrementLineWrap}>
              <CiSquareMinus size={iconSize} />
            </button>
            <button onClick={settings.incrementLineWrap}>
              <CiSquarePlus size={iconSize} />
            </button>
          </div>
          <div>
            <button onClick={() => {}}>
              <BsFiletypeTxt size={iconSize} />
            </button>
          </div>
          <div>
            <button onClick={handleDownloadSvg}>
              <IoCodeDownload size={iconSize} />
            </button>
          </div>
        </div>
        <Display
          glyphSvg={glyphSvg}
          cursorPosition={cursorPosition}
          moveTo={cursor.moveTo}
        />
        <div className="flex flex-row items-center">
          <Keyboard
            text={text}
            setText={setText}
            windowWidth={windowDimensions[0]}
          />
        </div>
      </div>
    </div>
  )
}

export default Editor
