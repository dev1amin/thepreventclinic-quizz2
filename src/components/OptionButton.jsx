import { useNavigate } from 'react-router-dom';

const OptionButton = ({ 
  children, 
  to, 
  variant = 'default',
  image,
  emoji,
  className = ''
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (to) navigate(to);
  };

  const baseClasses = "w-full block box-border font-medium text-left no-underline rounded-xl border transition-all duration-200 ease-out cursor-pointer hover:shadow-lg";
  
  const variantClasses = {
    age: "text-center p-6 pb-36 relative m-2 font-semibold bg-white border-gray-200 hover:border-blue-500 hover:bg-blue-50",
    emoji: "text-center m-2 p-6 bg-white border-gray-200 hover:border-blue-500 hover:bg-blue-50",
    'emoji-full': "flex items-center p-4 bg-white border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-800",
    grid: "text-center m-2 p-5 bg-white border-gray-200 hover:border-blue-500 hover:bg-blue-50 font-medium",
    simple: "p-5 bg-white border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-800 font-medium",
    social: "p-6 m-0 mb-3 bg-white border-gray-200 hover:border-blue-500 hover:bg-blue-50"
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {emoji && variant === 'emoji-full' && (
        <img 
          src={emoji} 
          alt="" 
          className="w-12 h-12 mr-4 flex-shrink-0"
        />
      )}
      {emoji && variant === 'emoji' && (
        <img 
          src={emoji} 
          alt="" 
          className="w-16 block mx-auto mb-4"
        />
      )}
      {image && variant === 'age' && (
        <img 
          src={image} 
          alt="" 
          className="w-32 block absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
        />
      )}
      <span className={variant === 'emoji-full' ? 'flex-1' : ''}>{children}</span>
    </button>
  );
};

export default OptionButton;