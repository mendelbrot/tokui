import {useParams} from 'react-router-dom'
import GlyphSymbol from '../components/glyph-symbol'
import GlyphText from '../components/glyph-text'
import words from '../data/words'

function GlyphPage() {
  const {letters} = useParams()
  const thisWord = words.filter(w => w.written === letters)[0]

  return (
    <div>
      <div className='flex' >
        <div className='w-24 mb-2 mr-2' >
          <GlyphSymbol letters={letters} />
        </div>
        <div className='w-24 mb-2'>
          <GlyphText letters={letters} />
        </div>
      </div>
      {thisWord && <div className='prose' >
        {thisWord.meanings && thisWord.meanings.length > 0 && <div>
          <h3>meanings</h3>
          <div className='flex flex-wrap' >
            {thisWord.meanings.map(m => 
              <div key={m} className='border-2 mr-1 mb-1 px-2 py-1 rounded-lg w-36' >
                {m}
              </div>
            )}
          </div>
        </div>}
        {thisWord.tags && thisWord.tags.length > 0 && <div>
          <h3>tags</h3>
          <div className='flex flex-wrap' >
            {thisWord.tags.map(m => 
              <div key={m} className='border-2 mr-1 mb-1 px-2 py-1 rounded-lg w-36' >
                {m}
              </div>
            )}
          </div>
        </div>}
        {thisWord.tokipona && <div>
          <h3>toki pona equivalent</h3>
          {thisWord.tokipona}
        </div>}
      </div>}
    </div>
    
  )
}

export default GlyphPage;