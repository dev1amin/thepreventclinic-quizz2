import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PreventLogo from '../components/PreventLogo';

const Social = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="px-6 pt-16 pb-12">
        <div className="max-w-md mx-auto text-center animate-fade-in">
          <div className="bg-white rounded-3xl p-10 shadow-sm">
            {/* Logo */}
            <div className="mb-8">
              <PreventLogo className="w-40 h-12 mx-auto" />
            </div>
            
            {/* Statistic Circle */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full border-4 border-primary flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100k+</div>
                  <div className="text-xs text-gray-600 font-medium">mulheres</div>
                </div>
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-2xl font-bold leading-tight mb-4 text-gray-900">
              Mais de 100 mil mulheres
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-8 font-light">
              já descobriram a causa do cansaço com este teste
            </p>
            
            {/* Social Proof Image */}
            <div className="mb-10">
              <img 
                src="/images/Continuar.jpg" 
                alt="Mulheres que fizeram o teste" 
                className="mx-auto max-w-full rounded-2xl shadow-sm"
              />
            </div>

            {/* Continue Button */}
            <button
              onClick={() => navigate('/question/1')}
              className={`w-full bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 hover-lift ${
                showButton ? 'opacity-100 animate-slide-up' : 'opacity-0'
              }`}
            >
              Começar teste
            </button>
            
            {/* Small text */}
            <p className="text-xs text-gray-500 mt-6">
              Teste gratuito • 2 minutos • Resultados personalizados
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Social;