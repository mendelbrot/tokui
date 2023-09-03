import React from 'react'
import GlyphSymbol from '@/components/glyph-symbol'
import GlyphText from '@/components/glyph-text'

type Props = { words: string; fill?: string; sizeClass?: string }
type Comp = React.FunctionComponent<Props>

export const GlyphSymbolMulti: Comp = ({ words, fill, sizeClass }) => {
  const wordsArray = words.split(' ')
  return (
    <div>
      {wordsArray.map((item, index) => (
        <div key={index} className={sizeClass + ' inline-block'}>
          <GlyphSymbol letters={item} fill={fill} />
        </div>
      ))}
    </div>
  )
}

export const GlyphTextMulti: Comp = ({ words, sizeClass }) => {
  const wordsArray = words.split(' ')
  return (
    <div>
      {wordsArray.map((item, index) => (
        <div key={index} className={sizeClass + ' inline-block'}>
          <GlyphText letters={item} />
        </div>
      ))}
    </div>
  )
}

export const GlyphMulti: Comp = ({ words, fill, sizeClass }) => (
  <div>
    <GlyphSymbolMulti words={words} fill={fill} sizeClass={sizeClass} />
    <GlyphTextMulti words={words} fill={fill} sizeClass={sizeClass} />
  </div>
)

export default GlyphMulti
