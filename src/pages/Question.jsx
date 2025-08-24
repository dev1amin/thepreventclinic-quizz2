import { useParams } from 'react-router-dom';
import QuizLayout from '../components/QuizLayout';
import OptionButton from '../components/OptionButton';

const Question = () => {
  const { id } = useParams();
  const questionId = parseInt(id);
  
  const getNextRoute = () => {
    if (questionId < 8) {
      return `/question/${questionId + 1}`;
    }
    return '/analysis';
  };

  const questions = {
    1: {
      title: "O que mais está incomodando você hoje?",
      variant: "emoji",
      options: [
        { text: "Cansaço constante", emoji: "/images/Semfolego.webp" },
        { text: "Baixa libido", emoji: "/images/Triste2.png" },
        { text: "Falta de foco / memória ruim", emoji: "/images/Estresse.png" },
        { text: "Ganho de peso sem explicação", emoji: "/images/Balança.png" }
      ]
    },
    2: {
      title: "Como você se sente ao longo do dia?",
      variant: "emoji",
      options: [
        { text: "Sempre cansada, sem energia", emoji: "/images/fire.png" },
        { text: "Cansada, mas consigo funcionar", emoji: "/images/Quasesemfolego.webp" },
        { text: "Normal, energia ok", emoji: "/images/q10o3.png" },
        { text: "Com energia o dia todo", emoji: "/images/Deboa.webp" }
      ]
    },
    3: {
      title: "Quantas horas por noite você costuma dormir?",
      variant: "grid",
      options: ["Menos de 5h", "5-6h", "7-8h", "Mais de 8h"],
      image: "/images/Dormindo.webp"
    },
    4: {
      title: "Quando foi a última vez que você se sentiu realmente cheia de energia?",
      variant: "emoji",
      options: [
        { text: "Menos de 1 ano atrás", emoji: "/images/Cafe.png" },
        { text: "1-2 anos atrás", emoji: "/images/2compos.png" },
        { text: "Mais de 3 anos atrás", emoji: "/images/5copos.png" },
        { text: "Nem lembro mais", emoji: "/images/6copos.png" }
      ]
    },
    5: {
      title: "Como está sua libido hoje?",
      variant: "emoji",
      options: [
        { text: "Quase inexistente", emoji: "/images/alert.webp" },
        { text: "Mais baixa que antes", emoji: "/images/before-flt.png" },
        { text: "Normal", emoji: "/images/after-flt.png" },
        { text: "Alta", emoji: "/images/right.png" }
      ]
    },
    6: {
      title: "O quanto você depende de café ou energéticos para funcionar?",
      variant: "emoji",
      options: [
        { text: "3+ cafés por dia", emoji: "/images/mulher_18anos_modelo2.webp" },
        { text: "1-2 cafés por dia", emoji: "/images/mulher_30anos_modelo2.webp" },
        { text: "Pouco / raramente", emoji: "/images/mulher_40anos_modelo2.webp" },
        { text: "Nada, não preciso", emoji: "/images/mulher_50anos_modelo2.webp" }
      ]
    },
    7: {
      title: "Você já checou seus hormônios ou vitaminas recentemente?",
      variant: "simple",
      options: [
        "Sim, recentemente",
        "Há alguns anos", 
        "Nunca"
      ]
    },
    8: {
      title: "Você perde o fôlego ao subir as escadas?",
      variant: "emoji",
      options: [
        { text: "Fico tão sem fôlego que nem consigo falar", emoji: "/images/icons/timer.webp" },
        { text: "Fico um pouco sem fôlego, mas consigo falar", emoji: "/images/icons/goal.webp" },
        { text: "Me sinto Ok depois de subir as escadas", emoji: "/images/icons/clock.webp" },
        { text: "Me sinto super bem, posso subir vários lances", emoji: "/images/safe.webp" }
      ]
    }
  };

  const currentQuestion = questions[questionId];

  if (!currentQuestion) {
    return <div>Pergunta não encontrada</div>;
  }

  const renderOptions = () => {
    if (currentQuestion.variant === 'emoji') {
      return (
        <div className="mt-8 space-y-4">
          {currentQuestion.options.map((option, index) => (
            <OptionButton 
              key={index}
              variant="emoji-full"
              to={getNextRoute()}
              emoji={option.emoji}
            >
              {option.text}
            </OptionButton>
          ))}
        </div>
      );
    }

    if (currentQuestion.variant === 'grid') {
      return (
        <div className="mt-8 relative">
          <div className="grid grid-cols-2 gap-4">
            {currentQuestion.options.map((option, index) => (
              <OptionButton 
                key={index}
                variant="grid" 
                to={getNextRoute()}
              >
                {option}
              </OptionButton>
            ))}
          </div>
          {currentQuestion.image && (
            <img 
              src={currentQuestion.image}
              alt=""
              className="w-72 fixed bottom-0 left-1/2 transform -translate-x-1/2 z-0"
            />
          )}
        </div>
      );
    }

    return (
      <div className="mt-8 space-y-4">
        {currentQuestion.options.map((option, index) => (
          <OptionButton 
            key={index}
            variant="simple"
            to={getNextRoute()}
          >
            {option}
          </OptionButton>
        ))}
      </div>
    );
  };

  return (
    <QuizLayout currentStep={questionId}>
      <h1 className="text-2xl font-semibold leading-tight mb-6 text-gray-900">
        {currentQuestion.title}
      </h1>
      
      {renderOptions()}
    </QuizLayout>
  );
};

export default Question;