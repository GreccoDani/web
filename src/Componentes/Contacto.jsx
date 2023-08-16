 
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import imgContact from '../assets/recursos/contacUs.png'
import Swal from 'sweetalert2';


 const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_rgq2u7n', 'template_ltxi7xs', form.current, '5FtSMwRCX1oEh3P_-')
      .then((result) => {
          console.log(result.text);
          Swal.fire('¡Éxito!', 'Mensaje enviado con éxito.', 'success');
    
          form.current.reset();
      })
      .catch((error) => {
          console.log(error.text);
          // Mostrar una alerta de error
          Swal.fire('¡Error!', 'No se pudo enviar el mensaje.', 'error');
      });
  };
  

  return (
    <>
     
    <section className="bg-blue-100" id='contacto'  > 
        <div className="md:flex  md:items-center md:justify-center">
            
            <div className="md:w-1/2">
              <img src={imgContact}
              className='w-72 md:w-96 mx-auto py-10' />
            </div>

            <div className="md:w-1/2">
                  <div className=" lg:w-4/5">
                      <h2 className=" text-center md:text-left lg:ml-4 text-4xl mt-9 font-poppins font-extrabold"> 
                        Contacto
                      </h2>
                      <h3 className="text-center ml-4 mt-6 text-3xl md:text-left text-blue-500 font-bold"><span>¿Tenés alguna duda?</span></h3>
                      <p className="text-center md:text-left text-lg ml-4 mt-1 mb-10 ">Queremos ayudarte a desarrollar tu proyecto. Completa el formulario y nos pondremos en contacto.</p>
                  </div>
          
          
                  <div className="">
                  <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto lg:mr-40 lg:ml-0 p-4 border rounded">
                  <div className="mb-4 border-none">
                      <label htmlFor="name" className="block text-gray-700 font-medium">Nombre</label>
                      <input
                      type="text"
                      id="name"
                      name="user_name"
                      className="mt-1 px-4 py-2 border w-full rounded-md focus:ring  "
                      required
                      />
                  </div>
                  <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                      <input
                      type="email"
                      id="email"
                      name="user_email"
                      className="mt-1 px-4 py-2 border w-full rounded-md focus:ring focus:ring-blue-200"
                      required
                      />
                  </div>
                  <div className="mb-4">
                      <label htmlFor="message" className=" block text-gray-700 font-medium">Mensaje</label>
                      <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-1 px-4 py-2 border w-full rounded-md focus:ring focus:ring-blue-200"
                      required
                      />
                  </div>
                    <button type="submit" className="px-4 py-2 w-32 bg-orange-400 text-white rounded-lg">Enviar</button>
                  </form>
                  </div>
            </div>
      </div>
   
    </section>
    </>
  );
};

export default Contacto

 