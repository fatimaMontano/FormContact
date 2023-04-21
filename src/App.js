
import React, { useRef } from 'react';
import './App.css'; 
import emailjs from '@emailjs/browser'
import ReCAPTCHA from "react-google-recaptcha"
import INFO from './components/info'

function App() {

  const form = useRef();

  const onChange=() => {
    console.log('Hubo un cambio');    
  }

  const validateInputs = () => {
    const inputs = form.current.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        return false;
      }
    }
    return true;
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateInputs()) {
      alert("Por favor, llenar todos los campos.");
      return;
    }

    const templateId = "template_dmaform";
    const serviceId = "service_dmaform";
    const apikey = "dgPzK_AqynEdRfNJ1";

    emailjs.sendForm(serviceId, templateId, form.current, apikey)
      .then(
        (result) => {
          console.log(result.text);
          // Limpiar campos de entrada después de enviar el correo electrónico
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <INFO></INFO>
      <div>
        <p>...in the meantime, you can reach using the following form:</p>
        <form className='cf' ref={form} onSubmit={sendEmail}>
          <div>
            <input type='nombre' placeholder='Name' name='user_nombre' />
            <input type='correo' placeholder='Email' name='user_correo' />
            <input type='institucion' placeholder='Organization' name='user_institucion' />
          </div>

          <div>
            <textarea name='mensaje' type='text' placeholder='Message'></textarea>
          </div>

          <div className='recaptcha'>
            <ReCAPTCHA
              sitekey="6Lck65UlAAAAANh2pGeM3J3DCRmT4mZYzU5cKEZp"
              onChange={onChange}
            ></ReCAPTCHA>
          </div>

          <input type='submit' value='Submit' id='input-submit' />

        </form>

        <div class="footer">
          <p>2023 DMA Research and Data Analytics | Edificio Kinétika nivel B, calle El Carmen, Santa Tecla, La Libertad, El Salvador</p>
        </div>

      </div>

    </div>
  );
}
export default App;
