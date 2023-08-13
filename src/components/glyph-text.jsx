function GlyphText({
  letters = '',  
  size = 200,
  boxClass = 'bg-emerald-200 rounded-lg',
  letterClass = ''
}) {
  const boxStyle = {
    width: `${size}px`, 
    height: `${size}px`, 
    display: 'flex'
  }
  const innerStyle1 = {
    width: `${Math.round(size/2)}px`, 
    height: `${size}px`, 
    textAlign: 'center', 
    lineHeight: `${size}px`, 
    fontSize: `${Math.round(0.7*size)}px`
  }
  const innerStyle23 = {
    width: `${Math.round(size/2)}px`, 
    height: `${Math.round(size/2)}px`, 
    textAlign: 'center', 
    lineHeight: `${Math.round(size/2)}px`, 
    fontSize: `${Math.round(0.4*size)}px`
  }

  const replacedLetters = Array.from(letters).map(letter => {
    if (letter === '_') {
      return ' '
    }
    return letter
  })
  
  return (
    <div className={boxClass} style={boxStyle}>
      <div style={innerStyle1}>
        <span className={letterClass} >{replacedLetters[0]}</span>
      </div>
      <div>
        <div style={innerStyle23}>
          <span className={letterClass} >{replacedLetters[1]}</span>
        </div>
        <div style={innerStyle23}>
        <span className={letterClass} >{replacedLetters[2]}</span>
        </div>
      </div>
    </div>
  )
}

export default GlyphText;