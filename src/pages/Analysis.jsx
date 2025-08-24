import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import CircleProgress from '../components/CircleProgress';

const Analysis = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showGraphics, setShowGraphics] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show graphics after loading
    const graphicsTimer = setTimeout(() => {
      setShowGraphics(true);
    }, 8500);

    // Show notice
    const noticeTimer = setTimeout(() => {
      setShowNotice(true);
    }, 2000);

    // Show button
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 11000);

    return () => {
      clearTimeout(graphicsTimer);
      clearTimeout(noticeTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  const handleLoadingComplete = () => {
    setShowAnalysis(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <LoadingScreen onComplete={handleLoadingComplete} />
      
      {showAnalysis && (
        <section className="px-8 pt-4 opacity-0 animate-appear">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-lg font-bold leading-tight tracking-tight mb-4">
              Análise inicial do seu perfil
            </h1>
            
            <div className={`mb-4 ${showGraphics ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
              <div className="flex mb-4">
                <div className="w-full">
                  <div className="block text-center p-4 rounded-lg">
                    <CircleProgress value={0.63} />
                  </div>
                </div>
                <div className="w-full">
                  <div className="bg-primary-light text-primary text-xs p-2 font-bold text-center rounded-md mb-2 ml-1">
                    Desequilíbrio Hormonal Detectado ⚠️
                  </div>
                  <div className="bg-white p-2 rounded-lg ml-1">
                    <img 
                      src="/images/mulher_30anos_modelo2.webp" 
                      alt="Análise inicial do seu perfil" 
                      className="max-w-32 mx-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="flex bg-white p-4 rounded-lg border border-gray-200 mb-4">
                <div className="flex-1 border-r border-gray-200 pr-2">
                  <div className="w-8 h-20 bg-gray-100 rounded-sm mx-auto relative">
                    <div className="w-full bg-primary absolute bottom-0 rounded-b-sm text-center graphics1-animation">
                      <span className="text-xs text-white font-bold">45%</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold mt-3 block">ENERGIA</span>
                </div>

                <div className="flex-1 border-r border-gray-200 px-2">
                  <div className="w-8 h-20 bg-gray-100 rounded-sm mx-auto relative">
                    <div className="w-full bg-primary absolute bottom-0 rounded-b-sm text-center graphics2-animation">
                      <span className="text-xs text-white font-bold">32%</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold mt-3 block">LIBIDO</span>
                </div>

                <div className="flex-1 border-r border-gray-200 px-2">
                  <div className="w-8 h-20 bg-gray-100 rounded-sm mx-auto relative">
                    <div className="w-full bg-primary absolute bottom-0 rounded-b-sm text-center graphics3-animation">
                      <span className="text-xs text-white font-bold">58%</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold mt-3 block">CLAREZA MENTAL</span>
                </div>

                <div className="flex-1 pl-2">
                  <div className="w-8 h-20 bg-gray-100 rounded-sm mx-auto relative">
                    <div className="w-full bg-primary absolute bottom-0 rounded-b-sm text-center graphics4-animation">
                      <span className="text-xs text-white font-bold">41%</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold mt-3 block">RECUPERAÇÃO</span>
                </div>
              </div>

              <div className={`bg-gradient-to-r from-primary-hover to-primary-hover p-4 rounded-lg mb-4 ${showNotice ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                <div className="flex items-start">
                  <img src="/images/right.png" alt="" className="w-4 mr-2 mt-0.5" />
                  <div className="text-left">
                    <span className="text-sm font-bold text-gray-800 block mb-1">
                      Protocolo de otimização hormonal quase pronto!
                    </span>
                    <span className="text-xs text-gray-800 leading-tight">
                      Seu corpo mostra sinais claros de desequilíbrio hormonal. Nosso protocolo de otimização hormonal + suporte com peptídeos está quase pronto para você.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate('/final')}
              className={`w-full block text-center font-bold text-sm py-4 no-underline rounded-lg transition-all duration-200 bg-primary text-white hover:bg-primary-hover mb-4 ${
                showButton ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Continuar
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Analysis;