import Glyph from '../components/glyph'
import { Link } from 'react-router-dom'
import words from '../data/words'

function WordComp({word = ''}) {
  const glyphs = word.split(' ')

  return (
    <div className='flex py-2 sm:py-4 border-b-2 first:pt-0' >
      {glyphs.map(g => <div className='w-12 sm:w-24'><Glyph letters={g}/></div>)}
    </div>
  )
}

function Words() {
  return (
    <div className='prose max-w-prose'>
      {words.map(w => <WordComp word={w.written} />)}
    </div>
  )
}

export default Words