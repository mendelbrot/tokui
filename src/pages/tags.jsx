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
        <div key={'tag ' + t}>
          <h2>{t}</h2>
          <ul>
            {words.filter(w => w.tags && w.tags.some(wt => t.includes(wt))).map(w => (
              <li key={'tag ' + t + ' word ' + w.written}>
                {w.written} {w.meanings[0]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Tags