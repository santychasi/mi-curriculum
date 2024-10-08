import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './Componentes/HeroSection';
import SobreMi from './Componentes/SobreMi';
import Proyectos from './Componentes/Proyectos';
import ProyectoVideojuegos from './Componentes/ProyectoVideojuegos';
import ProyectoArquitectura from './Componentes/ProyectoArquitectura';
import ProyectoPentesting from './Componentes/ProyectoPentesting';
import Certificaciones from './Componentes/Certificaciones';
import Contact from './Componentes/Contact'; // Importa Contact
import Footer from './Componentes/Footer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una carga inicial para la animación
    setTimeout(() => {
      const introAnimation = document.querySelector('.intro-animation');
      if (introAnimation) {
        introAnimation.classList.add('expand');
      }
    }, 100); // Inicia la animación después de 100ms

    setTimeout(() => {
      setLoading(false);
      const appElement = document.querySelector('.App');
      if (appElement) {
        appElement.classList.add('loaded');
      }
    }, 6000); // La animación dura 5 segundos + 1 segundo de margen
  }, []);

  return (
    <Router>
      <div className={`App ${loading ? 'loading' : ''}`}>
        {loading && (
          <div className="intro-animation">
            <video autoPlay muted className="intro-video">
              <source src="/videos/background-video.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          </div>
        )}
        {!loading && (  /* Mostrar contenido sólo si no está cargando */
          <>
            <Navbar className="new-navbar" />
            <Routes>
              <Route path="/" element={<><HeroSection /><SobreMi /><Proyectos /><Certificaciones /></>} />
              <Route path="/proyecto/videojuegos" element={<ProyectoVideojuegos />} />
              <Route path="/proyecto/arquitectura" element={<ProyectoArquitectura />} />
              <Route path="/proyecto/pentesting" element={<ProyectoPentesting />} />
              <Route path="/contact" element={<Contact />} /> {/* Ruta de la página de contacto */}
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;