import Banner from '../components/Banner'
import BannerImg from '../assets/BannerBg_About.png'
import BannerImgMobile from '../assets/BannerBg_About-mobile.png'
import Collapse from '../components/Collapse'
import '../styles/About.css'
import { aboutUsInfos } from '../datas/aboutUs'

function About() {
  return (
    <main className="About">
      <Banner img={BannerImg} imgMobile={BannerImgMobile} />
      {aboutUsInfos.map(({ id, heading, content }) => (
        <Collapse key={id} heading={heading} content={content} />
      ))}
    </main>
  )
}

export default About
