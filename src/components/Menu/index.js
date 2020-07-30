import React from 'react'
// import Logo from '../../assets/img/Logo.png'
import DevflixLogo from '../../assets/img/DevflixLogo.png'
// import ButtonLink from './components/ButtonLink'
import Button from '../Button'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={DevflixLogo} alt="Logo da Devflix" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu