import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function NewsPage() {
  const newsArticles = [
    {
      title: 'JPS-iQ Solutions Group Expands APAC Presence with New Singapore Office',
      date: 'December 15, 2025',
      category: 'Company News',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nYXBvcmUlMjBza3lsaW5lfGVufDF8fHx8MTczNjI2OTg4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'As part of our global growth strategy, we have opened a new regional headquarters in Singapore to better serve our expanding client base across Asia-Pacific.',
      content: 'The new Singapore office will serve as the regional hub for finance transformation and ERP implementation services, supporting clients across Southeast Asia, Australia, and beyond.'
    },
    {
      title: 'Oracle NetSuite Partnership: Delivering Cloud ERP Excellence',
      date: 'November 28, 2025',
      category: 'Partnerships',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3MzYyNjk4ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'We are proud to announce our expanded partnership with Oracle NetSuite, enabling us to deliver world-class cloud ERP solutions to mid-market and enterprise clients.',
      content: 'This partnership reinforces our position as a leading NetSuite implementation partner in the APAC and EMEA regions, with certified consultants across multiple countries.'
    },
    {
      title: 'Finance Transformation Success: Global Manufacturing Client Goes Live',
      date: 'October 10, 2025',
      category: 'Client Success',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwcGxhbnR8ZW58MXx8fHwxNzM2MjY5ODg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'A leading global manufacturing company successfully completed their finance transformation journey with JPS-iQ, implementing NetSuite across 12 entities in 8 countries.',
      content: 'The project delivered real-time financial consolidation, multi-GAAP reporting, and streamlined procure-to-pay processes — achieving go-live on time and under budget.'
    },
    {
      title: 'Introducing OPCON: Next-Generation Operational Control Platform',
      date: 'September 22, 2025',
      category: 'Product Launch',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzM2MjY5ODg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'OPCON is our new operational control platform designed for CFOs and COOs seeking enhanced governance, KPI transparency, and data-driven decision-making.',
      content: 'OPCON integrates seamlessly with NetSuite, Dynamics 365, and other ERP systems to provide real-time operational dashboards and automated reporting.'
    },
    {
      title: 'Microsoft Dynamics 365 Finance & Operations: Enterprise Deployment',
      date: 'August 5, 2025',
      category: 'Client Success',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhdGF8ZW58MXx8fHwxNzM2MjY5ODg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'JPS-iQ successfully deployed Microsoft Dynamics 365 Finance & Operations for a European enterprise, replacing legacy SAP systems and modernizing financial processes.',
      content: 'The implementation included advanced financial consolidation, intercompany transactions, and Azure-based integrations with third-party systems.'
    },
    {
      title: 'BPO Services Expansion: New Managed Services Center in Philippines',
      date: 'July 18, 2025',
      category: 'Company News',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwdGVhbXxlbnwxfHx8fDE3MzYyNjk4ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'To support growing demand for BPO and managed services, we have opened a new center in Manila focused on ERP-based accounting, controlling, and reporting.',
      content: 'The Manila center will serve as an extension of our clients\' finance organizations, delivering accounting and reporting services powered by NetSuite and Dynamics 365.'
    },
    {
      title: 'Thought Leadership: CFO Roundtable on Finance Automation',
      date: 'June 30, 2025',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbXxlbnwxfHx8fDE3MzYyNjk4ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'JPS-iQ hosted an executive roundtable in Singapore bringing together CFOs from leading enterprises to discuss finance automation, AI, and digital transformation.',
      content: 'The event featured case studies, panel discussions, and networking opportunities focused on practical approaches to finance modernization.'
    },
    {
      title: 'ERP Selection Framework: Helping CFOs Choose the Right Platform',
      date: 'May 12, 2025',
      category: 'Insights',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVneSUyMHBsYW5uaW5nfGVufDF8fHx8MTczNjI2OTg4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'We have published a comprehensive ERP selection framework based on our experience supporting over 100 ERP evaluations across multiple industries.',
      content: 'The framework covers key selection criteria including financial functionality, scalability, total cost of ownership, and implementation risk.'
    }
  ];

  const categories = ['All', 'Company News', 'Client Success', 'Partnerships', 'Product Launch', 'Events', 'Insights'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(to bottom right, var(--jps-blue-lighter), white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            News & Updates
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay informed about the latest developments, client successes, and insights from the JPS-iQ Solutions Group.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0 
                    ? 'text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={index === 0 ? { backgroundColor: 'var(--jps-blue)' } : {}}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <ImageWithFallback
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: 'var(--jps-blue)' }}
                >
                  Featured
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} style={{ color: 'var(--jps-blue)' }} />
                    {newsArticles[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag size={16} style={{ color: 'var(--jps-blue)' }} />
                    {newsArticles[0].category}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {newsArticles[0].title}
                </h2>
                <p className="text-gray-700 mb-6">
                  {newsArticles[0].excerpt}
                </p>
                <div>
                  <button 
                    className="inline-flex items-center gap-2 font-semibold transition-colors"
                    style={{ color: 'var(--jps-blue)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue-hover)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--jps-blue)'}
                  >
                    Read More
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} style={{ color: 'var(--jps-blue)' }} />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={14} style={{ color: 'var(--jps-blue)' }} />
                      {article.category}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <button 
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: 'var(--jps-blue)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue-hover)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--jps-blue)'}
                  >
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to our newsletter to receive the latest news, insights, and updates directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': 'var(--jps-blue)' } as any}
            />
            <button 
              className="text-white px-8 py-3 rounded-lg transition-colors font-semibold whitespace-nowrap"
              style={{ backgroundColor: 'var(--jps-blue)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue)'}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
