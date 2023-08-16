import error404 from '../assets/recursos/404.png'
import { Link } from 'react-router-dom'

function Error404(){
    return(
        <>
        <div className='flex flex-col items-center p-44'>
                <div>
                <img 
                src={error404}
                className="w-96 h-96"
          />
                </div>

                <div>
                        <h1 className='text-center text-3xl my-5'> Lo siento </h1>
                        <p className='text-center text-lg'> Parece que la página a la que quieres acceder no existe </p>
                      <p className=" text-center border-solid border-2 border-blue-600 hover:bg-blue-600 hover:text-white rounded-full w-40 mx-auto my-6 py-2 px-4" > <Link to="/"> Volver a inicio </Link> </p>  
                </div>
        </div>
         
        </>
        )

}

export default Error404