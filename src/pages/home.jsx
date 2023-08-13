import { Link } from 'react-router-dom'


import {useState, useEffect} from 'react'

import Display from '../components/display'
import textFile from '../data/words.txt'

function Home() {
  const [text, setText] = useState('');

  const loadWords = async () => {
    const response = await fetch(textFile)
    const textContent = await response.text()
    setText(textContent)
  }

  useEffect(() => { loadWords() })

  return (
    <div>
      <h1 className='mb-6 text-xl'>Home</h1>
      <Display text={text} />
    </div>
  )
}

export default Home;
