import { useState } from 'react'
import leftArrow from '../assets/arrowLeft.svg'
import rightArrow from '../assets/arrowRight.svg'
import '../styles/Slideshow.css'

function Slideshow({ images }) {
  const [currentImg, setCurrentImg] = useState(images[0])
  // console.log('current img : ' + currentImg)

  const currentImgIndex = images.indexOf(currentImg)
  // console.log('current Index : ' + currentImgIndex)

  const previousImg = (currentImg) => {
    if (currentImg === images[0]) {
      setCurrentImg(images[images.length - 1])
    } else {
      setCurrentImg(images[currentImgIndex - 1])
    }
  }

  const nextImg = (currentImg) => {
    if (currentImg === images[images.length - 1]) {
      setCurrentImg(images[0])
    } else {
      setCurrentImg(images[currentImgIndex + 1])
    }
  }

  return (
    <div className="Slideshow">
      <img
        src={currentImg}
        className="Slideshow__Img"
        alt="aperçu du logement"
      />
      {/* Affichage des flèches si le logement contient plus d'une photo */}
      {images.length !== 1 && (
        <div className="Slideshow__Arrow">
          <img
            src={leftArrow}
            className="Slideshow__Arrow__Left"
            alt="flèche de défilement gauche"
            onClick={() => previousImg(currentImg)}
          />
          <img
            src={rightArrow}
            className="Slideshow__Arrow__Right"
            alt="flèche de défilement droite"
            onClick={() => nextImg(currentImg)}
          />
        </div>
      )}
      <div className="Slideshow__ContentNbr">
        {currentImgIndex + 1}/{images.length}
      </div>
    </div>
  )
}

export default Slideshow
