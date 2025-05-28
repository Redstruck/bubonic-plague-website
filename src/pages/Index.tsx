import { useEffect, useState } from 'react';
const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center text-2xl font-bold text-black">
              <span className="text-orange-600 mr-2">📖</span>
              The Black Death
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">History</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Impact</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Resources</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`text-5xl md:text-6xl font-bold mb-6 text-black transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                The Bubonic Plague
              </h1>
              <p className={`text-lg text-gray-700 mb-8 leading-relaxed transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                Exploring the history, impact, and legacy of one of history's most devastating pandemics.
              </p>
              <div className={`flex space-x-4 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <button className="bg-orange-600 text-white px-6 py-3 rounded font-medium hover:bg-orange-700 transition-colors">
                  Explore History
                </button>
                <button className="border border-gray-300 text-black px-6 py-3 rounded font-medium hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}>
              <img alt="Deer in medieval landscape" className="w-full h-auto rounded-lg shadow-lg" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.historic-uk.com%2FHistoryUK%2FHistoryofEngland%2FThe-Black-Death%2F&psig=AOvVaw1j-ziUvK2e0a7L0_lvBKZX&ust=1748539396477000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiWqIDXxo0DFQAAAAAdAAAAABAV" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 delay-900 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-8 text-black">
              A Defining Moment in Human History
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur ipsum, in dignissim lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </p>
              <p>
                Morbi mattis, mi a fringilla ultricies, lorem velit faucibus erat, at vestibulum tellus eros in ligula. Ut eu scelerisque nisl, eget aliquet velit. Suspendisse potenti. Cras commodo interdum sem at tempus.
              </p>
              <p>
                Praesent hendrerit, sem vitae scelerisque condimentum, ipsum nibh tristique dui, at faucibus nulla enim quis nunc. Proin non euismod nibh. Aenean vel risus rutrum, tempus orci id, tincidunt justo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center text-lg font-bold text-black">
            <span className="text-orange-600 mr-2">📖</span>
            The Black Death
          </div>
          <div className="text-sm text-gray-500">
            © 2025 Historical Archives. All rights reserved.
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;