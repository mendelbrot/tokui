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
  {
    id: 3,
    written: 'pi',
    meanings: ['(of)'],
    tags: ['tokipona'],
    tokipona: ['pi'],
  },
  {
    id: 4,
    written: 'la',
    meanings: ['relation: assertion'],
    tags: ['relation-marker'],
    tokipona: [],
  },
  {
    id: 5,
    written: 'li',
    meanings: ['relation: question'],
    tags: ['relation-marker'],
    tokipona: [],
  },
  {
    id: 5,
    written: 'lo',
    meanings: ['relation: order'],
    tags: ['relation-marker'],
    tokipona: [],
  },
  {
    id: 5,
    written: 'le',
    meanings: ['relation'],
    tags: ['relation-marker'],
    tokipona: [],
  },
]

export const w = (id: number) => words.filter(w => w.id === id)[0].written

export default words
