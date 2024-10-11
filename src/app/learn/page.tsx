'use client'

import WritingBlock from '@/components/WritingBlock'
import Link from 'next/link'
import React from 'react'

export default function Learn() {
  return (
    <main className="prose max-w-prose p-[16px]">
      <h2>sounds and letters</h2>
      <p>
        There are 12 consonants and five vowels. The sounds and letters are
        slightly extended from{' '}
        <a href="https://en.wikipedia.org/wiki/Toki_Pona#Phonology_and_phonotactics">
          Toki Pona
        </a>
        . There are added consonants <b>g</b>, <b>f</b>, and <b>h</b>. In Latin
        script, Toki Pona <b>j</b> is written as <b>y</b>.
      </p>
      <p>
        There is no distinction between voiced and un-voiced consonants, they
        are equivalent. For instance, <b>f</b> can be an <b>f</b> sound or a{' '}
        <b>v</b> sound; <b>t</b> can be a <b>t</b> sound or a <b>d</b> sound.
        Also, <b>l</b> can be an <b>r</b> sound if preferred.
      </p>
      <p>
        As in Toki Pona, the five vowels are pronounced: l<b>ee</b> w<b>ay</b> l
        <b>aw</b> l<b>ow</b> m<b>oo</b>.
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
        Words don&apos;t end with the consonants <b>h</b>, <b>w</b>, or <b>y</b>{' '}
        because a vowel followed by one of these consonants can be hard to
        pronounce.
      </p>
      <h2>tokui native script</h2>
      <p>
        The tokui script is similar to{' '}
        <a href="https://en.wikipedia.org/wiki/Hangul">Hangul</a> in appearance
        and construction. Basic vowel and consonant symbols are combined into
        characters. In tokui, a character can hold up to five letters.
      </p>
      <p>
        There are well defined rules for building characters. Basic letters are
        placed beside, below, or within other letters. A consonant can be a
        frame surrounding up to two other letters. The next two tables show the
        tokui letters. For examples of how they&apos;re built into characters,
        see the list of <Link href="/words">tokui words</Link>, or play around
        with the <Link href="/editor">tokui text editor</Link>.
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
        (such as kijetesantakalu) every Toki Pona word has a tokui counterpart.
        I shortened all the words that are more than three letters. Most of the
        shortened words are recognizable. A few of them were completely changed,
        mainly because conflicts with other shortened words.
      </p>
      <p>
        Tokui grammar is also an extension of Toki Pona. The particles <b>li</b>
        , <b>e</b>, <b>pi</b>, <b>la</b>, <b>en</b>, and so on are included.{' '}
        <b>e</b> is replaced with <b>le</b> though, because <b>e</b> is reserved
        for another purpose in tokui. There is also no <b>a</b>, again because
        it&apos;s reserved for something else in tokui, but <b>kin</b> can be
        used instead.
      </p>
      <p>
        Basically any Toki Pona sentence can be trivially translated to tokui by
        a 1-1 replacement of words. In this document, I will skip summarizing
        the mechanics of Toki Pona since it&apos;s not a distinguishing feature
        of this language. I learned Toki Pona from the{' '}
        <a href="https://sona.pona.la/wiki/Toki_Pona:_The_Language_of_Good">
          official book
        </a>{' '}
        by Sonja Lang. (Not to say that my Toki Pona learning is in complete in
        any sense: toki mi li ike lili.)
      </p>
      <h2>case grammar</h2>
      <p>
        The idea for this case grammar is an import from Ithkuil. I find it to
        be kind of revolutionary, and although a bit abstract, its actually
        simple because there is a small set of grammatical components and
        minimal grammatical rules. A clause has three main items: relation,
        entity, and case.
      </p>
      <p>
        Relation is marked by <b>a</b>. The relation is equivalent to the verb
        of the clause. A tokui clause has at most one relation.
      </p>
      <p>
        Entity is marked by <b>e</b>. An entity is equivalent a noun. Tokui can
        have any number of entities, including zero.
      </p>
      <p>
        Case is marked by <b>i</b>. It is the way that an entity of the clause
        takes part in the relation of the clause. Tokui can have any number of
        cases, including zero. Generally there is one case for each entity of
        the clause.
      </p>
      <p>
        Case is less familiar because English, like most languages, uses word
        order and irregular grammatical constructs to convey case. Case
        isn&apos;t explicit but it&apos;s always present in a clause. Familiar
        examples of case from basic grammar are subject and object. English is a
        Subject Verb Object (SVO) language. The subject is the thing that&apos;s
        doing the verb, and it goes before the verb (in English); the object is
        the thing the verb is being done to and it goes after the verb. Instead
        of using word order to convey case, tokui case grammar uses markers to
        explicitly identify the ways the entities participate in the verb. Case
        is also called semantic role. I will try to be consistent with using the
        word case, because that&apos;s what it&apos;s called on the ithkuil
        website, and it think case may be the more common term in linguistics
        too.
      </p>
      <p>
        For a concrete example of case, consider the sentence &quot;I borrowed a
        book from the library&quot;. Here I&apos;d say that I have the case{' '}
        <b>agent</b>, the book has the case <b>content</b>, and the library has
        the case <b>source</b>. With tokui case grammar, I&apos;d say something
        like: &quot;<b>a</b> borrow <b>i</b> agent <b>e</b> me <b>i</b> source{' '}
        <b>e</b> library <b>i</b> content <b>e</b> book&quot;.
      </p>
    </main>
  )
}
