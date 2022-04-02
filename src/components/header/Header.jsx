import React from 'react';
import Cta from './Cta';
import './header.css'
import "./HeaderSocial"
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Salut je suis</h5>
                <h1>Sabidani Eliseé</h1>
                <h5 className="text-light">Develeppeur Fullstack</h5>
                <Cta />
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;