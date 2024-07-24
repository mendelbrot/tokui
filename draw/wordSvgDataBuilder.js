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
      box.x,
      box.y + box.height
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y + box.height,
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
      box.x,
      box.y + box.height
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y + box.height,
      box.x + box.width,
      box.y + box.height
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y + mid(box.height),
      box.x + box.width,
      box.y + mid(box.height)
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
      box.y + box.height,
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + box.width,
      box.y,
      box.x + mid(box.width),
      box.y + box.height,
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
      box.x + box.width,
      box.y + box.height
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y + mid(box.height),
      box.x + box.width,
      box.y + mid(box.height)
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
      box.x + box.width,
      box.y + box.height
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y + box.height,
      box.x + box.width,
      box.y + box.height
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y + mid(box.height),
      box.x + box.width,
      box.y + mid(box.height)
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
      box.x + box.width,
      box.y,
      box.x + box.width,
      box.y + box.height
    ) +
    '</g>\n'
  )
}

const letters = {
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

const pakala = `
<line x1="4" y1="6" x2="36" y2="4" />
<line x1="4" y1="36" x2="36" y2="36" />
<line x1="6" y1="6" x2="4" y2="36" />
<line x1="36" y1="4" x2="34" y2="32" />
<line x1="28" y1="6" x2="16" y2="19" />
<line x1="16" y1="19" x2="27" y2="21" />
<line x1="27" y1="21" x2="14" y2="36" />`

const special = {
  Z: pakala,
  _: '', // space
}

const frames = {
  svg: `<svg xmlns="http://www.w3.org/2000/svg" width="{4}" height="{5}">
<rect width="100%" height="100%" fill="{1}" />
<g stroke="{2}" stroke-width="{3}" stroke-linecap="round">
{0}
</g>
</svg>`,
  phraseMode: `<g transform="translate({0} {1})">
{2}
</g>`,
}

const boxes = {
  F: {
    x: 4,
    y: 4,
    width: 32,
    height: 32,
    transform: '',
  },
  FT: {
    x: 12,
    y: 7,
    width: 16,
    height: 10,
    transform: '',
  },
  FB: {
    x: 12,
    y: 23,
    width: 16,
    height: 10,
    transform: '',
  },
  LF: {
    x: 4,
    y: 4,
    width: 16,
    height: 32,
    transform: '',
  },
  LFT: {
    x: 7,
    y: 7,
    width: 10,
    height: 10,
    transform: '',
  },
  LFB: {
    x: 7,
    y: 23,
    width: 10,
    height: 10,
    transform: '',
  },
  RFT: {
    x: 24,
    y: 4,
    width: 12,
    height: 14,
    transform: '',
  },
  RFB: {
    x: 24,
    y: 22,
    width: 12,
    height: 14,
    transform: '',
  },
  L: {
    x: 4,
    y: 4,
    width: 14,
    height: 32,
    transform: '',
  },
  R: {
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
    x: 4,
    y: 4,
    width: 32,
    height: 14,
    transform: '',
  },
  B: {
    x: 4,
    y: 22,
    width: 32,
    height: 14,
    transform: '',
  },
}

const V = ['i', 'e', 'a', 'o', 'u']
const C = ['m', 'n', 'g', 'f', 's', 'h', 'p', 't', 'k', 'w', 'l', 'y']
const S = ['Z']
const Y = V.concat(C)
const X = V.concat(C, S)

const groups = {
  X,
  Y,
  V,
  C,
  S,
}

const forms = {
  X: ['F'],
  A2: ['F', 'FT'],
  A3: ['F', 'FT', 'FB'],
  A4: ['LF', 'LFT', 'LFB', 'RFT'],
  A5: ['LF', 'LFT', 'LFB', 'RFT', 'RFB'],
  B2: ['T', 'B'],
  B3: ['L', 'I3', 'I4'],
  B4: ['I1', 'I2', 'I3', 'I4'],
}

function build() {
  let parts = { special, frames }

  Object.entries(boxes).forEach(([boxLabel, box]) => {
    parts[boxLabel] = {}
    groups.Y.forEach((letter) => {
      parts[boxLabel][letter] = letters[letter](box)
    })
  })

  return parts
}

const parts = JSON.parse(fs.readFileSync('draw/parts.json', 'utf8'))
const glyphWidth = 40
const glyphHeight = 40

function draw(word, phraseMode = false, styles = ['white', 'black', '2']) {
  if (word.length === 0) {
    return null
  }

  const pakala = phraseMode
    ? parts.special.Z
    : parts.frames.svg.format(
        parts.special.Z,
        ...styles,
        glyphWidth,
        glyphHeight
      )

  if (word.length > 5) {
    return pakala
  }

  if (groups.S.some((i) => i === word)) {
    return parts.special[word].format(...styles)
  }

  const sequence = word.split('')
  let form = 'pakala'

  if (sequence.length === 1) {
    if (Y.some((i) => i === sequence[0])) {
      form = 'X'
    } else {
      return pakala
    }
  } else {
    if (!sequence.every((letter) => Y.some((i) => i === letter))) {
      return pakala
    }

    if (
      V.some((i) => i === sequence[0]) ||
      sequence.every((letter) => C.some((i) => i === letter))
    ) {
      if (sequence.length < 5) {
        form = 'B' + sequence.length
      } else {
        return pakala
      }
    } else {
      form = 'A' + sequence.length
    }
  }

  if (form === 'pakala') {
    return pakala
  }

  const inner = sequence.reduce((accumulator, letter, index) => {
    return accumulator + parts[forms[form][index]][letter]
  }, '')

  if (phraseMode) {
    return inner
  } else {
    return parts.frames.svg.format(inner, ...styles, glyphWidth, glyphHeight)
  }
}

function drawPhrase(phrase, lineWrap = 0, styles = ['white', 'black', '2']) {
  phrase = phrase.replace(/\r\n/g, '\n')

  let x = 0
  let y = 0
  let maxX = lineWrap
  let word = ''
  let ponaMode = false
  let glyphs = ''

  for (let i = 0; i < phrase.length; i++) {

    if (x > maxX) {
      maxX = x
    }

    if (phrase[i] === '\n') {
      if (word.length > 0) {
        glyphs += parts.frames.phraseMode.format(
          x * glyphWidth,
          y * glyphHeight,
          draw(word, (phraseMode = true))
        )
      }

      x = 0
      y += 1
      word = ''
      ponaMode = false

      continue
    }

    if (ponaMode == true) {
      if (phrase[i] === ' ') {
        ponaMode === false
      } else {
        if (lineWrap !== 0 && x >= lineWrap) {
          x = 0
          y += 1
        }

        glyphs += parts.frames.phraseMode.format(
          x * glyphWidth,
          y * glyphHeight,
          draw(phrase[i], (phraseMode = true))
        )

        x += 1
      }

      continue
    }

    if (
      i < phrase.length - 1 &&
      phrase[i + 1] === '#' &&
      (phrase[i] === ' ' ||
        i === 0 ||
        (i > 0 && phrase[i - 1] === '\n'))
    ) {
      if (word.length > 0) {
        if (lineWrap !== 0 && x >= lineWrap) {
          x = 0
          y += 1
        }

        glyphs += parts.frames.phraseMode.format(
          x * glyphWidth,
          y * glyphHeight,
          draw(word, (phraseMode = true))
        )

        x += 1
        word = ''
      }

      ponaMode = true

      continue
    }

    if (phrase[i] === ' ' && word.length > 0) {
      if (lineWrap !== 0 && x >= lineWrap) {
        x = 0
        y += 1
      }

      glyphs += parts.frames.phraseMode.format(
        x * glyphWidth,
        y * glyphHeight,
        draw(word, (phraseMode = true))
      )

      x += 1
      word = ''

      continue
    }

    word += phrase[i]
  }

  return parts.frames.svg.format(
    glyphs,
    ...styles,
    (maxX + 1) * glyphWidth,
    (y + 1) * glyphHeight
  )
}

fs.writeFileSync('draw/parts.json', JSON.stringify(build(), null, 2))

fs.writeFileSync(
  'draw/shapes/phrase1.svg',
  drawPhrase('nau li kisot ma kafi en moku e panet wou')
)
fs.writeFileSync(
  'draw/shapes/phrase2.svg',
  drawPhrase(
    'nau li kisot ma kafi en moku e panet wou \n o solhe a luika aep hulwo tif iun ma yelo \n u huleg sem li hasa yi temo los maipa ta'
  )
)

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
fs.writeFileSync('draw/shapes/v.svg', draw('v'))
fs.writeFileSync('draw/shapes/Z.svg', draw('Z'))
