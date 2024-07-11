import Carousel from "./Carousel"
import '../styles/Section2.css'

function Section2() {
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
    )
}

export default Section2