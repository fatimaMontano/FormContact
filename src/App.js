
import React, { useRef } from 'react';
import './App.css'; 
import emailjs from '@emailjs/browser'
import ReCAPTCHA from "react-google-recaptcha"

function App() { 

  const onChange=() => {
    console.log('Hubo un cambio');
   }
 const form = useRef();
 const sendEmail = (e) => {e.preventDefault();
 const templateId = "template_dmaform"
 const serviceId = "service_dmaform"
 const apikey = "dgPzK_AqynEdRfNJ1"

 emailjs.sendForm(serviceId, templateId, form.current, apikey)
 .then(
   (result) => {console.log(result.text); },

   (error) => { console.log(error.text); }
 );
 };

   return ( 
   <div> <h1>Contacto</h1> 
     <form className='cf' ref={form} onSubmit={sendEmail}> 
       <div> 
         <input type='nombre' placeholder='Nombre' name='user_nombre' /> 
         <input type='correo' placeholder='Correo electrónico' name='user_correo' /> 
         <input type='institucion' placeholder='Institución o empresa' name='user_institucion' /> 
       </div> 

       <div> 
         <textarea name='mensaje' type='text' placeholder='Mensaje'></textarea> 
       </div> 
       <div className='recaptcha'>
        <ReCAPTCHA
          sitekey="6Lck65UlAAAAANh2pGeM3J3DCRmT4mZYzU5cKEZp"
          onChange={onChange}
          ></ReCAPTCHA>
       </div>
       <input type='submit' value='Enviar' id='input-submit' /> 
     </form> 
   </div> 
   ); 
 } 
export default App;