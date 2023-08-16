import imgPrincipal from '../assets/recursos/imgPrincipal.png'
import { motion } from 'framer-motion';

const FloatingImage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.img
        src={imgPrincipal}
        alt="Imagen"
        className="w-64 h-64 rounded-full shadow-md"
        initial={{ y: 0 }} // Posición inicial de la animación
        animate={{ y: [-8, 0, -8] }} // Array con valores para el efecto de flotación
        transition={{ yoyo: Infinity, duration: 3 }} 
      />
    </div>
  );
};

export default FloatingImage;
