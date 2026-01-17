export function TechEcosystem() {
  const technologies = [
    {
      name: 'Oracle NetSuite',
      logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=100&fit=crop'
    },
    {
      name: 'Microsoft',
      logo: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=200&h=100&fit=crop'
    },
    {
      name: 'Zoho',
      logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=200&h=100&fit=crop'
    },
    {
      name: 'Xentral',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop'
    }
  ];

  const partners = [
    'Tech IQ Business Consulting',
    'Tech IQ BPO'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Technology Ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
            We work with leading ERP and cloud platforms — selected based on financial, operational, and regulatory requirements.
          </p>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Technology is an enabler in our approach, not the starting point. 
            Our focus remains on financial reality, governance, and scalable operating models.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-all"
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--jps-blue)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
            >
              <span className="font-semibold text-gray-700">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Delivery & Business Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="px-6 py-3 rounded-lg border-2 border-gray-200 hover:shadow-md transition-all"
                style={{ borderColor: 'var(--jps-blue-light)' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--jps-blue)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--jps-blue-light)'}
              >
                <span className="font-semibold text-gray-700">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
