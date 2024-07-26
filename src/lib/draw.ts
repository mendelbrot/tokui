import './stringFormat'
import glyphData from '../data/glyphData.json'

const glyphWidth = 40
const glyphHeight = 40

export function drawGlyph(
  word: string,
  phraseMode = false,
  styles = ['white', 'black', '2']
): string | null {
  if (word.length === 0) {
    return null
  }

  const pakala = phraseMode
    ? glyphData.special.Z
    : // @ts-ignore
      (glyphData.frames.svg.format(
        glyphData.special.Z,
        ...styles,
        glyphWidth,
        glyphHeight
      ) as string)

  if (word.length > 5) {
    return pakala
  }

  if (glyphData.groups.S.some((i) => i === word)) {
    // @ts-ignore
    return glyphData.special[word].format(...styles)
  }

  const sequence = word.split('')
  let form = 'pakala'

  if (sequence.length === 1) {
    if (glyphData.groups.Y.some((i) => i === sequence[0])) {
      form = 'X'
    } else {
      return pakala
    }
  } else {
    if (
      !sequence.every((letter) => glyphData.groups.Y.some((i) => i === letter))
    ) {
      return pakala
    }

    if (
      glyphData.groups.VN.some((i) => i === sequence[0]) ||
      sequence.every((letter) => glyphData.groups.CN.some((i) => i === letter))
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
    // @ts-ignore
    return accumulator + glyphData.letters[letter][glyphData.forms[form][index]]
  }, '')

  if (phraseMode) {
    return inner
  } else {
    // @ts-ignore
    return glyphData.frames.svg.format(
      inner,
      ...styles,
      glyphWidth,
      glyphHeight
    )
  }
}

function draw(
  phrase: string,
  lineWrap = 0,
  styles = ['white', 'black', '2']
): string {
  phrase = phrase.replace(/\r\n/g, '\n')
  lineWrap = lineWrap - 1 // indices start at zero so the lineWrap is less than the intuitive line wrap

  let x = 0
  let y = 0
  let maxX = Math.max(lineWrap, 0)
  let word = ''
  let ponaMode = false
  let glyphs = ''

  function addGlyph() {
    if (word.length > 0) {
      // @ts-ignore
      glyphs += glyphData.frames.phraseMode.format(
        x * glyphWidth,
        y * glyphHeight,
        drawGlyph(word, true)
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

  // @ts-ignore
  return glyphData.frames.svg.format(
    glyphs,
    ...styles,
    (maxX + 1) * glyphWidth,
    (y + 1) * glyphHeight
  )
}

export default draw
