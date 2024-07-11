import React, { useState } from 'react';
import '../styles/Carousel.css'; // Importe o arquivo de estilos do carrossel

const images = [
  { id: 1, src: '/images/limpeza.png', title: 'Limpeza de pele' },
  { id: 2, src: '/images/massagem.png', title: 'Massagem relaxante' },
  { id: 3, src: '/images/ventosa.png', title: 'Ventosaterapia' },
  { id: 4, src: '/images/design.png', title: 'Design de sobrancelhas' },
  { id: 5, src: '/images/spa.png', title: 'Spa dos pés' },
  { id: 6, src: '/images/drenagem.png', title: 'Drenagem linfática' },
  { id: 7, src: '/images/microagulhamento.png', title: 'Microagulhamento facial' },
  { id: 8, src: '/images/sinais.png', title: 'Retirada de sinais com jato de plasma' },
  { id: 9, src: '/images/brown.png', title: 'Brown lamination e Lash lifting' }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel-container">
      <img src="/images/prev.png" alt="Voltar" className="prev" onClick={handlePrev}/>
        <div className="carousel">
          <div className="image-container">
            <img src={images[currentIndex].src} alt={images[currentIndex].title} />
            <p>{images[currentIndex].title}</p>
          </div>
        </div>
      <img src="/images/next.png" alt="Prosseguir" className="next" onClick={handleNext}/>
    </div>
  );
};

export default Carousel;
