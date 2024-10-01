import words from '@/data/wordData.json'
import RandomWord from '@/components/RandomWord'
import WritingBlock from '@/components/WritingBlock'
import Link from 'next/link'

const Words = () => {
  return (
    <div>
      <div className="fixed bottom-6 right-6">
        <RandomWord />
      </div>
      <div className="prose">
        {Object.entries(words.groups).map(([groupName, groupWords]) => (
          <div key={groupName}>
            <h2>{groupName}</h2>

            <div className="flex flex-wrap">
              {groupWords.map((word) => (
                <Link key={word} href={'/wordData/' + word}>
                  <WritingBlock>{word}</WritingBlock>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Words
