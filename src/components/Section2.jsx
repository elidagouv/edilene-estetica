import React, { useEffect } from 'react';
import Carousel from './Carousel';
import '../styles/Section2.css';

function Section2() {
    useEffect(() => {
        const section2 = document.getElementById('section2');
        const contentSobre = document.getElementById('content_sobre');
        const pElement = document.querySelector('#content_sobre p');
        const h1ElementsCarrossel = document.querySelectorAll('#content_carrossel h1');
        const h1ElementsSobre = document.querySelectorAll('#content_sobre h1');

        function handleScroll() {
            // Verifica se a section2 está visível na tela
            const sectionRect = section2.getBoundingClientRect();
            const isVisibleSection = sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;

            // Verifica se a content_sobre está visível na tela
            const contentSobreRect = contentSobre.getBoundingClientRect();
            const isVisibleContentSobre = contentSobreRect.top < window.innerHeight && contentSobreRect.bottom >= 0;

            // Ativa os h1 dentro de content_carrossel se section2 estiver visível
            if (isVisibleSection) {
                h1ElementsCarrossel.forEach(h1 => {
                    h1.classList.add('active');
                });
            } else {
                h1ElementsCarrossel.forEach(h1 => {
                    h1.classList.remove('active');
                });
            }

            // Ativa os h1 dentro de content_sobre se content_sobre estiver visível
            if (isVisibleContentSobre) {
                h1ElementsSobre.forEach(h1 => {
                    h1.classList.add('active');
                });
                pElement.classList.add('active'); // Adiciona a classe 'active' ao <p>
            } else {
                h1ElementsSobre.forEach(h1 => {
                    h1.classList.remove('active');
                });
                pElement.classList.remove('active'); // Remove a classe 'active' do <p>
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
        <section id="section2">
            <div id="content_carrossel">
                <h1>Nossos serviços</h1>
                <Carousel />
            </div>
            <div id="sobre">
                <div id="content_sobre">
                    <h1>Quem sou?</h1>
                    <div id="image-responsiva">
                        <img src="/images/fotoedilene.png" alt="Edilene" />
                    </div>
                    <p>Olá! Me chamo Edilene Gouveia, sou especialista em cuidar da beleza e bem-estar dos meus clientes. Tenho mais de 8 certificações nas áreas de Terapias Integrativas e Estética, como Massagens Relaxantes, Drenagem Linfática, Ventosaterapia, Microagulhamento e Jato de Plasma, buscando tratar o cliente como um todo, com a intenção de promover o equilíbrio e a harmonia entre corpo, mente e espírito. Quero lhe proporcionar uma experiência única e transformadora em cada visita ao meu espaço!</p>
                    <button><a href="https://api.whatsapp.com/send?phone=5581993321845">Fale comigo</a></button>
                </div>
                <div id="image">
                    <img src="/images/fotoedilene.png" alt="Edilene" />
                </div>
            </div>
        </section>
    );
}

export default Section2;
