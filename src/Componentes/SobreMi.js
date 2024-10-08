import React, { useEffect, useRef } from 'react';

const SobreMi = () => {
  const conocimientosRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 200); // Añadir un retraso entre cada icono
        }
      });
    });

    conocimientosRef.current.forEach((conocimiento) => {
      if (conocimiento) observer.observe(conocimiento);
    });

    // Cleanup observer on unmount
    return () => {
      conocimientosRef.current.forEach((conocimiento) => {
        if (conocimiento) observer.unobserve(conocimiento);
      });
    };
  }, []);

  return (
    <section id="about" className="sobre-mi-section">
      <div className="container">
        <h2>Sobre mí</h2>
        <p>
          Soy un desarrollador apasionado por la tecnología y la innovación. Me especializo en crear aplicaciones web modernas y funcionales. Siempre busco nuevos retos que me permitan aprender y crecer como profesional.
        </p>
        <img src="/images/mi-foto.png" alt="Mi foto" className="mi-foto" />
        
        <h3>Conocimientos</h3>
        <div className="conocimientos">
          {[
            { src: '/images/java-logo.png', alt: 'Java', text: 'Java' },
            { src: '/images/python-logo.png', alt: 'Python', text: 'Python' },
            { src: '/images/react-logo.png', alt: 'React', text: 'React' },
            { src: '/images/unity-logo.png', alt: 'Unity', text: 'Unity' },
            { src: '/images/cplusplus-logo.png', alt: 'C++', text: 'C++' },
            { src: '/images/csharp-logo.png', alt: 'C#', text: 'C#' },
            { src: '/images/javascript-logo.png', alt: 'JavaScript', text: 'JavaScript' },
            { src: '/images/mysql-logo.png', alt: 'MySQL', text: 'MySQL' },
            { src: '/images/sqlserver-logo.png', alt: 'SQL Server', text: 'SQL Server' },
            { src: '/images/mongodb-logo.png', alt: 'Mongo DB', text: 'Mongo DB' },
            { src: '/images/office-logo.png', alt: 'Office', text: 'Office' },
            { src: '/images/seguridad-logo.png', alt: 'Ciberseguridad', text: 'Ciberseguridad' },
            { src: '/images/iso27001-logo.png', alt: 'ISO27001', text: 'ISO27001' },
            { src: '/images/redes-logo.png', alt: 'Redes', text: 'Redes' }
          ].map((conocimiento, index) => (
            <div
              key={index}
              className="conocimiento"
              ref={(el) => (conocimientosRef.current[index] = el)}
            >
              <img
                src={conocimiento.src}
                alt={conocimiento.alt}
                className="conocimiento-img"
              />
              <p>{conocimiento.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
