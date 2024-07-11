import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css'; // Arquivo de estilo para a navbar

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Verifica se o tamanho da janela é menor que 768px para dispositivos móveis
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Executa uma vez para definir o estado inicial

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={`navbar ${isMobile ? 'mobile' : ''}`} id='navbar'>
            <div className="logo"><img src="/images/logorosa.png" alt="Logo" /></div>
            {isMobile ? (
                <div className="hamburger-menu">
                    <input id="menu-toggle" type="checkbox" />
                    <label htmlFor="menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <div className="links">
                        <a href="#section1">Início</a>
                        <a href="#content_sobre">Sobre</a>
                        <a href="#section5">Contato</a>
                    </div>
                </div>
            ) : (
                <div className="links">
                    <a href="#section1">Início</a>
                    <a href="#content_sobre">Sobre</a>
                    <a href="#section5">Contato</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
