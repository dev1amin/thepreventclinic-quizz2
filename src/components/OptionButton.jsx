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

  const baseClasses = "w-full block box-border font-normal text-sm text-left no-underline rounded-lg border-none z-10 transition-all duration-200 ease-out bg-gray-200 text-gray-800 hover:bg-primary-hover hover:text-gray-100";
  
  const variantClasses = {
    age: "text-center p-5 pb-36 relative m-1 font-bold",
    emoji: "text-center m-1 p-5",
    grid: "text-center m-1 p-4",
    simple: "p-5",
    social: "p-6 m-0 mb-2"
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {emoji && (
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
      {children}
    </button>
  );
};

export default OptionButton;