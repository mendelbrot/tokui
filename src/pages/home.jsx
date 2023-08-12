import { Link } from "react-router-dom";

import Glyph from '../components/glyph'
import GlyphText from '../components/glyph-text'

function Home() {
  return (
    <div>
      <h1 class="mb-6 text-xl">Home</h1>
      <GlyphText letters="kui" />
    </div>
  )
}

export default Home;
