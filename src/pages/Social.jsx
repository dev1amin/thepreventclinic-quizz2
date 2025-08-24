import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Social = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="px-6 pt-8 opacity-0 animate-appear animation-delay-250">
        <div className="max-w-lg mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <img 
              src="/images/zenfitlogo.jpg" 
              alt="ZenFit" 
              className="w-24 mx-auto mb-6 block"
            />
            
            <h1 className="text-2xl font-bold leading-tight mb-4 text-gray-900">
              Mais de 100 mil mulheres
            </h1>
            
            <p className="text-lg text-gray-600 mb-6">
              já descobriram a causa do cansaço com este teste
            </p>
            
            <div className="mb-8">
              <img 
                src="/images/Continuar.jpg" 
                alt="Mais de 100 mil mulheres" 
                className="mx-auto max-w-full rounded-xl"
              />
            </div>

            <button
              onClick={() => navigate('/question/1')}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 ${
                showButton ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Continuar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Social;