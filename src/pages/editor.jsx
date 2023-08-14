import {useState, useEffect} from 'react'
import Display from '../components/display'
import textFile from '../data/words.txt'

function Editor() {
  const [file, setFile] = useState()
  const [text, setText] = useState('')

  const handleFileChange = e => {
    if (e.target.files) {
      const file = e.target.files[0]
      setFile(file)
      let reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target.result
        console.log(text)
        setText(text)
      }
      reader.onerror = (e) => alert(e.target.error.name)
      reader.readAsText(file)
    }
  }

  const handleTextChange = e => {
    setText(e.target.value)
  }

  return (
    <div>
      <h1 className='mb-6 text-xl'>Editor</h1>
      <Display text={text} />
      <textarea value={text} onChange={handleTextChange} />
      <input type="file" onChange={handleFileChange} />
      
    </div>
  )
}

export default Editor;