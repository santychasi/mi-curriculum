import React, { useState, useEffect } from 'react';

// Datos de las certificaciones con imágenes miniatura
const certificaciones = [
  { id: 1, imgSrc: '/images/cert1.png', pdfSrc: '/certificaciones/cert1.pdf', alt: 'Certificación 1' },
  { id: 2, imgSrc: '/images/cert2.png', pdfSrc: '/certificaciones/cert2.pdf', alt: 'Certificación 2' },
  { id: 3, imgSrc: '/images/cert3.png', pdfSrc: '/certificaciones/cert3.pdf', alt: 'Certificación 3' },
  { id: 4, imgSrc: '/images/cert4.png', pdfSrc: '/certificaciones/cert4.pdf', alt: 'Certificación 4' },
  { id: 5, imgSrc: '/images/cert5.png', pdfSrc: '/certificaciones/cert5.pdf', alt: 'Certificación 5' },
  { id: 6, imgSrc: '/images/cert6.png', pdfSrc: '/certificaciones/cert6.pdf', alt: 'Certificación 6' },
  { id: 7, imgSrc: '/images/cert7.png', pdfSrc: '/certificaciones/cert7.pdf', alt: 'Certificación 7' },
  { id: 8, imgSrc: '/images/cert8.png', pdfSrc: '/certificaciones/cert8.pdf', alt: 'Certificación 8' },
  { id: 9, imgSrc: '/images/cert9.png', pdfSrc: '/certificaciones/cert9.pdf', alt: 'Certificación 9' },
  { id: 10, imgSrc: '/images/cert10.png', pdfSrc: '/certificaciones/cert10.pdf', alt: 'Certificación 10' },
];

const Certificaciones = () => {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false); // Estado para manejar la carga de imágenes

  const nextSlide = () => {
    setCurrent(current === certificaciones.length - 1 ? 0 : current + 1);
    setIsLoaded(false); // Resetea el estado de carga al cambiar la imagen
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? certificaciones.length - 1 : current - 1);
    setIsLoaded(false); // Resetea el estado de carga al cambiar la imagen
  };

  // Carrusel automático que cambia cada 2 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Cambia la imagen cada 2 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [current]);

  return (
    <div className="certificaciones-container">
      <h2 className="certificaciones-titulo">Mis Certificaciones</h2>
      <section className="certificaciones-lista">
      <ul>
          <li>Programa de Especialización ISO 27001:2022</li>
          <li>Programa Pentester Menter Junior</li>
          <li>EHCA (Ethical Hacking Certified Associate)</li>
          <li>Business Intelligence Foundation</li>
          <li>Especialización de Big Data e Internet of Things</li>
          <li>Cybersecurity Awareness</li>
          <li>Red Teaming Learning Path</li>
          <li>Scrum Foundation</li>
          <li>NSE 1 Network Security Associate</li>
          <li>NSE 2 Network Security Associate</li>
        </ul>
      </section>
      
      <div className="carrusel">
        {/* Botón para mover hacia atrás */}
        <button className="carrusel-control left" onClick={prevSlide}>
          &#10094;
        </button>

        {/* Imágenes del carrusel */}
        {certificaciones.map((cert, index) => (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={cert.id}
          >
            {index === current && (
              <a href={cert.pdfSrc} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.imgSrc}
                  alt={cert.alt}
                  className={`certificacion-imagen ${isLoaded ? 'loaded' : 'loading'}`}
                  onLoad={() => setIsLoaded(true)} // Marca la imagen como cargada
                />
              </a>
            )}
          </div>
        ))}

        {/* Botón para mover hacia adelante */}
        <button className="carrusel-control right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* Indicadores de las imágenes */}
      <div className="indicadores">
        {certificaciones.map((_, index) => (
          <span
            key={index}
            className={index === current ? 'indicador activo' : 'indicador'}
            onClick={() => {
              setCurrent(index);
              setIsLoaded(false); // Resetea el estado de carga al cambiar manualmente
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Certificaciones;
