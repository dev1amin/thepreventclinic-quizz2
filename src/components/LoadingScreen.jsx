import { useEffect, useState } from 'react';
import PreventLogo from './PreventLogo';

const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 140); // 7 seconds total (100 / 2 * 140ms)

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center px-8">
      <div className="text-center max-w-sm mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <PreventLogo className="w-40 h-12 mx-auto" />
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Loading Text */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Analisando suas respostas...
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Estamos processando suas informações<br />
          e preparando seu perfil<br />
          hormonal personalizado
        </p>
        
        {/* Percentage */}
        <div className="mt-6 text-sm text-primary font-semibold">
          {progress}% completo
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;