import words from '@/data/words'
import RandomWord from '@/components/random-word'
import WordCard from '@/components/word-card'

const Words = () => {
  return (
    <main>
      <div className="fixed bottom-6 right-6">
        <RandomWord />
      </div>
      <div className="flex flex-wrap">
        {words.map((w) => (
          <WordCard key={w.id} word={w} />
        ))}
      </div>
    </main>
  )
}

export default Words
