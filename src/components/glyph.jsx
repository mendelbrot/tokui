import {useState} from 'react'
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
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  };

  return (
    <div
      style = {{'width': size, 'height': size}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isHovering ? 
      (<GlyphText 
        letters={letters} 
        size={size}
        boxClass={boxClass}
        letterClass={letterClass}
      />) : 
      (<GlyphSymbol 
        letters={letters}
        size={size}
        border={border}
        fill={fill}
      />)}
    </div>
  )
}

export default Glyph