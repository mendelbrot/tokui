export type WordData = {
  'ln-word-mapping': { [key: string]: string }
  groups: [{
    heading: string
    members: { [key: string]: string[] }
  }]
  definitions: { [key: string]: string[] }
}
