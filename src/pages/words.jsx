import GlyphMulti from '../components/glyph-multi'
import { Link } from 'react-router-dom'
import words from '../data/words'
import RandomWord from '../components/random-word'

function Words() {
  return (
    <div>
      <div className='absolute bottom-6 right-6'>
        <RandomWord />
      </div>
      <div className='sm:flex sm:flex-wrap'>
        {words.map(w => 
          <div key={'w ' + w.written} className='flex p-2 sm:py-4 border-b-2 sm:mr-12 hover:bg-yellow-50' >
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
    </div>
    
  )
}

export default Words