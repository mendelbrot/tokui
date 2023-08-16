import GlyphSymbol from '../components/glyph-symbol'
import GlyphText from '../components/glyph-text'

function GlyphMulti({
  letters,  
  fill,
  sizeClass
}) {
  let words = letters.split(' ')

  return (
    <div className='relative'>
      <div className='flex'>
        {words.map(l => (
          <div key={letters + ' g ' + l} className={sizeClass} >
            <GlyphSymbol letters={l} fill={fill}/>
          </div>
        ))}
      </div>
      <div className='absolute top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-90 ease-in duration-250 flex'>
        {words.map(l => (
          <div key={letters + ' t ' + l} className={sizeClass} >
            <GlyphText letters={l}fill={fill}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GlyphMulti