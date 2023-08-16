// src/components/Navbar.js
import  { useState } from 'react';
import { Link } from 'react-scroll';  
import menuHamburguesa from '../assets/recursos/menu.png'
import logo from '../assets/recursos/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center cursor-pointer">
      <Link 
      to='inicio'
      spy={true}
      smooth={true}
      duration={500}
      offset={-70}
      >
      <img src={logo} alt="Logo de GDesings" className="h-8" />
      </Link>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black p-2 focus:outline-none ">
            <img src={menuHamburguesa} alt="Menú" className="h-6" />
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="inicio"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="text-black text-center hover:border-orange-500 border-2 border-transparent py-2 px-4 rounded-full w-28 transition-all duration-300 cursor-pointer "
          >
            Inicio
          </Link>
          <Link
            to="nosotros"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="text-black text-center hover:border-orange-500 border-2 border-transparent py-2 px-4 rounded-full w-28 transition-all duration-300 cursor-pointer  "
          >
            Nosotros
          </Link>
          <Link
            to="servicios"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="text-black text-center hover:border-orange-500 border-2 border-transparent py-2 px-4 rounded-full w-28 transition-all duration-300 cursor-pointer  "
          >
            Servicios
          </Link>
          <Link
            to="contacto"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="text-black text-center hover:border-orange-500 border-2 border-transparent py-2 px-4 rounded-full w-28 transition-all duration-300 cursor-pointer  "
          >
            Contacto
          </Link>
        </div>
      </div>
      {/* Menú responsive */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-16 left-0 right-0 p-4 bg-white  flex flex-col justify-center`}
      >
        <Link
          to="inicio"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="block text-black mb-4 border-b-2 border-white text-center cursor-pointer pt-6 pb-2 hover:border-b-2 hover:border-orange-500 w-20 mx-auto transition duration-1100"
          onClick={toggleMenu}
        >
          Inicio
        </Link>
        <Link
          to="nosotros"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="block text-black mb-4 border-b-2 border-white text-center cursor-pointer pt-6 pb-2 hover:border-b-2 hover:border-orange-500 w-20 mx-auto transition duration-1100"
          onClick={toggleMenu}
        >
          Nosotros
        </Link>
        <Link
          to="servicios"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="block text-black mb-4 border-b-2 border-white text-center cursor-pointer pt-6 pb-2 hover:border-b-2 hover:border-orange-500 w-20 mx-auto transition duration-1100"
          onClick={toggleMenu}
        >
          Servicios
        </Link>
        <Link
          to="contacto"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="block text-black mb-4 border-b-2 border-white text-center cursor-pointer pt-6 pb-2 hover:border-b-2 hover:border-orange-500 w-20 mx-auto transition duration-1100"
          onClick={toggleMenu}
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
