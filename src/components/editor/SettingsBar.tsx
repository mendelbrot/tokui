'use client'

import React from 'react'
import { HardSettings } from '@/lib/draw'
import { IoCodeDownload } from 'react-icons/io5'
import { HiMagnifyingGlassMinus, HiMagnifyingGlassPlus } from 'react-icons/hi2'
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci'
import { BsFiletypeTxt } from 'react-icons/bs'
import { BsCopy } from 'react-icons/bs'
import { MdWrapText } from 'react-icons/md'

const iconSize = '32px'
const miniButtonClassName = 'active:bg-lime-300 p-1 rounded-lg'
const miniSettingsMeterClassName =
  'w-8 h-8 content-center p-1 rounded-lg border border-slate-700'

type Props = React.PropsWithChildren & {
  settings: {
    toggleLineWrap: () => void
    incrementLineWrap: () => void
    decrementLineWrap: () => void
    incrementScale: () => void
    decrementScale: () => void
  }
  settingsValue: HardSettings
  textMode: boolean
  setTextMode: React.Dispatch<React.SetStateAction<boolean>>
  text: string
  downloadSvgAsync: () => Promise<void>
  smallScreen: boolean
}

function SettingsBar({
  settings,
  settingsValue,
  textMode,
  setTextMode,
  text,
  downloadSvgAsync,
  smallScreen,
}: Props) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <button
          onClick={settings.decrementScale}
          className={miniButtonClassName}
        >
          <HiMagnifyingGlassMinus size={iconSize} />
        </button>
        {!smallScreen && (
          <div className={miniSettingsMeterClassName}>
            {settingsValue.scale}
          </div>
        )}
        <button
          onClick={settings.incrementScale}
          className={miniButtonClassName}
        >
          <HiMagnifyingGlassPlus size={iconSize} />
        </button>
      </div>
      <div className="flex flex-row items-center">
        <button
          onClick={settings.toggleLineWrap}
          className={
            settingsValue.lineWrap
              ? 'bg-lime-300 p-1 rounded-lg'
              : 'p-1 rounded-lg'
          }
        >
          <MdWrapText size={iconSize} />
        </button>
        <div
          className="flex flex-row items-center"
          style={{ visibility: settingsValue.lineWrap ? 'visible' : 'hidden' }}
        >
          <button
            onClick={settings.decrementLineWrap}
            className={miniButtonClassName}
          >
            <CiSquareMinus size={iconSize} />
          </button>
          {!smallScreen && (
            <div className={miniSettingsMeterClassName}>
              {settingsValue.lineWrap}
            </div>
          )}
          <button
            onClick={settings.incrementLineWrap}
            className={miniButtonClassName}
          >
            <CiSquarePlus size={iconSize} />
          </button>
        </div>
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
          className={miniButtonClassName}
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
      {!smallScreen && (
        <div>
          <button
            onClick={() => downloadSvgAsync()}
            className={miniButtonClassName}
          >
            <IoCodeDownload size={iconSize} />
          </button>
        </div>
      )}
    </div>
  )
}

export default SettingsBar
