import React, { useEffect } from 'react';
import '../styles/Section4.css';

function Section4() {
    useEffect(() => {
        const section4 = document.getElementById('section4');
        const h1Element = document.querySelector('#section4 h1');
        const h2Element = document.querySelector('#section4 h2');

        function handleScroll() {
            // Verifica se a section4 está visível na tela
            const sectionRect = section4.getBoundingClientRect();
            const isVisibleSection = sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;

            // Ativa os h1 e h2 dentro de section4 se estiver visível
            if (isVisibleSection) {
                h1Element.classList.add('active');
                h2Element.classList.add('active');
            } else {
                h1Element.classList.remove('active');
                h2Element.classList.remove('active');
            }
        }

        // Listener para verificar o scroll
        window.addEventListener('scroll', handleScroll);
        // Executa handleScroll na montagem inicial para verificar o estado inicial
        handleScroll();

        // Limpa o listener ao desmontar o componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id='section4'>
            <div id='content_section4'>
                <h1>Entre em contato</h1>
                <h2>Seja redirecionado para o nosso WhatsApp clicando no ícone abaixo</h2>
                <a href="https://api.whatsapp.com/send?phone=5581993321845"><img src="/images/whatsapp.png" alt="Whatsapp" /> </a>
            </div>
        </section>
    );
}

export default Section4;
