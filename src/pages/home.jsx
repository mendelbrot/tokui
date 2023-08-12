import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 class="mb-6 text-xl">Home</h1>
      <Link class="text-blue-500" to={`all-glyphs`}>All Glyphs</Link>
    </div>
  )
}

export default Home;
