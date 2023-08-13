import {useParams} from 'react-router-dom'
import GlyphSymbol from '../components/glyph-symbol'
import GlyphText from '../components/glyph-text'

function GlyphPage() {
  const {letters} = useParams()

  return (
    <div>
      <GlyphSymbol letters={letters}/>
      <GlyphText letters={letters}/>
    </div>
  )
}

export default GlyphPage;