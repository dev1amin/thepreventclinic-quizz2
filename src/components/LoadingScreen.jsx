import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 8000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-200 z-50 flex items-center justify-center px-12">
      <div className="text-center">
        <div className="w-36 h-4 bg-gray-100 rounded-lg mx-auto mb-8 p-1">
          <div className="h-3 bg-primary rounded-md w-0 animate-loading-bar animation-delay-500" />
        </div>
        <h2 className="text-base font-bold text-gray-800 mb-2">
          Analisando...
        </h2>
        <p className="text-sm text-gray-800">
          Estamos analisando suas respostas<br />
          e preparando seu perfil<br />
          hormonal...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;