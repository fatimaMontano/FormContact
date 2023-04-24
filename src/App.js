
import React, { useRef} from 'react';
import './App.css'; 
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import INFO from './components/info';
import TransitionAlerts from './components/alertas';


function App() {

  const form = useRef();
  const recaptchaRef = useRef(); // crea una referencia para ReCAPTCHA

  const [open, setOpen] = React.useState(true);

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
    
  };

  //Enviar email
const sendEmail = (e) => {
  e.preventDefault();
  const requiredFields = ['user_nombre', 'user_correo', 'user_institucion'];

  if (!validateInputs() || !requiredFields.every(field => form.current[field].value)) {
    setOpen(true);
    return;
  }


    //ID's de correo
    const templateId = "template_dmaform";
    const serviceId = "service_dmaform";
    const apikey = "dgPzK_AqynEdRfNJ1";

    emailjs.sendForm(serviceId, templateId, form.current, apikey)
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          ReCAPTCHA.current.reset();
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
            <input type='nombre' placeholder='Name' name='user_nombre' id='user_nombre' required/>
            <input type='correo' placeholder='Email' name='user_correo' id='user_correo' required />
            <input type='institucion' placeholder='Organization' name='user_institucion' id='user_institucion' required/>
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
