import { useLocation } from 'react-router-dom';

const QuizLayout = ({ children, showProgress = true, currentStep = 0, totalSteps = 11 }) => {
  const location = useLocation();
  
  const getProgressWidth = () => {
    const progressMap = {
      '/': 9,
      '/social': 18,
      '/question/1': 27,
      '/question/2': 36,
      '/question/3': 45,
      '/question/4': 54,
      '/question/5': 63,
      '/question/6': 72,
      '/question/7': 81,
      '/question/8': 90,
      '/analysis': 95,
      '/final': 100,
    };
    
    return progressMap[location.pathname] || 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {showProgress && (
        <header className="px-6 pt-12 pb-8 bg-white">
          <div className="max-w-md mx-auto">
            {/* Logo */}
            <div className="text-center mb-8">
              <img 
                src="/images/zenfitlogo.jpg" 
                alt="ZenFit" 
                className="w-16 h-16 mx-auto rounded-full object-cover"
              />
            </div>
            
            {/* Progress Bar */}
            <div className="relative">
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div 
                  className="bg-primary h-1 rounded-full progress-bar"
                  style={{ width: `${getProgressWidth()}%` }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">
                {Math.round(getProgressWidth())}% completo
              </div>
            </div>
          </div>
        </header>
      )}
      
      <main className="px-6 pb-12">
        <div className="max-w-md mx-auto animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
};

export default QuizLayout;