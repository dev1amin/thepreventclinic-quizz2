import { useLocation } from 'react-router-dom';

const QuizLayout = ({ children, showProgress = true, currentStep = 0, totalSteps = 11 }) => {
  const location = useLocation();
  
  const getProgressWidth = () => {
    const progressMap = {
      '/': 4.5454545454545,
      '/social': 9.0909090909091,
      '/question/1': 13.636363636364,
      '/question/2': 18.181818181818,
      '/question/3': 22.727272727273,
      '/question/4': 27.272727272727,
      '/question/5': 31.818181818182,
      '/question/6': 36.363636363636,
      '/question/7': 40.909090909091,
      '/question/8': 45.454545454545,
      '/analysis': 50,
      '/final': 54.545454545455,
    };
    
    return progressMap[location.pathname] || 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {showProgress && (
        <header className="px-6 pt-8 pb-4 bg-white shadow-sm">
          <div className="max-w-lg mx-auto text-center">
            <img 
              src="/images/zenfitlogo.jpg" 
              alt="ZenFit" 
              className="w-20 mx-auto mb-6 block"
            />
            <div className="bg-gray-200 rounded-full p-1">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${getProgressWidth()}%` }}
              />
            </div>
          </div>
        </header>
      )}
      
      <section className="px-6 pt-8 opacity-0 animate-appear animation-delay-250">
        <div className="max-w-lg mx-auto">
          {children}
        </div>
      </section>
    </div>
  );
};

export default QuizLayout;