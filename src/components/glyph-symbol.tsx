import React from 'react'

type LetterStyleProps = {rectStyle: object}
type Letter = React.FunctionComponent<LetterStyleProps>

const Hor1: Letter = ({rectStyle}) => <rect x='0.75' y='0.75' width='8.5' height='0.5' rx='0.25' style={rectStyle}/>
const Hor2: Letter = ({rectStyle}) => <rect x='0.75' y='4.75' width='8.5' height='0.5' rx='0.25' style={rectStyle}/>
const Hor3: Letter = ({rectStyle}) => <rect x='0.75' y='8.75' width='8.5' height='0.5' rx='0.25' style={rectStyle}/>
const Ver1: Letter = ({rectStyle}) => <rect x='0.75' y='0.75' width='0.5' height='8.5' rx='0.25' style={rectStyle}/>
const Ver2: Letter = ({rectStyle}) => <rect x='4.75' y='0.75' width='0.5' height='8.5' rx='0.25' style={rectStyle}/>
const Ver3: Letter = ({rectStyle}) => <rect x='8.75' y='0.75' width='0.5' height='8.5' rx='0.25' style={rectStyle}/>
const Vt1: Letter = ({rectStyle}) => <rect x='-0.80' y='4.75' width='6' height='0.5' rx='0.25' transform-origin='center' transform='rotate(45)' style={rectStyle} />
const Vt2: Letter = ({rectStyle}) => <rect x='2.65' y='2.5' width='4.7' height='0.5' rx='0.25' style={rectStyle}/>
const Vt3: Letter = ({rectStyle}) => <rect x='-0.80' y='4.75' width='6' height='0.5' rx='0.25' transform-origin='center' transform='rotate(135)' style={rectStyle} />
const Vb1: Letter = ({rectStyle}) => <rect x='-0.80' y='4.75' width='6' height='0.5' rx='0.25' transform-origin='center' transform='rotate(-45)' style={rectStyle} />
const Vb2: Letter = ({rectStyle}) => <rect x='2.65' y='7' width='4.7' height='0.5' rx='0.25' style={rectStyle}/>
const Vb3: Letter = ({rectStyle}) => <rect x='-0.80' y='4.75' width='6' height='0.5' rx='0.25' transform-origin='center' transform='rotate(-135) 'style={rectStyle} />

const M: Letter = ({rectStyle}) =>
  <>
    <Hor1 rectStyle={rectStyle}/>
    <Ver1 rectStyle={rectStyle}/>
  </>

const N: Letter = ({rectStyle}) =>
  <>
    <Hor1 rectStyle={rectStyle}/>
    <Ver2 rectStyle={rectStyle}/>
  </>

const G: Letter = ({rectStyle}) =>
  <>
    <Hor1 rectStyle={rectStyle}/>
    <Ver3 rectStyle={rectStyle}/>
  </>

const P: Letter = ({rectStyle}) =>
  <>
    <Hor2 rectStyle={rectStyle}/>
    <Ver1 rectStyle={rectStyle}/>
  </>

const T: Letter = ({rectStyle}) =>
  <>
    <Hor2 rectStyle={rectStyle}/>
    <Ver2 rectStyle={rectStyle}/>
  </>

const K: Letter = ({rectStyle}) =>
  <>
    <Hor2 rectStyle={rectStyle}/>
    <Ver3 rectStyle={rectStyle}/>
  </>

const F: Letter = ({rectStyle}) =>
  <>
    <Hor1 rectStyle={rectStyle}/>
    <Hor3 rectStyle={rectStyle}/>
    <Ver1 rectStyle={rectStyle}/>
  </>

const S: Letter = ({rectStyle}) =>
  <>
    <Hor1 rectStyle={rectStyle}/>
    <Hor3 rectStyle={rectStyle}/>
    <Ver2 rectStyle={rectStyle}/>
  </>

const H: Letter = ({rectStyle}) =>
  <>
    <Hor1 rectStyle={rectStyle}/>
    <Hor3 rectStyle={rectStyle}/>
    <Ver3 rectStyle={rectStyle}/>
  </>

const W: Letter = ({rectStyle}) =>
  <>
    <Hor3 rectStyle={rectStyle}/>
    <Ver1 rectStyle={rectStyle}/>
  </>

const L: Letter = ({rectStyle}) =>
  <>
    <Hor3 rectStyle={rectStyle}/>
    <Ver2 rectStyle={rectStyle}/>
  </>

const Y: Letter = ({rectStyle}) =>
  <>
    <Hor3 rectStyle={rectStyle}/>
    <Ver3 rectStyle={rectStyle}/>
  </>

const I1: Letter = ({rectStyle}) =>
  <>
    <Vt1 rectStyle={rectStyle}/>
  </>

const I2: Letter = ({rectStyle}) =>
  <>
    <Vb1 rectStyle={rectStyle}/>
  </>

const E1: Letter = ({rectStyle}) =>
  <>
    <Vt1 rectStyle={rectStyle}/>
    <Vt2 rectStyle={rectStyle}/>
  </>

const E2: Letter = ({rectStyle}) =>
  <>
    <Vb1 rectStyle={rectStyle}/>
    <Vb2 rectStyle={rectStyle}/>
  </>

const A1: Letter = ({rectStyle}) =>
  <>
    <Vt1 rectStyle={rectStyle}/>
    <Vt3 rectStyle={rectStyle}/>
  </>

const A2: Letter = ({rectStyle}) =>
  <>
    <Vb1 rectStyle={rectStyle}/>
    <Vb3 rectStyle={rectStyle}/>
  </>

const O1: Letter = ({rectStyle}) =>
  <>
    <Vt2 rectStyle={rectStyle}/>
    <Vt3 rectStyle={rectStyle}/>
  </>

const O2: Letter = ({rectStyle}) =>
  <>
    <Vb2 rectStyle={rectStyle}/>
    <Vb3 rectStyle={rectStyle}/>
  </>

const U1: Letter = ({rectStyle}) =>
  <>
    <Vt3 rectStyle={rectStyle}/>
  </>

const U2: Letter = ({rectStyle}) =>
  <>
    <Vb3 rectStyle={rectStyle}/>
  </>

const GlyphSymbol = ({
  letters = '', 
  fill = 'black'
}) => {
  const rectStyle = {'fill': fill}
  const svgStyle = {}

  return (
    <div>
      <svg version='1.1' viewBox='0 0 10 10' style={svgStyle}>
        {letters[0] && letters[0].toLowerCase() === 'm' && <M rectStyle={rectStyle} />}
        {letters[0] && letters[0].toLowerCase() === 'n' && <N rectStyle={rectStyle} />}
        {letters[0] && letters[0].toLowerCase() === 'g' && <G rectStyle={rectStyle} />}
        {letters[0] && letters[0].toLowerCase() === 'p' && <P rectStyle={rectStyle} />}
        {letters[0] && letters[0].toLowerCase() === 't' && <T rectStyle={rectStyle} />}
        {letters[0] && letters[0].toLowerCase() === 'k' && <K rectStyle={rectStyle} />}
        {letters[0] && letters[0].toLowerCase() === 'f' && <F rectStyle={rectStyle} />}
        {letters[0] && letters[0].toLowerCase() === 's' && <S rectStyle={rectStyle} />}
        {letters[0] && letters[0].toLowerCase() === 'h' && <H rectStyle={rectStyle} />}
        {letters[0] && letters[0].toLowerCase() === 'w' && <W rectStyle={rectStyle} />}
        {letters[0] && letters[0].toLowerCase() === 'l' && <L rectStyle={rectStyle} />}
        {letters[0] && letters[0].toLowerCase() === 'y' && <Y rectStyle={rectStyle} />}
        {letters[1] && letters[1].toLowerCase() === 'i' && <I1 rectStyle={rectStyle} />}
        {letters[1] && letters[1].toLowerCase() === 'e' && <E1 rectStyle={rectStyle} />}
        {letters[1] && letters[1].toLowerCase() === 'a' && <A1 rectStyle={rectStyle} />}
        {letters[1] && letters[1].toLowerCase() === 'o' && <O1 rectStyle={rectStyle} />}
        {letters[1] && letters[1].toLowerCase() === 'u' && <U1 rectStyle={rectStyle} />}
        {letters[2] && letters[2].toLowerCase() === 'i' && <I2 rectStyle={rectStyle} />}
        {letters[2] && letters[2].toLowerCase() === 'e' && <E2 rectStyle={rectStyle} />}
        {letters[2] && letters[2].toLowerCase() === 'a' && <A2 rectStyle={rectStyle} />}
        {letters[2] && letters[2].toLowerCase() === 'o' && <O2 rectStyle={rectStyle} />}
        {letters[2] && letters[2].toLowerCase() === 'u' && <U2 rectStyle={rectStyle} />}
        
      </svg>
    </div>
  );
}

export default GlyphSymbol