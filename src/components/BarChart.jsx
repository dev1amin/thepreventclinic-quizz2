import { useEffect, useState } from 'react';

const BarChart = ({ data, delay = 0 }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getBarColor = (value) => {
    if (value >= 70) return 'bg-green-500';
    if (value >= 50) return 'bg-yellow-500';
    if (value >= 30) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="grid grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div key={index} className="text-center">
            <div className="h-24 bg-gray-100 rounded-lg relative overflow-hidden mb-3">
              <div 
                className={`absolute bottom-0 left-0 right-0 rounded-b-lg transition-all duration-1000 ease-out flex items-end justify-center ${getBarColor(item.value)} ${
                  animated ? '' : 'h-0'
                }`}
                style={{ 
                  height: animated ? `${Math.max(item.value, 10)}%` : '0%',
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <span className="text-xs font-bold text-white pb-2">
                  {item.value}%
                </span>
              </div>
            </div>
            <div className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;