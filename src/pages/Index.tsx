import { useEffect, useState, useRef } from 'react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [articleContent, setArticleContent] = useState(`Between 1347 and 1351, the Bubonic Plague, also known as the Black Death ravaged Europe, killing an estimated 25 million people. In its aftermath, Europe went through many huge and monumental changes that would greatly shape its future. Below are the most notable ones.

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Labor Shortages and the Rise of the Working Class</h2>

With so many people dead due to the plague, workers became scarce. Surviving peasants and artisans gained newfound leverage, allowing them to ask for higher wages and better living conditions due to increased demand for their skills. Some moved to cities where work was available. This shift gave rise to a new, more independent working class. Economic power started to spread downward, away from the upper class members of the feudal system, like the nobles, lords, and the clergy. This newfound economic power allowed many to improve their living standards and challenge traditional social norms.

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Collapse of the Feudal System</h2>

Medieval European feudalism depended on a large, stable population of peasants to farm land and serve nobles. When the plague killed nearly half of Europe's people, this system collapsed almost instantly. Lords and nobles lost control as peasants either died or demanded better treatment. Without enough workers to support it, feudalism began to fall apart. Peasants and serfs, now in higher demand, found themselves in a position to demand better wages and working conditions. Landowners, facing this challenge to maintain their estates, had to comply. Gradually, this led to the distanling of the once rigid feudal hierarchy ruling Medieval europe.

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Decline in the Church's Authority</h2>

The Holy Roman Church, which was one of the strongest forces in medieval Europe, failed to explain or stop the spreading of the plague. The Church's inability to provide answers or relief during the plague led to a decline in its authority. Many members of the clergy, like priests, nuns and monks, died alongside everyone else. This led people to question why God would allow such suffering, reducing their faith and trust in religious leaders. Slowly, the Church's grip and authority on Europe began to loosen.

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cultural Impact</h2>

The endless amount of death during the Bubonic Plague greatly influenced European culture during this time period. Art and literature shifted to darker themes like death and the afterlife. Many people obsessed over the afterlife, but also began to value life on Earth more than they previously did. The plague shifted how people saw the world and themselves, laying the groundwork for the Renaissance, where art and culture in Europe flourished.

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Violence Against Jewish Communities</h2>

As fear and panic spread, many looked for someone to blame. Rumors spread by Church officials and Christian extremist groups blamed Jews for poisoning wells or summoning the plague through witchcraft. Antisemitism greatly intensified during this time period, as Jews were blamed for the spreading of the Black Death. Across Europe, entire Jewish communities were brutally killed by mobs or burned at the stake. Thousands were killed or driven out.`);
  
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

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-3xl font-bold text-red-600">NewsToday</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">World</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Politics</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Technology</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium">History</a>
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
              <div 
                className="text-xl text-gray-700 font-medium" 
                dangerouslySetInnerHTML={{ __html: articleContent }}
              />
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
    </div>
  );
};

export default Index;
