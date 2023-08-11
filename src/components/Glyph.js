const Hor1 = ({rectStyle}) => <rect x="0.75" y="0.75" width="8.5" height="0.5" rx="0.25" style={rectStyle}/>
const Hor2 = ({rectStyle}) => <rect x="0.75" y="4.75" width="8.5" height="0.5" rx="0.25" style={rectStyle}/>
const Hor3 = ({rectStyle}) => <rect x="0.75" y="8.75" width="8.5" height="0.5" rx="0.25" style={rectStyle}/>
const Ver1 = ({rectStyle}) => <rect x="0.75" y="0.75" width="0.5" height="8.5" rx="0.25" style={rectStyle}/>
const Ver2 = ({rectStyle}) => <rect x="4.75" y="0.75" width="0.5" height="8.5" rx="0.25" style={rectStyle}/>
const Ver3 = ({rectStyle}) => <rect x="8.75" y="0.75" width="0.5" height="8.5" rx="0.25" style={rectStyle}/>
const Vt1 = ({rectStyle}) => <rect x="-0.80" y="4.75" width="6" height="0.5" rx="0.25" transform-origin="center" transform="rotate(45)" style={rectStyle} />
const Vt2 = ({rectStyle}) => <rect x="2.65" y="2.5" width="4.7" height="0.5" rx="0.25" style={rectStyle}/>
const Vt3 = ({rectStyle}) => <rect x="-0.80" y="4.75" width="6" height="0.5" rx="0.25" transform-origin="center" transform="rotate(135)" style={rectStyle} />
const Vb1 = ({rectStyle}) => <rect x="-0.80" y="4.75" width="6" height="0.5" rx="0.25" transform-origin="center" transform="rotate(-45)" style={rectStyle} />
const Vb2 = ({rectStyle}) => <rect x="2.65" y="7" width="4.7" height="0.5" rx="0.25" style={rectStyle}/>
const Vb3 = ({rectStyle}) => <rect x="-0.80" y="4.75" width="6" height="0.5" rx="0.25" transform-origin="center" transform="rotate(-135) "style={rectStyle} />

const M = ({rectStyle}) =>
  <>
    <Hor1 rectStyle={rectStyle}/>
    <Ver1 rectStyle={rectStyle}/>
  </>

const P = ({rectStyle}) =>
  <>
    <Hor1 rectStyle={rectStyle}/>
    <Hor3 rectStyle={rectStyle}/>
    <Ver1 rectStyle={rectStyle}/>
  </>

const H = ({rectStyle}) =>
  <>
    <Hor3 rectStyle={rectStyle}/>
    <Ver1 rectStyle={rectStyle}/>
  </>

const W = ({rectStyle}) =>
  <>
    <Hor2 rectStyle={rectStyle}/>
    <Ver1 rectStyle={rectStyle}/>
  </>

const N = ({rectStyle}) =>
  <>
    <Hor1 rectStyle={rectStyle}/>
    <Ver2 rectStyle={rectStyle}/>
  </>

const T = ({rectStyle}) =>
  <>
    <Hor1 rectStyle={rectStyle}/>
    <Hor3 rectStyle={rectStyle}/>
    <Ver2 rectStyle={rectStyle}/>
  </>

const S = ({rectStyle}) =>
  <>
    <Hor3 rectStyle={rectStyle}/>
    <Ver2 rectStyle={rectStyle}/>
  </>

const L = ({rectStyle}) =>
  <>
    <Hor2 rectStyle={rectStyle}/>
    <Ver2 rectStyle={rectStyle}/>
  </>

const G = ({rectStyle}) =>
  <>
    <Hor1 rectStyle={rectStyle}/>
    <Ver3 rectStyle={rectStyle}/>
  </>

const K = ({rectStyle}) =>
  <>
    <Hor1 rectStyle={rectStyle}/>
    <Hor3 rectStyle={rectStyle}/>
    <Ver3 rectStyle={rectStyle}/>
  </>

const F = ({rectStyle}) =>
  <>
    <Hor3 rectStyle={rectStyle}/>
    <Ver3 rectStyle={rectStyle}/>
  </>

const Y = ({rectStyle}) =>
  <>
    <Hor2 rectStyle={rectStyle}/>
    <Ver3 rectStyle={rectStyle}/>
  </>

const I1 = ({rectStyle}) =>
  <>
    <Vt1 rectStyle={rectStyle}/>
  </>

const I2 = ({rectStyle}) =>
  <>
    <Vb1 rectStyle={rectStyle}/>
  </>

const E1 = ({rectStyle}) =>
  <>
    <Vt1 rectStyle={rectStyle}/>
    <Vt2 rectStyle={rectStyle}/>
  </>

const E2 = ({rectStyle}) =>
  <>
    <Vb1 rectStyle={rectStyle}/>
    <Vb2 rectStyle={rectStyle}/>
  </>

const A1 = ({rectStyle}) =>
  <>
    <Vt1 rectStyle={rectStyle}/>
    <Vt3 rectStyle={rectStyle}/>
  </>

const A2 = ({rectStyle}) =>
  <>
    <Vb1 rectStyle={rectStyle}/>
    <Vb3 rectStyle={rectStyle}/>
  </>

const O1 = ({rectStyle}) =>
  <>
    <Vt2 rectStyle={rectStyle}/>
    <Vt3 rectStyle={rectStyle}/>
  </>

const O2 = ({rectStyle}) =>
  <>
    <Vb2 rectStyle={rectStyle}/>
    <Vb3 rectStyle={rectStyle}/>
  </>

const U1 = ({rectStyle}) =>
  <>
    <Vt3 rectStyle={rectStyle}/>
  </>

const U2 = ({rectStyle}) =>
  <>
    <Vb3 rectStyle={rectStyle}/>
  </>

function Glyph({
  letters, 
  width = 200, 
  height = 200, 
  border = "2px solid lightgreen", 
  fill = "black"
}) {
  const rectStyle = {"fill": fill}
  const svgStyle = {"width": width, "height": height, "border": border}

  return (
    <div>
      <svg version="1.1" viewBox="0 0 10 10" style={svgStyle}>
        {letters && letters[0] && letters[0].toLowerCase() === 'm' && <M rectStyle={rectStyle} />}
        {letters && letters[0] && letters[0].toLowerCase() === 'p' && <P rectStyle={rectStyle} />}
        {letters && letters[0] && letters[0].toLowerCase() === 'h' && <H rectStyle={rectStyle} />}
        {letters && letters[0] && letters[0].toLowerCase() === 'w' && <W rectStyle={rectStyle} />}
        {letters && letters[0] && letters[0].toLowerCase() === 'n' && <N rectStyle={rectStyle} />}
        {letters && letters[0] && letters[0].toLowerCase() === 't' && <T rectStyle={rectStyle} />}
        {letters && letters[0] && letters[0].toLowerCase() === 's' && <S rectStyle={rectStyle} />}
        {letters && letters[0] && letters[0].toLowerCase() === 'l' && <L rectStyle={rectStyle} />}
        {letters && letters[0] && letters[0].toLowerCase() === 'g' && <G rectStyle={rectStyle} />}
        {letters && letters[0] && letters[0].toLowerCase() === 'k' && <K rectStyle={rectStyle} />}
        {letters && letters[0] && letters[0].toLowerCase() === 'f' && <F rectStyle={rectStyle} />}
        {letters && letters[0] && letters[0].toLowerCase() === 'y' && <Y rectStyle={rectStyle} />}
        {letters && letters[1] && letters[1].toLowerCase() === 'i' && <I1 rectStyle={rectStyle} />}
        {letters && letters[1] && letters[1].toLowerCase() === 'e' && <E1 rectStyle={rectStyle} />}
        {letters && letters[1] && letters[1].toLowerCase() === 'a' && <A1 rectStyle={rectStyle} />}
        {letters && letters[1] && letters[1].toLowerCase() === 'o' && <O1 rectStyle={rectStyle} />}
        {letters && letters[1] && letters[1].toLowerCase() === 'u' && <U1 rectStyle={rectStyle} />}
        {letters && letters[2] && letters[2].toLowerCase() === 'i' && <I2 rectStyle={rectStyle} />}
        {letters && letters[2] && letters[2].toLowerCase() === 'e' && <E2 rectStyle={rectStyle} />}
        {letters && letters[2] && letters[2].toLowerCase() === 'a' && <A2 rectStyle={rectStyle} />}
        {letters && letters[2] && letters[2].toLowerCase() === 'o' && <O2 rectStyle={rectStyle} />}
        {letters && letters[2] && letters[2].toLowerCase() === 'u' && <U2 rectStyle={rectStyle} />}
        
      </svg>
    </div>
  );
}

export default Glyph;