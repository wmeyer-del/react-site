import { AlertCircle, Database, Scale, FileText, TrendingDown, Users2 } from 'lucide-react';

export function Challenges() {
  const challenges = [
    {
      icon: Database,
      title: 'Lack of financial transparency across entities',
      description: 'Fragmented systems, inconsistent data, and limited visibility across legal entities and countries.'
    },
    {
      icon: AlertCircle,
      title: 'ERP systems driven by IT, not finance',
      description: 'Systems implemented around technical requirements instead of financial logic and reporting needs.'
    },
    {
      icon: Scale,
      title: 'Increasing regulatory and compliance pressure',
      description: 'Multiple GAAPs, IFRS requirements, tax complexity, and audit readiness without a reliable system backbone.'
    },
    {
      icon: FileText,
      title: 'Inefficient finance and operational processes',
      description: 'Manual workarounds, Excel dependencies, and disconnected workflows between finance and operations.'
    },
    {
      icon: TrendingDown,
      title: 'No scalable operating model for growth',
      description: 'ERP and processes that cannot support acquisitions, international expansion, or shared services.'
    },
    {
      icon: Users2,
      title: 'Unclear ownership between finance, IT, and operations',
      description: 'Lack of governance and accountability during ERP and transformation initiatives.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Typical Challenges We Solve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            When ERP systems no longer reflect financial reality, finance leaders turn to us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--jps-blue)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.transform = '';
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--jps-blue-light)' }}
                >
                  <Icon style={{ color: 'var(--jps-blue)' }} size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-sm text-gray-600">{challenge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
