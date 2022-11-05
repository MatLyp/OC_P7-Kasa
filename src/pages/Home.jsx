import Banner from '../components/Banner'
import Card from '../components/Card'
import datas from '../datas/logements.json'
import BannerImg from '../assets/BannerBg_Home.png'
import BannerImgMobile from '../assets/BannerBg_Home-mobile.png'
import '../styles/Home.css'

function Home() {
  return (
    <main>
      <Banner img={BannerImg} imgMobile={BannerImgMobile} />
      <section className="Home__CardsContainer">
        {datas.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </section>
    </main>
  )
}

export default Home
