import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import CircleProgress from '../components/CircleProgress';
import BarChart from '../components/BarChart';
import { calculateScores, getResultStatus, getProfileImage } from '../utils/scoreCalculator';

const Analysis = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showCharts, setShowCharts] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  // Simular respostas do usuário (em uma implementação real, viria do contexto/estado)
  const userAnswers = [0, 1, 1, 2, 1, 0, 2, 1]; // Exemplo de respostas
  const scores = calculateScores(userAnswers);
  const resultStatus = getResultStatus(scores.overall);
  const profileImage = getProfileImage(scores.overall);

  const chartData = [
    { label: 'MOTIVAÇÃO', value: scores.energia },
    { label: 'RESULTADO', value: scores.libido },
    { label: 'METABOLISMO', value: scores.clareza },
    { label: 'PREPARO', value: scores.recuperacao }
  ];

  useEffect(() => {
    const chartsTimer = setTimeout(() => {
      setShowCharts(true);
    }, 3000);

    const noticeTimer = setTimeout(() => {
      setShowNotice(true);
    }, 5000);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 6000);

    return () => {
      clearTimeout(chartsTimer);
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
            {/* Title */}
            <h1 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Análise inicial do seu perfil
            </h1>
            
            {/* Top Section - Score and Profile */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Score Circle */}
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center">
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-4">
                  SUA PONTUAÇÃO:
                </div>
                <CircleProgress value={scores.overall / 100} size={120} delay={1000} showLabel={false} />
              </div>

              {/* Profile Result */}
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center relative">
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${resultStatus.color}`}>
                  Resultado: {resultStatus.text} 😊
                </div>
                <div className="w-24 h-24 rounded-full overflow-hidden mt-4">
                  <img 
                    src={profileImage}
                    alt="Perfil analisado" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bar Charts */}
            <div className={`transition-opacity duration-500 mb-6 ${showCharts ? 'opacity-100' : 'opacity-0'}`}>
              <BarChart data={chartData} delay={500} />
            </div>

            {/* Notice */}
            <div className={`bg-primary-light rounded-2xl p-6 mb-6 transition-all duration-500 ${showNotice ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Protocolo de 28 dias quase pronto!
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    De acordo com as suas primeiras respostas, você está pronta 
                    para ter resultados incríveis em 28 dias com o nosso plano.
                  </p>
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <button
              onClick={() => navigate('/final')}
              className={`w-full bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 ${
                showButton ? 'opacity-100 animate-slide-up' : 'opacity-0'
              }`}
            >
              Continuar
            </button>
          </div>
        </main>
      )}
    </div>
  );
};

export default Analysis;