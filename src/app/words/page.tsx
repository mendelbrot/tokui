import words from '@/data/words'
import RandomWord from '@/components/random-word'
import WordCard from '@/components/word-card'
import wordCategories from '@/data/word-categories'

const Words = () => {
  return (
    <main>
      <div className="fixed bottom-6 right-6">
        <RandomWord />
      </div>
      {wordCategories.map((c) => (
        <div key={c.tag}>
          <div className="prose">
            <h2>{c.title}</h2>
          </div>  
          <div>
            <div className="flex flex-wrap">
              {words.filter(w => w.category === c.tag).map((w) => (
                <WordCard key={w.id} word={w} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}

export default Words
