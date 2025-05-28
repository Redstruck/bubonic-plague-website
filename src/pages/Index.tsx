import { useEffect, useState } from 'react';
const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-3xl font-bold text-red-600">
              NewsToday
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">History</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Timeline</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Impact</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Resources</a>
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
          <div className="mb-6">
            <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              World News
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Global Events Shape Tomorrow's Headlines
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-8">
              <span>By Sarah Johnson</span>
              <span className="mx-2">•</span>
              <time>March 15, 2024</time>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop&crop=center" alt="News imagery" className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg mb-8" />
            
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
    </div>;
};
export default Index;