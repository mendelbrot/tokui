export type WordData = {
  'ln-word-mapping': { [key: string]: string }
  groups: {
    [key: string]: {
      heading: string
      members: string[]
    }
  }
  definitions: { [key: string]: string[] }
}
