// import Glyph from './glyph'
import GlyphSymbol from './glyph-symbol'

const textToArray = (text) => {
  const lines = text.split('\n')
  return lines.map(line => line.split(' '))
}

function Display({text, array}) {
  const wordsArray = array || textToArray(text)

  return (
    <div style={{height: '500px', width: '600px'}} >
      {wordsArray.map((line, lineIndex) => (
        <div key={`line ${lineIndex}`} className='flex flex-wrap'>
          {line.map((word, wordIndex) => (
            <div key={`word ${wordIndex}`} >
              <GlyphSymbol letters={word} size={50} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Display;