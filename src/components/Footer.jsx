import Logo from '../assets/KasaLogoBW.png'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="Footer">
      <img src={Logo} alt="Logo Kasa" />
      <div>© 2020 Kasa. All rights reserved</div>
    </footer>
  )
}

export default Footer
