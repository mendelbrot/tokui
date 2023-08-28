import Glyph from '../components/glyph'
import { Link } from 'react-router-dom'
import React from 'react'
import randomWords from '../data/random-words'

function Glyphs() {

  console.log(randomWords.split(' '))

  const words = randomWords.split(' ')

  return (
    <div className={'flex flex-wrap overflow-auto'} >
      {words.map(w => (
        <div key={w} className='w-[48px]'>
          <Link to={`/words/w`} >
            <Glyph letters={w}/>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Glyphs;
