'use client'

import NavButton from '@/components/nav/NavButton'
import NavContainer from '@/components/nav/NavContainer'
import WritingBlock from '@/components/glyphs/WritingBlock'
import Link from 'next/link'
import React from 'react'
import I from '@/components/glyphs/InfoGlyph'

export default function Learn() {
  return (
    <div>
      <NavContainer>
        <NavButton href="/" imgAlt="home" imgSrc="/icons/tomo.svg" />
      </NavContainer>
      <div className="prose">
        <h2>sounds and letters</h2>
        <p>
          There are 12 consonants and five vowels. The sounds and letters are
          slightly extended from{' '}
          <a href="https://en.wikipedia.org/wiki/Toki_Pona#Phonology_and_phonotactics">
            Toki Pona
          </a>
          . There are added consonants <b>g</b>, <b>f</b>, and <b>h</b>. In
          Latin script, Toki Pona <b>j</b> is written as <b>y</b>.
        </p>
        <p>
          There is no distinction between voiced and un-voiced consonants, they
          are equivalent. For instance, <b>f</b> can be an <b>f</b> sound or a{' '}
          <b>v</b> sound; <b>t</b> can be a <b>t</b> sound or a <b>d</b> sound.
          Also, <b>l</b> can be an <b>r</b> sound if preferred.
        </p>
        <p>
          As in Toki Pona, the five vowels are pronounced: l<b>ee</b> w<b>ay</b>{' '}
          l<b>aw</b> l<b>ow</b> m<b>oo</b>.
        </p>
        <table className="table-fixed">
          <caption>tokui letters</caption>
          <thead>
            <tr>
              <th className="border">Vowels</th>
              <th className="border">Consonants</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border">i e a o u</td>
              <td className="border">m n g f s h p t k w l y</td>
            </tr>
          </tbody>
        </table>
        <p>
          Tokui words are short, with at most 5 letters in a word. The words
          borrowed from Toki Pona have been reduced to three letters or less. As
          in Toki Pona, there are no consonant clusters or blended vowels.
        </p>
        <p>
          There can be two vowels in a row, but they are pronounced separately,
          not blended.
        </p>
        <p>
          Words don&apos;t end with the consonants <b>h</b>, <b>w</b>, or{' '}
          <b>y</b> because a vowel followed by one of these consonants can be
          hard to pronounce.
        </p>
        <h2>tokui writing</h2>
        <p>
          The tokui writing is similar to{' '}
          <a href="https://en.wikipedia.org/wiki/Hangul">Hangul</a> in
          appearance and construction. Basic vowel and consonant symbols are
          combined into characters. A tokui character can hold up to five
          letters.
        </p>
        <p>
          There are well defined rules for building characters. Basic letters
          are placed beside, below, or within other letters. A consonant can be
          a frame surrounding up to two other letters. The next two tables show
          the tokui letters. For examples of how they&apos;re built into
          characters, see the list of <Link href="/words">tokui words</Link>, or
          play around with the <Link href="/editor">tokui text editor</Link>.
        </p>
        <table className="table-fixed">
          <caption>consonants</caption>
          <thead>
            <tr>
              <th className="border">Manner \ Place</th>
              <th className="border">Front</th>
              <th className="border">Middle</th>
              <th className="border">Back</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border">Nasal</th>
              <td className="border">
                <div className="w-12">
                  <WritingBlock>m</WritingBlock>
                </div>
                m
              </td>
              <td className="border">
                <div className="w-12">
                  <WritingBlock>n</WritingBlock>
                </div>
                n
              </td>
              <td className="border">
                <div className="w-12">
                  <WritingBlock>g</WritingBlock>
                </div>
                g
              </td>
            </tr>
            <tr>
              <th className="border">Stop</th>
              <td className="border">
                <div className="w-12">
                  <WritingBlock>p</WritingBlock>
                </div>
                p
              </td>
              <td className="border">
                <div className="w-12">
                  <WritingBlock>t</WritingBlock>
                </div>
                t
              </td>
              <td className="border">
                <div className="w-12">
                  <WritingBlock>k</WritingBlock>
                </div>
                k
              </td>
            </tr>
            <tr>
              <th className="border">Frictive</th>
              <td className="border">
                <div className="w-12">
                  <WritingBlock>f</WritingBlock>
                </div>
                f
              </td>
              <td className="border">
                <div className="w-12">
                  <WritingBlock>s</WritingBlock>
                </div>
                s
              </td>
              <td className="border">
                <div className="w-12">
                  <WritingBlock>h</WritingBlock>
                </div>
                h
              </td>
            </tr>
            <tr>
              <th className="border">Approxomant</th>
              <td className="border">
                <div className="w-12">
                  <WritingBlock>w</WritingBlock>
                </div>
                w
              </td>
              <td className="border">
                <div className="w-12">
                  <WritingBlock>l</WritingBlock>
                </div>
                l
              </td>
              <td className="border">
                <div className="w-12">
                  <WritingBlock>y</WritingBlock>
                </div>
                y
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table-fixed">
          <caption>vowels</caption>
          <tbody>
            <tr>
              <td className="border">
                <div className="w-12">
                  <WritingBlock>i</WritingBlock>
                </div>
                i
              </td>
              <td className="border">
                <div className="w-12">
                  <WritingBlock>e</WritingBlock>
                </div>
                e
              </td>
              <td className="border">
                <div className="w-12">
                  <WritingBlock>a</WritingBlock>
                </div>
                a
              </td>
              <td className="border">
                <div className="w-12">
                  <WritingBlock>o</WritingBlock>
                </div>
                o
              </td>
              <td className="border">
                <div className="w-12">
                  <WritingBlock>u</WritingBlock>
                </div>
                u
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Toki Pona words and grammar</h2>
        <p>
          The tokui lexicon is an extension of Toki Pona. With few exceptions
          (such as kijetesantakalu) every Toki Pona word has a tokui
          counterpart. I shortened any word with more than three letters. Many
          of the altered words are recognizable. A few of them were completely
          changed, mainly because conflicts with other shortened words.
        </p>
        <p>
          Tokui grammar, too, is an extension of Toki Pona. The Toki Pona
          particles <b>li</b>, <b>e</b>, <b>pi</b>, <b>la</b>, <b>en</b>, and so
          on are all included.
        </p>
        <p>
          Basically any Toki Pona sentence can be trivially translated to tokui
          by a 1-1 replacement of words. In this document, I will skip
          summarizing the mechanics of Toki Pona since it&apos;s not a
          differentiating feature of this language. I learned Toki Pona from the{' '}
          <a href="https://sona.pona.la/wiki/Toki_Pona:_The_Language_of_Good">
            official book
          </a>{' '}
          by Sonja Lang. (Not to say that my Toki Pona learning is in complete
          in any sense: toki mi li ike lili.)
        </p>

        <h2>grammar from Ithkuil case morphology</h2>
        <p>
          The idea for this case grammar is an import from Ithkuil. I find it to
          be kind of revolutionary, and although a bit abstract, its actually
          simple because there is a small set of grammatical components and
          minimal grammatical rules. A clause has three main items: relation,
          entity, and case.
        </p>
        <ul>
          <li>
            The <b>relation</b> is analogous to the verb of the clause. (This is
            my usage of the word.)
          </li>
          <li>
            An <b>entity</b> is analogous a noun. (This is my usage of the
            word.)
          </li>
          <li>
            <b>Case</b> is the way that an entity of the clause takes part in
            the relation of the clause. (I prefer the term Semantic Role, but I
            use Case to be aligned with the Ithkuil website nomenclature. I
            think there may be a distinction that semantic role is the
            underlying meaning and case is in some way the expression of the
            semantic role in the grammar. I&apos;m not sure though.)
          </li>
        </ul>
        <p>Examples of case include: agent, patient, recipient, and content.</p>
        <p>
          Case may seem abstract because English sentences determine case
          implicitly by word ordering and the use of particles. English is a
          Subject Verb Object (SVO) language. The subject is the thing
          that&apos;s doing the verb, and it goes before the verb (in English);
          the object is the thing the verb is being done to and it goes after
          the verb. In the sentence &quot;person 1 tossed the ball to person
          2&quot;, we can infer that person 1 is the agent, person 2 is the
          recipient, and the ball is the content.
        </p>
        <p>
          As an alternative to the normal (implicit) way of conveying case,
          tokui provides the option of using markers from Ithkuil case
          morphology to explicitly identify the ways the entities participate in
          the verb.
        </p>
        <p>
          In Ithkuil the the case for agent is the Ergative Case (4.2.7), the
          case for recipient is the Dative Case (4.2.8), and the case for
          content is the Thematic Case (4.2.1). These are represented in in
          tokui by the following words:
        </p>
        <ul>
          <li>
            <div className="flex items-start">
              <div>
                Agent: <b>mewewe</b>: &nbsp;
              </div>
              <WritingBlock settings={{ scale: 1 }}>m11</WritingBlock>
            </div>
          </li>
          <li>
            <div className="flex items-start">
              <div>
                Recipient: <b>mewetu</b>: &nbsp;
              </div>
              <WritingBlock settings={{ scale: 1 }}>m12</WritingBlock>
            </div>
          </li>
          <li>
            <div className="flex items-start">
              <div>
                Content: <b>mepawe</b>: &nbsp;
              </div>
              <WritingBlock settings={{ scale: 1 }}>m01</WritingBlock>
            </div>
          </li>
        </ul>
        <p>
          The glyphs for semantic role markers (as well as some of the other
          words from Ithkuil) are written differently than the other words. They
          are somewhat analogous to acronyms or initialisms. The glyph for the
          word&nbsp;
          <b>mewewe</b> is actually <b>m11</b>. The consonant <b>m</b> is
          sounded as <b>me</b> and the number <b>1</b> is sounded as <b>we</b>,
          so <b>m11</b> is <b>mewewe</b>. The way to tell is: if the glyph has a
          vowel it&apos;s sounded normally, if there is no vowel, then it&apos;s
          sounded by speaking the alphanumeric code.
        </p>
        <p>
          Now to translate this sentence (person 1 tossed the ball to person 2):
          I will translate &quot;toss&quot; as &quot;strong give&quot; (this is
          what I found for &quot;throw&quot; in the Toki Pona dictionary I got
          from the library). With the normal Toki Pona grammar, the sentence is:
        </p>
        {/* <WritingBlock settings={{ lineWrap: 6 }}>
          yan we li pan awa e seo ta yan tu
        </WritingBlock> */}
        <div className="flex flex-wrap">
          <I>yan</I>
          <I>we</I>
          <I>li</I>
          <I>awa</I>
          <I>e</I>
          <I>seo</I>
          <I>tan</I>
          <I>yan</I>
          <I>tu</I>
        </div>

        <p>
          <b>yan we li pan awa e seo ta yan tu</b>
        </p>
        <p>
          With grammar from Ithkuil case morphology it is:&nbsp;
          <u>
            [agent] person 1 [verb] give strong [content] ball [recipient] person
            2.
          </u>
        </p>
        <WritingBlock settings={{ lineWrap: 6 }}>
          m11 yan we li pan awa m01 seo m12 yan tu
        </WritingBlock>
        <p>
          <b>mewewe yan we li pan awa mepawe seo mewetu yan tu</b>
        </p>
        <p>
          The case is determined by case markers and not the position of the
          entities relative to the relation, so the sentence would still mean
          the same if the entities and relation were moved around, like so for
          example:&nbsp;
          <u>
            [verb] give strong [content] ball [recipient] person 2 [agent] person
            1.
          </u>
        </p>
        <WritingBlock settings={{ lineWrap: 6 }}>
          li pan awa m01 seo m12 yan tu m11 yan we
        </WritingBlock>
        <p>
          <b>li pan awa mepawe seo mewetu yan tu mewewe yan we</b>
        </p>
        <p>
          The two sentences mean the same thing even though they have very
          different word orderings.
        </p>
        <h2>words from Ithkuil basic morphology</h2>
        <p>TODO</p>
        <h2>numbers</h2>
        <p>TODO</p>
      </div>
    </div>
  )
}
