require('./stringFormat') // adds the format method to strings
const fs = require('fs')

function n(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      Math.round((box.x + box.width / 2) * 100) / 100,
      Math.round((box.y + box.height / 2) * 100) / 100
    ) +
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
    '</g>\n'
  )
}

function a(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      Math.round((box.x + box.width / 2) * 100) / 100,
      Math.round((box.y + box.height / 2) * 100) / 100
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y,
      Math.round((box.x + box.width / 2) * 100) / 100,
      box.y + box.height
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + box.width,
      box.y,
      Math.round((box.x + box.width / 2) * 100) / 100,
      box.y + box.height
    ) +
    '</g>\n'
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
    transform: '',
  },
  FVT: {
    x: 4,
    y: 4,
    width: 32,
    height: 16,
    transform: '',
  },
  FVB: {
    x: 4,
    y: 20,
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

function frame(vowel = null) {
  if (!vowel) {
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">\n' +
      '<rect width="100%" height="100%" fill="{1}" />\n' +
      '<g stroke="{2}" stroke-width="{3}" stroke-linecap="round">\n{0}' +
      '</g>\n' +
      '</svg>'
    )
  }

  const frameVowelBox = {
    x: 10,
    y: 4,
    width: 20,
    height: 10,
    transform: '',
  }

  return (
    '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="55">\n' +
    '<rect width="100%" height="100%" fill="{1}" />\n' +
    shapes[vowel](frameVowelBox) +
    '<g stroke="{2}" stroke-width="{3}" stroke-linecap="round" transform="translate(0 -15)">\n{0}' +
    '</g>\n' +
    '</svg>'
  )
}

const X = ['n', 'a']
const Y = ['n', 'a']
const V = ['a']
const C = ['n']

const groups = {
  X,
  Y,
  V,
  C,
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

const pakala = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
  <rect width="100%" height="100%" fill="{1}" />
  <g stroke="{2}" stroke-width="{3}" stroke-linecap="round">
    <line x1="4" y1="6" x2="36" y2="4" />
    <line x1="4" y1="36" x2="36" y2="36" />
    <line x1="6" y1="6" x2="4" y2="36" />
    <line x1="36" y1="4" x2="34" y2="32" />
    <line x1="28" y1="6" x2="16" y2="19" />
    <line x1="16" y1="19" x2="27" y2="21" />
    <line x1="27" y1="21" x2="14" y2="36" />
  </g>
</svg>`

function build() {
  let parts = { pakala }

  parts.frames = { basic: frame() }
  groups.V.forEach((vowel) => {
    parts.frames[vowel.toUpperCase()] = frame(vowel)
  })

  Object.entries(forms).forEach(([label, sequence]) => {
    parts[label] = []
    const letterTypes = label.split('')
    sequence.forEach((box, index) => {
      parts[label].push({})
      letters = groups[letterTypes[index]]
      letters.forEach((letter) => {
        parts[label][index][letter] = shapes[letter](box)
      })
    })
  })

  return parts
}

const parts = JSON.parse(fs.readFileSync('draw/parts.json', 'utf8'))

function checkAgainst(sequence, forms) {
  forms.forEach((form) => {
    if (
      sequence.length === form.length &&
      sequence.all((letter, index) =>
        groups[form[index]].some((item) => item === letter)
      )
    ) {
      return form
    }
  })
}

function draw(word) {
  if (word.length === 0) {
    return null
  }

  const sequence = word.split('')

  let frame = parts.frames.basic
  if (['I', 'E', 'A', 'O', 'U'].some((item) => item === word[0])) {
    frameVowel = sequence.shift() // modifies
    frame = parts.frames[frameVowel]
  }

  let form = 'pakala'

  switch (sequence.length) {
    case 0: {
      return frames[frameVowel].format('', fill, stroke, strokeWidth)
    }
    case 1: {
      const s = checkAgainst(sequence, ['X'])
      if (s) form = s
      break
    }
    case 2: {
      const s = checkAgainst(sequence, ['CV', 'CC', 'VV', 'VC'])
      if (s) form = s
      break
    }
    case 3: {
      const s = checkAgainst(sequence, ['CVC', 'CVV', 'CCC', 'VVY'])
      if (s) form = s
      break
    }
    case 4: {
      const s = checkAgainst(sequence, ['CVCY', 'CVVY', 'CCCC', 'VVYY'])
      if (s) form = s
      break
    }
    case 5: {
      const s = checkAgainst(sequence, ['CVCYY', 'CVVYY'])
      if (s) form = s
      break
    }
  }

  const innerPart = word
    .split('')
    .reduce(
      (accumulator, letter, index) => accumulator + parts[form][index][letter],
      ''
    )
  const wordSvg = frame.format(innerPart, 'white', 'black', '2')

  return wordSvg
}

// fs.writeFileSync('draw/parts.json', JSON.stringify(build(), null, 2))

// fs.writeFileSync('draw/shapes/drawing-test.svg', draw('naa'))
