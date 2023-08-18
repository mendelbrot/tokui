import words from '../data/words'

function buildTags(words) {
  const tags = [] 
  words.forEach(w => {
    w.tags && w.tags.forEach(t => {
      if (!tags.includes(t)) {
        tags.push(t)
      }
    })
  })
  return tags
}

function Tags() {
  const tags = buildTags(words)
  return (
    <div className='prose'>
      {tags && tags.map(t => (
        <div>
          <h2>{t}</h2>
          <ul>
            {words.filter(w => w.tags && w.tags.some(t => tags.includes(t))).map(w => (
              <li>{w.written} {w.meanings[0]}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Tags