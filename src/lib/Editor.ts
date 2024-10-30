import './stringFormat'
import glyphData from '../data/glyphData.json'
import {
  CursorPosition,
  ProjectionCallback,
  SoftSettingsValue,
  SettingsValue,
  WritingRep,
  EditorModelProjection,
  EditorConstructorParams,
} from './EditorTypes'

export const editorParameters = {
  glyphBaseSize: 40,
  maxScale: 5,
  minScale: 0.5,
  scaleIncrement: 0.5,
}

export const defaultSettings: SettingsValue = {
  fill: 'none',
  stroke: 'black',
  strokeWidth: 2,
  scale: 1.5,
  lineWrap: 8,
}

export const initial = {
  cell: { index: 0, word: '_', ponaMode: false, lineBreak: false, skip: true },
  writingValue: '_',
  writingSvg:
    '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"></svg>',
}

export const initialEditorProjection: EditorModelProjection = {
  settingsValue: defaultSettings,
  cursorPosition: [0, 0],
  writingValue: initial.writingValue,
  writingRep: [[initial.cell]],
  writingSvg: initial.writingSvg,
}

class Editor {
  public projectionCallback: ProjectionCallback
  private _settingsValue: SettingsValue
  private _writingValue: string
  private _writingRep: WritingRep
  private _writingSvg: string
  private _cursorPosition: CursorPosition

  get settingsValue() {
    return this._settingsValue
  }
  get writingValue() {
    return this._writingValue
  }
  get writingRep() {
    return this._writingRep
  }
  get writingSvg() {
    return this._writingSvg
  }
  get cursorPosition() {
    return this._cursorPosition
  }

  constructor({
    projectionCallback = () => {},
    writing = '',
    cursor = [0, 0],
    settings = {},
  }: EditorConstructorParams = {}) {
    this.projectionCallback = projectionCallback
    this._settingsValue = { ...defaultSettings, ...settings }
    this._cursorPosition = cursor
    this._writingValue = writing
    this._writingRep = initialEditorProjection.writingRep
    this._writingSvg = initialEditorProjection.writingSvg

    this._parse()
    this._draw()
  }

  private static _static_parse(
    writingValue: string,
    settingsValue: SettingsValue
  ): WritingRep {
    const writingRep: WritingRep = [[]]
    let word = ''

    const perception = {
      isSpace: (i: number) => writingValue[i] === ' ',
      isLineBreak: (i: number) => writingValue[i] === '\n',
      isHash: (i: number) => writingValue[i] === '#',
      isPonaMode: (i: number) =>
        writingValue[i] !== ' ' &&
        writingValue[i] !== '\n' &&
        (writingRep.at(-1)?.at(-1)?.ponaMode === true ||
          writingValue[i - 1] === '#' ||
          (writingRep.at(-1)?.length === 0 &&
            writingRep.at(-2)?.at(-1)?.ponaMode === true)),
      isEmptyWord: () => word === '',
      isAfterLineBreak: () => writingRep.at(-1)?.at(-1)?.lineBreak === true,
      isAfterLineWrap: () =>
        settingsValue.lineWrap !== null &&
        writingRep.at(-1)?.length === settingsValue.lineWrap,
      isEndOfWriting: (i: number) => i === writingValue.length,
    }

    for (let i = 0; i <= writingValue.length; i += 1) {
      // including the number after the last array index in the loop: i <= writingValue.length
      if (
        !perception.isSpace(i) &&
        !perception.isLineBreak(i) &&
        !perception.isHash(i) &&
        !perception.isPonaMode(i) &&
        !perception.isEndOfWriting(i)
      ) {
        word += writingValue[i]
        continue
      }

      if (perception.isHash(i)) {
        continue
      }

      if (perception.isPonaMode(i) && !perception.isEndOfWriting(i)) {
        word = writingValue[i]
      }

      if (perception.isAfterLineBreak() || perception.isAfterLineWrap()) {
        writingRep.push([])
      }

      writingRep.at(-1)?.push({
        index: i,
        word: perception.isEmptyWord() ? '_' : word,
        ponaMode: perception.isPonaMode(i),
        lineBreak: perception.isLineBreak(i),
        skip: perception.isEmptyWord(),
      })

      word = ''
    }
    return writingRep
  }

  private _parse() {
    this._writingRep = Editor._static_parse(
      this._writingValue,
      this._settingsValue
    )
  }

  private static _static_drawGlyph(
    word: string,
    settingsValue: SettingsValue
  ): string | null {
    if (word.length === 0) {
      return null
    }

    const pakala = glyphData.special.Z

    if (glyphData.groups.S.some((i) => i === word)) {
      // @ts-ignore
      return glyphData.special[word].format(
        settingsValue.fill,
        settingsValue.stroke,
        settingsValue.strokeWidth
      )
    }

    const sequence = word.split('')

    if (!sequence.every(letter => glyphData.groups.Y.some((i) => i === letter))) {
      return pakala
    }

    let form = 'pakala'

    if (sequence.length === 1) {
      form = 'X'
    } else if (sequence.length === 2) {
      if (glyphData.groups.V.some((i) => i === sequence[0])) {
        form = 'B2'
      } else if (glyphData.groups.V.some((i) => i === sequence[1])) {
        form = 'A2'
      } else {
        form = 'R2'
      }
    } else if (sequence.length === 3) {
      if (
        glyphData.groups.CN.some((i) => i === sequence[0]) &&
        glyphData.groups.CN.some((i) => i === sequence[1])
      ) {
        form = 'C3'
      } else if (glyphData.groups.C.some((i) => i === sequence[0])) {
        form = 'A3'
      } else {
        form = 'B3'
      }
    } else if (sequence.length === 4) {
      form = 'B4'
    } else if (sequence.length === 5) {
      if (glyphData.groups.C.some((i) => i === sequence[2])) {
        form = 'A5'
      }
    }

    if (form === 'pakala') {
      return pakala
    }

    const inner = sequence.reduce((accumulator, letter, index) => {
      return (
        // @ts-ignore
        accumulator + glyphData.letters[letter][glyphData.forms[form][index]]
      )
    }, '')

    return inner
  }

  private static _static_draw(
    writingRep: WritingRep,
    settingsValue: SettingsValue
  ): string {
    let glyphs = ''

    for (let y = 0; y < writingRep.length; y += 1) {
      for (let x = 0; x < writingRep[y].length; x += 1) {
        let word = writingRep[y][x].word
        // @ts-ignore
        glyphs += glyphData.frames.phraseMode.format(
          x * editorParameters.glyphBaseSize,
          y * editorParameters.glyphBaseSize,
          Editor._static_drawGlyph(word, settingsValue)
        )
      }
    }

    const Xmax = writingRep.reduce(
      (max, item) => Math.max(max, item.length),
      -Infinity
    )

    const Ymax = writingRep.length

    // @ts-ignore
    const writingSvg = glyphData.frames.svg.format(
      glyphs,
      settingsValue.fill,
      settingsValue.stroke,
      settingsValue.strokeWidth,
      Xmax * settingsValue.scale * editorParameters.glyphBaseSize,
      Ymax * settingsValue.scale * editorParameters.glyphBaseSize,
      settingsValue.scale
    )

    return writingSvg
  }

  private _draw() {
    this._writingSvg = Editor._static_draw(
      this._writingRep,
      this._settingsValue
    )
  }

  public project() {
    console.clear()
    console.log(this._writingValue)
    console.table(this.writingRep)

    this.projectionCallback({
      settingsValue: this._settingsValue,
      cursorPosition: this._cursorPosition,
      writingValue: this._writingValue,
      writingRep: this._writingRep,
      writingSvg: this._writingSvg,
    })

    return this
  }

  public static draw(writing: string, settings: SoftSettingsValue = {}) {
    const settingsValue = { ...defaultSettings, ...settings }
    return Editor._static_draw(
      Editor._static_parse(writing, settingsValue),
      settingsValue
    )
  }

  public settings = {
    set: (settings: SoftSettingsValue) => {
      this._settingsValue = { ...defaultSettings, ...settings }
      this._parse()
      this._draw()
      return this
    },
    toggleLineWrap: () => {
      if (this._settingsValue.lineWrap) {
        this._settingsValue.lineWrap = null
      } else {
        this._settingsValue.lineWrap = defaultSettings.lineWrap
      }
      this._parse()
      this._draw()
      return this
    },
    incrementLineWrap: () => {
      if (this._settingsValue.lineWrap) {
        this._settingsValue.lineWrap += 1
        this._parse()
        this._draw()
      }
      return this
    },
    decrementLineWrap: () => {
      if (this._settingsValue.lineWrap) {
        this._settingsValue.lineWrap -= 1
        this._parse()
        this._draw()
      }
      return this
    },
    incrementScale: () => {
      if (this._settingsValue.scale < editorParameters.maxScale) {
        this._settingsValue.scale += editorParameters.scaleIncrement
        this._draw()
      }
      return this
    },
    decrementScale: () => {
      if (this._settingsValue.scale > editorParameters.minScale) {
        this._settingsValue.scale -= editorParameters.scaleIncrement
        this._draw()
      }
      return this
    },
  }

  public cursor = {
    moveTo: (position: CursorPosition) => {
      if (
        position[1] < this._writingRep.length &&
        position[0] < this._writingRep[position[1]].length
      ) {
        this._cursorPosition = position
      }
      return this
    },
    up: () => {
      if (this._cursorPosition[1] > 0) {
        this._cursorPosition = [
          Math.min(
            this._cursorPosition[0],
            this._writingRep[this._cursorPosition[1] - 1].length - 1
          ),
          this._cursorPosition[1] - 1,
        ]
      }
      return this
    },
    down: () => {
      if (this._cursorPosition[1] < this._writingRep.length - 1) {
        this._cursorPosition = [
          Math.min(
            this._cursorPosition[0],
            this._writingRep[this._cursorPosition[1] + 1].length - 1
          ),
          this._cursorPosition[1] + 1,
        ]
      }
      return this
    },
    left: () => {
      if (this._cursorPosition[0] > 0) {
        this._cursorPosition = [
          this._cursorPosition[0] - 1,
          this._cursorPosition[1],
        ]
      } else {
        if (this._cursorPosition[1] > 0) {
          this._cursorPosition = [
            this._writingRep[this._cursorPosition[1] - 1].length - 1,
            this._cursorPosition[1] - 1,
          ]
        }
      }
      return this
    },
    right: () => {
      if (
        this._cursorPosition[0] <
        this._writingRep[this._cursorPosition[1]].length - 1
      ) {
        this._cursorPosition = [
          this._cursorPosition[0] + 1,
          this._cursorPosition[1],
        ]
      } else {
        if (this._cursorPosition[1] < this._writingRep.length - 1) {
          this._cursorPosition = [0, this._cursorPosition[1] + 1]
        }
      }
      return this
    },
  }

  public writing = {
    set: (writingValue: string) => {
      this._writingValue = writingValue
      this._parse()
      this._draw()
      return this
    },
    insert: (characters: string) => {
      const cell = this._writingRep
        .at(this._cursorPosition[1])
        ?.at(this._cursorPosition[0])

      if (cell) {
        let characters_to_insert = characters
        let index_to_insert_at = cell.index

        if (cell.ponaMode && !cell.skip) {
          index_to_insert_at = cell.index + 1
        }

        const cellAndNextAreBothPona =
          cell.ponaMode &&
          this._writingRep
            .at(this._cursorPosition[1])
            ?.at(this._cursorPosition[0] + 1)?.ponaMode
            ? true
            : false

        if (cellAndNextAreBothPona) {
          if (characters === ' ' || characters === '_') {
            characters_to_insert = ' #'
          }
        } else if (this._writingValue.at(index_to_insert_at - 1) === ' ') {
          if (characters === ' ' || characters === '_') {
            characters_to_insert = '_ '
          }
        } else {
          if (characters === '_') {
            characters_to_insert = ' _ '
          }
        }

        this._writingValue =
          this._writingValue.slice(0, index_to_insert_at) +
          characters_to_insert +
          this._writingValue.slice(index_to_insert_at)

        this._parse()
        this._draw()

        if (
          characters_to_insert === '\n' ||
          characters_to_insert === ' ' ||
          characters_to_insert === '_ ' ||
          cell.ponaMode
        ) {
          this.cursor.right()
        }

        if (characters_to_insert === ' _ ') {
          this.cursor.right().cursor.right()
        }
      }
      return this
    },
    delete: () => {
      const cell = this._writingRep
        .at(this._cursorPosition[1])
        ?.at(this._cursorPosition[0])

      if (cell) {
        const index =
          this._writingRep[this._cursorPosition[1]][this._cursorPosition[0]]
            .index - 1

        let leftIndex = index
        let rightIndex = index

        const surroundingCharacters = [
          this.writingValue.at(index - 1),
          this.writingValue.at(index),
          this.writingValue.at(index + 1),
        ]

        const ponaMode = cell.ponaMode

        if (surroundingCharacters[0] === ' ') {
          leftIndex = index - 1
        }

        if (leftIndex >= 0) {
          this._writingValue =
            this._writingValue.slice(0, leftIndex) +
            this._writingValue.slice(rightIndex + 1)

          this._parse()
          this._draw()

          if (
            surroundingCharacters[0] === ' ' ||
            surroundingCharacters[1] === '\n' ||
            surroundingCharacters[1] === ' ' ||
            ponaMode
          ) {
            this.cursor.left()
          }
        }
      }
      return this
    },
  }
}

export default Editor
