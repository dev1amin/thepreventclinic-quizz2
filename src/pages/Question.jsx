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
      variant: "simple",
      options: [
        "Cansaço constante",
        "Baixa libido",
        "Falta de foco / memória ruim",
        "Ganho de peso sem explicação"
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
      variant: "emoji-full",
      options: [
        { text: "Menos de 5h", emoji: "/images/Nivel2.png" },
        { text: "5-6h", emoji: "/images/Nivel3.png" },
        { text: "7-8h", emoji: "/images/Nivel14.png" },
        { text: "Mais de 8h", emoji: "/images/Nivel5.png" }
      ]
    },
    4: {
      title: "Quando foi a última vez que você se sentiu realmente cheia de energia?",
      variant: "simple",
      options: [
        "Menos de 1 ano atrás",
        "1-2 anos atrás",
        "Mais de 3 anos atrás",
        "Nem lembro mais"
      ]
    },
    5: {
      title: "Como está sua libido hoje?",
      variant: "simple",
      options: [
        "Quase inexistente",
        "Mais baixa que antes",
        "Normal",
        "Alta"
      ]
    },
    6: {
      title: "O quanto você depende de café ou energéticos para funcionar?",
      variant: "emoji-full",
      options: [
        { text: "3+ cafés por dia", emoji: "/images/Cafe.png" },
        { text: "1-2 cafés por dia", emoji: "/images/5copos.png" },
        { text: "Pouco / raramente", emoji: "/images/2compos.png" },
        { text: "Nada, não preciso", emoji: "/images/6copos.png" }
      ]
    },
    7: {
      title: "Você já checou seus hormônios ou vitaminas recentemente?",
      variant: "emoji-full",
      options: [
        { text: "Sim, recentemente", emoji: "/images/q12o1.png" },
        { text: "Há alguns anos", emoji: "/images/q5o2.png" },
        { text: "Nunca", emoji: "/images/Triste2.png" }
      ]
    },
    8: {
      title: "Você perde o fôlego ao subir as escadas?",
      variant: "simple",
      options: [
        "Fico tão sem fôlego que nem consigo falar",
        "Fico um pouco sem fôlego, mas consigo falar",
        "Me sinto Ok depois de subir as escadas",
        "Me sinto super bem, posso subir vários lances"
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