import Glyph from '../components/glyph'
import { Link } from 'react-router-dom'
import React from 'react'

const wideStyle = 'grid grid-rows-3 grid-flow-col gap-12'
const tallStyle = 'grid grid-cols-1 gap-12 sm:grid-cols-3'

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
        <div className='min-w-12 max-w-48'>
          <Link to={`/glyphs/${l.join('')}`} key={l.join('')}>
            <Glyph letters={l}/>
          </Link>
        </div>
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
  const [tall, setTall] = React.useState(true)
  const gridStyle = tall ? tallStyle : wideStyle
  const toggleTall = () => {
    setTall(!tall)
  }

  const reload = () => window.location.reload(false)
  React.useEffect(() => {
    window.addEventListener('resize', reload)
    window.addEventListener('resize', () => console.log('hello'))
    return window.removeEventListener('resize', reload)
  }, [])

  return (
    <div>
      <div onClick={toggleTall} style={{display: 'none'}}>
        <Toggle active={tall} />
      </div>
      <div className={gridStyle} >
        <Block consonant='m' />
        <Block consonant='n' />
        <Block consonant='g' />
        <Block consonant='p' />
        <Block consonant='t' />
        <Block consonant='k' />
        <Block consonant='f' />
        <Block consonant='s' />
        <Block consonant='h' />
        <Block consonant='w' />
        <Block consonant='l' />
        <Block consonant='y' />
      </div>
    </div>
  );
}

export default Glyphs;
