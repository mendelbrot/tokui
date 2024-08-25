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

export type EditorModelProjection = {
  settingsValue: SettingsValue
  cursorPosition: [number, number]
  writing: string
  writingRep: WritingRep
  writingSvg: string
}

export type ProjectionCallback = (editorProjection: EditorModelProjection) => any

export type Cell = {
  index: number
  word: string
  ponaMode: boolean
  lineBreak: boolean
}

export type WritingRep = Cell[][]

export type CursorPosition = [number, number]
