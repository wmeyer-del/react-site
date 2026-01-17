import { Building2, Globe2, Target, Eye } from 'lucide-react';

export function AboutUs() {
  const groupCompanies = [
    {
      name: 'JPS EMEA Group Holding GmbH',
      location: 'Germany',
      description: 'Regional holding and governance for the EMEA group.'
    },
    {
      name: 'Tech IQ EMEA GmbH',
      location: 'Germany',
      description: 'Finance-first ERP advisory & delivery for EMEA.'
    },
    {
      name: 'Tech IQ 365 GmbH',
      location: 'Germany',
      description: 'Microsoft Dynamics 365 Finance & Operations specialists.'
    },
    {
      name: 'Tech IQ Business Consulting GmbH',
      location: 'Germany',
      description: 'Finance transformation, operating model & process excellence.'
    },
    {
      name: 'Tech IQ Solutions Global PTE Ltd',
      location: 'Singapore',
      description: 'Global HQ'
    },
    {
      name: 'Tech IQ Solutions PH Inc',
      location: 'Philippines',
      description: 'Regional delivery centre for Asia & global support hub.'
    },
    {
      name: 'JPS Technology',
      location: 'USA',
      description: 'Innovation & cloud services for mid-market enterprises.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(to bottom right, var(--jps-blue-lighter), white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Finance-First. Technology-Driven. Globally Connected.
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            The JPS-iQ Solutions Group is a global consortium of finance and technology experts empowering CFOs and enterprises to modernize finance and operations. Headquartered in Singapore, with entities in Germany, the Philippines, and the United States, we deliver measurable value through world-class ERP and business transformation services across Oracle NetSuite and Microsoft Dynamics 365.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We specialize in ERP implementation, Finance Transformation, and Business Process Outsourcing (BPO)—combining deep finance expertise with cutting-edge ERP technology.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-xl" style={{ backgroundColor: 'var(--jps-blue-lighter)' }}>
            <div className="flex items-center mb-4">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                style={{ backgroundColor: 'var(--jps-blue-light)' }}
              >
                <Target style={{ color: 'var(--jps-blue)' }} size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Empowering finance and operations teams worldwide through technology-driven transformation.
            </p>
          </div>

          <div className="p-8 rounded-xl" style={{ backgroundColor: 'var(--jps-blue-lighter)' }}>
            <div className="flex items-center mb-4">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                style={{ backgroundColor: 'var(--jps-blue-light)' }}
              >
                <Eye style={{ color: 'var(--jps-blue)' }} size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted partner for organizations seeking to simplify complexity and enable sustainable growth.
            </p>
          </div>
        </div>

        {/* Group Companies */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-12">
            <Globe2 style={{ color: 'var(--jps-blue)' }} size={32} className="mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">Our Group Companies</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupCompanies.map((company, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border-2 border-gray-200 hover:shadow-lg transition-all"
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--jps-blue)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
              >
                <div className="flex items-start mb-3">
                  <Building2 style={{ color: 'var(--jps-blue)' }} size={20} className="mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{company.name}</h4>
                    <p className="text-sm font-semibold mb-2" style={{ color: 'var(--jps-blue)' }}>{company.location}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{company.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Approach Section */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We help CFOs and executive teams design, implement, and operate finance-driven ERP and operating models — from strategy to execution. 
            Our solutions are structured to address complexity across finance, operations, and international organizations.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}