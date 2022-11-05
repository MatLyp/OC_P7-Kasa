import { useState } from 'react'
import '../styles/Collapse.css'
import openIcon from '../assets/openArrow.svg'
import closeIcon from '../assets/closeArrow.svg'

function Collapse({ heading, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="Collapse">
      <div className="Collapse__Heading" onClick={() => setIsOpen(!isOpen)}>
        <span className="f--Category">{heading}</span>
        {isOpen ? (
          <img src={closeIcon} alt="flèche vers le haut" />
        ) : (
          <img src={openIcon} alt="flèche vers le bas" />
        )}
      </div>
      {isOpen && <div className="Collapse__Content">{content}</div>}
    </div>
  )
}

export default Collapse
