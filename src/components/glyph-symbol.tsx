import React from 'react'

type LetterProps = { rectStyle: object }
type LetterComp = React.FunctionComponent<LetterProps>

const Hor1: LetterComp = ({ rectStyle }) => (
  <rect
    x="0.75"
    y="0.75"
    width="8.5"
    height="0.5"
    rx="0.25"
    style={rectStyle}
  />
)
const Hor2: LetterComp = ({ rectStyle }) => (
  <rect
    x="0.75"
    y="4.75"
    width="8.5"
    height="0.5"
    rx="0.25"
    style={rectStyle}
  />
)
const Hor3: LetterComp = ({ rectStyle }) => (
  <rect
    x="0.75"
    y="8.75"
    width="8.5"
    height="0.5"
    rx="0.25"
    style={rectStyle}
  />
)
const Ver1: LetterComp = ({ rectStyle }) => (
  <rect
    x="0.75"
    y="0.75"
    width="0.5"
    height="8.5"
    rx="0.25"
    style={rectStyle}
  />
)
const Ver2: LetterComp = ({ rectStyle }) => (
  <rect
    x="4.75"
    y="0.75"
    width="0.5"
    height="8.5"
    rx="0.25"
    style={rectStyle}
  />
)
const Ver3: LetterComp = ({ rectStyle }) => (
  <rect
    x="8.75"
    y="0.75"
    width="0.5"
    height="8.5"
    rx="0.25"
    style={rectStyle}
  />
)
const Hor1b: LetterComp = ({ rectStyle }) => (
  <rect x="2.65" y="5.5" width="4.7" height="0.5" rx="0.25" style={rectStyle} />
)
const Hor2b: LetterComp = ({ rectStyle }) => (
  <rect
    x="2.65"
    y="6.75"
    width="4.7"
    height="0.5"
    rx="0.25"
    style={rectStyle}
  />
)
const Hor3b: LetterComp = ({ rectStyle }) => (
  <rect
    x="2.65"
    y="8.00"
    width="4.7"
    height="0.5"
    rx="0.25"
    style={rectStyle}
  />
)
const Ver1b: LetterComp = ({ rectStyle }) => (
  <rect
    x="2.65"
    y="5.5"
    width="0.5"
    height="3.00"
    rx="0.25"
    style={rectStyle}
  />
)
const Ver2b: LetterComp = ({ rectStyle }) => (
  <rect
    x="4.75"
    y="5.5"
    width="0.5"
    height="3.00"
    rx="0.25"
    style={rectStyle}
  />
)
const Ver3b: LetterComp = ({ rectStyle }) => (
  <rect
    x="7.10"
    y="5.5"
    width="0.5"
    height="3.00"
    rx="0.25"
    style={rectStyle}
  />
)
const Vt1: LetterComp = ({ rectStyle }) => (
  <rect
    x="-0.80"
    y="4.75"
    width="6"
    height="0.5"
    rx="0.25"
    transform-origin="center"
    transform="rotate(45)"
    style={rectStyle}
  />
)
const Vt2: LetterComp = ({ rectStyle }) => (
  <rect x="2.65" y="2.5" width="4.7" height="0.5" rx="0.25" style={rectStyle} />
)
const Vt3: LetterComp = ({ rectStyle }) => (
  <rect
    x="-0.80"
    y="4.75"
    width="6"
    height="0.5"
    rx="0.25"
    transform-origin="center"
    transform="rotate(135)"
    style={rectStyle}
  />
)
const Vb1: LetterComp = ({ rectStyle }) => (
  <rect
    x="-0.80"
    y="4.75"
    width="6"
    height="0.5"
    rx="0.25"
    transform-origin="center"
    transform="rotate(-45)"
    style={rectStyle}
  />
)
const Vb2: LetterComp = ({ rectStyle }) => (
  <rect x="2.65" y="7" width="4.7" height="0.5" rx="0.25" style={rectStyle} />
)
const Vb3: LetterComp = ({ rectStyle }) => (
  <rect
    x="-0.80"
    y="4.75"
    width="6"
    height="0.5"
    rx="0.25"
    transform-origin="center"
    transform="rotate(-135) "
    style={rectStyle}
  />
)

// leading consonants

const M: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1 rectStyle={rectStyle} />
    <Ver1 rectStyle={rectStyle} />
  </>
)

const N: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1 rectStyle={rectStyle} />
    <Ver1 rectStyle={rectStyle} />
    <Ver3 rectStyle={rectStyle} />
  </>
)

const G: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1 rectStyle={rectStyle} />
    <Ver3 rectStyle={rectStyle} />
  </>
)

const P: LetterComp = ({ rectStyle }) => (
  <>
    <Hor2 rectStyle={rectStyle} />
    <Ver1 rectStyle={rectStyle} />
  </>
)

const T: LetterComp = ({ rectStyle }) => (
  <>
    <Hor2 rectStyle={rectStyle} />
    <Ver1 rectStyle={rectStyle} />
    <Ver3 rectStyle={rectStyle} />
  </>
)

const K: LetterComp = ({ rectStyle }) => (
  <>
    <Hor2 rectStyle={rectStyle} />
    <Ver3 rectStyle={rectStyle} />
  </>
)

const F: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1 rectStyle={rectStyle} />
    <Hor2 rectStyle={rectStyle} />
    <Ver1 rectStyle={rectStyle} />
  </>
)

const S: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1 rectStyle={rectStyle} />
    <Hor2 rectStyle={rectStyle} />
    <Ver1 rectStyle={rectStyle} />
    <Ver3 rectStyle={rectStyle} />
  </>
)

const H: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1 rectStyle={rectStyle} />
    <Hor2 rectStyle={rectStyle} />
    <Ver3 rectStyle={rectStyle} />
  </>
)

const W: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1 rectStyle={rectStyle} />
    <Hor3 rectStyle={rectStyle} />
    <Ver1 rectStyle={rectStyle} />
  </>
)

const L: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1 rectStyle={rectStyle} />
    <Hor3 rectStyle={rectStyle} />
    <Ver1 rectStyle={rectStyle} />
    <Ver3 rectStyle={rectStyle} />
  </>
)

const Y: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1 rectStyle={rectStyle} />
    <Hor3 rectStyle={rectStyle} />
    <Ver3 rectStyle={rectStyle} />
  </>
)

// ending consonants

const M2: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1b rectStyle={rectStyle} />
    <Ver1b rectStyle={rectStyle} />
  </>
)

const N2: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1b rectStyle={rectStyle} />
    <Ver1b rectStyle={rectStyle} />
    <Ver3b rectStyle={rectStyle} />
  </>
)

const G2: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1b rectStyle={rectStyle} />
    <Ver3b rectStyle={rectStyle} />
  </>
)

const P2: LetterComp = ({ rectStyle }) => (
  <>
    <Hor2b rectStyle={rectStyle} />
    <Ver1b rectStyle={rectStyle} />
  </>
)

const T2: LetterComp = ({ rectStyle }) => (
  <>
    <Hor2b rectStyle={rectStyle} />
    <Ver1b rectStyle={rectStyle} />
    <Ver3b rectStyle={rectStyle} />
  </>
)

const K2: LetterComp = ({ rectStyle }) => (
  <>
    <Hor2b rectStyle={rectStyle} />
    <Ver3b rectStyle={rectStyle} />
  </>
)

const F2: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1b rectStyle={rectStyle} />
    <Hor2b rectStyle={rectStyle} />
    <Ver1b rectStyle={rectStyle} />
  </>
)

const S2: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1b rectStyle={rectStyle} />
    <Hor2b rectStyle={rectStyle} />
    <Ver1b rectStyle={rectStyle} />
    <Ver3b rectStyle={rectStyle} />
  </>
)

const H2: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1b rectStyle={rectStyle} />
    <Hor2b rectStyle={rectStyle} />
    <Ver3b rectStyle={rectStyle} />
  </>
)

const W2: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1b rectStyle={rectStyle} />
    <Hor3b rectStyle={rectStyle} />
    <Ver1b rectStyle={rectStyle} />
  </>
)

const L2: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1b rectStyle={rectStyle} />
    <Hor3b rectStyle={rectStyle} />
    <Ver1b rectStyle={rectStyle} />
    <Ver3b rectStyle={rectStyle} />
  </>
)

const Y2: LetterComp = ({ rectStyle }) => (
  <>
    <Hor1b rectStyle={rectStyle} />
    <Hor3 rectStyle={rectStyle} />
    <Ver3 rectStyle={rectStyle} />
  </>
)

// vowels

const I1: LetterComp = ({ rectStyle }) => (
  <>
    <Vt1 rectStyle={rectStyle} />
  </>
)

const I2: LetterComp = ({ rectStyle }) => (
  <>
    <Vb1 rectStyle={rectStyle} />
  </>
)

const E1: LetterComp = ({ rectStyle }) => (
  <>
    <Vt1 rectStyle={rectStyle} />
    <Vt2 rectStyle={rectStyle} />
  </>
)

const E2: LetterComp = ({ rectStyle }) => (
  <>
    <Vb1 rectStyle={rectStyle} />
    <Vb2 rectStyle={rectStyle} />
  </>
)

const A1: LetterComp = ({ rectStyle }) => (
  <>
    <Vt1 rectStyle={rectStyle} />
    <Vt3 rectStyle={rectStyle} />
  </>
)

const A2: LetterComp = ({ rectStyle }) => (
  <>
    <Vb1 rectStyle={rectStyle} />
    <Vb3 rectStyle={rectStyle} />
  </>
)

const O1: LetterComp = ({ rectStyle }) => (
  <>
    <Vt2 rectStyle={rectStyle} />
    <Vt3 rectStyle={rectStyle} />
  </>
)

const O2: LetterComp = ({ rectStyle }) => (
  <>
    <Vb2 rectStyle={rectStyle} />
    <Vb3 rectStyle={rectStyle} />
  </>
)

const U1: LetterComp = ({ rectStyle }) => (
  <>
    <Vt3 rectStyle={rectStyle} />
  </>
)

const U2: LetterComp = ({ rectStyle }) => (
  <>
    <Vb3 rectStyle={rectStyle} />
  </>
)

const GlyphSymbol = ({ letters = '', fill = 'black' }) => {
  const rectStyle = { fill: fill }
  const svgStyle = {}

  return (
    <div>
      <svg version="1.1" viewBox="0 0 10 10" style={svgStyle}>
        {letters[0] && letters[0].toLowerCase() === 'm' && (
          <M rectStyle={rectStyle} />
        )}
        {letters[0] && letters[0].toLowerCase() === 'n' && (
          <N rectStyle={rectStyle} />
        )}
        {letters[0] && letters[0].toLowerCase() === 'g' && (
          <G rectStyle={rectStyle} />
        )}
        {letters[0] && letters[0].toLowerCase() === 'p' && (
          <P rectStyle={rectStyle} />
        )}
        {letters[0] && letters[0].toLowerCase() === 't' && (
          <T rectStyle={rectStyle} />
        )}
        {letters[0] && letters[0].toLowerCase() === 'k' && (
          <K rectStyle={rectStyle} />
        )}
        {letters[0] && letters[0].toLowerCase() === 'f' && (
          <F rectStyle={rectStyle} />
        )}
        {letters[0] && letters[0].toLowerCase() === 's' && (
          <S rectStyle={rectStyle} />
        )}
        {letters[0] && letters[0].toLowerCase() === 'h' && (
          <H rectStyle={rectStyle} />
        )}
        {letters[0] && letters[0].toLowerCase() === 'w' && (
          <W rectStyle={rectStyle} />
        )}
        {letters[0] && letters[0].toLowerCase() === 'l' && (
          <L rectStyle={rectStyle} />
        )}
        {letters[0] && letters[0].toLowerCase() === 'y' && (
          <Y rectStyle={rectStyle} />
        )}

        {letters[1] && letters[1].toLowerCase() === 'i' && (
          <I1 rectStyle={rectStyle} />
        )}
        {letters[1] && letters[1].toLowerCase() === 'e' && (
          <E1 rectStyle={rectStyle} />
        )}
        {letters[1] && letters[1].toLowerCase() === 'a' && (
          <A1 rectStyle={rectStyle} />
        )}
        {letters[1] && letters[1].toLowerCase() === 'o' && (
          <O1 rectStyle={rectStyle} />
        )}
        {letters[1] && letters[1].toLowerCase() === 'u' && (
          <U1 rectStyle={rectStyle} />
        )}

        {letters[2] && letters[2].toLowerCase() === 'i' && (
          <I2 rectStyle={rectStyle} />
        )}
        {letters[2] && letters[2].toLowerCase() === 'e' && (
          <E2 rectStyle={rectStyle} />
        )}
        {letters[2] && letters[2].toLowerCase() === 'a' && (
          <A2 rectStyle={rectStyle} />
        )}
        {letters[2] && letters[2].toLowerCase() === 'o' && (
          <O2 rectStyle={rectStyle} />
        )}
        {letters[2] && letters[2].toLowerCase() === 'u' && (
          <U2 rectStyle={rectStyle} />
        )}

        {letters[2] && letters[2].toLowerCase() === 'm' && (
          <M2 rectStyle={rectStyle} />
        )}
        {letters[2] && letters[2].toLowerCase() === 'n' && (
          <N2 rectStyle={rectStyle} />
        )}
        {letters[2] && letters[2].toLowerCase() === 'g' && (
          <G2 rectStyle={rectStyle} />
        )}
        {letters[2] && letters[2].toLowerCase() === 'p' && (
          <P2 rectStyle={rectStyle} />
        )}
        {letters[2] && letters[2].toLowerCase() === 't' && (
          <T2 rectStyle={rectStyle} />
        )}
        {letters[2] && letters[2].toLowerCase() === 'k' && (
          <K2 rectStyle={rectStyle} />
        )}
        {letters[2] && letters[2].toLowerCase() === 'f' && (
          <F2 rectStyle={rectStyle} />
        )}
        {letters[2] && letters[2].toLowerCase() === 's' && (
          <S2 rectStyle={rectStyle} />
        )}
        {letters[2] && letters[2].toLowerCase() === 'h' && (
          <H2 rectStyle={rectStyle} />
        )}
        {letters[2] && letters[2].toLowerCase() === 'w' && (
          <W2 rectStyle={rectStyle} />
        )}
        {letters[2] && letters[2].toLowerCase() === 'l' && (
          <L2 rectStyle={rectStyle} />
        )}
        {letters[2] && letters[2].toLowerCase() === 'y' && (
          <Y2 rectStyle={rectStyle} />
        )}
      </svg>
    </div>
  )
}

export default GlyphSymbol
