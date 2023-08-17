import GlyphMulti from '../components/glyph-multi'
import { Link } from 'react-router-dom'
import words from '../data/words'

function Words() {
  return (
    <div className='max-w-prose'>
      {words.map(w => 
        <div key={'w ' + w.written} className='flex py-2 sm:py-4 border-b-2 first:pt-0' >
          <Link to={`/words/${encodeURI(w.written)}`} >
            <div className='flex'>
              <div className='w-48'>
                <GlyphMulti letters={w.written} sizeClass='w-12 mr-1' />
              </div>
              {w.meanings && w.meanings.length > 0 && (
                <div className='prose w-36'>
                  <p>{w.meanings[0]}</p>
                </div>
              )}
              
            </div>
            
          </Link>
        </div>
      )}
    </div>
  )
}

export default Words