import { useEffect, useState, useRef } from 'react';
const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [articleContent, setArticleContent] = useState("In today's rapidly evolving global landscape, staying informed has never been more crucial. Our comprehensive coverage brings you the latest developments from around the world, providing in-depth analysis and breaking news as events unfold. From political shifts and economic trends to technological breakthroughs and cultural movements, we deliver the stories that matter most to our readers.");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    // Auto-resize textarea based on content
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [articleContent]);
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticleContent(e.target.value);
  };
  return <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-3xl font-bold text-red-600">NewsToday</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">World</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Politics</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Technology</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Health</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Sports</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Breaking News Banner */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center">
            <span className="bg-white text-red-600 px-3 py-1 text-sm font-bold rounded mr-4">BREAKING</span>
            <span className="text-sm">Latest updates from around the world • Stay informed with our comprehensive news coverage</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">Major Effects of The Bubonic Plague</h1>
            <div className="flex items-center text-gray-600 text-sm mb-8">
              <span>By Nishad Raghuvanshi</span>
              <span className="mx-2">•</span>
              <time>March 30, 2025</time>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <img alt="News imagery" src="https://www.historic-uk.com/wp-content/uploads/2017/06/black-death-2800x1440.jpg" className="w-full h-64 md:h-80 rounded-lg shadow-lg mb-8 object-cover" />
            
            <div className="text-gray-800 leading-relaxed">
              <textarea ref={textareaRef} value={articleContent} onChange={handleContentChange} className="w-full text-xl text-gray-700 font-medium bg-transparent border-none resize-none outline-none overflow-hidden p-0" placeholder="Enter your article content here..." rows={1} />
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="text-white py-8 px-6 mt-16 bg-sky-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4 text-red-50">NewsToday</h4>
            <p className="mb-6 text-gray-50">Your trusted source for breaking news and in-depth analysis</p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">About Me</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700 text-gray-500 text-sm">© 2024 NewsToday. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;