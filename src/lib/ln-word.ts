import { WordData } from '@/data/wordDataTypes'
// @ts-ignore
import wordData_ from '@/data/wordData.yaml'
const wordData = wordData_ as WordData

const lnRegex = /^[mngptkfshwly0123456]+$/

/* 
  translates a word of consonants and numbers to its full sounded out form:
  h3s => hu-gi-se
*/
function lnWord(word: string): string | undefined {
  if (!lnRegex.test(word)) {
    return undefined
  }

  return Array.prototype.map
    .call(word, (ln) => wordData['ln-word-mapping'][ln])
    .join('-')
}

export default lnWord
