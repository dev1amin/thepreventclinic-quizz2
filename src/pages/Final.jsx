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
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        {/* Title */}
        <h1 className="text-2xl font-bold leading-tight mb-4 text-gray-900">
          Seu Protocolo Personalizado de 28 dias
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-8 font-light">
          De acordo com suas respostas, você pode recuperar energia, foco e libido em poucas semanas.
        </p>
        
        {/* Before/After Section */}
        <div className="mb-10">
          {/* Headers */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <img src="/images/alert.webp" alt="" className="w-5 h-5 mr-2" />
                <span className="font-bold text-gray-900">ANTES</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <img src="/images/icons/goal.webp" alt="" className="w-5 h-5 mr-2" />
                <span className="font-bold text-gray-900">DEPOIS</span>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <img 
                  src="/images/before-flt.png" 
                  alt="Antes do protocolo" 
                  className="w-full max-w-32 mx-auto object-contain"
                />
              </div>
              <div className="text-center">
                <img 
                  src="/images/after-flt.png" 
                  alt="Depois do protocolo" 
                  className="w-full max-w-32 mx-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://pay.iexperience.com.br/f76010c2"
          className={`w-full block text-center bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 hover-lift no-underline ${
            showButton ? 'opacity-100 animate-slide-up' : 'opacity-0'
          }`}
        >
          Ver meu protocolo personalizado
        </a>
        
        {/* Small text */}
        <p className="text-xs text-gray-500 mt-6 text-center">
          Protocolo baseado em suas respostas • Suporte especializado incluído
        </p>
      </div>
    </QuizLayout>
  );
};

export default Final;