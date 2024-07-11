import React, { useState } from 'react';
import '../styles/CarouselDep.css'

const images = [
    '/images/depoimento1.png',
    '/images/depoimento2.png',
    '/images/depoimento3.png',
    '/images/depoimento4.png',
  ];
  
  const CarouselDep = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrevClick = () => {
      const newIndex = (currentIndex - 1 + images.length) % images.length;
      setCurrentIndex(newIndex);
    };
  
    const handleNextClick = () => {
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
    };
  
    return (
      <div className="carouselDep">
        <img src="/images/prev-white.png" alt="Voltar" className="carousel-button prev" onClick={handlePrevClick}/>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
        <img src="/images/next-white.png" alt="Prosseguir" className="carousel-button next" onClick={handleNextClick}/>
      </div>
    );
  };
export default CarouselDep