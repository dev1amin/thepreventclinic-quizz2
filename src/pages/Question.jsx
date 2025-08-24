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
      variant: "emoji-full",
      options: [
        { text: "Cansaço constante", emoji: "/images/Semfolego.webp" },
        { text: "Baixa libido", emoji: "/images/Triste2.png" },
        { text: "Falta de foco / memória ruim", emoji: "/images/Estresse.png" },
        { text: "Ganho de peso sem explicação", emoji: "/images/Balança.png" }
      ]
    },
    2: {
      title: "Como você se sente ao longo do dia?",
      variant: "emoji-full",
      options: [
        { text: "Sempre cansada, sem energia", emoji: "/images/fire.png" },
        { text: "Cansada, mas consigo funcionar", emoji: "/images/Quasesemfolego.webp" },
        { text: "Normal, energia ok", emoji: "/images/q10o3.png" },
        { text: "Com energia o dia todo", emoji: "/images/Deboa.webp" }
      ]
    },
    3: {
      title: "Quantas horas por noite você costuma dormir?",
      variant: "simple",
      options: ["Menos de 5h", "5-6h", "7-8h", "Mais de 8h"]
    },
    4: {
      title: "Quando foi a última vez que você se sentiu realmente cheia de energia?",
      variant: "emoji-full",
      options: [
        { text: "Menos de 1 ano atrás", emoji: "/images/Cafe.png" },
        { text: "1-2 anos atrás", emoji: "/images/2compos.png" },
        { text: "Mais de 3 anos atrás", emoji: "/images/5copos.png" },
        { text: "Nem lembro mais", emoji: "/images/6copos.png" }
      ]
    },
    5: {
      title: "Como está sua libido hoje?",
      variant: "emoji-full",
      options: [
        { text: "Quase inexistente", emoji: "/images/alert.webp" },
        { text: "Mais baixa que antes", emoji: "/images/before-flt.png" },
        { text: "Normal", emoji: "/images/after-flt.png" },
        { text: "Alta", emoji: "/images/right.png" }
      ]
    },
    6: {
      title: "O quanto você depende de café ou energéticos para funcionar?",
      variant: "simple",
      options: [
        "3+ cafés por dia",
        "1-2 cafés por dia", 
        "Pouco / raramente",
        "Nada, não preciso"
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
      variant: "emoji-full",
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
    if (currentQuestion.variant === 'emoji-full') {
      return (
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <OptionButton 
              key={index}
              variant="emoji-full"
              to={getNextRoute()}
              emoji={option.emoji}
              delay={index * 100}
            >
              {option.text}
            </OptionButton>
          ))}
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => (
          <OptionButton 
            key={index}
            variant="simple"
            to={getNextRoute()}
            delay={index * 100}
          >
            {option}
          </OptionButton>
        ))}
      </div>
    );
  };

  return (
    <QuizLayout currentStep={questionId}>
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        {/* Question Number */}
        <div className="text-sm text-primary font-semibold mb-4">
          Pergunta {questionId} de 8
        </div>
        
        {/* Question Title */}
        <h1 className="text-2xl font-bold leading-tight mb-8 text-gray-900">
          {currentQuestion.title}
        </h1>
        
        {/* Options */}
        {renderOptions()}
      </div>
    </QuizLayout>
  );
};

export default Question;