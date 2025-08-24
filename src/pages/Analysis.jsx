import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import CircleProgress from '../components/CircleProgress';
import BarChart from '../components/BarChart';
import { calculateScores, getResultStatus, getProfileImage } from '../utils/scoreCalculator';

const Analysis = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [showCharts, setShowCharts] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  // Simular respostas do usuário (em uma implementação real, viria do contexto/estado)
  const userAnswers = [0, 1, 1, 2, 1, 0, 2, 1]; // Exemplo de respostas
  const scores = calculateScores(userAnswers);
  const resultStatus = getResultStatus(scores.overall);
  
  // Recuperar a idade selecionada na primeira página
  const selectedAge = localStorage.getItem('selectedAge') || '30-39';
  const profileImage = getProfileImage(selectedAge);

  const chartData = [
    { key: 'energia', label: 'ENERGIA', value: scores.energia },
    { key: 'libido', label: 'LIBIDO', value: scores.libido },
    { key: 'clareza', label: 'CLAREZA MENTAL', value: scores.clareza },
    { key: 'recuperacao', label: 'RECUPERAÇÃO', value: scores.recuperacao }
  ];

  useEffect(() => {
    const scoreTimer = setTimeout(() => {
      setShowScore(true);
    }, 1000);

    const chartsTimer = setTimeout(() => {
      setShowCharts(true);
    }, 2500);

    const noticeTimer = setTimeout(() => {
      setShowNotice(true);
    }, 3500);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 4000);

    return () => {
      clearTimeout(scoreTimer);
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
        <main className="px-6 pt-12 pb-12">
          <div className="max-w-md mx-auto animate-fade-in">
            {/* Title */}
            <h1 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Análise inicial do seu perfil
            </h1>
            
            {/* Top Section - Score and Profile */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Score Circle */}
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm border border-gray-200">
                <div className={`transition-all duration-1000 ${showScore ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <CircleProgress value={scores.overall / 100} size={145} delay={500} showLabel={false} />
                </div>
              </div>

              {/* Profile Result */}
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center relative shadow-sm border border-gray-200 overflow-hidden">
                {/* Status Badge */}
                <div className={`absolute top-3 left-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white text-center bg-primary transform ${showScore ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'} transition-all duration-700 delay-800`}>
                  Resultado: {resultStatus.text}
                </div>
                
                {/* Profile Image */}
                <div className={`w-20 h-20 rounded-full overflow-hidden mt-6 ring-2 ring-gray-200 transform ${showScore ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} transition-all duration-700 delay-1000`}>
                  <img 
                    src={profileImage}
                    alt="Perfil analisado" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bar Charts */}
            <div className={`transition-all duration-800 mb-6 ${showCharts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <BarChart data={chartData} delay={300} />
            </div>

            {/* Notice */}
            <div className={`bg-primary rounded-2xl p-6 mb-6 transition-all duration-600 shadow-sm ${showNotice ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <p className="text-white leading-relaxed">
                <strong>Seu corpo mostra sinais claros de desequilíbrio hormonal.</strong>
                <br /><br />
                Nosso protocolo de otimização hormonal + suporte com peptídeos está quase pronto para você.
              </p>
            </div>

            {/* Continue Button */}
            <button
              onClick={() => navigate('/final')}
              className={`w-full bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 hover-lift ${
                showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
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