import GlyphSymbol from '../components/glyph-symbol'
import GlyphText from '../components/glyph-text'
import words from '../data/words'

function WordHeading({letters}) {
  const words = letters && letters.split(' ')
  const multi = words.length > 1

  return (
    <div className={multi ? '' : 'flex'} >
      <div className='flex' >
        {words.map(w => (
          <div className='w-24 pb-2 pr-2'>
            <GlyphText letters={w} />
          </div>
        ))}        
      </div>
      <div className='flex' >
        {words.map(w => (
          <div className='w-24 pb-2 pr-2' >
            <GlyphSymbol letters={w} />
          </div>
        ))}
      </div>
    </div>
  )
}

function WordDetails({letters}) {
  const thisWord = words.filter(w => w.written === letters)[0]

  return (
    <div>
      <WordHeading letters={letters} />
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
          <ul>
            {thisWord.tags.map(i => (
              <li>{i}</li>
            ))}
          </ul>
        </div>}
        {thisWord.tokipona && thisWord.tags.length > 0 && <div>
          <h3>toki pona equivalents</h3>
          <ul>
            {thisWord.tokipona.map(i => (
              <li>{i}</li>
            ))}
          </ul>
        </div>}
      </div>}
    </div>
    
  )
}

export default WordDetails