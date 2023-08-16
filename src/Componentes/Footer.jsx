 
import instagram from '../assets/recursos/instagram.png'
import email from '../assets/recursos/email.png'
import { Link } from 'react-scroll'

function Footer(){
    return(
        <>

            <div className="flex bg-[#15598C] rounded-tl-xl rounded-tr-xl justify-evenly py-6">
                <div>
                    <ul>
                        <li className='py-3'> 
                        <Link
                            to="inicio"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className=" transition-all duration-200 cursor-pointer text-white  hover:text-orange-500">
                            Inicio
                            </Link>
                        </li>
                        <li className='py-3'> 
                        <Link
                            to="nosotros"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className=" transition-all duration-200 cursor-pointer text-white  hover:text-orange-500">
                            Nosotros
                            </Link>
                        </li>
                        <li className='py-3'> 
                        <Link
                            to="servicios"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className=" transition-all duration-200 cursor-pointer text-white  hover:text-orange-500">
                            Servicios
                            </Link>
                        </li>
                        <li className='py-3'> 
                        <Link
                            to="contacto"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className=" transition-all duration-200 cursor-pointer text-white  hover:text-orange-500">
                            Contacto
                            </Link>
                        </li>
                    </ul>
                </div>


                    <div className="flex flex-col items-center h-20 my-4">
                    <div>
                        <a href="https://instagram.com/gdesigns_web?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                        <img 
                            src={instagram}
                            alt="logo instagram"
                            className='w-10 mx-auto py-6'/>
                        
                        </a>
                        </div>

                        <div>
                        <Link
                            to="contacto"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className=" transition-all duration-200 cursor-pointer  hover:text-orange-500">
                            <img 
                                src={email}
                                alt="logo email"
                                className='w-10 mx-auto py-6'
                                />  
                            </Link>
                           
                                 
                                
                        </div>
                    </div>
                    
                    
                        
                    </div>
                    <div className="text-center text-sm md:text-sm bg-[#15598C] text-white py-6 border-t-2  border-white" >
                        <p>© Copyright {new Date().getFullYear()} GDesigns Web Design, Todos los derechos reservados</p> 
                        </div>
        </>
        )       

}

export default Footer