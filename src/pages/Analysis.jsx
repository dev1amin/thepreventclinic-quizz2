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
    const graphicsTimer = setTimeout(() => {
      setShowGraphics(true);
    }, 8500);

    const noticeTimer = setTimeout(() => {
      setShowNotice(true);
    }, 11000);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 12000);

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
    <div className="min-h-screen bg-gray-50">
      <LoadingScreen onComplete={handleLoadingComplete} />
      
      {showAnalysis && (
        <main className="px-6 pt-8 pb-12">
          <div className="max-w-md mx-auto animate-fade-in">
            <div className="rounded-3xl p-8 shadow-sm">
              {/* Title */}
              <h1 className="text-2xl font-bold leading-tight text-center mb-8 text-gray-900">
                Análise do seu perfil
              </h1>
              
              {/* Results Container */}
              <div className={`transition-opacity duration-500 ${showGraphics ? 'opacity-100' : 'opacity-0'}`}>
                {/* Score Circle */}
                <div className="text-center mb-8">
                  <CircleProgress value={0.63} />
                </div>

                {/* Profile Image */}
                <div className="text-center mb-8">
                  <div className="inline-block bg-primary-light text-primary text-sm px-4 py-2 font-semibold rounded-full mb-4">
                    ⚠️ Desequilíbrio Hormonal Detectado
                  </div>
                  <div className="w-32 h-32 mx-auto">
                    <img 
                      src="/images/mulher_30anos_modelo2.webp" 
                      alt="Perfil analisado" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Metrics */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-8 h-16 bg-gray-200 rounded-lg mx-auto relative overflow-hidden">
                        <div className="w-full bg-primary absolute bottom-0 rounded-b-lg graphics1-animation flex items-end justify-center">
                          <span className="text-xs text-white font-bold pb-1">45%</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <img src="/images/fire.png" alt="" className="w-5 h-5 mx-auto mb-1" />
                        <span className="text-xs font-semibold text-gray-700">ENERGIA</span>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-8 h-16 bg-gray-200 rounded-lg mx-auto relative overflow-hidden">
                        <div className="w-full bg-primary absolute bottom-0 rounded-b-lg graphics2-animation flex items-end justify-center">
                          <span className="text-xs text-white font-bold pb-1">32%</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <img src="/images/Triste2.png" alt="" className="w-5 h-5 mx-auto mb-1" />
                        <span className="text-xs font-semibold text-gray-700">LIBIDO</span>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-8 h-16 bg-gray-200 rounded-lg mx-auto relative overflow-hidden">
                        <div className="w-full bg-primary absolute bottom-0 rounded-b-lg graphics3-animation flex items-end justify-center">
                          <span className="text-xs text-white font-bold pb-1">58%</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <img src="/images/Estresse.png" alt="" className="w-5 h-5 mx-auto mb-1" />
                        <span className="text-xs font-semibold text-gray-700 text-center">CLAREZA</span>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-8 h-16 bg-gray-200 rounded-lg mx-auto relative overflow-hidden">
                        <div className="w-full bg-primary absolute bottom-0 rounded-b-lg graphics4-animation flex items-end justify-center">
                          <span className="text-xs text-white font-bold pb-1">41%</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <img src="/images/icons/timer.webp" alt="" className="w-5 h-5 mx-auto mb-1" />
                        <span className="text-xs font-semibold text-gray-700 text-center">RECUPERAÇÃO</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notice */}
                <div className={`bg-primary-light rounded-2xl p-6 mb-8 transition-opacity duration-500 ${showNotice ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex items-start">
                    <img src="/images/right.png" alt="" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Protocolo de otimização hormonal quase pronto!
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Seu corpo mostra sinais claros de desequilíbrio hormonal. Nosso protocolo de otimização hormonal + suporte com peptídeos está quase pronto para você.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <button
                onClick={() => navigate('/final')}
                className={`w-full bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 hover-lift ${
                  showButton ? 'opacity-100 animate-slide-up' : 'opacity-0'
                }`}
              >
                Ver meu protocolo
              </button>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default Analysis;