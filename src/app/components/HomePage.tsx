import { ArrowRight, TrendingUp, Cog, Users, BarChart3, Building2, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Page } from '../App';

interface HomePageProps {
  onPageChange: (page: Page) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePageChange = (page: Page) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const solutionAreas = [
    {
      icon: TrendingUp,
      title: 'Finance & Transformation',
      description: 'Operating models, finance transformation, and ERP selection aligned with business strategy.'
    },
    {
      icon: Cog,
      title: 'ERP & Technology',
      description: 'Finance-driven ERP implementations designed around financial reality.'
    },
    {
      icon: Users,
      title: 'BPO & Managed Services',
      description: 'ERP-based accounting, controlling, and reporting services extending your finance organization.'
    },
    {
      icon: BarChart3,
      title: 'OPCON – Operational Control',
      description: 'Governance, KPI control, and operational transparency for CFOs and COOs.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20" style={{ background: 'linear-gradient(to bottom right, var(--jps-blue-lighter), white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--jps-blue-light)', color: 'var(--jps-blue-dark)' }}>
                Finance-First Approach
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Finance-First ERP & Digital Transformation
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600">
                Enabling CFOs and executive teams to gain sustainable financial control, compliance, and scalability.
              </p>

              <p className="text-base text-gray-700">
                JPS-iQ Solutions Group delivers finance-driven ERP implementations and transformation services — combining deep financial expertise with leading platforms such as Oracle NetSuite and Microsoft Dynamics 365.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => handlePageChange('contact')}
                  className="text-white px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 group"
                  style={{ backgroundColor: 'var(--jps-blue)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue)'}
                >
                  Contact us
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('solutions-overview')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg transition-all"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--jps-blue)';
                    e.currentTarget.style.color = 'var(--jps-blue)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.color = '';
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzM2MjY5ODg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Finance team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Finance-Driven Transformation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We help CFOs and executive teams design, implement, and operate finance-driven ERP and operating models — from strategy to execution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--jps-blue-light)' }}
              >
                <TrendingUp style={{ color: 'var(--jps-blue)' }} size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Finance-First</h3>
              <p className="text-gray-600">
                Solutions designed around financial reality and operating models, not technical constraints.
              </p>
            </div>

            <div className="text-center p-6">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--jps-blue-light)' }}
              >
                <Cog style={{ color: 'var(--jps-blue)' }} size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Technology-Driven</h3>
              <p className="text-gray-600">
                Leveraging Oracle NetSuite and Microsoft Dynamics 365 to enable scalable operations.
              </p>
            </div>

            <div className="text-center p-6">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--jps-blue-light)' }}
              >
                <Building2 style={{ color: 'var(--jps-blue)' }} size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Globally Connected</h3>
              <p className="text-gray-600">
                Headquartered in Singapore with offices in Germany, Philippines, and the United States.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Areas Overview */}
      <section id="solutions-overview" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solution Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each solution area addresses a distinct finance and operating challenge — together covering the full transformation lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {solutionAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:shadow-lg transition-all"
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--jps-blue)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'var(--jps-blue-light)' }}
                  >
                    <Icon style={{ color: 'var(--jps-blue)' }} size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button 
              onClick={() => handlePageChange('services')}
              className="text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2 font-semibold"
              style={{ backgroundColor: 'var(--jps-blue)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue)'}
            >
              Explore All Solutions
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Challenges We Solve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              When ERP Systems No Longer Reflect Financial Reality
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Finance leaders turn to us when facing critical challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <AlertCircle style={{ color: 'var(--jps-blue)' }} size={24} className="mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Lack of financial transparency</h3>
              <p className="text-sm text-gray-600">Fragmented systems and limited visibility across entities</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <AlertCircle style={{ color: 'var(--jps-blue)' }} size={24} className="mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">IT-driven ERP systems</h3>
              <p className="text-sm text-gray-600">Systems built on technical requirements instead of financial logic</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <AlertCircle style={{ color: 'var(--jps-blue)' }} size={24} className="mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Compliance pressure</h3>
              <p className="text-sm text-gray-600">Multiple GAAPs, IFRS requirements, and tax complexity</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <AlertCircle style={{ color: 'var(--jps-blue)' }} size={24} className="mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Inefficient processes</h3>
              <p className="text-sm text-gray-600">Manual workarounds and Excel dependencies</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <AlertCircle style={{ color: 'var(--jps-blue)' }} size={24} className="mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">No scalable model</h3>
              <p className="text-sm text-gray-600">Unable to support acquisitions or international expansion</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <AlertCircle style={{ color: 'var(--jps-blue)' }} size={24} className="mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Unclear ownership</h3>
              <p className="text-sm text-gray-600">Lack of governance during transformation initiatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="py-20" style={{ backgroundColor: 'var(--jps-blue-lighter)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The JPS-iQ Solutions Group is a global consortium of finance and technology experts empowering CFOs and enterprises to modernize finance and operations.
              </p>
              <p className="text-base text-gray-700 mb-6">
                Headquartered in Singapore, with entities in Germany, the Philippines, and the United States.
              </p>
              <button 
                onClick={() => handlePageChange('about')}
                className="text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2 font-semibold"
                style={{ backgroundColor: 'var(--jps-blue)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue)'}
              >
                Learn About Us
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--jps-blue)' }}>7</div>
                <p className="text-sm text-gray-600">Group Companies</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--jps-blue)' }}>4</div>
                <p className="text-sm text-gray-600">Countries</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--jps-blue)' }}>4</div>
                <p className="text-sm text-gray-600">Solution Areas</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--jps-blue)' }}>2</div>
                <p className="text-sm text-gray-600">Major ERP Platforms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Finance Operations?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how we can help you achieve sustainable financial control, compliance, and scalability.
          </p>
          <button 
            onClick={() => handlePageChange('contact')}
            className="text-white px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2 font-semibold text-lg"
            style={{ backgroundColor: 'var(--jps-blue)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue)'}
          >
            Contact Us Today
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
}