import words from '../data/words'
import randomIcon from '../images/random.png'
import { useNavigate } from 'react-router-dom'

function RandomWord() {
  const navigate = useNavigate()

  const handleRandom = () => {
    const randomWord = words[Math.floor(Math.random()*words.length)]
    const slug = encodeURI(randomWord.written)
    navigate('/words/' + slug) 
  }

  return (
    <button 
      onClick={handleRandom}
      className='w-20 h-20 border-2 rounded-lg bg-opacity-70 bg-white hover:bg-yellow-50 hover:bg-opacity-70' 
    >
      <img 
        className='opacity-30 rounded-lg'
        src={randomIcon} 
        alt='go to random word' 
      />
    </button>
  )
}

export default RandomWord