import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Proyectos = () => {
  const proyectosRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 300); // Retraso de 300ms entre proyectos
        }
      });
    });

    proyectosRef.current.forEach((proyecto) => {
      if (proyecto) observer.observe(proyecto);
    });

    // Cleanup observer on unmount
    return () => {
      proyectosRef.current.forEach((proyecto) => {
        if (proyecto) observer.unobserve(proyecto);
      });
    };
  }, []);

  return (
    <section id="proyectos" className="proyectos-section">
      <h2>Mis Proyectos</h2>

      {/* Proyecto 1: Videojuegos */}
      <div
        className="proyecto"
        ref={(el) => (proyectosRef.current[0] = el)}
      >
        <div className="proyecto-imagen">
          <img src="/images/videojuegos.jpg" alt="Proyecto Videojuegos" />
        </div>
        <div className="proyecto-descripcion">
          <h3>Desarrollo de Videojuegos</h3>
          <p>
            Desarrollo de un videojuego utilizando Unity y C#. El proyecto, se implementó un
            carnet digital utilizando Realidad Aumentada (AR) con Unity y Vuforia Engine. 
            El objetivo fue crear una experiencia interactiva que permita a los usuarios escanear 
            un carnet físico y visualizar información adicional de forma virtual, 
            como enlaces a redes sociales y contenido multimedia.
          </p>
          <p><strong>Tecnologías usadas:</strong> Unity, Vuforia, C#, Visual Studio</p>
          <Link to="/proyecto/videojuegos">
            <button className="detalle-button">Ver Detalles</button>
          </Link>
        </div>
      </div>

      {/* Proyecto 2: Arquitectura */}
      <div
        className="proyecto invertido"
        ref={(el) => (proyectosRef.current[1] = el)}
      >
        <div className="proyecto-imagen">
          <img src="/images/arquitectura.png" alt="Proyecto Arquitectura" />
        </div>
        <div className="proyecto-descripcion">
          <h3>Arquitectura de Software</h3>
          <p>
            Proyecto de diseño e implementación de una arquitectura de software escalable para una aplicación web.
            El objetivo fue crear una arquitectura en Google Cloud utilizando diversas tecnologías, 
            tanto para la base de datos como para el servidor y varios clientes que interactúan con el 
            sistema.
          </p>
          <p><strong>Tecnologías usadas:</strong> Google Cloud, Sql Server, Visual Studio, Android Studio, Postman, Power Shell, DotNet</p>
          <Link to="/proyecto/arquitectura">
            <button className="detalle-button">Ver Detalles</button>
          </Link>
        </div>
      </div>

      {/* Proyecto 3: Pentesting */}
      <div
        className="proyecto"
        ref={(el) => (proyectosRef.current[2] = el)}
      >
        <div className="proyecto-imagen">
          <img src="/images/pentesting.png" alt="Proyecto Pentesting" />
        </div>
        <div className="proyecto-descripcion">
          <h3>Curso de Pentesting</h3>
          <p>
            Curso intensivo de Pentesting, donde se realizaron auditorías de seguridad a sistemas y aplicaciones 
            web. Se utilizó una variedad de herramientas para identificar vulnerabilidades y realizar pruebas de 
            penetración, tanto manuales como automatizadas.
          </p>
          <p><strong>Tecnologías usadas:</strong> Metasploit, Kali Linux, NetDiscoverd, John The Ripper, Latex</p>
          <Link to="/proyecto/pentesting">
            <button className="detalle-button">Ver Detalles</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
