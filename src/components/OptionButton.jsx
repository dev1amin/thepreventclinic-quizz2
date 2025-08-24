import { useNavigate } from 'react-router-dom';

const OptionButton = ({ 
  children, 
  to, 
  variant = 'default',
  image,
  emoji,
  className = '',
  delay = 0
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (to) navigate(to);
  };

  const baseClasses = "w-full text-left font-medium rounded-2xl border border-gray-200 bg-white transition-all duration-200 cursor-pointer hover-lift hover:border-primary hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
  
  const variantClasses = {
    'age-with-image': "p-0 text-center relative overflow-hidden",
    emoji: "p-6 text-center",
    'emoji-full': "p-5 flex items-center text-gray-800",
    grid: "p-6 text-center font-medium",
    simple: "p-5 text-gray-800 font-medium text-base",
    social: "p-8 text-center"
  };

  const animationDelay = delay ? { animationDelay: `${delay}ms` } : {};

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className} animate-slide-up`}
      style={animationDelay}
    >
      {emoji && variant === 'emoji-full' && (
        <div className="w-12 h-12 mr-4 flex-shrink-0 flex items-center justify-center">
          <img 
            src={emoji} 
            alt="" 
            className="w-10 h-10 object-contain"
          />
        </div>
      )}
      {emoji && variant === 'emoji' && (
        <div className="mb-4 flex justify-center">
          <img 
            src={emoji} 
            alt="" 
            className="w-16 h-16 object-contain"
          />
        </div>
      )}
      <span className={`${variant === 'emoji-full' ? 'flex-1' : ''}`}>
        {children}
      </span>
    </button>
  );
};

export default OptionButton;