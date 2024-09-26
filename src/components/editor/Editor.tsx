'use client'

import React from 'react'
import EditorClass, {
  editorParameters,
  initialEditorProjection,
} from '@/lib/Editor'
import Keyboard from '@/components/editor/Keyboard'
import Display from './Display'
import SettingsBar from './SettingsBar'
import { EditorModelProjection } from '@/lib/EditorTypes'

const screens = { sm: 640 }

function Editor() {
  const [
    { settingsValue, cursorPosition, writingValue, writingRep, writingSvg },
    setEditorProjection,
  ] = React.useState<EditorModelProjection>(initialEditorProjection)

  let editor = React.useRef<EditorClass | undefined>()
  if (!editor.current) {
    editor.current = new EditorClass({
      projectionCallback: setEditorProjection,
    })
  }

  const { settings, cursor, writing } = editor.current

  const [windowDimensions, setWindowDimensions] = React.useState<number[]>([
    0, 0,
  ])
  const [displayHeight, setDisplayHeight] = React.useState<number | undefined>(
    undefined
  )
  const [textMode, setTextMode] = React.useState<boolean>(false)
  const [gridMode, setGridMode] = React.useState<boolean>(true)
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null)
  const displayRef = React.useRef<HTMLDivElement | null>(null)

  const smallScreen = windowDimensions[0] < screens.sm

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    writing.set(e.target.value).project()
  }

  const copyWritingToClipbpoadAsync = async () => {
    try {
      await navigator.clipboard.writeText(writingValue)
    } catch (e) {
      alert(e)
    }
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
      await writable.write(writingSvg)
      await writable.close()
    } catch (e) {
      alert(e)
    }
  }

  if (textMode && !writingRep?.at(cursorPosition[1])?.at(cursorPosition[0])) {
    cursor.moveTo([0, 0]).project()
  }
  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowDimensions([window.innerWidth, window.innerHeight])
      if (displayRef.current?.offsetHeight) {
        setDisplayHeight(displayRef.current?.offsetHeight - 20)
      }
    }

    handleWindowResize()

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
            settingsValue={settingsValue}
            textMode={textMode}
            setTextMode={setTextMode}
            copyWritingToClipbpoadAsync={copyWritingToClipbpoadAsync}
            downloadSvgAsync={downloadSvgAsync}
            smallScreen={smallScreen}
          />
        </div>
        <div
          className="w-[312px] sm:w-[536px] border rounded-lg p-2 my-2 flex-1 overflow-auto border-slate-700"
          ref={displayRef}
        >
          <Display
            writingSvg={writingSvg}
            writingRep={writingRep}
            cursorPosition={!textMode ? cursorPosition : null}
            moveTo={cursor.moveTo}
            glyphSize={settingsValue.scale * editorParameters.glyphBaseSize}
            gridMode={gridMode}
            lineWrap={settingsValue.lineWrap}
            displayHeight={displayHeight}
          />
        </div>

        <div className={!textMode ? 'hidden' : 'h-[216px]'}>
          <textarea
            ref={textareaRef}
            value={writingValue}
            onChange={handleTextChange}
            className="border border-slate-700 rounded-lg p-2 h-[216px] w-[312px] sm:w-[536px]"
          />
        </div>
        {!textMode && (
          <div className="flex flex-row items-center">
            <Keyboard
              smallScreen={smallScreen}
              writing={writing}
              cursor={cursor}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Editor
