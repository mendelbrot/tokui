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
      suggestedName: file.name,
      types: [
        {
          description: 'Text Files',
          accept: {
            'text/plain': ['.txt'],
          },
        },
      ],
    };
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
      <h1 className='mb-6 text-xl'>Editor</h1>
      <Display text={text} />
      <textarea value={text} onChange={handleTextChange} />
      <button onClick={handleOpen} >Open</button>
      <button onClick={handleSave} >Save</button>
    </div>
  )
}

export default Editor;