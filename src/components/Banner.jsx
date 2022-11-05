// import { useState } from 'react'
import '../styles/Banner.css'

function Banner({img, imgMobile}) {
  // const [img/winSize, setImg/setWinSize] = useState() //a voir//

  return (
    <div className="Banner">
      <div className="Banner__Text">Chez vous, {window.innerWidth < 768 ? (<br />) : null}partout et ailleurs</div>
      {window.innerWidth < 768 ? (
        <img src={imgMobile} className="Banner__Img" alt="décors montagne" />
      ) : (
        <img src={img} className="Banner__Img" alt="décors montagne" />
      )}
    </div>
  )
}

export default Banner
