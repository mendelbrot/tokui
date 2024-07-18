require('./stringFormat') // adds the format method to strings
const fs = require('fs')
const parts = JSON.parse(fs.readFileSync('draw/parts.json', 'utf8'))
const frames = JSON.parse(fs.readFileSync('draw/frames.json', 'utf8'))

const vowels = ['i', 'e', 'a', 'o', 'u']
const consonants = ['m', 'n', 'g', 'f', 's', 'h', 'p', 't', 'k', 'w', 'l', 'y']
const letters = [
  'i',
  'e',
  'a',
  'o',
  'u',
  'm',
  'n',
  'g',
  'f',
  's',
  'h',
  'p',
  't',
  'k',
  'w',
  'l',
  'y',
]

function draw(word, fill = 'white', stroke = 'black', strokeWidth = '2') {
  if (word.length === 0) {
    return null
  }

  word = word.split('') // this is a js file: typescript can't reach me here!

  let frameVowel = 'basic'
  if (['I', 'E', 'A', 'O', 'U'].some((item) => item === word[0])) {
    frameVowel = word.shift() // modifies word
  }

  let form = 'unclassified'
  switch (word.length) {
    case 0: {
      return frames[frameVowel].format('', fill, stroke, strokeWidth)
    }
    case 1: {
      if (letters.some((item) => item === word[0])) {
        form = 'X'
      }
      break
    }
    default:
      return 'pakala'
  }

  if (form === 'unclassified') {
    return 'pakala'
  }

  const wordInnerSvg = word.reduce(
    (svgBlock, letter, index) => svgBlock + parts[form][index][letter],
    ''
  )
  const wordSvg = frames[frameVowel].format(
    wordInnerSvg,
    fill,
    stroke,
    strokeWidth
  )

  return wordSvg
}

fs.writeFileSync('draw/shapes/drawing-test.svg', draw('n'))
