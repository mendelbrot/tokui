import { Link } from 'react-router-dom'

import {useState} from 'react'

import Glyph from '../components/glyph'
import textFile from '../data/words.txt'

function Home() {
  const [text, setText] = useState('');

  fetch(textFile)
    .then((response) => response.text())
    .then((textContent) => {
      setText(textContent);
    });

  return (
    <div>
      <h1 className='mb-6 text-xl'>Home</h1>
      {text}
      <Glyph letters={'kui'} />
    </div>
  )
}

export default Home;
