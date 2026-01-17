import { Target, Award, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Results() {
  const stats = [
    {
      icon: Target,
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Projects delivered on time and within budget'
    },
    {
      icon: Award,
      value: '40%',
      label: 'Average Cost Savings',
      description: 'Through optimized IT infrastructure'
    },
    {
      icon: Users,
      value: '200+',
      label: 'Enterprise Clients',
      description: 'Across diverse industries worldwide'
    },
    {
      icon: Clock,
      value: '15+',
      label: 'Years Experience',
      description: 'In enterprise IT solutions'
    }
  ];

  const values = [
    {
      title: 'Solution-Oriented Mindset',
      description: 'We don\'t just identify problems—we deliver actionable solutions tailored to your unique business challenges and goals.'
    },
    {
      title: 'Measurable Results',
      description: 'Every project includes clear KPIs and success metrics. We\'re committed to demonstrating tangible ROI and business impact.'
    },
    {
      title: 'End-to-End Partnership',
      description: 'From initial consultation to ongoing support, we\'re with you every step of the way, ensuring long-term success and continuous improvement.'
    }
  ];

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Proven Track Record
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Delivering Measurable Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence is reflected in the outcomes we achieve for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1601509876296-aba16d4c10a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2Nzc0NzEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h3>
              <p className="text-lg text-gray-600">
                We combine technical expertise with business acumen to deliver solutions that truly move the needle.
              </p>
            </div>

            {values.map((value, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
