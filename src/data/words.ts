export type WordItem = {
  id: number
  written: string
  meanings: string[]
  tags: string[]
  tokipona: string[]
}

const words: WordItem[] = [
  {
    id: 1,
    written: 'to',
    meanings: ['language', 'talk', 'speak', 'communicate', 'say', 'express'],
    tags: ['tokipona'],
    tokipona: ['toki'],
  },
  {
    id: 2,
    written: 'kui',
    meanings: ['the name of this language', 'minus'],
    tags: [],
    tokipona: [],
  },
]

export const w = (id: number) => words.filter(w => w.id === id)[0].written

export default words
