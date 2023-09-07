import React from 'react'
import GlyphSymbol from '@/components/glyph-symbol'
import GlyphText from '@/components/glyph-text'

type Props = {
  words: string
  lineClass?: string
  svgClass?: string
  sizeClass?: string
}
type Comp = React.FunctionComponent<Props>

export const GlyphSymbolMulti: Comp = ({
  words,
  lineClass,
  svgClass,
  sizeClass,
}) => {
  const wordsArray = words.split(' ')
  return (
    <div>
      {wordsArray.map((item, index) => (
        <div key={index} className={sizeClass + ' inline-block'}>
          <GlyphSymbol
            letters={item}
            lineClass={lineClass}
            svgClass={svgClass}
          />
        </div>
      ))}
    </div>
  )
}

export const GlyphTextMulti: React.FunctionComponent<{
  words: string
  sizeClass?: string
}> = ({ words, sizeClass }) => {
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

export const GlyphMulti: Comp = ({ words, lineClass, svgClass, sizeClass }) => (
  <div>
    <GlyphSymbolMulti
      words={words}
      sizeClass={sizeClass}
      lineClass={lineClass}
      svgClass={svgClass}
    />
    <GlyphTextMulti words={words} sizeClass={sizeClass} />
  </div>
)

export default GlyphMulti
