
import { useEffect, useState } from 'react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center bg-no-repeat" 
               style={{ backgroundImage: `url('/lovable-uploads/b978794d-8993-42c8-9e06-a3a777e4d0dc.png')` }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Content overlay */}
        <div className="relative z-10 flex flex-col justify-end h-full text-white p-8 md:p-16">
          <div className="max-w-4xl">
            {/* Date */}
            <p className="text-sm font-medium mb-4 tracking-wide uppercase">
              APR 7, 2025 5:50 AM PT
            </p>
            
            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              The Return of the Dire Wolf
            </h1>
            
            {/* Category tags */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="border border-white px-4 py-2 text-sm font-medium uppercase tracking-wide">
                SCIENCE
              </span>
              <span className="border border-white px-4 py-2 text-sm font-medium uppercase tracking-wide">
                ANIMALS
              </span>
              <div className="border border-white px-3 py-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
            </div>
            
            {/* Author info */}
            <div className="border-t border-white border-opacity-30 pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div>
                  <p className="text-sm font-medium mb-1">Photographs</p>
                  <p className="text-sm">
                    by <span className="underline">Robert Clark</span> for TIME
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Story</p>
                  <p className="text-sm">
                    by <span className="underline">Jeffrey Kluger</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Header Navigation - positioned over hero */}
      <header className="absolute top-0 left-0 right-0 z-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-3xl font-bold text-white">
              NewsToday
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-red-400 transition-colors font-medium">Home</a>
              <a href="#" className="text-white hover:text-red-400 transition-colors font-medium">History</a>
              <a href="#" className="text-white hover:text-red-400 transition-colors font-medium">Timeline</a>
              <a href="#" className="text-white hover:text-red-400 transition-colors font-medium">Impact</a>
              <a href="#" className="text-white hover:text-red-400 transition-colors font-medium">Resources</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Breaking News Banner */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center">
            <span className="bg-white text-red-600 px-3 py-1 text-sm font-bold rounded mr-4">BREAKING</span>
            <span className="text-sm">Latest updates from around the world • Stay informed with our comprehensive coverage</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-12 px-6">
        <article className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-800 leading-relaxed space-y-6">
              <p className="text-xl text-gray-700 font-medium mb-6">
                In today's rapidly evolving global landscape, staying informed has never been more crucial. 
                Our comprehensive coverage brings you the latest developments from around the world.
              </p>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
                qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-red-500 mb-4">NewsToday</h4>
            <p className="text-gray-400 mb-6">
              Your trusted source for breaking news and in-depth analysis
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700 text-gray-500 text-sm">
              © 2024 NewsToday. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
