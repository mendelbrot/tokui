import Glyph from '../components/glyph'
import { Link } from 'react-router-dom'
import React from 'react'

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
        <div key={l.join('')} className='min-w-12 max-w-48'>
          <Link to={`/words/${l.join('')}`} >
            <Glyph letters={l.join('')}/>
          </Link>
        </div>
      ))}
    </div>
  );
}

function Glyphs() {

  return (
    <div>
      <div className={'grid gap-4 sm:gap-6 grid-cols-3 max-w-2xl'} >
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
