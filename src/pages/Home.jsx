import Banner from '../components/Banner'
import Card from '../components/Card'
import datas from '../datas/logements.json'
import '../styles/Home.css'

function Home() {
  // for(let i=0;i<datas.length;i++){
  //   console.log(datas[i].host )
  // }

  return (
    <main>
      <Banner />
      <section className="Home__CardsContainer">
        {datas.map(({id, title, cover}) => (
          <Card key={id} title={title} cover={cover} />
        ))}
      </section>
    </main>
  )
}

export default Home
