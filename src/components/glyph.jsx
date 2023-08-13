import GlyphSymbol from '../components/glyph-symbol'
import GlyphText from '../components/glyph-text'

function Glyph({
  letters,  
  size = 200,
  boxClass,
  letterClass,
  border, 
  fill
}) {

  return (
    <div
      className='relative'
      style = {{'width': size, 'height': size}}
    >
      <GlyphSymbol 
        letters={letters}
        size={size}
        border={border}
        fill={fill}
      />
      <div className='absolute bottom-0 left-0 opacity-0 hover:opacity-90 ease-in duration-250'>
        <GlyphText 
          letters={letters} 
          size={size}
          boxClass={boxClass}
          letterClass={letterClass}
        />
      </div>
    </div>
  )
}

export default Glyph