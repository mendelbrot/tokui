export type SoftSettingsValue = {
  fill?: string
  stroke?: string
  strokeWidth?: number
  scale?: number
  lineWrap?: number | null
}

export type SettingsValue = {
  fill: string
  stroke: string
  strokeWidth: number
  scale: number
  lineWrap: number | null
}

export type CursorPosition = [number, number]

export type Cell = {
  index: number
  word: string
  ponaMode: boolean
  lineBreak: boolean
  skip: boolean
}

export type WritingRep = Cell[][]

export type EditorModelProjection = {
  settingsValue: SettingsValue
  cursorPosition: CursorPosition
  writingValue: string
  writingRep: WritingRep
  writingSvg: string
}

export type ProjectionCallback = (editorProjection: EditorModelProjection) => any


