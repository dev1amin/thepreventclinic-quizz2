import QuizLayout from '../components/QuizLayout';
import OptionButton from '../components/OptionButton';

const Welcome = () => {
  return (
    <QuizLayout showProgress={false}>
      <img 
        src="./images/zenfitlogo.jpg" 
        alt="ZenFit" 
        className="w-20 mx-auto mb-5 block"
      />
      
      <h1 className="text-lg font-bold leading-tight tracking-tight mb-3">
        TESTE DE ENERGIA FEMININA
      </h1>
      
      <span className="block text-sm leading-relaxed mb-4">
        DESCUBRA A CAUSA DO SEU CANSAÇO
      </span>
      
      <div className="mt-5">
        <div className="flex mb-0">
          <OptionButton 
            variant="age"
            to="/social"
            image="./images/mulher_18anos_modelo2.webp"
          >
            18 a 29
          </OptionButton>
          <OptionButton 
            variant="age"
            to="/social"
            image="./images/mulher_30anos_modelo2.webp"
          >
            30 a 39
          </OptionButton>
        </div>
        
        <div className="flex">
          <OptionButton 
            variant="age"
            to="/social"
            image="./images/mulher_40anos_modelo2.webp"
          >
            40 a 49
          </OptionButton>
          <OptionButton 
            variant="age"
            to="/social"
            image="./images/mulher_50anos_modelo2.webp"
          >
            50 ou mais
          </OptionButton>
        </div>
      </div>
    </QuizLayout>
  );
};

export default Welcome;