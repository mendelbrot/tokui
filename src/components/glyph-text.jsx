function GlyphText({
  letters = '',  
  size = 200,
  boxClass = 'flex border-2 bg-emerald-200 border-slate-500',
  letterClass = ''
}) {
  return (
    <div class={boxClass} style={{'width': size, 'height': size}}>
      <div style={{'width': size/2, 'height': size, 'text-align': 'center', 'line-height': size, 'font-size': size/2}}>
        <span class={letterClass} >{letters[0]}</span>
      </div>
      <div>
        <div style={{'width': size/2, 'height': size/2, 'text-align': 'center', 'line-height': size/2, 'font-size': size/3}}>
          <span class={letterClass} >{letters[1]}</span>
        </div>
        <div style={{'width': size/2, 'height': size/2, 'text-align': 'center', 'line-height': size/2, 'font-size': size/3}}>
          <span class={letterClass} >{letters[2]}</span>
        </div>
      </div>
    </div>
  )
}

export default GlyphText;