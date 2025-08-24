import { useEffect, useState } from 'react';

const BarChart = ({ data, delay = 0 }) => {
  const [animated, setAnimated] = useState(false);

  const labels = {
    'energia': 'ENERGIA',
    'libido': 'LIBIDO', 
    'clareza': 'CLAREZA MENTAL',
    'recuperacao': 'RECUPERAÇÃO'
  };

  const icons = {
    'energia': '⚡',
    'libido': '❤️',
    'clareza': '🧠',
    'recuperacao': '🔄'
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getBarGradient = (value) => {
    if (value >= 85) return 'bg-gradient-to-t from-green-400 to-green-500';
    if (value >= 75) return 'bg-gradient-to-t from-blue-400 to-blue-500';
    if (value >= 65) return 'bg-gradient-to-t from-yellow-400 to-yellow-500';
    return 'bg-gradient-to-t from-orange-400 to-orange-500';
  };

  const getGlowColor = (value) => {
    if (value >= 85) return 'shadow-green-400/50';
    if (value >= 75) return 'shadow-blue-400/50';
    if (value >= 65) return 'shadow-yellow-400/50';
    return 'shadow-orange-400/50';
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
      <div className="grid grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div key={index} className="text-center group">
            {/* Icon */}
            <div className="text-2xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
              {icons[item.key]}
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
              
              {/* Pulse Effect */}
              <div className={`absolute inset-0 rounded-2xl ${animated ? 'animate-pulse' : ''}`} style={{
                background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
                animationDuration: '2s',
                animationDelay: `${index * 300}ms`
              }}></div>
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