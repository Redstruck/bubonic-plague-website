
import { useEffect, useState } from 'react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 bg-red-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-amber-400 rounded-full opacity-40 animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-red-400 rounded-full opacity-20 animate-pulse delay-700"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-orange-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-red-600 rounded-full opacity-25 animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Title section */}
        <div className="text-center mb-16">
          <h1 
            className={`text-6xl md:text-8xl font-bold mb-6 transition-all duration-1000 transform ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}
            style={{
              background: 'linear-gradient(135deg, #ef4444, #dc2626, #991b1b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(239, 68, 68, 0.3)',
            }}
          >
            THE BUBONIC
          </h1>
          <h2 
            className={`text-4xl md:text-6xl font-semibold transition-all duration-1000 delay-300 transform ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}
            style={{
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            PLAGUE
          </h2>
          <div 
            className={`mt-4 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 transition-all duration-1000 delay-500 ${
              isVisible ? 'w-48 opacity-100' : 'w-0 opacity-0'
            } mx-auto rounded-full`}
          ></div>
        </div>

        {/* Subtitle */}
        <p 
          className={`text-xl md:text-2xl text-gray-300 mb-12 text-center max-w-2xl leading-relaxed transition-all duration-1000 delay-700 transform ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          Journey through one of history's most devastating pandemics
        </p>

        {/* Main content card */}
        <div 
          className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12 max-w-4xl w-full shadow-2xl transition-all duration-1000 delay-900 transform ${
            isVisible 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-12 opacity-0 scale-95'
          }`}
        >
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
              The Black Death Chronicles
            </h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Between 1347 and 1351, Europe witnessed one of the most catastrophic pandemics in human history. 
                The Bubonic Plague, known as the Black Death, swept across continents like a dark shadow, 
                fundamentally altering the course of civilization.
              </p>
              <p>
                This devastating disease didn't just claim lives—it reshaped societies, economies, and cultures. 
                From the bustling ports of Constantinople to the remote villages of England, no corner of the 
                medieval world remained untouched by its deadly reach.
              </p>
              <p className="text-amber-400 font-semibold">
                Explore the untold stories, scientific discoveries, and lasting impact of humanity's darkest hour...
              </p>
            </div>
            
            {/* Coming soon indicator */}
            <div className="mt-8 pt-6 border-t border-gray-600/50">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-full text-sm font-medium text-red-300">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                More content coming soon...
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  );
};

export default Index;
