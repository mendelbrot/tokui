import './stringFormat'
import glyphData from '../data/glyphData.json'
import {
  CursorPosition,
  ProjectionCallback,
  SoftSettingsValue,
  SettingsValue,
  WritingRep,
  EditorModelProjection,
  Cell,
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

export const initialEditorProjection: EditorModelProjection = {
  settingsValue: defaultSettings,
  cursorPosition: [0, 0],
  writing: '',
  writingRep: [[{ index: 0, word: '', ponaMode: false, lineBreak: false }]],
  writingSvg: '',
}

type ConstructorParams = {
  writing?: string
  cursorPosition?: CursorPosition
  settings?: SoftSettingsValue
}

class Editor {
  private projectionCallback: ProjectionCallback
  private _settingsValue: SettingsValue
  private _writing: string
  private _writingRep: WritingRep
  private _writingSvg: string
  private _cursorPosition: CursorPosition

  constructor(
    projectionCallback: ProjectionCallback,
    {
      writing = '',
      cursorPosition = [0, 0],
      settings = {},
    }: ConstructorParams = {}
  ) {
    this.projectionCallback = projectionCallback
    this._settingsValue = { ...defaultSettings, ...settings }
    this._cursorPosition = cursorPosition
    this._writing = writing
    this._writingRep = initialEditorProjection.writingRep
    this._writingSvg = initialEditorProjection.writingSvg

    this._parse()
    this._draw()
    this._project()
  }

  private _parse() {
    let word = ''
    let ponaMode = false

    for (let i = 0; i < this._writing.length; i += 1) {
      let lineBreak = false
      let appendCell = false

      if (this._writing[i] === ' ') {
        appendCell = true
        ponaMode = false
      } else if (this._writing[i] === '\n') {
        this._writingRep.push([])
        appendCell = true
        lineBreak = true
        ponaMode = false
      } else if (ponaMode === true) {
        word = this._writing[i]
        appendCell = true
      } else if (this._writing[i] === '#') {
        ponaMode = true
      } else if (this._writing.length === i - 1) {
        word += this._writing[i]
        appendCell = true
      }

      if (appendCell) {
        this._writingRep[-1].push({
          index: i,
          word,
          ponaMode,
          lineBreak,
        })
        word = ''

        if (
          this._settingsValue.lineWrap &&
          this._writingRep[-1].length > this._settingsValue.lineWrap
        ) {
          this._writingRep.push([])
        }
      } else {
        word += this._writing[i]
      }
    }
  }

  private _drawGlyph(word: string): string | null {
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
        this._settingsValue.fill,
        this._settingsValue.stroke,
        this._settingsValue.strokeWidth
      )
    }

    const sequence = word.split('')
    let form = 'pakala'

    if (sequence.length === 1) {
      if (glyphData.groups.Y.some((i) => i === sequence[0])) {
        form = 'X'
      }
    } else {
      if (
        sequence.every((letter) => glyphData.groups.Y.some((i) => i === letter))
      ) {
        if (
          glyphData.groups.VN.some((i) => i === sequence[0]) ||
          sequence.every((letter) =>
            glyphData.groups.CN.some((i) => i === letter)
          )
        ) {
          if (sequence.length < 5) {
            form = 'B' + sequence.length
          }
        } else {
          form = 'A' + sequence.length
        }
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

  private _draw() {
    let glyphs = ''

    for (let y = 0; y < this._writingRep.length; y += 1) {
      for (let x = 0; x < this._writingRep[y].length; x += 1) {
        let word = this._writingRep[y][x].word
        // @ts-ignore
        glyphs += glyphData.frames.phraseMode.format(
          x * editorParameters.glyphBaseSize,
          y * editorParameters.glyphBaseSize,
          this._drawGlyph(word)
        )
      }
    }

    const Xmax = this._writingRep.reduce(
      (max, item) => Math.max(max, item.length),
      -Infinity
    )

    const Ymax = this._writingRep.length

    // @ts-ignore
    this._writingSvg = glyphData.frames.svg.format(
      glyphs,
      this._settingsValue.fill,
      this._settingsValue.stroke,
      this._settingsValue.strokeWidth,
      (Xmax + 1) * this._settingsValue.scale * editorParameters.glyphBaseSize,
      (Ymax + 1) * this._settingsValue.scale * editorParameters.glyphBaseSize,
      this._settingsValue.scale
    )
  }

  private _project() {
    this.projectionCallback({
      settingsValue: this._settingsValue,
      cursorPosition: this._cursorPosition,
      writing: this._writing,
      writingRep: this._writingRep,
      writingSvg: this._writingSvg,
    })
  }

  public settings = {
    toggleLineWrap: () => {
      if (this._settingsValue.lineWrap) {
        this._settingsValue.lineWrap = null
      } else {
        this._settingsValue.lineWrap = defaultSettings.lineWrap
      }
      this._parse()
      this._draw()
      this._project()
    },
    incrementLineWrap: () => {
      if (this._settingsValue.lineWrap) {
        this._settingsValue.lineWrap += 1
        this._parse()
        this._draw()
        this._project()
      }
    },
    decrementLineWrap: () => {
      if (this._settingsValue.lineWrap) {
        this._settingsValue.lineWrap -= 1
        this._parse()
        this._draw()
        this._project()
      }
    },
    incrementScale: () => {
      if (this._settingsValue.scale < editorParameters.maxScale) {
        this._settingsValue.scale += editorParameters.scaleIncrement
        this._draw()
        this._project()
      }
    },
    decrementScale: () => {
      if (this._settingsValue.scale > editorParameters.minScale) {
        this._settingsValue.scale -= editorParameters.scaleIncrement
        this._draw()
        this._project()
      }
    },
  }

  public cursor = {
    moveTo: (position: CursorPosition) => {
      if (
        position[1] < this._writingRep.length &&
        position[0] < this._writingRep[position[1]].length
      ) {
        this._cursorPosition = position
        this._project()
      }
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
        this._project()
      }
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
        this._project()
      }
    },
    left: () => {
      if (this._cursorPosition[0] > 0) {
        this._cursorPosition = [
          this._cursorPosition[0] - 1,
          this._cursorPosition[1],
        ]
        this._project()
      }
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
        this._project()
      }
    },
  }

  public writing = {
    insert: (word: string) => {
      const index =
        this._writingRep[this._cursorPosition[1]][this._cursorPosition[0]].index

      this._writing =
        this._writing.slice(0, index) + word + this._writing.slice(index)

      this._parse()
      this._draw()
      this._project()
    },

    delete: () => {
      const index =
        this._writingRep[this._cursorPosition[1]][this._cursorPosition[0]].index

      this._writing =
        this._writing.slice(0, index) + this._writing.slice(index + 1)

      this._parse()
      this._draw()
      this._project()
    },

    set: (writing: string) => {
      this._writing = writing

      this._parse()
      this._draw()
      this._project()
    },
  }
}

export default Editor
