'use client'

import React from 'react'
import draw from '@/lib/draw'

type DisplayProps = { glyphSvg?: string }
type DisplayComp = React.FunctionComponent<DisplayProps>

export const Display: DisplayComp = ({ glyphSvg }) => {
  return (
    <div className="w-[80vw] sm:w-[576px] h-[240px] sm:h-[576px] overflow-y-auto">
      {glyphSvg && <div dangerouslySetInnerHTML={{ __html: glyphSvg }} />}
    </div>
  )
}

type SetText = React.Dispatch<React.SetStateAction<string>>
type SetFile = React.Dispatch<React.SetStateAction<File | undefined>>

const openAsync = async (setText: SetText, setFile: SetFile) => {
  try {
    if (!Object.hasOwn(window, 'showOpenFilePicker')) {
      throw new Error('File picker is not supported on this device')
    }
    const [filehandle] = await window.showOpenFilePicker({ multiple: false })
    const file = await filehandle.getFile()
    if (file) {
      setFile(file)
      let reader = new FileReader()
      reader.onload = (e) => {
        if (!Object.hasOwn(e, 'target')) {
          throw new Error('No file was selected')
        }
        const text: string = e.target?.result?.toString() || ''
        setText(text)
      }
      reader.onerror = (e) => alert(e)
      reader.readAsText(file)
    }
  } catch (e) {
    alert(e)
  }
}

// https://developer.mozilla.org/en-US/docs/Web/API/Window/showSaveFilePicker#options
const saveAsync = async (text: string, file: File | undefined) => {
  try {
    const o = {
      suggestedName: 'writing.svg',
      types: [
        {
          accept: {
            'image/svg+xml': ['.svg'],
          },
        },
      ],
    }
    const options = file?.name ? { ...o, suggestedName: file.name } : o

    const handle = await window.showSaveFilePicker(options)
    const writable = await handle.createWritable()
    await writable.write(text)
    await writable.close()
  } catch (e) {
    alert(e)
  }
}

function Editor() {
  const [file, setFile] = React.useState<File | undefined>()
  const [text, setText] = React.useState<string>('')

  const glyphSvg = draw(text)

  const handleOpen = () => {
    openAsync(setText, setFile)
  }

  const handleSave = () => {
    saveAsync(glyphSvg, file)
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      setText(e.target.value)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <div className="grid grid-rows-4 justify-items-center max-w-2xl pt-2 sm:pt-4">
        <div className="border-2 rounded-lg row-span-2 p-2 sm:row-span-3">
          <Display glyphSvg={glyphSvg} />
        </div>
        <div className="flex row-span-1">
          <textarea
            value={text}
            onChange={handleTextChange}
            className="border-2 rounded-lg p-2 m-2 mt-4 w-[50vw] sm:w-96"
          />
          <div className="flex flex-col mt-2">
            {/* <button
              onClick={handleOpen}
              className="border-2 rounded-lg p-2 m-2 hover:border-black"
            >
              Open
            </button> */}
            <button
              onClick={handleSave}
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
