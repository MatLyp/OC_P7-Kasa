import { Link } from 'react-router-dom'
import '../styles/Card.css'

function Card({ id, cover, title }) {
  return (
    <div className="Card__Wrapper">
      <Link to={`/logement/${id}`}>
        <span className="Card__Title">{title}</span>
        <img src={cover} className="Card__Cover" alt="aperçu du logement" />
      </Link>
    </div>
  )
}

export default Card
