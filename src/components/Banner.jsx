import BannerImg from '../assets/BannerBg.png'
import BannerImgMobile from '../assets/BannerBg-mobile.png'
import '../styles/Banner.css'

function Banner() {
  return (
    <div className="Banner">
      <div className="Banner__Text">Chez vous, {window.innerWidth < 768 ? (<br />) : null}partout et ailleurs</div>
      {window.innerWidth < 768 ? (
        <img src={BannerImgMobile} className="Banner__Img" alt="décors montagne" />
      ) : (
        <img src={BannerImg} className="Banner__Img" alt="décors montagne" />
      )}
    </div>
  )
}

export default Banner
