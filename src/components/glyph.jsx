import GlyphSymbol from '../components/glyph-symbol'
import GlyphText from '../components/glyph-text'

function Glyph({
  letters,  
  fill
}) {

  return (
    <div
      className='relative'
    >
      <GlyphSymbol 
        letters={letters}
        fill={fill}
      />
      <div className='absolute top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-90 ease-in duration-250'>
        <GlyphText 
          letters={letters} 
        />
      </div>
    </div>
  )
}

export default Glyph