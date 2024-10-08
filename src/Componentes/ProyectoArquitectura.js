import React from 'react';

const ProyectoArquitectura = () => {
  return (
    <div className="proyecto-detalle">
      {/* Título del proyecto */}
      <h2 className="proyecto-titulo">Proyecto de Arquitectura en Google Cloud</h2>

      {/* Imagen destacada del proyecto */}
      <div className="proyecto-imagen-container">
        <img src="/images/arquitectura_proyecto.png" alt="Proyecto Arquitectura" className="proyecto-imagen-detalle" />
      </div>

      {/* Descripción detallada */}
      <section className="proyecto-descripcion">
        <h3>Descripción del Proyecto</h3>
        <p>
          El objetivo de este proyecto fue crear una arquitectura en Google Cloud utilizando diversas tecnologías, tanto para la base de datos como para el servidor y varios clientes que interactúan con el sistema.
        </p>
      </section>

      {/* Tecnologías usadas con animación */}
      <section className="tecnologias-usadas">
        <h3>Tecnologías Usadas</h3>
        <div className="tecnologias-grid">
          <div className="tecnologia">
            <img src="/images/google-cloud_logo.png" alt="Google Cloud" className="tecnologia-icono" />
            <p>Google Cloud</p>
          </div>
          <div className="tecnologia">
            <img src="/images/sqlserver-logo.png" alt="SQL Server" className="tecnologia-icono" />
            <p>SQL Server</p>
          </div>
          <div className="tecnologia">
            <img src="/images/visual-logo.png" alt="Visual Studio" className="tecnologia-icono" />
            <p>Visual Studio</p>
          </div>
          <div className="tecnologia">
            <img src="/images/android_studio_logo.png" alt="Android Studio" className="tecnologia-icono" />
            <p>Android Studio</p>
          </div>
          <div className="tecnologia">
            <img src="/images/postman_logo.png" alt="Post Man" className="tecnologia-icono" />
            <p>Postman</p>
          </div>
          <div className="tecnologia">
            <img src="/images/powershell_logo.png" alt="Power Shell" className="tecnologia-icono" />
            <p>Power Shell</p>
          </div>
          <div className="tecnologia">
            <img src="/images/dotnet_logo.png" alt="Dotnet" className="tecnologia-icono" />
            <p>DotNet</p>
          </div>
        </div>
      </section>

      {/* Pasos del proyecto */}
      <section className="proyecto-pasos">
        <h3>Paso a Paso del Desarrollo</h3>
        <div className="paso-container">
          <div className="paso-item derecha">
            <h4>Paso 1: Registro en Google Cloud</h4>
            <p>Registro en Google Cloud Platform con una cuenta educativa para obtener créditos gratuitos y acceso a los servicios de la nube.</p>
            <img src="/images/paso1_arquitectura.png" alt="Registro en Google Cloud" className="paso-imagen" />
          </div>
          <div className="paso-item izquierda">
            <h4>Paso 2: Creación de Instancia en Google Cloud</h4>
            <p>Se creó una instancia en Google Cloud SQL para alojar la base de datos del proyecto.</p>
            <img src="/images/paso2_arquitectura.png" alt="Instancia Google Cloud" className="paso-imagen" />
          </div>
          <div className="paso-item derecha">
            <h4>Paso 3: Creación de la Base de Datos</h4>
            <p>Configuración y creación de la base de datos 'eurekabank' en SQL Server dentro de Google Cloud.</p>
            <img src="/images/paso3_arquitectura.png" alt="Creación Base de Datos" className="paso-imagen" />
          </div>
          <div className="paso-item izquierda">
            <h4>Paso 4: Creación del Servidor</h4>
            <p>Desarrollo del proyecto servidor utilizando ASP.NET Core Web API en Visual Studio, conectando con la base de datos.</p>
            <img src="/images/paso4_arquitectura.png" alt="Creación del Servidor" className="paso-imagen" />
          </div>
          <div className="paso-item derecha">
            <h4>Paso 5: Pruebas del Servidor</h4>
            <p>Realización de pruebas de los servicios desarrollados utilizando Postman para verificar la conexión y funcionalidad.</p>
            <img src="/images/paso5_arquitectura.png" alt="Pruebas del Servidor" className="paso-imagen" />
          </div>
          <div className="paso-item izquierda">
            <h4>Paso 6: Cliente Web</h4>
            <p>Creación de un cliente web utilizando ASP.NET Core MVC para gestionar las transacciones del banco.</p>
            <img src="/images/paso6_arquitectura.png" alt="Cliente Web" className="paso-imagen" />
          </div>
          <div className="paso-item derecha">
            <h4>Paso 7: Cliente Escritorio</h4>
            <p>Desarrollo de un cliente de escritorio con Windows Forms en Visual Studio para interactuar con el servidor.</p>
            <img src="/images/paso7_arquitectura.png" alt="Cliente Escritorio" className="paso-imagen" />
          </div>
          <div className="paso-item izquierda">
            <h4>Paso 8: Cliente Consola</h4>
            <p>Implementación de un cliente en consola con Aplicacion de consola para realizar pruebas de conexión con el servidor.</p>
            <img src="/images/paso8_arquitectura.png" alt="Cliente Consola" className="paso-imagen" />
          </div>
          <div className="paso-item derecha">
            <h4>Paso 9: Cliente Móvil</h4>
            <p>Creación de una aplicación móvil en Android Studio utilizando una arquitectura basada en Android Views.</p>
            <img src="/images/paso9_arquitectura.png" alt="Cliente Móvil" className="paso-imagen" />
          </div>
        </div>
      </section>

      {/* Botón para descargar la documentación */}
      <div className="descargar-documentacion">
        <a href="/documentacion/arquitectura.pdf" download className="descargar-boton">
          Descargar Documentación
        </a>
      </div>
    </div>
  );
};

export default ProyectoArquitectura;
