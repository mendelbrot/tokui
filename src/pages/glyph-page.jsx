import {useParams} from 'react-router-dom'
import GlyphSymbol from '../components/glyph-symbol'
import GlyphText from '../components/glyph-text'
import words from '../data/words'

function GlyphPage() {
  const {letters} = useParams()
  const thisWord = words.filter(w => w.written === letters)[0]

  return (
    <div>
      <div className='flex'>
        <div className='w-24 mb-2 mr-2'>
          <GlyphSymbol letters={letters}/>
        </div>
        <div className='w-24 mb-2'>
          <GlyphText letters={letters}/>
        </div>
      </div>
      <div>
        {thisWord && <div className='prose max-h-48 flex flex-wrap'>
          {thisWord.meanings.map(m => 
            <div key={m} className='border-2 m-1 px-2 py-1 rounded-lg w-36' >
              {m}
            </div>
          )}
        </div>}
      </div>
    </div>
    
  )
}

export default GlyphPage;