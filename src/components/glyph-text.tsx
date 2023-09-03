const GlyphText = ({ letters = '' }) => {
  const replacedLetters = Array.from(letters).map((letter) => {
    if (letter === '-') {
      return ' '
    }
    return letter
  })

  return (
    <div className="rounded-lg grid grid-rows-2 grid-flow-col">
      <svg className="row-span-2" viewBox="0 0 16 32">
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          {replacedLetters[0]}
        </text>
      </svg>
      <svg viewBox="0 0 24 24">
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          {replacedLetters[1]}
        </text>
      </svg>
      <svg viewBox="0 0 24 24">
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          {replacedLetters[2]}
        </text>
      </svg>
    </div>
  )
}

export default GlyphText
