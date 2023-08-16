import { useState } from 'react'
import Display from '../components/display'

async function openAsync(setText, setFile) {
  try {
    const [filehandle] = await window.showOpenFilePicker({ multiple: false })
    const file = await filehandle.getFile()
    if (file) {
      setFile(file)
      let reader = new FileReader()
      reader.onload = e => {
        const text = e.target.result
        console.log(text)
        setText(text)
      }
      reader.onerror = e => alert(e)
      reader.readAsText(file)
    }
  } catch (e) {
    alert(e)
  }
}

async function saveAsync(text, file) {
  try {
    const options = {
      types: [
        {
          description: 'Text Files',
          accept: {
            'text/plain': ['.txt'],
          },
        },
      ],
    }
    if (file && file.name) {
      options.suggestedName = file.name
    }
    const handle = await window.showSaveFilePicker(options)
    const writable = await handle.createWritable()
    await writable.write(text)
    await writable.close()
  } catch (e) {
    alert(e)
  }
}

function Editor() {
  const [file, setFile] = useState()
  const [text, setText] = useState('')

  const handleOpen = e => {
    openAsync(setText, setFile)
  }

  const handleSave = e => {
    saveAsync(text, file)
  }

  const handleTextChange = e => {
    try {
      setText(e.target.value)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <div className='grid grid-rows-4 justify-items-center'>
        <div className='border-2 rounded-lg row-span-2 p-2 sm:row-span-3'>
          <Display text={text} />
        </div>
        <div className='flex row-span-1'>
          <textarea 
            value={text} 
            onChange={handleTextChange} 
            className='border-2 rounded-lg p-2 m-2 w-[50vw] sm:w-96'/>
          <div className='flex flex-col' >
            <button onClick={handleOpen} className='border-2 rounded-lg p-2 m-2 hover:border-black'>Open</button>
            <button onClick={handleSave} className='border-2 rounded-lg p-2 m-2 hover:border-black'>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor;