// @ts-ignore
import wordData_ from '@/data/wordData.yaml'
const wordData = wordData_ as WordData
import RandomWordButton from '@/components/nav/RandomWordButton'
import NavButton from '@/components/nav/NavButton'
import NavContainer from '@/components/nav/NavContainer'
import WritingBlock from '@/components/WritingBlock'
import Link from 'next/link'
import { WordData } from '@/data/wordDataTypes'

const Words = () => {
  return (
    <div className="max-w-prose p-[16px]">
      <NavContainer>
        <NavButton href="/" imgAlt="home" imgSrc="/icons/tomo.svg" />
        <RandomWordButton />
      </NavContainer>
      <div className="prose">
        {Object.entries(wordData.groups).map(([groupName, groupWords]) => (
          <div key={groupName}>
            <h2>{groupName}</h2>

            <div className="flex flex-wrap">
              {groupWords.map((word) => (
                <Link key={word} href={'/words/' + word}>
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
