import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
                onClick={scrollToContact}
                className="text-white px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 group"
                style={{ backgroundColor: 'var(--jps-blue)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue)'}
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
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
                Our Solutions
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
  );
}
