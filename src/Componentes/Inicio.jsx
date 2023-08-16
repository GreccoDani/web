
import imgPrincipal from '../assets/recursos/imgResponsive2.png'
import flecha from '../assets/recursos/flechaAbajo.png'
import { Link } from 'react-scroll';
// import FloatingImage from './FloatingImage'

function Inicio() {
   
    return (
      <div className="mt-12 md:pt-10 mx-10 lg:mx-24 bg-no-repeat bg-right bg-[url('assets/recursos/forma-1.png')] bg-[length:200px_250px] md:bg-[length:400px_500px] lg:bg-[length:400px_500px]" id="inicio">
              {/* <div className="mt-12 mx-10" id="inicio"> */}
            <div className="flex flex-col-reverse  justify-between items-center mt-10 md:flex-row md:mt-20 lg:justify-center">
                  <div>
                  <h1 className="font-poppins text-center text-3xl mb-4 md:text-left lg:text-4xl xl:text-6xl font-bold">¿Necesitas una <span className="text-sky-600">página web?</span>   </h1>
                  <p className=" md:w-auto text-center px-4 sm:w-96 md:text-left lg:text-lg xl:text-xl w-full">
                  Un sitio web es esencial para tu negocio o proyecto.
                  Conéctate con tu audiencia en el mundo digital. 
                  ¡Invierte y alcanza tus objetivos!
                  </p>
                <div className='flex flex-col md:flex-row mx-6'>
                <div className='md:mx-2'>
                  <p className="text-center  mx-auto w-32 p-2 my-4 rounded-lg border-solid border-2 bg-orange-500 border-orange-500 hover:bg-orange-400 hover:border-orange-400 text-white  transition-all duration-200 cursor-pointer  ">
                              <Link 
                                    to="contacto"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}>
                              Contáctanos</Link>
                        </p>
                </div>
                </div>
                 
                </div>
                <div className="my-10  ">
                      <img 
                      src={imgPrincipal}  
                      className=" w-96 md:w-3/4 md:ml-20 "
                      alt='Creador de sitios web'
                      />
                </div>  
            </div>
            <div className="flex justify-center w-20 mx-auto  hover:bg-slate-100 transition-all duration-500 rounded-full">
            <Link 
                  to="nosotros"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}>
            <img 
                  src={flecha}
                  alt="flecha hacia abajo"
                  width={32}
                  className="my-6 cursor-pointer"/>
                   </Link>
                
            </div>
      </div>
    )
  }
  
  export default Inicio