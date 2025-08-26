import { useEffect, useRef, useState } from 'react';

const CircleProgress = ({ value = 0.78, size = 140, delay = 1000, showLabel = true }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 16;

    canvas.width = size;
    canvas.height = size;

    let animationValue = 0;
    const targetValue = value;
    const duration = 1200;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      animationValue = targetValue * easeProgress;
      setCurrentValue(animationValue);

      // Clear canvas
      ctx.clearRect(0, 0, size, size);

      // Draw background circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = '#F5F5F5';
      ctx.lineWidth = 12;
      ctx.stroke();

      // Draw progress arc with glow
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + (2 * Math.PI * animationValue));
      ctx.strokeStyle = '#B85450';
      ctx.lineWidth = 12;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Draw percentage text with shadow
      ctx.fillStyle = '#171717';
      ctx.font = 'bold 28px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${Math.round(animationValue * 100)}%`, centerX, centerY - 5);
      
      // Draw "PONTUAÇÃO" text
      ctx.fillStyle = '#737373';
      ctx.font = '500 11px Inter, system-ui, sans-serif';
      ctx.fillText('SCORE', centerX, centerY + 25);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    const startAnimation = () => {
      animationRef.current = requestAnimationFrame(animate);
    };

    const timer = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, size, delay]);

  return (
    <div className="relative flex flex-col items-center">
      <canvas 
        ref={canvasRef} 
        className="block" 
      />
    </div>
  );
};

export default CircleProgress;