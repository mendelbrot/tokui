import { Link } from "react-router-dom";

import Glyph from '../components/glyph'

function Home() {
  return (
    <div>
      <h1 className="mb-6 text-xl">Home</h1>
      <Glyph letters={"kui"} />
    </div>
  )
}

export default Home;
