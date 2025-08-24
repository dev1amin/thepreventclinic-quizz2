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
    }, 3500);

    const noticeTimer = setTimeout(() => {
      setShowNotice(true);
    }, 5500);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 6500);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <LoadingScreen onComplete={handleLoadingComplete} />
      
      {showAnalysis && (
        <main className="px-6 pt-8 pb-12">
          <div className="max-w-md mx-auto animate-fade-in">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Análise inicial do seu perfil
            </h1>
            
            {/* Top Section - Score and Profile */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Score Circle */}
              <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center shadow-xl border border-gray-100 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent"></div>
                </div>
                
                <div className={`transition-all duration-1000 ${showScore ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <CircleProgress value={scores.overall / 100} size={140} showLabel={false} />
                </div>
              </div>

              {/* Profile Result */}
              <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center relative shadow-xl border border-gray-100 overflow-hidden">
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 right-4 px-4 py-2 rounded-full text-xs font-bold text-white text-center ${resultStatus.color} shadow-lg transform ${showScore ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'} transition-all duration-700 delay-1000`}>
                  Resultado: {resultStatus.text} {resultStatus.emoji}
                </div>
                
                {/* Profile Image */}
                <div className={`w-24 h-24 rounded-full overflow-hidden mt-8 ring-4 ring-primary/20 shadow-lg transform ${showScore ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} transition-all duration-700 delay-1200`}>
                  <img 
                    src={profileImage}
                    alt="Perfil analisado" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bar Charts */}
            <div className={`transition-all duration-1000 mb-8 ${showCharts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <BarChart data={chartData} delay={500} />
            </div>

            {/* Notice */}
            <div className={`bg-gradient-to-r from-primary to-accent rounded-3xl p-8 mb-8 transition-all duration-700 shadow-xl border border-primary/20 ${showNotice ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white leading-relaxed font-medium">
                    <strong className="text-white/90">Seu corpo mostra sinais claros de desequilíbrio hormonal.</strong>
                    <br /><br />
                    Nosso protocolo de otimização hormonal + suporte com peptídeos está quase pronto para você.
                  </p>
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <button
              onClick={() => navigate('/final')}
              className={`w-full bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent text-white font-bold py-5 px-8 rounded-3xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 ${
                showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } relative overflow-hidden group`}
            >
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Continuar</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </main>
      )}
    </div>
  );
};

export default Analysis;