import { useEffect, useRef, useState } from 'react';

const CircleProgress = ({ value = 0.78, size = 160, delay = 2000, showLabel = true }) => {
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

    // Set canvas size with high DPI support
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.scale(dpr, dpr);

    let animationValue = 0;
    const targetValue = value;
    const duration = 2500; // 2.5 seconds for smoother animation
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Advanced easing function for magical feel
      const easeProgress = progress < 0.5 
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      animationValue = targetValue * easeProgress;
      setCurrentValue(animationValue);

      // Clear canvas
      ctx.clearRect(0, 0, size, size);

      // Draw outer glow
      ctx.shadowColor = '#B85450';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 8, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(184, 84, 80, 0.1)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw background circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = '#f1f5f9';
      ctx.lineWidth = 16;
      ctx.stroke();

      // Create gradient for progress arc
      const gradient = ctx.createLinearGradient(0, 0, size, size);
      gradient.addColorStop(0, '#B85450');
      gradient.addColorStop(0.5, '#D4A574');
      gradient.addColorStop(1, '#B85450');

      // Draw progress arc with glow
      ctx.shadowColor = '#B85450';
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + (2 * Math.PI * animationValue));
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 16;
      ctx.lineCap = 'round';
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw inner circle with subtle gradient
      const innerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius - 30);
      innerGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      innerGradient.addColorStop(1, 'rgba(248, 250, 252, 0.9)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius - 30, 0, 2 * Math.PI);
      ctx.fillStyle = innerGradient;
      ctx.fill();

      // Draw percentage text with shadow
      ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 4;
      ctx.fillStyle = '#1e293b';
      ctx.font = 'bold 36px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${Math.round(animationValue * 100)}%`, centerX, centerY - 5);
      
      // Draw "PONTUAÇÃO" text
      ctx.shadowOffsetY = 1;
      ctx.shadowBlur = 2;
      ctx.fillStyle = '#64748b';
      ctx.font = '600 12px Inter, system-ui, sans-serif';
      ctx.fillText('PONTUAÇÃO', centerX, centerY + 25);
      ctx.shadowColor = 'transparent';

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
        className="block drop-shadow-lg transform hover:scale-105 transition-transform duration-300" 
      />
    </div>
  );
};

export default CircleProgress;