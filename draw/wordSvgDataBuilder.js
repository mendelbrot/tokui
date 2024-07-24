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
      box.x + box.width,
      box.y,
      box.x,
      box.y + mid(box.height)
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y + mid(box.height),
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
      box.x,
      box.y,
      box.x + box.width,
      box.y + mid(box.height)
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + box.width,
      box.y + +mid(box.height),
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

function n0(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      Math.round((box.x + box.width / 2) * 100) / 100,
      Math.round((box.y + box.height / 2) * 100) / 100
    ) +
    '<circle r="{0}" cx="{1}" cy="{2}" fill="none" />\n'.format(
      Math.min(mid(box.width), mid(box.height)),
      box.x + mid(box.width),
      box.y + mid(box.height)
    ) +
    '</g>\n'
  )
}

function n1(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      Math.round((box.x + box.width / 2) * 100) / 100,
      Math.round((box.y + box.height / 2) * 100) / 100
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + mid(box.width),
      box.y,
      box.x + mid(box.width),
      box.y + box.height
    ) +
    '</g>\n'
  )
}

function n2(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      Math.round((box.x + box.width / 2) * 100) / 100,
      Math.round((box.y + box.height / 2) * 100) / 100
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

function n3(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      Math.round((box.x + box.width / 2) * 100) / 100,
      Math.round((box.y + box.height / 2) * 100) / 100
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + mid(box.width),
      box.y,
      box.x,
      box.y + box.height
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + mid(box.width),
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
    '</g>\n'
  )
}

function n4(box) {
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
      box.x + mid(box.width),
      box.y,
      box.x + mid(box.width),
      box.y + box.height
    ) +
    '</g>\n'
  )
}

function n5(box) {
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
      box.x + mid(box.width),
      box.y,
      box.x + mid(box.width),
      box.y + box.height
    ) +
    '</g>\n'
  )
}

const letters = {
  i, // vowels
  e,
  a,
  o,
  u,
  m, // consonants
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
  0: n0, // numerals
  1: n1,
  2: n2,
  3: n3,
  4: n4,
  5: n5,
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

const V = ['i', 'e', 'a', 'o', 'u']
const C = ['m', 'n', 'g', 'f', 's', 'h', 'p', 't', 'k', 'w', 'l', 'y']

const S = ['Z', '_', '0', '1', '2', '3', '4', '5']
const Y = V.concat(C)
const X = V.concat(C, S)

const groups = {
  V: ['i', 'e', 'a', 'o', 'u'],
  C: ['m', 'n', 'g', 'f', 's', 'h', 'p', 't', 'k', 'w', 'l', 'y'],
  N: ['0', '1', '2', '3', '4', '5'],
  S: ['Z', '_'],
}

groups['X'] = groups.V.concat(groups.C, groups.N, groups.S)
groups['Y'] = groups.V.concat(groups.C, groups.N)
groups['CN'] = groups.C.concat(groups.N)
groups['VN'] = groups.V.concat(groups.N)

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
  let parts = { special, frames, forms, groups, letters: {} }

  groups.Y.forEach((letter) => {
    parts.letters[letter] = {}
    Object.entries(boxes).forEach(([boxLabel, box]) => {
      parts.letters[letter][boxLabel] = letters[letter](box)
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

  if (parts.groups.S.some((i) => i === word)) {
    return parts.special[word].format(...styles)
  }

  const sequence = word.split('')
  let form = 'pakala'

  if (sequence.length === 1) {
    if (parts.groups.Y.some((i) => i === sequence[0])) {
      form = 'X'
    } else {
      return pakala
    }
  } else {
    if (!sequence.every((letter) => parts.groups.Y.some((i) => i === letter))) {
      return pakala
    }

    if (
      parts.groups.VN.some((i) => i === sequence[0]) ||
      sequence.every((letter) => parts.groups.CN.some((i) => i === letter))
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
    return accumulator + parts.letters[letter][parts.forms[form][index]]
  }, '')

  if (phraseMode) {
    return inner
  } else {
    return parts.frames.svg.format(inner, ...styles, glyphWidth, glyphHeight)
  }
}

function drawPhrase(phrase, lineWrap = 0, styles = ['white', 'black', '2']) {
  phrase = phrase.replace(/\r\n/g, '\n')
  lineWrap = lineWrap - 1 // indices start at zero so the lineWrap is less than the intuitive linewrap

  let x = 0
  let y = 0
  let maxX = Math.max(lineWrap, 1)
  let word = ''
  let ponaMode = false
  let glyphs = ''

  function addGlyph() {
    if (word.length > 0) {
      glyphs += parts.frames.phraseMode.format(
        x * glyphWidth,
        y * glyphHeight,
        draw(word, (phraseMode = true))
      )

      if (x > maxX) {
        maxX = x
      }

      word = ''
      x += 1

      if (lineWrap !== -1 && x > lineWrap) {
        x = 0
        y += 1
      }
    }
  }

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === ' ') {
      addGlyph()
      ponaMode = false

      continue
    }

    if (phrase[i] === '\n') {
      addGlyph()
      x = 0
      y += 1
      ponaMode = false

      continue
    }

    if (phrase[i] === '#') {
      addGlyph()
      ponaMode = true

      continue
    }

    if (ponaMode === true) {
      word = phrase[i]
      addGlyph()

      continue
    }

    word += phrase[i]
  }

  addGlyph()

  return parts.frames.svg.format(
    glyphs,
    ...styles,
    (maxX + 1) * glyphWidth,
    (y + 1) * glyphHeight
  )
}

// fs.writeFileSync('draw/parts.json', JSON.stringify(build(), null, 2))

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

fs.writeFileSync(
  'draw/shapes/phrase3.svg',
  drawPhrase(
    'nau li kisot ma kafi en #moku e panet wou \n o solhe a luika aep #hulwo tif iun ma yelo \n u huleg sem li hasa yi temo los maipa ta'
  )
)

fs.writeFileSync(
  'draw/shapes/phrase4.svg',
  drawPhrase(
    'nau li kisot ma kafi en #moku e panet wou \n o solhe a luika aep #hulwo tif iun ma yelo \n u huleg sem li hasa yi temo los maipa ta',
    (lineWrap = 8)
  )
)

fs.writeFileSync(
  'draw/shapes/phrase5.svg',
  drawPhrase(
    'nau _ li _ _ ktl pyhw vrum kisot ma kafi ennnn #moku eq panxet wou \n o solhe a luika aep #hulwo tif iun ma yelo \n u huleg sem li hasa yi temo los maipa ta',
    (lineWrap = 8)
  )
)

fs.writeFileSync('draw/shapes/special.svg', drawPhrase('#01234567'))

fs.writeFileSync('draw/shapes/numbers.svg', drawPhrase('20 354 _ 432 120 _ 310 235 100 000 \n 1 000 000 000'))

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
