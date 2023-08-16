import { useState } from 'react';

const FaqSection = () => {
  const faqs = [
    {
      question: '¿Cuánto tiempo se tarda en diseñar una página web?',
      answer: 'El tiempo de diseño y desarrollo de una página web varía, dependiendo de la complejidad del proyecto. Sin embargo, cada uno de nuestros planes cuenta con un plazo establecido. Pero, para cumplir dichos plazos, será necesario contar con un flujo dinámico de envío y recepción de información para el contenido.',
    },
    {
        question: '¿Cómo quedan establecidas las condiciones?',
        answer: 'Al iniciar el proyecto, estableceremos las condiciones por escrito acorde al plan elegido, lo que obtendrán para su proyecto, tiempos y demás condiciones. Nuestra idea es siempre tener todo esclarecido para trabajar de la forma más prolija posible.',
      },
    {
      question: '¿Cómo es la modalidad de trabajo?',
      answer: 'Para comenzar el proyecto, se abona el 60% inicial. Pasados los días acordados o aprobado el diseño, se abona el monto restante. Una vez que comenzamos a trabajar en la plataforma, damos ingreso a un drive para cargar la información necesaria.',
    },
    {
      question: '¿Se ofrece servicio de mantenimiento y actualización después de la creación de la página web?',
      answer: 'Sí, ofrecemos servicios de mantenimiento y actualización después de la creación de la página web. Trabajamos con los clientes para establecer planes de mantenimiento regulares, con un abono relacionado al trabajo a realizar.',
    },
    {
      question: '¿Cómo puedo obtener soporte técnico si tengo problemas con el diseño de mi página web?',
      answer: 'Ofrecemos soporte técnico a través de correo electrónico, Whatsapp. Además, una vez entregada la web, contarás con 30 días de asistencia sin cargo.',
    },
  
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <section className="py-10 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8 text-orange-500">Preguntas frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center py-4">
                <h3 className="text-lg font-medium hover:text-orange-500">{faq.question}</h3>
                <span>{activeFaq === index ? '-' : '+'}</span>
              </div>
              {activeFaq === index && (
                <div className="py-4 border-t border-gray-300">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
