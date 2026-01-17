import { TrendingUp, Cog, Users, BarChart3 } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Finance & Transformation',
      description: 'Operating models, finance transformation, and ERP selection aligned with business strategy, governance, and growth.',
      relevantFor: [
        'Finance transformation initiatives',
        'Target operating model design',
        'ERP & system selection'
      ]
    },
    {
      icon: Cog,
      title: 'ERP & Technology',
      description: 'Finance-driven ERP implementations and global rollouts designed around financial reality — not technical constraints.',
      relevantFor: [
        'ERP replacement or consolidation',
        'Multi-entity & international setups',
        'Finance-led system design'
      ]
    },
    {
      icon: Users,
      title: 'BPO & Managed Services',
      description: 'ERP-based accounting, controlling, and reporting services extending your finance organization with scalable execution.',
      relevantFor: [
        'Post-go-live stabilization',
        'Shared services & SSC models',
        'Ongoing finance operations'
      ]
    },
    {
      icon: BarChart3,
      title: 'OPCON – Operational Control',
      description: 'Governance, KPI control, and operational transparency enabling CFOs and COOs to manage with clarity and confidence.',
      relevantFor: [
        'Lack of operational control',
        'KPI & governance gaps',
        'BPO readiness'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Finance-First Solution Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each solution area addresses a distinct finance and operating challenge — together covering the full transformation lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="p-8 rounded-xl border-2 border-gray-200 hover:shadow-xl transition-all duration-300"
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--jps-blue)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
              >
                <div 
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--jps-blue-light)' }}
                >
                  <Icon style={{ color: 'var(--jps-blue)' }} size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">When this area is relevant:</p>
                  <ul className="space-y-1">
                    {service.relevantFor.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">How These Areas Work Together</h3>
          <p className="text-gray-700 leading-relaxed">
            Our solution areas are designed to work together — not in isolation. 
            Most engagements start in one area and naturally evolve across others as organizations grow, transform, or increase in complexity. 
            This integrated approach allows us to support finance and operations end-to-end — from strategy and system design to execution and ongoing operations.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">How Our Solutions Are Structured</h3>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
            Our solutions are not organized by technology — but by finance, governance, and operating challenges. 
            We start with financial reality and operating models, then select and implement the right systems to support them. 
            This ensures sustainable results across strategy, implementation, and ongoing operations.
          </p>
        </div>
      </div>
    </section>
  );
}
