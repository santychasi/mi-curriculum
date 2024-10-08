import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa Link y useNavigate de react-router-dom

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); // Hook para redirigir manualmente

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);  // Si se ha hecho scroll más de 50px, aplica la clase 'scrolled'
      } else {
        setScrolled(false);  // Si está en la parte superior de la página, remueve la clase
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para manejar el clic en "Inicio"
  const handleInicioClick = () => {
    navigate('/'); // Redirige a la página principal
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza al inicio de la página
  };

  return (
    <nav className={`new-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="/images/logo.png" alt="Google Cloud" className="tecnologia-icono" />
      </div>
      
      <ul className="nav-links">
        {/* Link para ir al inicio */}
        <li>
          <button className="nav-button" onClick={handleInicioClick}>Inicio</button>
        </li>
        
        {/* Link para ir a la página de contacto */}
        <li>
          <Link className="nav-button" to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

