import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../../assets/img/Logo.png'
import DevflixLogo from '../../assets/img/DevflixLogo.png'
// import ButtonLink from './components/ButtonLink'
import Button from '../Button'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={DevflixLogo} alt="Logo da Devflix" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu