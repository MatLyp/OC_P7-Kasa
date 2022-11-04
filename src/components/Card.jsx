import '../styles/Card.css'

function Card({ cover, title }) {
  return (
    <div className="Card__Wrapper">
      <span className="Card__Title f--Heading">{title}</span>
      <img src={cover} className="Card__Cover" alt="aperçu du logement" />
    </div>
  )
}

export default Card
