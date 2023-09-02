import words from '../data/words'
import RandomWord from '../components/random-word'
import React from 'react'
import GlyphMulti from './glyph-multi'

type Props = {letters: string}
type Comp = React.FunctionComponent<Props>

const  WordDetails: Comp = ({letters}) => {
  const thisWord = words.filter(w => w.written === letters)[0]

  return (
    <div className='max-w-[444px]'>
      <div className='fixed bottom-6 right-6'>
        <RandomWord />
      </div>
      <GlyphMulti words={letters} sizeClass='w-24 pb-2 pr-2' />
      {thisWord && <div className='prose' >
        {thisWord.meanings && thisWord.meanings.length > 0 && <div>
          <h3>meanings</h3>
          <div className='flex flex-wrap' >
            {thisWord.meanings.map(m => 
              <div key={'m ' + m} className='border-2 mr-1 mb-1 px-2 py-1 rounded-lg w-36' >
                {m}
              </div>
            )}
          </div>
        </div>}
        {thisWord.tags && thisWord.tags.length > 0 && <div>
          <h3>tags</h3>
          <ul>
            {thisWord.tags.map(i => (
              <li key={'t ' + i}>{i}</li>
            ))}
          </ul>
        </div>}
        {thisWord.tokipona && thisWord.tokipona.length > 0 && <div>
          <h3>toki pona equivalents</h3>
          <ul>
            {thisWord.tokipona.map(i => (
              <li key={'tp ' + i}>{i}</li>
            ))}
          </ul>
        </div>}
      </div>}
    </div>
    
  )
}

export default WordDetails