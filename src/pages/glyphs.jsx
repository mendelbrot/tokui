import Glyph from '../components/glyph'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const size = 50
const wideWidth = `${Math.round(20*size) + 3*48}px`
const tallWidth = `${Math.round(15*size) + 2*48}px`
const wideStyle = 'grid grid-cols-4 gap-12'
const tallStyle = 'grid grid-rows-4 grid-flow-col gap-12'

const letters = (consonant) => {
  return [
    [consonant, 'i', ''],
    [consonant, 'i', 'e'],
    [consonant, 'i', 'a'],
    [consonant, 'i', 'o'],
    [consonant, 'i', 'u'],
    [consonant, 'e', 'i'],
    [consonant, 'e', ''],
    [consonant, 'e', 'a'],
    [consonant, 'e', 'o'],
    [consonant, 'e', 'u'],
    [consonant, 'a', 'i'],
    [consonant, 'a', 'e'],
    [consonant, 'a', ''],
    [consonant, 'a', 'o'],
    [consonant, 'a', 'u'],
    [consonant, 'o', 'i'],
    [consonant, 'o', 'e'],
    [consonant, 'o', 'a'],
    [consonant, 'o', ''],
    [consonant, 'o', 'u'],
    [consonant, 'u', 'i'],
    [consonant, 'u', 'e'],
    [consonant, 'u', 'a'],
    [consonant, 'u', 'o'],
    [consonant, 'u', '']
  ]
}

function Block({consonant}) {
  return (
    <div className='grid grid-cols-5'>
      {letters(consonant).map(l => (
        <Link to={`/glyphs/${l.join('')}`} key={l.join('')}>
          <Glyph letters={l} size={size}/>
        </Link>
      ))}
    </div>
  );
}

function Toggle({active}) {
  const activeClass = 'w-6 h-12 bg-emerald-200 rounded-lg border-2 border-slate-500'
  const inactiveClass = 'w-12 h-6 bg-emerald-200 rounded-lg border-2 border-slate-500'
  const toggleClass = active ? activeClass : inactiveClass
  return (
    <div className='grid grid-cols-1 content-center justify-items-center w-12 h-12'>
      <div className={toggleClass}></div>
    </div>
  )
}

function Glyphs() {
  const [tall, setTall] = useState(false)

  const gridStyle = tall ? tallStyle : wideStyle
  const gridWidth = tall ? tallWidth : wideWidth

  const toggleTall = () => {
    setTall(!tall)
  }

  return (
    <div>
      <div onClick={toggleTall}>
        <Toggle active={tall} />
      </div>
      <div className={gridStyle} style={{width: gridWidth}} >
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
    </div>
  );
}

export default Glyphs;
