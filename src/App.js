
import React, { useRef} from 'react';
import './App.css'; 
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import INFO from './components/info';
import TransitionAlerts from './components/alertas';


function App() {

  const form = useRef();
  const recaptchaRef = useRef(); // crea una referencia para ReCAPTCHA

  const [open, setOpen] = React.useState(false);

  //Cuando cambian los parámetros del recaptcha
  const onChange=() => {
    console.log('Hubo un cambio');    
  }

  //Validar inputs
  const validateInputs = () => {
    const inputs = form.current.querySelectorAll("input");
    let allInputsFilled = true;
  
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        showError(inputs[i]);
        if (inputs[i].hasAttribute('required')) {
          inputs[i].classList.add('required-error');
        }
        allInputsFilled = false;
      } else {
        if (inputs[i].classList.contains('required-error')) {
          inputs[i].classList.remove('required-error');
        }
      }
    }
  
    return allInputsFilled;
  };

  //Error que envían los inputs
  const showError = (input) => {
    setOpen(true);
  };

  //Enviar email
const sendEmail = (e) => {
  e.preventDefault();
  const requiredFields = ['user_nombre', 'user_correo', 'user_institucion'];

  if (!validateInputs() || !requiredFields.every(field => form.current[field].value)) {
    setOpen(true);
    console.log(open)
    return;
  }

<<<<<<< HEAD
=======
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
>>>>>>> 97a743576ce58bfb204cc3b4e021c3b99725ea0a

    //ID's de correo
    const templateId = "template_dmaform";
    const serviceId = "service_dmaform";
    const apikey = "dgPzK_AqynEdRfNJ1";

    emailjs.sendForm(serviceId, templateId, form.current, apikey)
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          recaptchaRef.current.reset();
          setOpen(false);
        },
        (error) => {
          console.log(error.text);
          setOpen(true);
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
            <input type='nombre' placeholder='Name' name='user_nombre' id='user_nombre' />
            <input type='correo' placeholder='Email' name='user_correo' id='user_correo'  />
            <input type='institucion' placeholder='Organization' name='user_institucion' id='user_institucion' />
          </div>

          <div>
            <textarea name='mensaje' type='text' placeholder='Message'></textarea>
          </div>

          <div className='recaptcha'>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Lck65UlAAAAANh2pGeM3J3DCRmT4mZYzU5cKEZp"
              onChange={onChange}
            ></ReCAPTCHA>
          </div>

          <TransitionAlerts open={open} setOpen={setOpen} />
          <input type='submit' value='Submit' id='input-submit' />

        </form>

        <div className="footer">
          <p id="footer">2023 DMA Research and Data Analytics | Edificio Kinétika nivel B, calle El Carmen, Santa Tecla, La Libertad, El Salvador</p>
          
        </div>

      </div>

    </div>
  );
}
export default App
