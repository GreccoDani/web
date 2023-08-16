import internet from '../assets/recursos/internet.png'
import responsive from '../assets/recursos/responsive.png'
import seo from '../assets/recursos/seo.png'

// import experienciaUsuario from '../assets/recursos/expUsuario.png'

function Servicios() {
return(
    <>
      <section className="py-20" id="servicios">
      <h2 className="text-center text-xl my-6 text-orange-500 font-extrabold">LO QUE OFRECEMOS</h2>
      <h3 className='text-center text-3xl py-6'>Una solución de diseño que te encantará</h3>
        <div className="flex items-center justify-evenly flex-wrap">



            <div className="border-solid border-2 bg-gray-50 my-6 rounded-lg p-6 h-80 mx-2 transition-transform duration-300 hover:shadow-lg hover:border-gray-400 hover:transform hover:-translate-y-2 cursor-pointer">
            <img src={internet} alt="Sitio web" className="w-20 mx-auto my-2" />
            <h2 className="text-center text-xl py-4 font-bold">Diseño web</h2>
            <p className="w-52 text-center">
              Creamos un sitio web funcional y atractivo, que se adapte a tus necesidades
              y te ayude a impulsar tu negocio
            </p>
          </div>

          <div className="border-solid border-2 bg-gray-50 my-6 rounded-lg p-6 h-80 mx-2 transition-transform duration-300 hover:shadow-lg hover:border-gray-400 hover:transform hover:-translate-y-2 cursor-pointer">
                <img src={responsive} alt="Diseño responsive" className="w-20 mx-auto my-2"/>
                <h2 className="text-center text-xl py-4 font-bold">Mobile first</h2>
                <p className="w-52 text-center"> 
                  Hacemos que tu sitio web sea resposive para todos los dispositivos
                </p>
            </div>

            <div className="border-solid border-2 bg-gray-50 my-6 rounded-lg p-6 h-80 mx-2 transition-transform duration-300 hover:shadow-lg hover:border-gray-400 hover:transform hover:-translate-y-2 cursor-pointer">
                <img src={seo}  alt="Posicionamiento" className="w-20 mx-auto my-2" />
                <h2 className="text-center text-xl py-4 font-bold">Posicionamiento</h2>
                <p className="w-52 text-center"> 
                  Tu visibilidad es importante para que tu negocio pueda crecer
                </p>
            </div>

        </div>
      </section>  
    </>
    )

}

export default Servicios