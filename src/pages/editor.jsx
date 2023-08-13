import {useState, useEffect} from 'react'
import Display from '../components/display'
import textFile from '../data/words.txt'

function Editor() {
  const [text, setText] = useState('');

  const loadWords = async () => {
    const response = await fetch(textFile)
    const textContent = await response.text()
    setText(textContent)
  }

  useEffect(() => { loadWords() })

  return (
    <div>
      <h1 className='mb-6 text-xl'>Editor</h1>
      <Display text={text} />
    </div>
  )
}

export default Editor;