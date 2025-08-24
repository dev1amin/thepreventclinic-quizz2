import { useState, useEffect } from 'react';
import QuizLayout from '../components/QuizLayout';

const Final = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QuizLayout currentStep={11}>
      <h1 className="text-lg font-bold leading-tight tracking-tight mb-3">
        Seu Protocolo Personalizado de 28 dias
      </h1>
      
      <span className="block text-sm leading-relaxed mb-4">
        De acordo com suas respostas, você pode recuperar energia, foco e libido em poucas semanas.
      </span>
      
      <div className="block p-0 rounded-lg my-5">
        <div className="flex">
          <div className="w-full block px-3 my-3">
            <div className="flex items-center justify-center">
              <img src="../images/alert.webp" alt="" className="w-4 h-4 mr-2" />
              <span className="block text-sm font-bold">ANTES</span>
            </div>
          </div>
          <div className="w-full block px-3 my-3">
            <div className="flex items-center justify-center">
              <img src="../images/icons/goal.webp" alt="" className="w-4 h-4 mr-2" />
              <span className="block text-sm font-bold">DEPOIS</span>
            </div>
          </div>
        </div>

        <div className="flex bg-white p-2">
          <div className="w-full block px-2">
            <img 
              src="../images/before-flt.png" 
              alt="Antes do protocolo" 
              className="w-full max-w-48 block mx-auto"
            />
          </div>
          <div className="w-full block px-2">
            <img 
              src="../images/after-flt.png" 
              alt="Depois do protocolo" 
              className="w-full max-w-48 block mx-auto"
            />
          </div>
        </div>
      </div>

      <a
        href="https://pay.iexperience.com.br/f76010c2"
        className={`w-full block text-center font-bold text-sm py-4 no-underline rounded-lg transition-all duration-200 bg-primary text-white hover:bg-primary-hover ${
          showButton ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ animationDelay: '1s' }}
      >
        Ver meu protocolo
      </a>
    </QuizLayout>
  );
};

export default Final;