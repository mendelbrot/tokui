import './stringFormat'
import glyphData from '../data/glyphData.json'

export const glyphBaseDimensions = [40, 40]

export type Settings = {
  fill?: string
  stroke?: string
  strokeWidth?: number
  scale?: number
  lineWrap?: number | null
}

export type HardSettings = {
  fill: string
  stroke: string
  strokeWidth: number
  scale: number
  lineWrap: number | null
}

export const defaultSettings = {
  fill: 'none',
  stroke: 'black',
  strokeWidth: 2,
  scale: 1.5,
  lineWrap: 8,
}

export function drawGlyph(word: string): string | null {
  if (word.length === 0) {
    return null
  }

  const pakala = glyphData.special.Z

  if (word.length > 5) {
    return pakala
  }

  if (glyphData.groups.S.some((i) => i === word)) {
    // @ts-ignore
    return glyphData.special[word].format(
      defaultSettings.fill,
      defaultSettings.stroke,
      defaultSettings.strokeWidth
    )
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

  return inner
}

function draw(
  phrase: string,
  settings: Settings = {}
): { glyphSvg: string; cursorMap: number[][] } {
  const hardSettings: HardSettings = { ...defaultSettings, ...settings }
  phrase = phrase.replace(/\r\n/g, '\n')
  const lineWrap = hardSettings.lineWrap ? hardSettings.lineWrap - 1 : null // indices start at zero so the lineWrap is less than the intuitive line wrap

  let x = 0
  let y = 0
  let maxX = lineWrap ? Math.max(lineWrap, 0) : 0
  let word = ''
  let ponaMode = false
  let glyphs = ''

  let cursorMap: number[][] = [[0]]

  function addGlyph(i: number) {
    if (word.length > 0) {
      // @ts-ignore
      glyphs += glyphData.frames.phraseMode.format(
        x * glyphBaseDimensions[0],
        y * glyphBaseDimensions[1],
        drawGlyph(word)
      )
      if (cursorMap[y].length === 1 && phrase[cursorMap[y][0]] === '\n') {
        cursorMap[y][0] = i
      } else {
        cursorMap[y].push(i)
      }

      if (x > maxX) {
        maxX = x
      }

      word = ''
      x += 1

      if (lineWrap && x > lineWrap) {
        cursorMap.push([])
        x = 0
        y += 1
      }
    }
  }

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === ' ') {
      addGlyph(i)
      ponaMode = false

      continue
    }

    if (phrase[i] === '\n') {
      addGlyph(i)
      cursorMap.push([i])
      x = 0
      y += 1
      ponaMode = false

      continue
    }

    if (phrase[i] === '#') {
      addGlyph(i)
      ponaMode = true

      continue
    }

    if (ponaMode === true) {
      word = phrase[i]
      addGlyph(i)

      continue
    }

    word += phrase[i]
  }

  addGlyph(phrase.length)

  return {
    // @ts-ignore
    glyphSvg: glyphData.frames.svg.format(
      glyphs,
      hardSettings.fill,
      hardSettings.stroke,
      hardSettings.strokeWidth,
      (maxX + 1) * hardSettings.scale * glyphBaseDimensions[0],
      (y + 1) * hardSettings.scale * glyphBaseDimensions[1],
      hardSettings.scale
    ),
    cursorMap,
  }
}

export default draw
