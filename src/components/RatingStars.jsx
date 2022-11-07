import '../styles/RatingStars.css'
import StarOn from '../assets/ratingStarOn.svg'
import StarOff from '../assets/ratingStarOff.svg'

function RatingStars({ rate }) {
  return (
    <div className="RatingStars">
      <img src={rate >= 1 ? StarOn : StarOff} className="Star" alt="étoile" />
      <img src={rate >= 2 ? StarOn : StarOff} className="Star" alt="étoile" />
      <img src={rate >= 3 ? StarOn : StarOff} className="Star" alt="étoile" />
      <img src={rate >= 4 ? StarOn : StarOff} className="Star" alt="étoile" />
      <img src={rate >= 5 ? StarOn : StarOff} className="Star" alt="étoile" />
    </div>
  )
}

export default RatingStars
