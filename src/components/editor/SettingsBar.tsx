'use client'

import React from 'react'
import { IoCodeDownload } from 'react-icons/io5'
import { HiMagnifyingGlassMinus, HiMagnifyingGlassPlus } from 'react-icons/hi2'
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci'
import { BsFiletypeTxt } from 'react-icons/bs'
import { BsCopy } from 'react-icons/bs'

const iconSize = '32px'

type Props = React.PropsWithChildren & {
  settings: {
    incrementLineWrap: () => void
    decrementLineWrap: () => void
    incrementScale: () => void
    decrementScale: () => void
  }
  textMode: boolean
  setTextMode: React.Dispatch<React.SetStateAction<boolean>>
  text: string
  downloadSvgAsync: () => Promise<void>
}

function SettingsBar({
  settings,
  textMode,
  setTextMode,
  text,
  downloadSvgAsync,
}: Props) {
  return (
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
          className={textMode ? 'bg-lime-300 p-1 rounded-lg' : 'p-1 rounded-lg'}
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
          onClick={() => downloadSvgAsync()}
          className="active:bg-lime-300 p-1 rounded-lg"
        >
          <IoCodeDownload size={iconSize} />
        </button>
      </div>
    </div>
  )
}

export default SettingsBar
