import { useEffect, useRef } from 'react';

const CircleProgress = ({ value = 0.63, size = 120, delay = 9000 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 10;

    // Set canvas size
    canvas.width = size;
    canvas.height = size;

    let currentValue = 0;
    const targetValue = value;
    const duration = 2000; // 2 seconds
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeProgress = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      currentValue = targetValue * easeProgress;

      // Clear canvas
      ctx.clearRect(0, 0, size, size);

      // Draw background circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = '#f0f0f0';
      ctx.lineWidth = 16;
      ctx.stroke();

      // Draw progress arc
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + (2 * Math.PI * currentValue));
      ctx.strokeStyle = '#0f9b4a';
      ctx.lineWidth = 16;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Draw percentage text
      ctx.fillStyle = '#2b3033';
      ctx.font = 'bold 28px Poppins';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${Math.round(currentValue * 100)}%`, centerX, centerY);

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
    <div className="relative">
      <canvas ref={canvasRef} className="block" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-center block mt-16">
          SUA PONTUAÇÃO GERAL:
        </span>
      </div>
    </div>
  );
};

export default CircleProgress;