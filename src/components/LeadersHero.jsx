import React, { useEffect, useRef } from 'react';

export default function LeadersHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Animation variables
    let animationFrame;
    let progress = 0;

    // Line animation
    const drawLine = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the curved line
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 2;
      
      // Starting point (from "Leaders")
      const startX = 380;
      const startY = 280;
      
      // Control points for the curve
      const cp1X = 480;
      const cp1Y = 200;
      const cp2X = 550;
      const cp2Y = 250;
      const endX = 620;
      const endY = 270;
      
      // Animate the line drawing
      const t = Math.min(progress / 100, 1);
      
      // Calculate current point on curve
      const currentX = Math.pow(1-t, 3) * startX + 
                      3 * Math.pow(1-t, 2) * t * cp1X + 
                      3 * (1-t) * Math.pow(t, 2) * cp2X + 
                      Math.pow(t, 3) * endX;
      const currentY = Math.pow(1-t, 3) * startY + 
                      3 * Math.pow(1-t, 2) * t * cp1Y + 
                      3 * (1-t) * Math.pow(t, 2) * cp2Y + 
                      Math.pow(t, 3) * endY;
      
      ctx.moveTo(startX, startY);
      ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, currentX, currentY);
      ctx.stroke();
      
      // Draw the end dot (half-circle)
      if (t >= 1) {
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(endX, endY, 20, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw the blue dot on the half-circle
        ctx.beginPath();
        ctx.fillStyle = '#3b82f6';
        ctx.arc(endX + 30, endY + 10, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      progress += 1;
      if (progress <= 120) {
        animationFrame = requestAnimationFrame(drawLine);
      }
    };

    // Start animation after a short delay
    setTimeout(() => {
      drawLine();
    }, 500);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-red-600 overflow-hidden">
      {/* Decorative circles and bubbles */}
      <div className="absolute top-48 right-32 w-20 h-20 border-2 border-white rounded-full opacity-30"></div>
      <div className="absolute top-64 right-48 w-3 h-3 bg-blue-500 rounded-full"></div>
      <div className="absolute top-80 right-20 w-16 h-16 bg-white bg-opacity-20 rounded-full backdrop-blur-sm"></div>
      <div className="absolute top-96 right-40 w-2 h-2 bg-blue-400 rounded-full"></div>
      <div className="absolute bottom-32 right-52 w-2 h-2 bg-blue-300 rounded-full"></div>

      {/* Canvas for animated line */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-32">
        <h1 className="text-7xl font-bold text-white mb-12">
          Our <span className="italic font-light">Leaders</span>
        </h1>
        
        <p className="text-white text-xl leading-relaxed max-w-2xl">
          We are driven by our core values and seek to create a friendly and
          welcoming environment that nurtures team spirit and excellence in every
          individual. We are constantly evolving and require people who are ready
          and willing to embrace our culture of excellent service delivery and
          prompt provision of financial services to our customers.
        </p>
      </div>
    </div>
  );
}