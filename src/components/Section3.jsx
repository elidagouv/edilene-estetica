import React, { useEffect } from 'react';
import CarouselDep from './CarouselDep';
import '../styles/Section3.css';

function Section3() {
    useEffect(() => {
        const section3 = document.getElementById('section3');
        const h1Element = document.querySelector('#section3 h1');
        const h2Element = document.querySelector('#section3 h2');

        function handleScroll() {
            // Verifica se a section3 está visível na tela
            const sectionRect = section3.getBoundingClientRect();
            const isVisibleSection = sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;

            // Ativa os h1 e h2 dentro de section3 se estiver visível
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
        <section id="section3">
            <div id="content_section3">
                <h1>DEPOIMENTOS DE</h1>
                <h2>clientes</h2>
                <CarouselDep />
            </div>
        </section>
    );
}

export default Section3;
