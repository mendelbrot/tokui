import React from 'react'

type LetterProps = { lineClass: string }
type LetterComp = React.FunctionComponent<LetterProps>

const Hor1: LetterComp = ({ lineClass }) => (
  <line
    x1="2"
    y1="12"
    x2="42"
    y2="12"
    className={lineClass}
    stroke-linecap="round"
  />
)
const Hor2: LetterComp = ({ lineClass }) => (
  <line
    x1="2"
    y1="32"
    x2="42"
    y2="32"
    className={lineClass}
    stroke-linecap="round"
  />
)
const Hor3: LetterComp = ({ lineClass }) => (
  <line
    x1="2"
    y1="52"
    x2="42"
    y2="52"
    className={lineClass}
    stroke-linecap="round"
  />
)
const Ver1: LetterComp = ({ lineClass }) => (
  <line
    x1="2"
    y1="12"
    x2="2"
    y2="52"
    className={lineClass}
    stroke-linecap="round"
  />
)
const Ver3: LetterComp = ({ lineClass }) => (
  <line
    x1="42"
    y1="12"
    x2="42"
    y2="52"
    className={lineClass}
    stroke-linecap="round"
  />
)
const Hor1b: LetterComp = ({ lineClass }) => (
  <line
    x1="9"
    y1="35"
    x2="35"
    y2="35"
    className={lineClass}
    stroke-linecap="round"
  />
)
const Hor2b: LetterComp = ({ lineClass }) => (
  <line
    x1="9"
    y1="42"
    x2="35"
    y2="42"
    className={lineClass}
    stroke-linecap="round"
  />
)
const Hor3b: LetterComp = ({ lineClass }) => (
  <line
    x1="9"
    y1="49"
    x2="35"
    y2="49"
    className={lineClass}
    stroke-linecap="round"
  />
)
const Ver1b: LetterComp = ({ lineClass }) => (
  <line
    x1="9"
    y1="35"
    x2="9"
    y2="49"
    className={lineClass}
    stroke-linecap="round"
  />
)
const Ver3b: LetterComp = ({ lineClass }) => (
  <line
    x1="35"
    y1="35"
    x2="35"
    y2="49"
    className={lineClass}
    stroke-linecap="round"
  />
)
const V01: LetterComp = ({ lineClass }) => (
  <line
    x1="12"
    y1="2"
    x2="22"
    y2="12"
    className={lineClass}
    stroke-width="1"
    stroke-linecap="round"
  />
)
const V02: LetterComp = ({ lineClass }) => (
  <line
    x1="15"
    y1="5"
    x2="29"
    y2="5"
    className={lineClass}
    stroke-width="1"
    stroke-linecap="round"
  />
)
const V03: LetterComp = ({ lineClass }) => (
  <line
    x1="32"
    y1="2"
    x2="22"
    y2="12"
    className={lineClass}
    stroke-width="1"
    stroke-linecap="round"
  />
)
const Vt1: LetterComp = ({ lineClass }) => (
  <line
    x1="2"
    y1="12"
    x2="22"
    y2="32"
    className={lineClass}
    stroke-width="1"
    stroke-linecap="round"
  />
)
const Vt2: LetterComp = ({ lineClass }) => (
  <line
    x1="10"
    y1="20"
    x2="34"
    y2="20"
    className={lineClass}
    stroke-width="1"
    stroke-linecap="round"
  />
)
const Vt3: LetterComp = ({ lineClass }) => (
  <line
    x1="22"
    y1="32"
    x2="42"
    y2="12"
    className={lineClass}
    stroke-width="1"
    stroke-linecap="round"
  />
)
const Vb1: LetterComp = ({ lineClass }) => (
  <line
    x1="2"
    y1="52"
    x2="22"
    y2="32"
    className={lineClass}
    stroke-width="1"
    stroke-linecap="round"
  />
)
const Vb2: LetterComp = ({ lineClass }) => (
  <line
    x1="10"
    y1="44"
    x2="34"
    y2="44"
    className={lineClass}
    stroke-width="1"
    stroke-linecap="round"
  />
)
const Vb3: LetterComp = ({ lineClass }) => (
  <line
    x1="22"
    y1="32"
    x2="42"
    y2="52"
    className={lineClass}
    stroke-width="1"
    stroke-linecap="round"
  />
)

// leading consonants

const M: LetterComp = ({ lineClass }) => (
  <>
    <Hor1 lineClass={lineClass} />
    <Ver1 lineClass={lineClass} />
  </>
)

const N: LetterComp = ({ lineClass }) => (
  <>
    <Hor1 lineClass={lineClass} />
    <Ver1 lineClass={lineClass} />
    <Ver3 lineClass={lineClass} />
  </>
)

const G: LetterComp = ({ lineClass }) => (
  <>
    <Hor1 lineClass={lineClass} />
    <Ver3 lineClass={lineClass} />
  </>
)

const P: LetterComp = ({ lineClass }) => (
  <>
    <Hor2 lineClass={lineClass} />
    <Ver1 lineClass={lineClass} />
  </>
)

const T: LetterComp = ({ lineClass }) => (
  <>
    <Hor2 lineClass={lineClass} />
    <Ver1 lineClass={lineClass} />
    <Ver3 lineClass={lineClass} />
  </>
)

const K: LetterComp = ({ lineClass }) => (
  <>
    <Hor2 lineClass={lineClass} />
    <Ver3 lineClass={lineClass} />
  </>
)

const F: LetterComp = ({ lineClass }) => (
  <>
    <Hor1 lineClass={lineClass} />
    <Hor2 lineClass={lineClass} />
    <Ver1 lineClass={lineClass} />
  </>
)

const S: LetterComp = ({ lineClass }) => (
  <>
    <Hor1 lineClass={lineClass} />
    <Hor2 lineClass={lineClass} />
    <Ver1 lineClass={lineClass} />
    <Ver3 lineClass={lineClass} />
  </>
)

const H: LetterComp = ({ lineClass }) => (
  <>
    <Hor1 lineClass={lineClass} />
    <Hor2 lineClass={lineClass} />
    <Ver3 lineClass={lineClass} />
  </>
)

const W: LetterComp = ({ lineClass }) => (
  <>
    <Hor1 lineClass={lineClass} />
    <Hor3 lineClass={lineClass} />
    <Ver1 lineClass={lineClass} />
  </>
)

const L: LetterComp = ({ lineClass }) => (
  <>
    <Hor1 lineClass={lineClass} />
    <Hor3 lineClass={lineClass} />
    <Ver1 lineClass={lineClass} />
    <Ver3 lineClass={lineClass} />
  </>
)

const Y: LetterComp = ({ lineClass }) => (
  <>
    <Hor1 lineClass={lineClass} />
    <Hor3 lineClass={lineClass} />
    <Ver3 lineClass={lineClass} />
  </>
)

// ending consonants

const M2: LetterComp = ({ lineClass }) => (
  <>
    <Hor1b lineClass={lineClass} />
    <Ver1b lineClass={lineClass} />
  </>
)

const N2: LetterComp = ({ lineClass }) => (
  <>
    <Hor1b lineClass={lineClass} />
    <Ver1b lineClass={lineClass} />
    <Ver3b lineClass={lineClass} />
  </>
)

const G2: LetterComp = ({ lineClass }) => (
  <>
    <Hor1b lineClass={lineClass} />
    <Ver3b lineClass={lineClass} />
  </>
)

const P2: LetterComp = ({ lineClass }) => (
  <>
    <Hor2b lineClass={lineClass} />
    <Ver1b lineClass={lineClass} />
  </>
)

const T2: LetterComp = ({ lineClass }) => (
  <>
    <Hor2b lineClass={lineClass} />
    <Ver1b lineClass={lineClass} />
    <Ver3b lineClass={lineClass} />
  </>
)

const K2: LetterComp = ({ lineClass }) => (
  <>
    <Hor2b lineClass={lineClass} />
    <Ver3b lineClass={lineClass} />
  </>
)

const F2: LetterComp = ({ lineClass }) => (
  <>
    <Hor1b lineClass={lineClass} />
    <Hor2b lineClass={lineClass} />
    <Ver1b lineClass={lineClass} />
  </>
)

const S2: LetterComp = ({ lineClass }) => (
  <>
    <Hor1b lineClass={lineClass} />
    <Hor2b lineClass={lineClass} />
    <Ver1b lineClass={lineClass} />
    <Ver3b lineClass={lineClass} />
  </>
)

const H2: LetterComp = ({ lineClass }) => (
  <>
    <Hor1b lineClass={lineClass} />
    <Hor2b lineClass={lineClass} />
    <Ver3b lineClass={lineClass} />
  </>
)

const W2: LetterComp = ({ lineClass }) => (
  <>
    <Hor1b lineClass={lineClass} />
    <Hor3b lineClass={lineClass} />
    <Ver1b lineClass={lineClass} />
  </>
)

const L2: LetterComp = ({ lineClass }) => (
  <>
    <Hor1b lineClass={lineClass} />
    <Hor3b lineClass={lineClass} />
    <Ver1b lineClass={lineClass} />
    <Ver3b lineClass={lineClass} />
  </>
)

const Y2: LetterComp = ({ lineClass }) => (
  <>
    <Hor1b lineClass={lineClass} />
    <Hor3 lineClass={lineClass} />
    <Ver3 lineClass={lineClass} />
  </>
)

// vowels

const I0: LetterComp = ({ lineClass }) => (
  <>
    <V01 lineClass={lineClass} />
  </>
)

const I1: LetterComp = ({ lineClass }) => (
  <>
    <Vt1 lineClass={lineClass} />
  </>
)

const I2: LetterComp = ({ lineClass }) => (
  <>
    <Vb1 lineClass={lineClass} />
  </>
)

const E0: LetterComp = ({ lineClass }) => (
  <>
    <V01 lineClass={lineClass} />
    <V02 lineClass={lineClass} />
  </>
)

const E1: LetterComp = ({ lineClass }) => (
  <>
    <Vt1 lineClass={lineClass} />
    <Vt2 lineClass={lineClass} />
  </>
)

const E2: LetterComp = ({ lineClass }) => (
  <>
    <Vb1 lineClass={lineClass} />
    <Vb2 lineClass={lineClass} />
  </>
)

const A0: LetterComp = ({ lineClass }) => (
  <>
    <V01 lineClass={lineClass} />
    <V03 lineClass={lineClass} />
  </>
)

const A1: LetterComp = ({ lineClass }) => (
  <>
    <Vt1 lineClass={lineClass} />
    <Vt3 lineClass={lineClass} />
  </>
)

const A2: LetterComp = ({ lineClass }) => (
  <>
    <Vb1 lineClass={lineClass} />
    <Vb3 lineClass={lineClass} />
  </>
)

const O0: LetterComp = ({ lineClass }) => (
  <>
    <V02 lineClass={lineClass} />
    <V03 lineClass={lineClass} />
  </>
)

const O1: LetterComp = ({ lineClass }) => (
  <>
    <Vt2 lineClass={lineClass} />
    <Vt3 lineClass={lineClass} />
  </>
)

const O2: LetterComp = ({ lineClass }) => (
  <>
    <Vb2 lineClass={lineClass} />
    <Vb3 lineClass={lineClass} />
  </>
)

const U0: LetterComp = ({ lineClass }) => (
  <>
    <V03 lineClass={lineClass} />
  </>
)

const U1: LetterComp = ({ lineClass }) => (
  <>
    <Vt3 lineClass={lineClass} />
  </>
)

const U2: LetterComp = ({ lineClass }) => (
  <>
    <Vb3 lineClass={lineClass} />
  </>
)

type GlyphSymbolProps = {
  letters?: string
  lineClass?: string
  svgClass?: string
}
type GlyphSymbolComp = React.FunctionComponent<GlyphSymbolProps>

const GlyphSymbol: GlyphSymbolComp = ({
  letters = '',
  lineClass = 'stroke-black stroke-1',
  svgClass = 'm-1',
}) => {
  // example letters inputs:
  // ko koi kon ako akoi akon . , : *
  const startletters = [
    'i',
    'e',
    'a',
    'o',
    'u',
    'I',
    'E',
    'A',
    'O',
    'U',
    '.',
    ',',
    ':',
    '*',
  ]
  const startLetter = startletters.includes(letters[0]) ? letters[0] : null
  const shiftedLetters = startLetter ? letters.slice(1) : letters

  if (letters === '%X') {
    return (
      <div>
        <svg version="1.1" viewBox="0 0 44 54" className={svgClass}>
          <V01 lineClass={lineClass} />
          <V02 lineClass={lineClass} />
          <V03 lineClass={lineClass} />
          <Hor1 lineClass={lineClass} />
          <Hor2 lineClass={lineClass} />
          <Hor3 lineClass={lineClass} />
          <Ver1 lineClass={lineClass} />
          <Ver3 lineClass={lineClass} />
          <Hor1b lineClass={lineClass} />
          <Hor2b lineClass={lineClass} />
          <Hor3b lineClass={lineClass} />
          <Ver1b lineClass={lineClass} />
          <Ver3b lineClass={lineClass} />
          <Vt1 lineClass={lineClass} />
          <Vt2 lineClass={lineClass} />
          <Vt3 lineClass={lineClass} />
          <Vb1 lineClass={lineClass} />
          <Vb2 lineClass={lineClass} />
          <Vb3 lineClass={lineClass} />
        </svg>
      </div>
    )
  }

  return (
    <div>
      <svg version="1.1" viewBox="0 0 44 54" className={svgClass}>
        {startLetter && startLetter.toLowerCase() === 'i' && (
          <I0 lineClass={lineClass} />
        )}
        {startLetter && startLetter.toLowerCase() === 'e' && (
          <E0 lineClass={lineClass} />
        )}
        {startLetter && startLetter.toLowerCase() === 'a' && (
          <A0 lineClass={lineClass} />
        )}
        {startLetter && startLetter.toLowerCase() === 'o' && (
          <O0 lineClass={lineClass} />
        )}
        {startLetter && startLetter.toLowerCase() === 'u' && (
          <U0 lineClass={lineClass} />
        )}
        {shiftedLetters[0] && shiftedLetters[0].toLowerCase() === 'm' && (
          <M lineClass={lineClass} />
        )}
        {shiftedLetters[0] && shiftedLetters[0].toLowerCase() === 'n' && (
          <N lineClass={lineClass} />
        )}
        {shiftedLetters[0] && shiftedLetters[0].toLowerCase() === 'g' && (
          <G lineClass={lineClass} />
        )}
        {shiftedLetters[0] && shiftedLetters[0].toLowerCase() === 'p' && (
          <P lineClass={lineClass} />
        )}
        {shiftedLetters[0] && shiftedLetters[0].toLowerCase() === 't' && (
          <T lineClass={lineClass} />
        )}
        {shiftedLetters[0] && shiftedLetters[0].toLowerCase() === 'k' && (
          <K lineClass={lineClass} />
        )}
        {shiftedLetters[0] && shiftedLetters[0].toLowerCase() === 'f' && (
          <F lineClass={lineClass} />
        )}
        {shiftedLetters[0] && shiftedLetters[0].toLowerCase() === 's' && (
          <S lineClass={lineClass} />
        )}
        {shiftedLetters[0] && shiftedLetters[0].toLowerCase() === 'h' && (
          <H lineClass={lineClass} />
        )}
        {shiftedLetters[0] && shiftedLetters[0].toLowerCase() === 'w' && (
          <W lineClass={lineClass} />
        )}
        {shiftedLetters[0] && shiftedLetters[0].toLowerCase() === 'l' && (
          <L lineClass={lineClass} />
        )}
        {shiftedLetters[0] && shiftedLetters[0].toLowerCase() === 'y' && (
          <Y lineClass={lineClass} />
        )}

        {shiftedLetters[1] && shiftedLetters[1].toLowerCase() === 'i' && (
          <I1 lineClass={lineClass} />
        )}
        {shiftedLetters[1] && shiftedLetters[1].toLowerCase() === 'e' && (
          <E1 lineClass={lineClass} />
        )}
        {shiftedLetters[1] && shiftedLetters[1].toLowerCase() === 'a' && (
          <A1 lineClass={lineClass} />
        )}
        {shiftedLetters[1] && shiftedLetters[1].toLowerCase() === 'o' && (
          <O1 lineClass={lineClass} />
        )}
        {shiftedLetters[1] && shiftedLetters[1].toLowerCase() === 'u' && (
          <U1 lineClass={lineClass} />
        )}

        {shiftedLetters[2] && shiftedLetters[2].toLowerCase() === 'i' && (
          <I2 lineClass={lineClass} />
        )}
        {shiftedLetters[2] && shiftedLetters[2].toLowerCase() === 'e' && (
          <E2 lineClass={lineClass} />
        )}
        {shiftedLetters[2] && shiftedLetters[2].toLowerCase() === 'a' && (
          <A2 lineClass={lineClass} />
        )}
        {shiftedLetters[2] && shiftedLetters[2].toLowerCase() === 'o' && (
          <O2 lineClass={lineClass} />
        )}
        {shiftedLetters[2] && shiftedLetters[2].toLowerCase() === 'u' && (
          <U2 lineClass={lineClass} />
        )}

        {shiftedLetters[2] && shiftedLetters[2].toLowerCase() === 'm' && (
          <M2 lineClass={lineClass} />
        )}
        {shiftedLetters[2] && shiftedLetters[2].toLowerCase() === 'n' && (
          <N2 lineClass={lineClass} />
        )}
        {shiftedLetters[2] && shiftedLetters[2].toLowerCase() === 'g' && (
          <G2 lineClass={lineClass} />
        )}
        {shiftedLetters[2] && shiftedLetters[2].toLowerCase() === 'p' && (
          <P2 lineClass={lineClass} />
        )}
        {shiftedLetters[2] && shiftedLetters[2].toLowerCase() === 't' && (
          <T2 lineClass={lineClass} />
        )}
        {shiftedLetters[2] && shiftedLetters[2].toLowerCase() === 'k' && (
          <K2 lineClass={lineClass} />
        )}
        {shiftedLetters[2] && shiftedLetters[2].toLowerCase() === 'f' && (
          <F2 lineClass={lineClass} />
        )}
        {shiftedLetters[2] && shiftedLetters[2].toLowerCase() === 's' && (
          <S2 lineClass={lineClass} />
        )}
        {shiftedLetters[2] && shiftedLetters[2].toLowerCase() === 'h' && (
          <H2 lineClass={lineClass} />
        )}
        {shiftedLetters[2] && shiftedLetters[2].toLowerCase() === 'w' && (
          <W2 lineClass={lineClass} />
        )}
        {shiftedLetters[2] && shiftedLetters[2].toLowerCase() === 'l' && (
          <L2 lineClass={lineClass} />
        )}
        {shiftedLetters[2] && shiftedLetters[2].toLowerCase() === 'y' && (
          <Y2 lineClass={lineClass} />
        )}
      </svg>
    </div>
  )
}

export default GlyphSymbol
