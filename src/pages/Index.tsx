
import { useEffect, useState } from 'react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-black">
              The Bubonic Plague
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">History</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Timeline</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Impact</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Resources</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&crop=center" 
            alt="Medieval manuscript illustration" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 
            className={`text-5xl md:text-7xl font-bold mb-8 transition-all duration-1000 transform ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}
          >
            The Bubonic Plague
          </h1>
          <h2 
            className={`text-2xl md:text-3xl text-gray-700 mb-6 transition-all duration-1000 delay-300 transform ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}
          >
            Understanding History's Most Devastating Pandemic
          </h2>
          <div 
            className={`h-1 bg-black transition-all duration-1000 delay-500 ${
              isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'
            } mx-auto rounded-full mb-12`}
          ></div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`bg-white rounded-lg shadow-lg p-12 transition-all duration-1000 delay-700 transform ${
              isVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-black">
                  The Black Death: 1347-1351
                </h3>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    The Bubonic Plague, known as the Black Death, was one of the most devastating pandemics 
                    in human history. It swept through Europe, Asia, and North Africa in the 14th century, 
                    fundamentally changing the course of civilization.
                  </p>
                  <p>
                    This comprehensive resource explores the origins, spread, impact, and lasting legacy 
                    of this historic pandemic. From scientific analysis to cultural implications, 
                    discover how the Black Death shaped our modern world.
                  </p>
                  <p className="text-black font-semibold">
                    Explore detailed timelines, historical accounts, and expert analysis of humanity's 
                    encounter with one of nature's most formidable challenges.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&crop=center" 
                  alt="Medieval plague doctor mask" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">⚕️</div>
                  <h4 className="text-lg font-semibold mb-2 text-black">Historical Medicine</h4>
                  <p className="text-gray-600 text-sm">
                    Learn about medieval medical practices and the evolution of plague treatment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Images Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-black">Historical Context</h3>
            <p className="text-gray-600 text-lg">Visual documentation from the medieval period</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=250&fit=crop&crop=center" 
                alt="Medieval manuscript" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2 text-black">Medieval Manuscripts</h4>
                <p className="text-gray-600 text-sm">
                  Historical documents and illuminated texts from the plague era
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1520637836862-4d197d17c699?w=400&h=250&fit=crop&crop=center" 
                alt="Ancient medicine" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2 text-black">Medical Practices</h4>
                <p className="text-gray-600 text-sm">
                  Traditional remedies and medical understanding of the time
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=250&fit=crop&crop=center" 
                alt="Medieval city" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2 text-black">Urban Impact</h4>
                <p className="text-gray-600 text-sm">
                  How the plague affected medieval cities and daily life
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-black">Coming Soon</h3>
            <p className="text-gray-600 text-lg">Enhanced features and content currently in development</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md border">
              <div className="text-4xl mb-4">🗺️</div>
              <h4 className="text-xl font-semibold mb-3 text-black">Interactive Timeline</h4>
              <p className="text-gray-600">
                Explore the progression of the plague through an interactive timeline 
                showing key events and geographical spread.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border">
              <div className="text-4xl mb-4">🔬</div>
              <h4 className="text-xl font-semibold mb-3 text-black">Scientific Analysis</h4>
              <p className="text-gray-600">
                Learn about the bacterium Yersinia pestis and modern scientific 
                understanding of plague transmission and treatment.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border">
              <div className="text-4xl mb-4">🏛️</div>
              <h4 className="text-xl font-semibold mb-3 text-black">Cultural Impact</h4>
              <p className="text-gray-600">
                Discover how the Black Death influenced art, literature, religion, 
                and social structures throughout medieval Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4">The Bubonic Plague Historical Archive</h4>
          <p className="text-gray-400 mb-6">
            A comprehensive resource for understanding one of history's most significant events
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
