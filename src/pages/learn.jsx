import { w } from '../data/words'

function Learn() {
  return (
    <div className='prose'>
      <p>check out the word {w(3)}</p>
    </div>
  )
}

export default Learn