import QuizLayout from '../components/QuizLayout';
import OptionButton from '../components/OptionButton';

const Welcome = () => {
  return (
    <QuizLayout showProgress={false}>
      <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
        <img 
          src="/images/zenfitlogo.jpg" 
          alt="ZenFit" 
          className="w-24 mx-auto mb-6 block"
        />
        
        <h1 className="text-3xl font-bold leading-tight mb-4 text-gray-900">
          TESTE DE ENERGIA FEMININA
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          DESCUBRA A CAUSA DO SEU CANSAÇO
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <OptionButton 
            variant="age"
            to="/social"
            image="/images/mulher_18anos_modelo2.webp"
          >
            18 a 29
          </OptionButton>
          <OptionButton 
            variant="age"
            to="/social"
            image="/images/mulher_30anos_modelo2.webp"
          >
            30 a 39
          </OptionButton>
          <OptionButton 
            variant="age"
            to="/social"
            image="/images/mulher_40anos_modelo2.webp"
          >
            40 a 49
          </OptionButton>
          <OptionButton 
            variant="age"
            to="/social"
            image="/images/mulher_50anos_modelo2.webp"
          >
            50 ou mais
          </OptionButton>
        </div>
      </div>
    </QuizLayout>
  );
};

export default Welcome;