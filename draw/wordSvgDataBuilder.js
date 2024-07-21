require('./stringFormat') // adds the format method to strings
const fs = require('fs')

const Q = 0.3

function dy(hgt) {
  return Math.round(Q * hgt * 100) / 100
}

function dx(wid) {
  return Math.round(Q * wid * 100) / 100
}

function mid(z) {
  return Math.round(z * 50) / 100
}

function i(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      box.x + mid(box.width),
      box.y + mid(box.height)
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y,
      box.x + box.width,
      box.y + box.height
    ) +
    '</g>\n'
  )
}

function e(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      box.x + mid(box.width),
      box.y + mid(box.height)
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y,
      box.x + box.width,
      box.y + box.height
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + dx(box.width),
      box.y + dy(box.height),
      box.x + box.width,
      box.y + dy(box.height)
    ) +
    '</g>\n'
  )
}

function a(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      box.x + mid(box.width),
      box.y + mid(box.height)
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y,
      box.x + mid(box.width),
      box.y + box.height
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + box.width,
      box.y,
      box.x + mid(box.width),
      box.y + box.height
    ) +
    '</g>\n'
  )
}

function o(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      box.x + mid(box.width),
      box.y + mid(box.height)
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + box.width,
      box.y,
      box.x,
      box.y + box.height
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y + dy(box.height),
      box.x + box.width - dx(box.width),
      box.y + dy(box.height)
    ) +
    '</g>\n'
  )
}

function u(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      box.x + mid(box.width),
      box.y + mid(box.height)
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + box.width,
      box.y,
      box.x,
      box.y + box.height
    ) +
    '</g>\n'
  )
}

function m(box) {
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
    '</g>\n'
  )
}

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

function g(box) {
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
      box.x + box.width,
      box.y,
      box.x + box.width,
      box.y + box.height
    ) +
    '</g>\n'
  )
}

function p(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      Math.round((box.x + box.width / 2) * 100) / 100,
      Math.round((box.y + box.height / 2) * 100) / 100
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y + mid(box.height),
      box.x + box.width,
      box.y + mid(box.height)
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y,
      box.x,
      box.y + box.height
    ) +
    '</g>\n'
  )
}

function t(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      Math.round((box.x + box.width / 2) * 100) / 100,
      Math.round((box.y + box.height / 2) * 100) / 100
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y + mid(box.height),
      box.x + box.width,
      box.y + mid(box.height)
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

function k(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      Math.round((box.x + box.width / 2) * 100) / 100,
      Math.round((box.y + box.height / 2) * 100) / 100
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y + mid(box.height),
      box.x + box.width,
      box.y + mid(box.height)
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

function f(box) {
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
      box.y + mid(box.height),
      box.x + box.width,
      box.y + mid(box.height)
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y,
      box.x,
      box.y + box.height
    ) +
    '</g>\n'
  )
}

function s(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      Math.round((box.x + box.width / 2) * 100) / 100,
      Math.round((box.y + box.height / 2) * 100) / 100
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y + mid(box.height),
      box.x + box.width,
      box.y + mid(box.height)
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

function h(box) {
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
      box.y + mid(box.height),
      box.x + box.width,
      box.y + mid(box.height)
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

function w(box) {
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
      box.y + box.height,
      box.x + box.width,
      box.y + box.height
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y,
      box.x,
      box.y + box.height
    ) +
    '</g>\n'
  )
}

function l(box) {
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
      box.y + box.height,
      box.x + box.width,
      box.y + box.height
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

function y(box) {
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
      box.y + box.height,
      box.x + box.width,
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

const shapes = {
  i,
  e,
  a,
  o,
  u,
  m,
  n,
  g,
  p,
  t,
  k,
  f,
  s,
  h,
  w,
  l,
  y,
}

const boxes = {
  F: {
    x: 4,
    y: 4,
    width: 32,
    height: 32,
    transform: '',
  },
  FCT: {
    x: 12,
    y: 7,
    width: 16,
    height: 10,
    transform: '',
  },
  FCB: {
    x: 12,
    y: 23,
    width: 16,
    height: 10,
    transform: '',
  },
  FVT: {
    x: 14,
    y: 7,
    width: 12,
    height: 10,
    transform: '',
  },
  FVB: {
    x: 14,
    y: 23,
    width: 12,
    height: 10,
    transform: '',
  },
  L: {
    x: 4,
    y: 4,
    width: 16,
    height: 32,
    transform: '',
  },
  LCT: {
    x: 7,
    y: 7,
    width: 10,
    height: 10,
    transform: '',
  },
  LCB: {
    x: 7,
    y: 23,
    width: 10,
    height: 10,
    transform: '',
  },
  LVT: {
    x: 7,
    y: 7,
    width: 10,
    height: 10,
    transform: '',
  },
  LVB: {
    x: 7,
    y: 23,
    width: 10,
    height: 10,
    transform: '',
  },
  RT: {
    x: 24,
    y: 4,
    width: 12,
    height: 14,
    transform: '',
  },
  RB: {
    x: 24,
    y: 22,
    width: 12,
    height: 14,
    transform: '',
  },
  L2: {
    x: 4,
    y: 4,
    width: 14,
    height: 32,
    transform: '',
  },
  R2: {
    x: 22,
    y: 4,
    width: 14,
    height: 32,
    transform: '',
  },
  I1: {
    x: 4,
    y: 4,
    width: 14,
    height: 14,
    transform: '',
  },
  I2: {
    x: 4,
    y: 22,
    width: 14,
    height: 14,
    transform: '',
  },
  I3: {
    x: 22,
    y: 4,
    width: 14,
    height: 14,
    transform: '',
  },
  I4: {
    x: 22,
    y: 22,
    width: 14,
    height: 14,
    transform: '',
  },
  T: {
    x: 12,
    y: 4,
    width: 16,
    height: 12,
    transform: '',
  },
  B: {
    x: 4,
    y: 16,
    width: 32,
    height: 20,
    transform: '',
  },
}

function frame(vowel = null) {
  // if (!vowel) {
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">\n' +
      '<rect width="100%" height="100%" fill="{1}" />\n' +
      '<g stroke="{2}" stroke-width="{3}" stroke-linecap="round">\n{0}' +
      '</g>\n' +
      '</svg>'
    )
  // }

  // return (
  //   '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="50">\n' +
  //   '<rect width="100%" height="100%" fill="{1}" />\n' +
  //   '<g stroke="{2}" stroke-width="{3}" stroke-linecap="round">\n' +
  //   shapes[vowel]({
  //     x: 10,
  //     y: 4,
  //     width: 20,
  //     height: 10,
  //     transform: '',
  //   }) +
  //   '<g transform="translate(0 10)">\n{0}' +
  //   '</g>\n' +
  //   '</g>\n' +
  //   '</svg>'
  // )
}

const X = [
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
const Y = [
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
const V = ['i', 'e', 'a', 'o', 'u']
const C = ['m', 'n', 'g', 'f', 's', 'h', 'p', 't', 'k', 'w', 'l', 'y']
// const F = ['I', 'E', 'A', 'O', 'U']

const groups = {
  X,
  Y,
  V,
  C,
  // F,
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
  <rect width="100%" height="100%" fill="{0}" />
  <g stroke="{1}" stroke-width="{2}" stroke-linecap="round">
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
  // groups.V.forEach((vowel) => {
  //   parts.frames[vowel.toUpperCase()] = frame(vowel)
  // })

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
  for (const form of forms) {
    if (
      sequence.length === form.length &&
      sequence.every((letter, index) => {
        return groups[form[index]].some((item) => item === letter)
      })
    ) {
      return form
    }
  }
}

function draw(word) {
  if (word.length === 0) {
    return null
  }

  const sequence = word.split('')

  let frame = parts.frames.basic
  // if (groups.F.some((item) => item === word[0])) {
  //   frameVowel = sequence.shift() // modifies
  //   frame = parts.frames[frameVowel]
  // }

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

  if (form === 'pakala') {
    return parts[form].format('white', 'black', '2')
  }

  const innerPart = sequence.reduce((accumulator, letter, index) => {
    return accumulator + parts[form][index][letter]
  }, '')
  const wordSvg = frame.format(innerPart, 'white', 'black', '2')

  return wordSvg
}

// fs.writeFileSync('draw/parts.json', JSON.stringify(build(), null, 2))

// console.dir(parts, { depth: null })


fs.writeFileSync('draw/shapes/naa.svg', draw('naa'))
fs.writeFileSync('draw/shapes/kui.svg', draw('kui'))
fs.writeFileSync('draw/shapes/gisol.svg', draw('gisol'))
fs.writeFileSync('draw/shapes/whg.svg', draw('whg'))
fs.writeFileSync('draw/shapes/kf.svg', draw('kf'))
fs.writeFileSync('draw/shapes/et.svg', draw('et'))
fs.writeFileSync('draw/shapes/e.svg', draw('e'))
fs.writeFileSync('draw/shapes/a.svg', draw('a'))
fs.writeFileSync('draw/shapes/u.svg', draw('u'))
fs.writeFileSync('draw/shapes/h.svg', draw('h'))
fs.writeFileSync('draw/shapes/ai.svg', draw('ai'))
fs.writeFileSync('draw/shapes/iun.svg', draw('iun'))
fs.writeFileSync('draw/shapes/ie.svg', draw('ie'))
fs.writeFileSync('draw/shapes/eo.svg', draw('eo'))
fs.writeFileSync('draw/shapes/pakala.svg', draw('pakala'))
fs.writeFileSync('draw/shapes/en.svg', draw('en'))
fs.writeFileSync('draw/shapes/sae.svg', draw('sae'))
fs.writeFileSync('draw/shapes/solhe.svg', draw('solhe'))
fs.writeFileSync('draw/shapes/luika.svg', draw('luika'))
fs.writeFileSync('draw/shapes/lulwo.svg', draw('lulwo'))
fs.writeFileSync('draw/shapes/tif.svg', draw('tif'))


