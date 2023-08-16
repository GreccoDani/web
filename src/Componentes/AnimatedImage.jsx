import  { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const AnimatedImage = ({ src, alt, className }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true, // Para que la animación solo se ejecute una vez al hacer scroll
      threshold: 0.5, // Ajusta el valor del threshold según tus necesidades
    });
  
    useEffect(() => {
      if (inView) {
        controls.start({ x: 0, opacity: 1 }); // Inicia la animación cuando el componente está en la vista
      } else {
        controls.start({ x: -100, opacity: 0 }); // Devuelve la imagen a su posición inicial cuando está fuera de la vista
      }
    }, [controls, inView]);
  
    return (
      <motion.img
        ref={ref}
        src={src}
        alt={alt}
        className={`h-auto ${className}`}
        initial={{ x: -100, opacity: 0 }} // Posición inicial y opacidad de la imagen
        animate={controls} // Animación controlada por el hook useAnimation
        transition={{ duration: 0.8 }} // Duración de la transición
      />
    );
  };

  export default AnimatedImage