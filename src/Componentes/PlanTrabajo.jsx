import reunion from '../assets/recursos/reunion.png'
import planificacion from '../assets/recursos/planificacion.png'
import maquetacion from '../assets/recursos/maquetacion.png'
import entrega from '../assets/recursos/entrega.png'
import flechaDerecha from '../assets/recursos/flechaDerecha.png'
import flechaIzquierda from '../assets/recursos/flechaIzquierda.png'
import AnimatedImage from './AnimatedImage.jsx'

 

function PlanTrabajo(){
    return(
        <>
            <section className="my-20" id="plantrabajo">
           
                <h1 className="text-center text-xl mt-20 font-poppins lg:text-5xl font-semibold md:w-3/6 mx-auto"> 
                 ¿Cómo se transforma tu idea en una web?
                 </h1>
                 <div className="flex flex-col items-center">
                        <div className="my-8 md:flex items-center  bg-no-repeat bg-right bg-[url('assets/recursos/forma-3.png')] bg-[length:200px_200px]  md:bg-[length:300px_400px] ">
                            <div className="mt-8">
                            <AnimatedImage src={reunion} alt='Reunion con cliente' className="w-72 p-6 md:w-full md:max-w-lg md:mx-auto" />
                                {/* <img src={reunion} alt='Reunion con cliente' className="h-auto w-72 p-6 md:w-full md:max-w-lg md:mx-auto " /> */}
                            </div>
                            <div>
                                <p className="text-center  md:text-center md:ml-6 md:text-xl lg:text-3xl w-96">Hablamos sobre las ideas de tu proyecto</p>
                            </div>
                        </div>

                        <div className="mt-8 md:flex md:items-center">
                            <img src={flechaDerecha} className=" w-16" />
                        </div>

                        <div className="mt-8 md:flex md:flex-row-reverse md:items-center  bg-no-repeat bg-left bg-[url('assets/recursos/forma-2.png')] bg-[length:200px_200px]  md:bg-[length:300px_400px] ">
                            <div>
                            <AnimatedImage src={planificacion} alt='Trabajo de planificacion de proyecto' className="w-72 p-6 md:w-full md:max-w-lg mx-auto" />
                                 {/* <img src={planificacion} alt='Reunion con cliente' className="h-auto w-72 p-6 mx-auto md:w-full md:max-w-lg md:mx-auto  " /> */}
                            </div>
                            <div>
                                <p className='  text-center  md:text-center md:ml-6 md:text-xl lg:text-3xl w-96'>Creamos un diseño que se adapte a tus necesidades</p>
                            </div>
                        </div>

                        <div className="mt-8">
                        <img src={flechaIzquierda} className=" w-16" />
                        </div>
                    
                        <div className="mt-8 md:flex md:items-center  bg-no-repeat bg-right bg-[url('assets/recursos/forma-4.png')] bg-[length:200px_200px]  md:bg-[length:300px_400px]  ">
                            <div>
                            <AnimatedImage src={maquetacion} alt='Maquetación del sitio web' className="w-72 p-6 md:w-full md:max-w-lg md:mx-auto" />
                                  {/* <img src={maquetacion} alt='Maquetacion del sitio' className="h-auto  w-72 p-6 md:w-full md:max-w-lg md:mx-auto "/> */}
                            </div>
                            <div>
                                  <p className='text-center  md:text-center md:ml-6 md:text-xl lg:text-3xl w-96'>Maquetamos tu sitio en el tiempo acordado</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <img src={flechaDerecha} className="w-16" />
                        </div>

                        <div className="mt-8">
                            <div>
                            <AnimatedImage src={entrega} alt='Chequeo y entrega del trabajo' className="w-72 p-6 md:w-full md:max-w-lg md:mx-auto" />
                                {/* <img src={entrega} alt='entrega del sitio' className="h-auto  w-72 p-6 md:w-full md:max-w-lg md:mx-auto "/> */}
                            </div>
                            <div>
                                <p className="text-center md:text-xl  lg:text-3xl"> ¡Y listo ! </p>
                                <p className='text-center md:text-xl  lg:text-3xl'> Tu web en línea</p>
                            </div>
                        </div>
                 </div>
            </section>
        </>
        )
}

export default PlanTrabajo