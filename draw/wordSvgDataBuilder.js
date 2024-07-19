require('./stringFormat') // adds the format method to strings
const fs = require('fs')

function n(box) {
  return (
    '<g transform="{0}">'.format(box.transform) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y,
      box.x + box.width,
      box.y
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y,
      box.x,
      box.y + box.height
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + box.width,
      box.y,
      box.x + box.width,
      box.y + box.height
    ) +
    '</g>'
  )
}

function a(box) {
  return (
    '<g transform="{0}">'.format(box.transform) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y,
      Math.round(((box.x + box.width) / 2) * 100) / 100,
      box.y + box.height
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + box.width,
      box.y,
      Math.round(((box.x + box.width) / 2) * 100) / 100,
      box.y + box.height
    ) +
    '</g>'
  )
}

const shapes = {
  n,
  a,
}

const boxes = {
  F: {
    x: 4,
    y: 4,
    width: 32,
    height: 32,
    transform: 'scale(1,1)',
  },
  FVT: {
    x: 4,
    y: 4,
    width: 32,
    height: 16,
    transform: 'scale(1,1)',
  },
  FVB: {
    x: 4,
    y: 4,
    width: 32,
    height: 16,
    transform: 'scale(1,-1)',
  },
  FCB: {},
  L: {},
  LVT: {},
  LVB: {},
  LCB: {},
  RT: {},
  RB: {},
  L2: {},
  R2: {},
  I1: {},
  I2: {},
  I3: {},
  I4: {},
  T: {},
  B: {},
}

/* 

the forms:

X = any shape
Y = vowel or consonant
C = consonant
V = vowel

*/

const X = ['n', 'a']
const Y = ['n', 'a']
const V = ['a']
const C = ['n']

const categories = {
  X,
  Y,
  V,
  C
}



const forms = {
  X: [boxes.F],
  CV: [boxes.F, boxes.FVT],
  CVC: [boxes.F, boxes.FVT, boxes.FCB],
  CVV: [boxes.F, boxes.FVT, boxes.FVB],
  CVCY: [boxes.L, boxes.LVT, boxes.LCB, boxes.RT],
  CVVY: [boxes.L, boxes.LVT, boxes.LVB, boxes.RT],
  CVCYY: [boxes.L, boxes.LVT, boxes.LCB, boxes.RT, boxes.RB],
  CVVYY: [boxes.L, boxes.LVT, boxes.LVB, boxes.RT, boxes.RB],
  CC: [boxes.L2, boxes.R2],
  CCC: [boxes.L2, boxes.I3, boxes.I4],
  CCCC: [boxes.I1, boxes.I2, boxes.I3, boxes.I4],
  VV: [boxes.FVT, boxes.FVB],
  VVY: [boxes.LVT, boxes.LVB, boxes.RT],
  VVYY: [boxes.LVT, boxes.LVB, boxes.RT, boxes.RB],
  VC: [boxes.T, boxes.B],
}

function build() {
  let parts = {}

  Object.entries(forms).forEach(([label, sequence]) => {
    parts[label] = []
    const letterTypes = label.split('')
    sequence.forEach((box, index) => {
      parts[label].push({})
      letters = categories[letterTypes[index]]
      letters.forEach((letter) => {
        parts[label][index][letter] = shapes[letter](box)
      })
    })
  });

  return parts
}

const frame =
  '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">\n<rect width="100%" height="100%" fill="{1}" />\n<g stroke="{2}" stroke-width="{3}" stroke-linecap="round">\n{0}</g>\n</svg>'

function draw(word) {
  form = 'X'
  if (word === 'na') {
    form = 'CV'
  }

  if (word === 'naa') {
    form = 'CVV'
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

fs.writeFileSync('draw/parts.json', JSON.stringify(build(), null, 2))

// fs.writeFileSync('draw/shapes/drawing-test.svg', draw('n'))
