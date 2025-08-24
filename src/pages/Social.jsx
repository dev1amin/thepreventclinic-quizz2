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
    <div className="min-h-screen bg-white">
      <section className="px-8 pt-8 opacity-0 animate-appear animation-delay-250">
        <div className="max-w-md mx-auto text-center">
          <img 
            src="../images/zenfitlogo.jpg" 
            alt="ZenFit" 
            className="w-20 mx-auto mb-5 block"
          />
          
          <h1 className="text-lg font-bold leading-tight tracking-tight mb-3">
            Mais de 100 mil mulheres
          </h1>
          
          <span className="block text-sm leading-relaxed mb-4">
            já descobriram a causa do cansaço com este teste
          </span>
          
          <div className="block">
            <div className="w-full block mb-2">
              <img 
                src="../images/Continuar.jpg" 
                alt="Mais de 100 mil mulheres" 
                className="mx-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 w-full">
        <button
          onClick={() => navigate('/question/1')}
          className={`w-auto mx-4 mb-4 block text-center font-bold text-sm py-4 px-6 no-underline rounded-lg transition-all duration-200 bg-primary text-white hover:bg-primary-hover ${
            showButton ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ animationDelay: '500ms' }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Social;