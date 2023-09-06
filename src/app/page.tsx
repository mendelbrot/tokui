import GlyphSymbol from '@/components/glyph-symbol'

export default function Home() {
  return (
    <main>
      <div className="prose max-w-prose">
        <p>Welcome to the website of the conlang named to kui.</p>
        <div className="border-2 w-56 inline-block">
          <GlyphSymbol letters="nui" />
        </div>
        <div className="border-2 w-56 inline-block">
          <GlyphSymbol letters="kui" />
        </div>
        <div className="border-2 w-56 inline-block">
          <GlyphSymbol letters="kui" />
        </div>
        <div className="border-2 w-56 inline-block">
          <GlyphSymbol letters="kui" />
        </div>
      </div>
    </main>
  )
}
