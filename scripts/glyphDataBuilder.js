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

function quart(z) {
  return Math.round(z * 25) / 100
}

function third(z) {
  return Math.round(z * 33.3333) / 100
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
      box.y + box.height,
      box.x + mid(box.width),
      box.y
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + box.width,
      box.y + box.height,
      box.x + mid(box.width),
      box.y
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
      box.y + box.height,
      box.x + mid(box.width),
      box.y
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + box.width,
      box.y + box.height,
      box.x + mid(box.width),
      box.y
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + mid(box.width) - third(box.width),
      box.y + box.height - third(box.height),
      box.x + mid(box.width) + third(box.width),
      box.y + box.height - third(box.height)
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

function o(box) {
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
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + mid(box.width) - third(box.width),
      box.y + third(box.height),
      box.x + mid(box.width) + third(box.width),
      box.y + third(box.height)
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
<g stroke="{2}" stroke-width="{3}" transform="scale({6})" stroke-linecap="round">
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
  RF: {
    x: 20,
    y: 4,
    width: 16,
    height: 32,
    transform: '',
  },
  RFT: {
    x: 23,
    y: 7,
    width: 10,
    height: 10,
    transform: '',
  },
  RFB: {
    x: 23,
    y: 23,
    width: 10,
    height: 10,
    transform: '',
  },
  LFT: {
    x: 4,
    y: 4,
    width: 12,
    height: 14,
    transform: '',
  },
  LFB: {
    x: 4,
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

const six = `
<path
fill="none"
d="M 10.748202,32.145394 A 14.763596,14.937707 0 0 1 4.5040524,19.945719 14.763596,14.937707 0 0 1 12.907924,6.4650153 M 10.568905,8.0211156 A 13.563954,7.7479733 0 0 1 21.931994,4.5040524 13.563954,7.7479733 0 0 1 33.303252,8.0282813 M 35.495948,27.747973 A 13.563954,7.7479733 0 0 1 21.931994,35.495948 13.563954,7.7479733 0 0 1 8.368041,27.747973 13.563954,7.7479733 0 0 1 21.931994,20 13.563954,7.7479733 0 0 1 35.495948,27.747973 Z"
/>`

const sixCubed = `
<path
fill="none"
d="M 36,20 C 36,11.163453 28.836547,4 20,4 11.163453,4 4,11.163453 4,20 v 16"
/>
<path
fill="none"
d="m 28,20 a 8,8 0 0 0 -8,8 8,8 0 0 0 8,8 8,8 0 0 0 8,-8 v -8 z" 
/>`

function dashdot(box) {
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
    '</g>\n'
  )
}

function colon(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      Math.round((box.x + box.width / 2) * 100) / 100,
      Math.round((box.y + box.height / 2) * 100) / 100
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y,
      box.x + mid(box.width),
      box.y + mid(box.height)
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + mid(box.width),
      box.y + mid(box.height),
      box.x,
      box.y + box.height
    ) +
    '</g>\n'
  )
}

function plus(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      Math.round((box.x + box.width / 2) * 100) / 100,
      Math.round((box.y + box.height / 2) * 100) / 100
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y + mid(box.height),
      box.x + mid(box.width),
      box.y + box.height
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + mid(box.width),
      box.y + box.height,
      box.x + box.width,
      box.y + mid(box.height)
    ) +
    '</g>\n'
  )
}

function minus(box) {
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
      box.y + box.height
    ) +
    '</g>\n'
  )
}

function times(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      Math.round((box.x + box.width / 2) * 100) / 100,
      Math.round((box.y + box.height / 2) * 100) / 100
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y + box.height,
      box.x + mid(box.width),
      box.y + mid(box.height)
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x + mid(box.width),
      box.y + mid(box.height),
      box.x + box.width,
      box.y + box.height
    ) +
    '</g>\n'
  )
}

function divide(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      Math.round((box.x + box.width / 2) * 100) / 100,
      Math.round((box.y + box.height / 2) * 100) / 100
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

function equal(box) {
  return (
    '<g transform="{0}" transform-origin="{1} {2}">\n'.format(
      box.transform,
      Math.round((box.x + box.width / 2) * 100) / 100,
      Math.round((box.y + box.height / 2) * 100) / 100
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y + third(box.height),
      box.x + box.width,
      box.y + third(box.height)
    ) +
    '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'.format(
      box.x,
      box.y + box.height - third(box.height),
      box.x + box.width,
      box.y + box.height - third(box.height)
    ) +
    '</g>\n'
  )
}

const special = {
  Z: pakala,
  _: '', // space
  '.': dashdot(boxes.F),
  ':': colon(boxes.F),
  '+': plus(boxes.F),
  '-': minus(boxes.F),
  '*': times(boxes.F),
  '/': divide(boxes.F),
  '=': equal(boxes.F),
  6: six,
  7: sixCubed,
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
  S: Object.keys(special),
}

groups['X'] = groups.V.concat(groups.C, groups.N, groups.S)
groups['Y'] = groups.V.concat(groups.C, groups.N)
groups['CN'] = groups.C.concat(groups.N)
groups['VN'] = groups.V.concat(groups.N)

const forms = {
  X: ['F'],
  A2: ['F', 'FT'],
  A3: ['F', 'FT', 'FB'],
  A4: ['I1', 'I2', 'I3', 'I4'],
  A5: ['LFT', 'LFB', 'RF', 'RFT', 'RFB'],
  B2: ['T', 'B'],
  B3: ['L', 'I3', 'I4'],
  B4: ['I1', 'I3', 'I2', 'I4'],
  C3: ['T', 'I2', 'I4']
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

fs.writeFileSync('./src/data/glyphData.json', JSON.stringify(build(), null, 2))
