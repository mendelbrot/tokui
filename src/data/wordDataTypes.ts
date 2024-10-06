export type WordGroup = string[]

export type WordDefinition = string[]

export type WordData = {
  groups: { [key: string]: WordGroup }
  definitions: { [key: string]: WordDefinition }
}
