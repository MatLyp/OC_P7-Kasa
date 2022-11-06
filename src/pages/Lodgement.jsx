import { useParams } from 'react-router-dom'
import Collapse from '../components/Collapse'
import Slideshow from '../components/Slideshow'
import datas from '../datas/logements.json'
import '../styles/Lodgement.css'

function Lodgement() {
  const { lodgementId } = useParams()
  // Datas recovery for this specific lodgement with his id from url param
  const lodgementObj = datas.find((obj) => obj.id === lodgementId)

  return (
    <main className="Lodgement">
      {/* Images gallery component with photos array from datas in props */}
      <Slideshow images={lodgementObj.pictures} />

      <div className="Lodgement__Headings">
        <div className="Lodgement__Headings__Left">
          <h1>{lodgementObj.title}</h1>
          <div>{lodgementObj.location}</div>
          <div>insert #tag component</div>
        </div>
        <div className="Lodgement__Headings__Right">
          <div className="Lodgement__Headings__OwnerInfos">
            <div>{lodgementObj.host.name}</div>
            <div>owner picture in circle</div>
          </div>
          <div>{lodgementObj.rating}</div>
        </div>
      </div>
      <div className="Lodgement__Information">
        <Collapse heading="Description" content={lodgementObj.description} />
        <Collapse heading="Equipements" content={lodgementObj.equipments} />
      </div>
    </main>
  )
}

export default Lodgement
