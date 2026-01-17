import { Calendar, Tag, ArrowRight, TrendingUp, Award, Rocket } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function News() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsArticles = [
    {
      id: 1,
      title: 'CloudTech Solutions Achieves AWS Premier Partner Status',
      category: 'Company News',
      date: 'January 5, 2026',
      image: 'https://images.unsplash.com/photo-1609619385076-36a873425636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3Njc3MjYwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'We are proud to announce our elevation to AWS Premier Consulting Partner status, recognizing our expertise in cloud solutions and commitment to client success.',
      featured: true
    },
    {
      id: 2,
      title: 'Successful SAP S/4HANA Migration for Global Retailer',
      category: 'Case Study',
      date: 'December 28, 2025',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY3Nzg0NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'Learn how we helped a Fortune 500 retail company migrate to SAP S/4HANA, resulting in 40% faster processing times and improved inventory management.',
      featured: false
    },
    {
      id: 3,
      title: 'CloudTech Named Leader in Gartner Magic Quadrant',
      category: 'Industry Recognition',
      date: 'December 20, 2025',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudHxlbnwxfHx8fDE3Njc3NzcxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'Gartner recognizes CloudTech Solutions as a Leader in their Magic Quadrant for Cloud Infrastructure and Platform Services for the third consecutive year.',
      featured: false
    },
    {
      id: 4,
      title: 'New AI-Powered Cloud Optimization Tool Launched',
      category: 'Product Launch',
      date: 'December 15, 2025',
      image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRhdGElMjBjZW50ZXJ8ZW58MXx8fHwxNzY3Nzc4MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'Introducing CloudOptimize AI, our revolutionary tool that uses machine learning to reduce cloud costs by up to 35% while improving performance.',
      featured: false
    },
    {
      id: 5,
      title: 'Q4 2025: Record Quarter with 50+ New Enterprise Clients',
      category: 'Company News',
      date: 'December 10, 2025',
      image: 'https://images.unsplash.com/photo-1601509876296-aba16d4c10a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2Nzc0NzEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'CloudTech Solutions closes 2025 with exceptional growth, welcoming 50+ new enterprise clients and achieving 45% year-over-year revenue growth.',
      featured: false
    },
    {
      id: 6,
      title: 'Partnership with Microsoft Expands Azure Capabilities',
      category: 'Partnership',
      date: 'December 1, 2025',
      image: 'https://images.unsplash.com/photo-1646153976497-14925728ff47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Nzc3Mzg4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'Strategic partnership with Microsoft enhances our Azure consulting services and brings advanced cloud solutions to our enterprise clients.',
      featured: false
    },
    {
      id: 7,
      title: 'Annual Innovation Summit 2026: Registration Now Open',
      category: 'Events',
      date: 'November 25, 2025',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudHxlbnwxfHx8fDE3Njc3NzcxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'Join us for our annual Innovation Summit on March 15-17, 2026. Three days of cutting-edge tech insights, networking, and hands-on workshops.',
      featured: false
    },
    {
      id: 8,
      title: 'Sustainability Initiative: Carbon-Neutral Operations by 2027',
      category: 'Sustainability',
      date: 'November 18, 2025',
      image: 'https://images.unsplash.com/photo-1609619385076-36a873425636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3Njc3MjYwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'CloudTech commits to achieving carbon-neutral operations by 2027, implementing green cloud practices and renewable energy initiatives.',
      featured: false
    }
  ];

  const categories = ['all', 'Company News', 'Case Study', 'Industry Recognition', 'Product Launch', 'Partnership', 'Events', 'Sustainability'];

  const filteredNews = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Company News': return TrendingUp;
      case 'Industry Recognition': return Award;
      case 'Product Launch': return Rocket;
      default: return Tag;
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              News & Updates
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest from CloudTech Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about our latest achievements, product launches, partnerships, 
              and insights into the future of enterprise technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-auto">
                  <ImageWithFallback 
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold text-sm">
                    Featured
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      {featuredArticle.category}
                    </span>
                    <span className="flex items-center gap-2 text-sm">
                      <Calendar size={16} />
                      {featuredArticle.date}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-lg mb-6 text-blue-50">
                    {featuredArticle.excerpt}
                  </p>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 group self-start">
                    Read Full Story
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category === 'all' ? 'All News' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.filter(article => !article.featured).map((article) => {
              const CategoryIcon = getCategoryIcon(article.category);
              return (
                <div key={article.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      <CategoryIcon size={14} />
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                      <Calendar size={14} />
                      {article.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {article.excerpt}
                    </p>
                    <button className="text-blue-600 font-medium flex items-center gap-2 group/btn hover:gap-3 transition-all">
                      <span>Read More</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredNews.filter(article => !article.featured).length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No news articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Subscribe to our newsletter for the latest news, insights, and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Media & Press Inquiries
            </h3>
            <p className="text-gray-600 mb-6">
              For media inquiries, interview requests, or press materials, please contact our communications team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:press@cloudtechsolutions.com" className="text-blue-600 hover:text-blue-700">
                press@cloudtechsolutions.com
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <span className="text-gray-600">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
