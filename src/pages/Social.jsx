import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Social = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-md mx-auto text-center animate-fade-in">
        <div className="rounded-3xl p-10 shadow-sm">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-2">
              <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 mr-2 text-primary"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="text-xl font-bold text-gray-900 tracking-wide">
                PREVENT!
                <span className="text-xs align-super ml-1">™</span>
              </span>
            </div>
          </div>
          
          {/* Statistic Circle */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full border-4 border-primary flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1k+</div>
                <div className="text-xs text-gray-600 font-medium">women</div>
              </div>
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-2xl font-bold leading-tight mb-4 text-gray-900">
            All women in our community
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8 font-light">
            have already discovered the cause of fatigue with this test
          </p>

          {/* Continue Button */}
          <button
            onClick={() => navigate('/question/1')}
            className={`w-full bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 hover-lift ${
              showButton ? 'opacity-100 animate-slide-up' : 'opacity-0'
            }`}
          >
            Start test
          </button>
          
          {/* Small text */}
          <p className="text-xs text-gray-500 mt-6">
            Free test • 2 minutes • Personalized results
          </p>
        </div>
      </div>
    </div>
  );
};

export default Social;