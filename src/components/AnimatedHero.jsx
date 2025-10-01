import React, { useEffect, useState } from 'react';

export default function AnimatedHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-screen bg-red-600 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex items-center">
        <div className="w-1/2">
          <h1 className="text-7xl font-bold text-white leading-tight">
            Have a look at the beautiful memories we created
          </h1>
        </div>
      </div>

      {/* Animated Isometric Illustration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-center">
        {/* Main Container for all elements */}
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Central Dashboard/Chart Element */}
          <div 
            className={`absolute transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              animation: 'float 6s ease-in-out infinite',
              animationDelay: '0s'
            }}
          >
            <div className="relative">
              {/* Main isometric card */}
              <div className="w-96 h-64 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-2xl transform perspective-1000 rotate-y-15"
                   style={{ transform: 'rotateX(10deg) rotateY(-15deg) rotateZ(5deg)' }}>
                {/* Person sitting */}
                <div className="absolute -top-16 right-8 w-16 h-20 bg-orange-300 rounded-t-full"></div>
                <div className="absolute -top-12 right-10 w-12 h-12 bg-orange-200 rounded-full"></div>
                
                {/* Chart gauge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 border-8 border-white rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">150%<br/>93%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          
          {/* Top Left - Flying Paper Plane */}
          <div 
            className={`absolute top-20 left-32 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
            style={{
              animation: 'orbit1 8s ease-in-out infinite',
              animationDelay: '0s'
            }}
          >
            <div className="w-20 h-16 bg-blue-500 transform -rotate-12"
                 style={{ clipPath: 'polygon(0% 50%, 100% 0%, 100% 100%)' }}></div>
          </div>

          {/* Top Right - Blue Flag */}
          <div 
            className={`absolute top-16 right-20 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}
            style={{
              animation: 'wave 3s ease-in-out infinite',
              animationDelay: '0.5s'
            }}
          >
            <div className="relative">
              <div className="w-2 h-32 bg-blue-400"></div>
              <div className="absolute top-0 left-2 w-24 h-16 bg-blue-500 rounded-r-lg"
                   style={{ clipPath: 'polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)' }}>
                <span className="text-white text-xs p-2 block">Trending News</span>
              </div>
            </div>
          </div>

          {/* Half Circle - Left */}
          <div 
            className={`absolute top-1/3 left-40 transition-all duration-1000 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{
              animation: 'pulse 4s ease-in-out infinite',
              animationDelay: '1s'
            }}
          >
            <div className="w-24 h-24 bg-white rounded-full"></div>
          </div>

          {/* Cyan/Teal Elements - Top Middle */}
          <div 
            className={`absolute top-32 left-1/2 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            style={{
              animation: 'float 5s ease-in-out infinite',
              animationDelay: '2s'
            }}
          >
            <div className="flex gap-2">
              <div className="w-16 h-4 bg-cyan-400 transform -skew-x-12"></div>
              <div className="w-20 h-4 bg-red-400 transform skew-x-12"></div>
            </div>
          </div>

          {/* Bottom Section - Multiple elements */}
          
          {/* Bottom Left - Cyan Block */}
          <div 
            className={`absolute bottom-32 left-48 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            style={{
              animation: 'float 7s ease-in-out infinite',
              animationDelay: '1.5s'
            }}
          >
            <div className="w-32 h-48 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg shadow-xl transform"
                 style={{ transform: 'rotateX(15deg) rotateY(10deg)' }}></div>
          </div>

          {/* Bottom Center - Red Circle with percentage */}
          <div 
            className={`absolute bottom-40 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`}
            style={{
              animation: 'spin-slow 10s linear infinite',
            }}
          >
            <div className="relative">
              <div className="w-32 h-32 border-8 border-white rounded-full bg-red-500 flex items-center justify-center shadow-2xl">
                <span className="text-white text-3xl font-bold">75%</span>
              </div>
            </div>
          </div>

          {/* Bottom Right - Purple/Blue blocks */}
          <div 
            className={`absolute bottom-24 right-32 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            style={{
              animation: 'float 6s ease-in-out infinite',
              animationDelay: '3s'
            }}
          >
            <div className="flex flex-col gap-2">
              <div className="w-24 h-32 bg-gradient-to-b from-blue-500 to-purple-600 rounded-lg shadow-xl"></div>
            </div>
          </div>

          {/* Small cubes scattered */}
          <div 
            className={`absolute top-1/2 right-48 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{
              animation: 'orbit2 9s ease-in-out infinite',
            }}
          >
            <div className="w-8 h-8 bg-cyan-400 shadow-lg"></div>
          </div>

          <div 
            className={`absolute bottom-1/3 right-20 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{
              animation: 'float 5s ease-in-out infinite',
              animationDelay: '1s'
            }}
          >
            <div className="w-12 h-12 bg-blue-400 rounded-lg shadow-lg"></div>
          </div>

          {/* Small circles */}
          <div 
            className={`absolute top-1/2 right-16 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{
              animation: 'orbit3 7s ease-in-out infinite',
            }}
          >
            <div className="w-6 h-6 bg-blue-300 rounded-full shadow-lg"></div>
          </div>

          <div 
            className={`absolute bottom-1/4 left-1/3 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{
              animation: 'pulse 3s ease-in-out infinite',
              animationDelay: '0.5s'
            }}
          >
            <div className="w-8 h-8 bg-white rounded-full shadow-lg"></div>
          </div>

          {/* Blue badge/label */}
          <div 
            className={`absolute bottom-48 left-56 transition-all duration-1000 delay-800 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
            style={{
              animation: 'float 4s ease-in-out infinite',
              animationDelay: '2.5s'
            }}
          >
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-xl font-bold transform -rotate-6">
              12501's
            </div>
          </div>

          {/* Coin */}
          <div 
            className={`absolute bottom-28 right-56 transition-all duration-1000 delay-900 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{
              animation: 'coin-spin 3s ease-in-out infinite',
            }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-4 border-yellow-300 shadow-xl flex items-center justify-center">
              <span className="text-white text-xs font-bold">$</span>
            </div>
          </div>

          {/* Connection lines/dots */}
          <div 
            className={`absolute bottom-36 right-24 transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{
              animation: 'pulse 2s ease-in-out infinite',
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-12 h-0.5 bg-white"></div>
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>

          {/* White gear/cog */}
          <div 
            className={`absolute top-1/3 right-8 transition-all duration-1000 delay-1100 ${mounted ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}
            style={{
              animation: 'rotate-slow 15s linear infinite',
            }}
          >
            <div className="w-16 h-16 bg-white rounded-lg shadow-xl flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-gray-300 rounded-lg"></div>
            </div>
          </div>

        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes orbit1 {
          0%, 100% { transform: translate(0, 0) rotate(-12deg); }
          50% { transform: translate(30px, -30px) rotate(-20deg); }
        }
        
        @keyframes orbit2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
        
        @keyframes orbit3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 15px); }
        }
        
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes coin-spin {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
        }
      `}</style>
    </div>
  );
}