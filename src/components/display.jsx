// import Glyph from './glyph'
import GlyphSymbol from './glyph-symbol'

const textToArray = (text) => {
  const lines = text.split('\n')
  return lines.map(line => line.split(' '))
}

function Display({text, array}) {
  const wordsArray = array || textToArray(text)

  return (
    <div className='w-[80vw] sm:w-[576px] h-[240px] sm:h-[576px] overflow-y-auto'>
      {wordsArray.map((line, lineIndex) => (
        <div key={`line ${lineIndex}`} className='flex flex-wrap'>
          {line.map((word, wordIndex) => (
            <div 
              key={`word ${wordIndex}`} 
              className='w-[48px]' 
            >
              <GlyphSymbol letters={word}/>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Display;