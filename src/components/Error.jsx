import { Link } from 'react-router-dom'
import '../styles/Error.css'

function Error() {
    return (
      <div className="error">
        <h1 className="error-title">404</h1>
        <div className='error-text'>
          <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
          <Link to='/' className='error-back'>Retourner sur la page d'accueil</Link>
        </div>
      </div>
    )
  }
  
  export default Error