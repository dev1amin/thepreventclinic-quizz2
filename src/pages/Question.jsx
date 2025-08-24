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
      variant: "emoji",
      options: [
        { text: "Sempre cansada, sem energia", emoji: "/images/Semfolego.webp" },
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
      variant: "emoji",
      options: [
        { text: "Quase inexistente", emoji: "/images/Triste2.png" },
        { text: "Mais baixa que antes", emoji: "/images/Quasesemfolego.webp" },
        { text: "Normal", emoji: "/images/q10o3.png" },
        { text: "Alta", emoji: "/images/Deboa.webp" }
      ]
    },
    6: {
      title: "O quanto você depende de café ou energéticos para funcionar?",
      variant: "emoji",
      options: [
        { text: "3+ cafés por dia", emoji: "/images/Cafe.png" },
        { text: "1-2 cafés por dia", emoji: "/images/2compos.png" },
        { text: "Pouco / raramente", emoji: "/images/5copos.png" },
        { text: "Nada, não preciso", emoji: "/images/6copos.png" }
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
        { text: "Fico tao sem fôlego que nem consigo falar", emoji: "/images/Semfolego.webp" },
        { text: "Fico um pouco sem fôlego, mas consigo falar", emoji: "/images/Quasesemfolego.webp" },
        { text: "Me sinto Ok depois de subir as escadas", emoji: "/images/q10o3.png" },
        { text: "Me sinto super bem, posso subir vários lances", emoji: "/images/Deboa.webp" }
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
        <div className="mt-5">
          <div className="flex mb-0">
            <OptionButton 
              variant="emoji"
              to={getNextRoute()}
              emoji={currentQuestion.options[0].emoji}
            >
              {currentQuestion.options[0].text}
            </OptionButton>
            <OptionButton 
              variant="emoji"
              to={getNextRoute()}
              emoji={currentQuestion.options[1].emoji}
            >
              {currentQuestion.options[1].text}
            </OptionButton>
          </div>
          <div className="flex">
            <OptionButton 
              variant="emoji"
              to={getNextRoute()}
              emoji={currentQuestion.options[2].emoji}
            >
              {currentQuestion.options[2].text}
            </OptionButton>
            <OptionButton 
              variant="emoji"
              to={getNextRoute()}
              emoji={currentQuestion.options[3].emoji}
            >
              {currentQuestion.options[3].text}
            </OptionButton>
          </div>
        </div>
      );
    }

    if (currentQuestion.variant === 'grid') {
      return (
        <div className="mt-5 relative">
          <div className="flex mb-0">
            <OptionButton variant="grid" to={getNextRoute()}>
              {currentQuestion.options[0]}
            </OptionButton>
            <OptionButton variant="grid" to={getNextRoute()}>
              {currentQuestion.options[1]}
            </OptionButton>
          </div>
          <div className="flex">
            <OptionButton variant="grid" to={getNextRoute()}>
              {currentQuestion.options[2]}
            </OptionButton>
            <OptionButton variant="grid" to={getNextRoute()}>
              {currentQuestion.options[3]}
            </OptionButton>
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
      <div className="mt-5">
        {currentQuestion.options.map((option, index) => (
          <OptionButton 
            key={index}
            variant="simple"
            to={getNextRoute()}
            className="mb-2"
          >
            {option}
          </OptionButton>
        ))}
      </div>
    );
  };

  return (
    <QuizLayout currentStep={questionId}>
      <h1 className="text-lg font-bold leading-tight tracking-tight mb-3">
        {currentQuestion.title}
      </h1>
      
      {renderOptions()}
    </QuizLayout>
  );
};

export default Question;