import QuizLayout from '../components/QuizLayout';
import OptionButton from '../components/OptionButton';

const Welcome = () => {
  return (
    <QuizLayout showProgress={false}>
      <div className="text-center bg-white rounded-3xl p-10 shadow-sm animate-scale-in">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/images/zenfitlogo.jpg" 
            alt="ZenFit" 
            className="w-20 h-20 mx-auto rounded-full object-cover"
          />
        </div>
        
        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight mb-3 text-gray-900">
          Teste de Energia Feminina
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-10 font-light">
          Descubra a causa do seu cansaço
        </p>
        
        {/* Age Selection */}
        <div className="space-y-4">
          <p className="text-sm text-gray-500 mb-6 font-medium">
            Selecione sua faixa etária para começar:
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <OptionButton 
              variant="age"
              to="/social"
              image="/images/mulher_18anos_modelo2.webp"
              delay={100}
            >
              18 a 29
            </OptionButton>
            <OptionButton 
              variant="age"
              to="/social"
              image="/images/mulher_30anos_modelo2.webp"
              delay={200}
            >
              30 a 39
            </OptionButton>
            <OptionButton 
              variant="age"
              to="/social"
              image="/images/mulher_40anos_modelo2.webp"
              delay={300}
            >
              40 a 49
            </OptionButton>
            <OptionButton 
              variant="age"
              to="/social"
              image="/images/mulher_50anos_modelo2.webp"
              delay={400}
            >
              50 ou mais
            </OptionButton>
          </div>
        </div>
      </div>
    </QuizLayout>
  );
};

export default Welcome;