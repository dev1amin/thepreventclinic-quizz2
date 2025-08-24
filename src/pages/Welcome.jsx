import QuizLayout from '../components/QuizLayout';
import OptionButton from '../components/OptionButton';

const Welcome = () => {
  return (
    <QuizLayout showProgress={false}>
      <div className="text-center rounded-3xl p-10 shadow-sm animate-scale-in">
        {/* Logo */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-2">
            <svg 
              viewBox="0 0 24 24" 
              className="w-6 h-6 mr-2 text-primary"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="text-xl font-bold text-gray-900 tracking-wide">
              PREVENT!
              <span className="text-xs align-super ml-1">™</span>
            </span>
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight mb-3 text-gray-900">
          Teste de Energia Feminina
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-10 font-light">
          Descubra a causa do seu cansaço
        </p>
        
        {/* Age Selection - Layout como na imagem */}
        <div className="space-y-4">
          <p className="text-sm text-gray-500 mb-6 font-medium">
            Selecione sua faixa etária para começar:
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <OptionButton 
              variant="age-with-image"
              to="/social"
              delay={100}
            >
              <div className="relative h-32 bg-gray-100 rounded-xl mb-3 overflow-hidden">
                <img 
                  src="/images/mulher_18anos_modelo2.webp" 
                  alt="18 a 29" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"></div>
                <div className="absolute bottom-3 left-3 text-white font-bold text-lg">
                  18 a 29
                </div>
              </div>
            </OptionButton>
            <OptionButton 
              variant="age-with-image"
              to="/social"
              delay={200}
            >
              <div className="relative h-32 bg-gray-100 rounded-xl mb-3 overflow-hidden">
                <img 
                  src="/images/mulher_30anos_modelo2.webp" 
                  alt="30 a 39" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"></div>
                <div className="absolute bottom-3 left-3 text-white font-bold text-lg">
                  30 a 39
                </div>
              </div>
            </OptionButton>
            <OptionButton 
              variant="age-with-image"
              to="/social"
              delay={300}
            >
              <div className="relative h-32 bg-gray-100 rounded-xl mb-3 overflow-hidden">
                <img 
                  src="/images/mulher_40anos_modelo2.webp" 
                  alt="40 a 49" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"></div>
                <div className="absolute bottom-3 left-3 text-white font-bold text-lg">
                  40 a 49
                </div>
              </div>
            </OptionButton>
            <OptionButton 
              variant="age-with-image"
              to="/social"
              delay={400}
            >
              <div className="relative h-32 bg-gray-100 rounded-xl mb-3 overflow-hidden">
                <img 
                  src="/images/mulher_50anos_modelo2.webp" 
                  alt="50 ou mais" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"></div>
                <div className="absolute bottom-3 left-3 text-white font-bold text-lg">
                  50 ou mais
                </div>
              </div>
            </OptionButton>
          </div>
        </div>
      </div>
    </QuizLayout>
  );
};

export default Welcome;