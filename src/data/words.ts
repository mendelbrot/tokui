// @ts-ignore
import words from '@/data/words.csv'

export type WordItem = {
  id: string
  meaning: string
  category: string
  tokui: string
  tokipona: string
}

export default words as WordItem[]
