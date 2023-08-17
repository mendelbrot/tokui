import GlyphMulti from '../components/glyph-multi'
import { Link } from 'react-router-dom'
import words from '../data/words'

function Words() {
  return (
    <div className='prose max-w-prose'>
      {words.map(w => 
        <div key={'w ' + w.written} className='flex py-2 sm:py-4 border-b-2 first:pt-0' >
          <Link to={`/words/${encodeURI(w.written)}`} >
            <GlyphMulti letters={w.written} sizeClass='w-12 mr-1' />
          </Link>
        </div>
      )}
    </div>
  )
}

export default Words