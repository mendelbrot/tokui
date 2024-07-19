/*
This is a tool for building the svg elements that represent elements in tokui characters.
This code is not run within the application; it is used to build json and svg data that the app uses.

Purpose:
Compare partsCoordinates.js with parts.json. Which file would you prefer to manually edit or enter coordinate numbers into?

partsCoordinates.js => parts.json

the word forms are:
X
CV
CVX
CVXX
CVXXX
VV
VVX
VVXX
CC
CCC
CCCC

where X = consonant or vowel, C = consonant, V = vowel

the forms data below is:

forms.form[position].letter

at the letter position, there is an array of 4-arrays.  each 4-array is coordinates for an svg line.
*/

const pc = require('./partsCoordinates')
require('./stringFormat') // adds the format method to strings
const fs = require('fs')

const forms = {
  X: [{ ...pc.C_surrounding, ...pc.V_solo }],
  CV: [pc.C_surrounding, pc.V_upper],
  CVX: [pc.C_surrounding, pc.V_upper, { ...pc.C_lower, ...pc.V_lower }],
  CVXX: [
    pc.C_left_surrounding,
    pc.V_left_upper,
    { ...pc.C_lower, ...pc.V_lower },
    pc.X_right_top,
  ],
  CVXXX: [
    pc.C_left_surrounding,
    pc.V_left_upper,
    { ...pc.C_left_lower, ...pc.V_left_lower },
    pc.X_right_top,
    pc.X_right_bottom,
  ],
  VV: [pc.V_upper, pc.V_lower],
  VVX: [pc.V_left_upper, pc.V_left_lower, pc.X_right_top],
  VVXX: [pc.V_left_upper, pc.V_left_lower, pc.X_right_top, pc.X_right_bottom],
  CC: [pc.C_alt_left, pc.C_alt_right],
  CCC: [pc.C_alt_left, pc.C_alt_right_top, pc.C_alt_right_bottom],
  CCCC: [
    pc.C_alt_left_top,
    pc.C_alt_left_bottom,
    pc.C_alt_right_top,
    pc.C_alt_right_bottom,
  ],
}

const svgLine = '<line x1="{0}" y1="{1}" x2="{2}" y2="{3}" />\n'

// rebuild the forms structure but replace the coordinates with svg blocks
function buildSvgParts() {
  let parts = {}
  Object.entries(forms).forEach(([formName, positionsInForm]) => {
    parts[formName] = positionsInForm.map((position) => {
      svgBlocksForLetters = {}
      Object.entries(position).forEach(([letter, coordinates]) => {
        svgBlocksForLetters[letter] = coordinates.reduce(
          (svgBlock, lineCoordinates) =>
            svgBlock + svgLine.format(...lineCoordinates),
          ''
        )
      })
      return svgBlocksForLetters
    })
  })

  return parts
}

fs.writeFileSync('draw/parts1.json', JSON.stringify(buildSvgParts(), null, 2))
