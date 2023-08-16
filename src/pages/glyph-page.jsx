import {useParams} from 'react-router-dom'
import GlyphSymbol from '../components/glyph-symbol'
import GlyphText from '../components/glyph-text'

function GlyphPage() {
  const {letters} = useParams()

  return (
    <div className='w-48 selection:border-2'>
      <GlyphSymbol letters={letters}/>
      <GlyphText letters={letters}/>
    </div>
  )
}

export default GlyphPage;