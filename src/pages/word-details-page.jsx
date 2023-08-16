import {useParams} from 'react-router-dom'
import WordDetails from '../components/word-details'

function WordDetailsPage() {
  const {letters} = useParams()

  return <WordDetails letters={letters} />
}

export default WordDetailsPage