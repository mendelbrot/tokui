import Glyph from '../components/glyph'

const size = 50
const gridWidth = `${Math.round(20*size)}px`

function Block({consonant}) {
  return (
    <div className='grid grid-cols-5'>
      <Glyph letters={[consonant, 'i', '_']} size={size}/>
      <Glyph letters={[consonant, 'i', 'e']} size={size}/>
      <Glyph letters={[consonant, 'i', 'a']} size={size}/>
      <Glyph letters={[consonant, 'i', 'o']} size={size}/>
      <Glyph letters={[consonant, 'i', 'u']} size={size}/>
      <Glyph letters={[consonant, 'e', 'i']} size={size}/>
      <Glyph letters={[consonant, 'e', '_']} size={size}/>
      <Glyph letters={[consonant, 'e', 'a']} size={size}/>
      <Glyph letters={[consonant, 'e', 'o']} size={size}/>
      <Glyph letters={[consonant, 'e', 'u']} size={size}/>
      <Glyph letters={[consonant, 'a', 'i']} size={size}/>
      <Glyph letters={[consonant, 'a', 'e']} size={size}/>
      <Glyph letters={[consonant, 'a', '_']} size={size}/>
      <Glyph letters={[consonant, 'a', 'o']} size={size}/>
      <Glyph letters={[consonant, 'a', 'u']} size={size}/>
      <Glyph letters={[consonant, 'o', 'i']} size={size}/>
      <Glyph letters={[consonant, 'o', 'e']} size={size}/>
      <Glyph letters={[consonant, 'o', 'a']} size={size}/>
      <Glyph letters={[consonant, 'o', '_']} size={size}/>
      <Glyph letters={[consonant, 'o', 'u']} size={size}/>
      <Glyph letters={[consonant, 'u', 'i']} size={size}/>
      <Glyph letters={[consonant, 'u', 'e']} size={size}/>
      <Glyph letters={[consonant, 'u', 'a']} size={size}/>
      <Glyph letters={[consonant, 'u', 'o']} size={size}/>
      <Glyph letters={[consonant, 'u', '_']} size={size}/>
    </div>
  );
}

function Glyphs() {
  return (
    <div className="grid grid-cols-4" style={{width: gridWidth}} >
      <Block consonant='m' />
      <Block consonant='p' />
      <Block consonant='f' />
      <Block consonant='w' />
      <Block consonant='n' />
      <Block consonant='t' />
      <Block consonant='s' />
      <Block consonant='l' />
      <Block consonant='g' />
      <Block consonant='k' />
      <Block consonant='h' />
      <Block consonant='y' />
    </div>
  );
}

export default Glyphs;
