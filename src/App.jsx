 
import './App.css'
import Navbar   from './Componentes/Nav'
import Inicio from './Componentes/Inicio'
import  Nosotros from './Componentes/Nosotros'
import Servicios from './Componentes/Servicios'
import PlanTrabajo from './Componentes/PlanTrabajo'
import Contacto  from  './Componentes/Contacto'
import PreguntasFrecuentes from './Componentes/PreguntasFrecuentes'
import Footer from './Componentes/Footer'
function App() {
   
  return (
    <>
          <Navbar />
          <Inicio />
          <Nosotros />
          <Servicios />
          <PlanTrabajo />
          <Contacto />
          <PreguntasFrecuentes />
          <Footer />
    </>
  )
}

export default App
