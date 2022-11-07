import '../styles/Banner.css'

function Banner({ text = '', img, imgMobile }) {
  return (
    <div className="Banner">
      <div className="Banner__Text">{text}</div>
      {window.innerWidth < 768 ? (
        <img src={imgMobile} className="Banner__Img" alt="décors montagne" />
      ) : (
        <img src={img} className="Banner__Img" alt="décors montagne" />
      )}
    </div>
  )
}

export default Banner
