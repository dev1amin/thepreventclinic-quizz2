import { useEffect, useState } from 'react';

const BarChart = ({ data, delay = 0 }) => {
  const [animated, setAnimated] = useState(false);

  const labels = {
    'energia': 'ENERGIA',
    'libido': 'LIBIDO', 
    'clareza': 'CLAREZA MENTAL',
    'recuperacao': 'RECUPERAÇÃO'
  };

  const getIcon = (key) => {
    const iconProps = "w-6 h-6 text-white";
    switch(key) {
      case 'energia':
        return (
          <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.5 2L6.5 12h4v8l5-10h-4V2z"/>
          </svg>
        );
      case 'libido':
        return (
          <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        );
      case 'clareza':
        return (
          <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        );
      case 'recuperacao':
        return (
          <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getBarGradient = (value) => {
    if (value >= 85) return 'bg-gradient-to-t from-primary to-primary-hover';
    if (value >= 75) return 'bg-gradient-to-t from-primary to-primary-hover';
    if (value >= 65) return 'bg-gradient-to-t from-accent to-secondary';
    return 'bg-gradient-to-t from-secondary to-accent';
  };

  const getGlowColor = (value) => {
    if (value >= 85) return 'shadow-primary/30';
    if (value >= 75) return 'shadow-primary/30';
    if (value >= 65) return 'shadow-accent/30';
    return 'shadow-secondary/30';
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
      <div className="grid grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div key={index} className="text-center group">
            {/* Icon */}
            <div className="w-12 h-12 mx-auto mb-3 bg-primary rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              {getIcon(item.key)}
            </div>
            
            {/* Bar Container */}
            <div className="h-32 bg-gray-100 rounded-2xl relative overflow-hidden mb-4 shadow-inner">
              {/* Animated Bar */}
              <div 
                className={`absolute bottom-0 left-0 right-0 rounded-2xl transition-all duration-1000 ease-out flex items-end justify-center ${getBarGradient(item.value)} ${getGlowColor(item.value)} ${
                  animated ? 'shadow-lg' : ''
                }`}
                style={{ 
                  height: animated ? `${Math.max(item.value * 0.8, 15)}%` : '0%',
                  transitionDelay: `${index * 200}ms`
                }}
              >
                {/* Percentage Text */}
                <span className="text-sm font-bold text-white pb-3 drop-shadow-sm">
                  {item.value}%
                </span>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Label */}
            <div className="text-xs font-bold text-gray-700 uppercase tracking-wider leading-tight">
              {labels[item.key] || item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;