import { NavLink } from 'react-router-dom'
import '../styles/Header.css'
import Logo from '../assets/KasaLogo.png'

function Header() {
  return (
    <header className="Header">
      <img src={Logo} className="Header__Logo" alt="Logo Kasa" />
      <nav>
        <NavLink to={'/accueil'} className="Header__NavLink">
          Accueil
        </NavLink>
        <NavLink to={'/a-propos'} className="Header__NavLink">
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
