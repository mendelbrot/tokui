import Glyph from '../components/glyph-symbol'

const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);

const l1 = 'mphwntslgkfy'.split('')
const l2 = 'ieaou'.split('')
const l3 = ' ieaou'.split('')

function Block(consonant) {
  return (
    <div className="flex flex-wrap">
      {cartesian(l1, l2, l3).filter(item => item[1] !== item[2]).map(item => <Glyph letters={item} size={50} border="none" />)}
    </div>
  );
}

function Glyphs() {
  return (
    <div className="flex flex-wrap">
      {cartesian(l1, l2, l3).filter(item => item[1] !== item[2]).map(item => <Glyph letters={item} size={50} border="none" />)}
    </div>
  );
}

export default Glyphs;
