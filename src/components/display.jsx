import Glyph from './glyph'

const textToArray = (text) => {
  const lines = text.split('\n')
  return lines.map(line => line.split(' '))
}

function Display({text, array}) {
  const wordsArray = array || textToArray(text)

  return (
    <div>
      {wordsArray.map((line, lineIndex) => (
        <div key={`line ${lineIndex}`} className='flex'>
          {line.map((word, wordIndex) => (
            <div key={`word ${wordIndex}`} className='m-4'>
              <Glyph letters={word} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Display;