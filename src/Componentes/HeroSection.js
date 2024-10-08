import React from 'react';
import { FaArrowDown } from 'react-icons/fa'; // Importamos un icono de flecha

const HeroSection = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="hero-section">
      {/* Video de fondo */}
      <video autoPlay loop muted className="background-video">
        <source src="/videos/background-video.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>

      {/* Botón para bajar con icono */}
      <button className="scroll-button" onClick={handleScroll}>
        <FaArrowDown className="scroll-icon" />
      </button>
    </div>
  );
};

export default HeroSection;
