import { Link } from 'react-router-dom'
import '../styles/NotFound.css'

function NotFound() {
  return (
    <main className="NotFound">
      <h1 className="NotFound__Heading">404</h1>
      <span>Oups ! La page que vous demandez n'existe pas.</span>
      <Link to={'/accueil'} className="NotFound__Link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  )
}
export default NotFound
