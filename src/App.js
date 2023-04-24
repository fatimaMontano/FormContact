
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
      <div>class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">Por favor</strong>
        <span class="block sm:inline">llenar los campos requeridos</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
      </div>
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
    <div id="web">
      <INFO></INFO>
      <div id="form">
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
          <p id="footer">2023 DMA Research and Data Analytics | Edificio Kinétika nivel B, calle El Carmen, Santa Tecla, La Libertad, El Salvador</p>
        </div>

      </div>

    </div>
  );
}
export default App;
