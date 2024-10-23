'use client'

import React from 'react'
import { SettingsValue } from '@/lib/EditorTypes'
import { IoCodeDownload } from 'react-icons/io5'
import { HiMagnifyingGlassMinus, HiMagnifyingGlassPlus } from 'react-icons/hi2'
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci'
import { BsFiletypeTxt } from 'react-icons/bs'
import { BsCopy } from 'react-icons/bs'
import { MdWrapText } from 'react-icons/md'
import Editor from '@/lib/Editor'

const iconSize = '32px'
const miniButtonClassName = 'active:bg-lime-300 p-1 rounded-lg'
const miniSettingsMeterClassName =
  'w-8 h-8 content-center p-1 rounded-lg border border-slate-700'
  
type Props = React.PropsWithChildren & {
  settings: Editor['settings']
  settingsValue: SettingsValue
  textMode: boolean
  setTextMode: React.Dispatch<React.SetStateAction<boolean>>
  copyWritingToClipbpoadAsync: () => Promise<void>
  downloadSvgAsync: () => Promise<void>
  smallScreen: boolean
}

function SettingsBar({
  settings,
  settingsValue,
  textMode,
  setTextMode,
  copyWritingToClipbpoadAsync,
  downloadSvgAsync,
  smallScreen,
}: Props) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <button
          onClick={() => settings.decrementScale().project()}
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
          onClick={() => settings.incrementScale().project()}
          className={miniButtonClassName}
        >
          <HiMagnifyingGlassPlus size={iconSize} />
        </button>
      </div>
      <div className="flex flex-row items-center">
        <button
          onClick={() => settings.toggleLineWrap().project()}
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
            onClick={() => settings.decrementLineWrap().project()}
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
            onClick={() => settings.incrementLineWrap().project()}
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
          onClick={() => copyWritingToClipbpoadAsync()}
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
