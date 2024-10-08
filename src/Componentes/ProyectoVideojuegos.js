import React from 'react';

const ProyectoVideojuegos = () => {
  return (
    <div className="proyecto-detalle">
      {/* Título del proyecto */}
      <h2 className="proyecto-titulo">Desarrollo de Videojuegos con Realidad Aumentada</h2>

      {/* Imagen destacada del proyecto */}
      <div className="proyecto-imagen-container">
        <img src="/images/ar_videojuegos.png" alt="Videojuegos" className="proyecto-imagen-detalle-principal" />
      </div>

      {/* Descripción detallada */}
      <section className="proyecto-descripcion">
        <h3>Descripción del Proyecto</h3>
        <p>
          En este proyecto, se implementó un carnet digital utilizando Realidad Aumentada (AR) con Unity y Vuforia Engine.
          El objetivo fue crear una experiencia interactiva que permita a los usuarios escanear un carnet físico y visualizar
          información adicional de forma virtual, como enlaces a redes sociales y contenido multimedia.
        </p>
        <ul>
          <li>Escaneo de imágenes en tiempo real mediante Vuforia.</li>
          <li>Integración de contenido multimedia dinámico en Unity.</li>
          <li>Optimización de la aplicación para diferentes plataformas.</li>
        </ul>
      </section>

      {/* Tecnologías usadas con animación */}
      <section className="tecnologias-usadas">
        <h3>Tecnologías Usadas</h3>
        <div className="tecnologias-grid">
          <div className="tecnologia">
            <img src="/images/unity-logo.png" alt="Unity" className="tecnologia-icono" />
            <p>Unity</p>
          </div>
          <div className="tecnologia">
            <img src="/images/vuforia-logo.png" alt="Vuforia" className="tecnologia-icono" />
            <p>Vuforia</p>
          </div>
          <div className="tecnologia">
            <img src="/images/csharp-logo.png" alt="C#" className="tecnologia-icono" />
            <p>C#</p>
          </div>
          <div className="tecnologia">
            <img src="/images/visual-logo.png" alt="Visual Studio" className="tecnologia-icono" />
            <p>Visual Studio</p>
          </div>
        </div>
      </section>

      {/* Pasos del proyecto con imágenes */}
      <section className="proyecto-pasos">
        <h3>Paso a Paso del Desarrollo</h3>
        <div className="paso-container">
          <div className="paso-item derecha">
            <div className="paso-texto">
              <h4>Paso 1</h4>
              <p>Registro en Vuforia y creación de la licencia para integrarla en Unity.</p>
            </div>
            <div className="paso-imagen">
              <img src="/images/paso1_videojuegos.png" alt="Paso 1" />
            </div>
          </div>
          <div className="paso-item izquierda">
            <div className="paso-texto">
              <h4>Paso 2</h4>
              <p>Generación del código de licencia y su ingreso en Unity para conectar con Vuforia.</p>
            </div>
            <div className="paso-imagen">
              <img src="/images/paso2_videojuegos.png" alt="Paso 2" />
            </div>
          </div>
          <div className="paso-item derecha">
            <div className="paso-texto">
              <h4>Paso 3</h4>
              <p>Uso de Vuforia para guardar los datos del carnet como imagen de referencia.</p>
            </div>
            <div className="paso-imagen">
              <img src="/images/paso3_videojuegos.png" alt="Paso 3" />
            </div>
          </div>
          <div className="paso-item izquierda">
            <div className="paso-texto">
              <h4>Paso 4</h4>
              <p>Escaneo del carnet y verificación de detección de la imagen mediante Vuforia.</p>
            </div>
            <div className="paso-imagen">
              <img src="/images/paso4_videojuegos.png" alt="Paso 4" />
            </div>
          </div>
          <div className="paso-item derecha">
            <div className="paso-texto">
              <h4>Paso 5</h4>
              <p>Resultado final: aplicación con íconos interactivos que redirigen a redes sociales y contenido multimedia.</p>
            </div>
            <div className="paso-imagen">
              <img src="/images/paso5_videojuegos.png" alt="Paso 5" />
            </div>
          </div>
        </div>
      </section>

      {/* Video del proyecto */}
      <section className="proyecto-video">
        <h3>Video del Proyecto</h3>
        <div className="video-container">
          <video controls className="proyecto-video-element">
            <source src="/videos/video_ar.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>
      </section>

      {/* Botón para descargar la documentación */}
      <div className="descargar-documentacion">
        <a href="/documentacion/videojuegos.pdf" download className="descargar-boton">
          Descargar Documentación
        </a>
      </div>
    </div>
  );
};

export default ProyectoVideojuegos;
