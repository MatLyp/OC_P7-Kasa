import leftArrow from '../assets/arrowLeft.svg'
import rightArrow from '../assets/arrowRight.svg'
import '../styles/Slideshow.css'

function Slideshow({images}) {

  // const previousImg = () => {

  // }

  // const nextImg = () => {

  // }


  return (
    <div className='Slideshow'>
      <img src={images[0]} className="Slideshow__Img" alt="appt" />
      <div className='Slideshow__Arrow'>
        <img src={leftArrow} className="Slideshow__Arrow__Left" alt="flèche gauche" />
        <img src={rightArrow} className="Slideshow__Arrow__Right" alt="flèche droite" />
      </div>
      <div className="Slideshow__ContentNbr">1/4</div>
    </div>
  )
}

export default Slideshow