import { useParams } from 'react-router-dom'
import '../styles/Lodgement.css'

function Lodgement() {
  const { lodgementId } = useParams()

  return <main>Lodgement n°{lodgementId}</main>
}

export default Lodgement
