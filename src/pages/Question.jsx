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
      title: "What is bothering you most today?",
      variant: "simple",
      options: [
        "Constant fatigue",
        "Low libido",
        "Lack of focus / poor memory",
        "Unexplained weight gain"
      ]
    },
    2: {
      title: "How do you feel throughout the day?",
      variant: "emoji-full",
      options: [
        { text: "Always tired, no energy", emoji: "/images/fire.png" },
        { text: "Tired, but I can function", emoji: "/images/Quasesemfolego.webp" },
        { text: "Normal, energy is ok", emoji: "/images/q10o3.png" },
        { text: "Energetic all day", emoji: "/images/Deboa.webp" }
      ]
    },
    3: {
      title: "How many hours per night do you usually sleep?",
      variant: "emoji-full",
      options: [
        { text: "Less than 5h", emoji: "/images/Nivel2.png" },
        { text: "5-6h", emoji: "/images/Nivel3.png" },
        { text: "7-8h", emoji: "/images/Nivel14.png" },
        { text: "More than 8h", emoji: "/images/Nivel5.png" }
      ]
    },
    4: {
      title: "When was the last time you felt really full of energy?",
      variant: "simple",
      options: [
        "Less than 1 year ago",
        "1-2 years ago",
        "More than 3 years ago",
        "I don't remember anymore"
      ]
    },
    5: {
      title: "How is your libido today?",
      variant: "simple",
      options: [
        "Almost non-existent",
        "Lower than before",
        "Normal",
        "High"
      ]
    },
    6: {
      title: "How much do you depend on coffee or energy drinks to function?",
      variant: "emoji-full",
      options: [
        { text: "3+ coffees per day", emoji: "/images/Cafe.png" },
        { text: "1-2 coffees per day", emoji: "/images/5copos.png" },
        { text: "Little / rarely", emoji: "/images/2compos.png" },
        { text: "Nothing, I don't need it", emoji: "/images/6copos.png" }
      ]
    },
    7: {
      title: "Have you checked your hormones or vitamins recently?",
      variant: "emoji-full",
      options: [
        { text: "Yes, recently", emoji: "/images/q12o1.png" },
        { text: "A few years ago", emoji: "/images/q5o2.png" },
        { text: "Never", emoji: "/images/Triste2.png" }
      ]
    },
    8: {
      title: "Do you get out of breath when climbing stairs?",
      variant: "simple",
      options: [
        "I get so out of breath I can't even speak",
        "I get a little out of breath, but I can speak",
        "I feel OK after climbing stairs",
        "I feel great, I can climb several flights"
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
      <div className="rounded-3xl p-8 shadow-sm">
        {/* Question Number */}
        <div className="text-sm text-primary font-semibold mb-4">
          Question {questionId} of 8
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