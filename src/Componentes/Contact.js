import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Importamos emailjs para el envío de correos
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Enviando...');

    emailjs.send('service_f5smx0c', 'template_8emy3if', formDetails, '5H1AscTqVNmwPS9z3')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setButtonText('Enviar');
        setStatus({ success: true, message: 'Mensaje enviado exitosamente!' });
      }, (error) => {
        console.log('FAILED...', error);
        setButtonText('Enviar');
        setStatus({ success: false, message: 'Error al enviar el mensaje. Inténtalo nuevamente.' });
      });
  };

  return (
    <div className="contact-page">
      <div className="header-section">
        <h1>Contacto</h1>
        <p>Estás a un clic de distancia de contactarme. ¡Hablemos!</p>
      </div>

      <div className="contact-info-section">
        <div className="contact-info-item">
          <FaPhoneAlt />
          <p>+593 979 376 609</p>
        </div>
        <div className="contact-info-item">
          <FaEnvelope />
          <p>thiago.reyes23@gmail.com</p>
        </div>
        <div className="contact-info-item">
          <FaMapMarkerAlt />
          <p>QUITO - ECUADOR</p>
        </div>
        <div className="contact-info-item">
          <FaGlobe />
          <p>www.focusforce.com</p>
        </div>
        <div className="contact-info-item">
          <FaLinkedin />
          <p>https://n9.cl/pl1fs</p>
        </div>
      </div>

      <div className="form-section">
        <h2>Envíame un mensaje</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Nombre" value={formDetails.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
            <input type="text" placeholder="Apellido" value={formDetails.lastName} onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Correo" value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} required />
            <input type="tel" placeholder="Teléfono" value={formDetails.phone} onChange={(e) => onFormUpdate('phone', e.target.value)} />
          </div>
          <textarea placeholder="Mensaje" rows="6" value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
          <button type="submit">{buttonText}</button>
          {status.message && <p className={status.success ? "success" : "error"}>{status.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
