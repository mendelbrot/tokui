function GlyphText({
  letters = '',  
  size = 200,
  boxClass = 'bg-emerald-200',
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
  
  return (
    <div className={boxClass} style={boxStyle}>
      <div style={innerStyle1}>
        <span className={letterClass} >{letters[0]}</span>
      </div>
      <div>
        <div style={innerStyle23}>
          <span className={letterClass} >{letters[1]}</span>
        </div>
        <div style={innerStyle23}>
        <span className={letterClass} >{letters[2]}</span>
        </div>
      </div>
    </div>
  )
}

export default GlyphText;