import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/Header.css'

function Header() {
    return(
    <header>
        <h1><img src={logo} alt='logo kasa' className='header-logo'/></h1>
        <nav>
            <Link to='/' className='header-link'>Accueil</Link>
            <Link to='/apropos' className='header-link'>A propos</Link>
        </nav>
    </header>)
}

export default Header