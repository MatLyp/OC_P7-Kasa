import { useParams } from 'react-router-dom'
import Collapse from '../components/Collapse'
import RatingStars from '../components/RatingStars'
import Slideshow from '../components/Slideshow'
import Tag from '../components/Tag'
import datas from '../datas/logements.json'
import '../styles/Lodgement.css'

function Lodgement() {
  const { lodgementId } = useParams()

  // Datas recovery for this specific lodgement with his id from url param
  const lodgementObj = datas.find((obj) => obj.id === lodgementId)

  // Create an array of <p> element for each equipments to display them on a new line
  const lodgementEquipments = []
  for (let elem of lodgementObj.equipments) {
    lodgementEquipments.push(
      <p key={`${elem}-${lodgementObj.equipments.indexOf(elem)}`}>{elem}</p>
    )
  }

  // Split firstname and lastname to display them on two line separately
  const fullName = lodgementObj.host.name.split(' ')
  const firstName = fullName[0]
  const lastName = fullName[1]

  return (
    <main className="Lodgement">
      {/* Images gallery component with photos array from datas in props */}
      <Slideshow images={lodgementObj.pictures} />
      <div className="Lodgement__Headings">
        <div className="Lodgement__Headings__Left">
          <h1 className="Lodgement__Headings__Left__Title f--Heading">
            {lodgementObj.title}
          </h1>
          <div className="Lodgement__Headings__Left__Location f--Subheading">
            {lodgementObj.location}
          </div>
          <div className="Lodgement__Headings__TagWrapper">
            {lodgementObj.tags.map((tags) => (
              <Tag
                key={`${tags}-${lodgementObj.tags.indexOf(tags)}`}
                tag={tags}
              />
            ))}
          </div>
        </div>
        <div className="Lodgement__Headings__Right">
          <RatingStars rate={lodgementObj.rating} />
          <div className="Lodgement__Headings__OwnerInfos">
            <div className="Lodgement__Headings__OwnerInfos__Name">
              {firstName}
              <br />
              {lastName}
            </div>
            <img
              src={lodgementObj.host.picture}
              className="Lodgement__Headings__OwnerInfos__Picture"
              alt="profil du loueur"
            />
          </div>
        </div>
      </div>
      <div className="Lodgement__Information">
        <div className="Lodgement__Information__Wrapper">
          <Collapse heading="Description" content={lodgementObj.description} />
        </div>
        <div className="div Lodgement__Information__Wrapper">
          <Collapse heading="Equipements" content={lodgementEquipments} />
        </div>
      </div>
    </main>
  )
}

export default Lodgement
