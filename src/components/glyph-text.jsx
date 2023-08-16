import { useEffect, useState, useRef } from 'react'

function GlyphText({
  letters = '',
}) {
  const [width, setWidth] = useState(0)
  const elementRef = useRef(null)

  const replacedLetters = Array.from(letters).map(letter => {
    if (letter === '_' || letter === '-') {
      return ' '
    }
    return letter
  })

  const handleResize = () => {
    setWidth(elementRef.current.offsetWidth)
  }

  useEffect(() => {
    handleResize()
    // window.addEventListener('resize', handleResize)
    // return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return (
    <div className='bg-emerald-200 rounded-lg grid grid-rows-2 grid-flow-col' >
      <div 
        className='row-span-2 text-center'
        style={{
          lineHeight: 2*width + 'px',
          fontSize: Math.round(width) + 'px'
        }}
        ref={elementRef} 
      >
        {replacedLetters[0]}
      </div>
      <div 
        className='text-center'
        style={{
          fontSize: Math.round(0.7*width) + 'px'
        }}
      >
        {replacedLetters[1]}
      </div>
      <div 
        className='text-center'
        style={{
          fontSize: Math.round(0.7*width) + 'px'
        }}
      >
        {replacedLetters[2]}
      </div>
    </div>
  )
}

export default GlyphText;