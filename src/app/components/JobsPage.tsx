import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';
import { Page } from '../App';

interface JobsPageProps {
  onPageChange?: (page: Page) => void;
}

export function JobsPage({ onPageChange }: JobsPageProps) {
  const jobOpenings = [
    {
      title: 'Senior ERP Consultant (Oracle NetSuite)',
      location: 'Singapore',
      type: 'Full-time',
      department: 'ERP & Technology',
      description: 'Lead NetSuite implementation projects for clients across APAC, working closely with CFOs and finance teams to design and deploy finance-first ERP solutions.',
      requirements: [
        '5+ years of NetSuite implementation experience',
        'Strong understanding of financial processes and controls',
        'Experience with multi-entity, multi-currency environments',
        'Excellent client-facing and communication skills'
      ]
    },
    {
      title: 'Finance Transformation Manager',
      location: 'Singapore / Germany',
      type: 'Full-time',
      department: 'Finance & Transformation',
      description: 'Drive finance transformation initiatives for mid-sized and enterprise clients, including operating model design, process optimization, and ERP selection.',
      requirements: [
        '7+ years in finance transformation or management consulting',
        'CPA, CA, or equivalent professional qualification',
        'Experience with ERP selection and implementation projects',
        'Strong project management and stakeholder management skills'
      ]
    },
    {
      title: 'Microsoft Dynamics 365 F&O Consultant',
      location: 'Germany',
      type: 'Full-time',
      department: 'ERP & Technology',
      description: 'Configure and customize Microsoft Dynamics 365 Finance & Operations for manufacturing and distribution clients, focusing on financial modules and integrations.',
      requirements: [
        '3+ years of D365 F&O implementation experience',
        'Deep knowledge of finance and controlling modules',
        'Experience with Azure integration and Power Platform',
        'German language proficiency required'
      ]
    },
    {
      title: 'Business Process Outsourcing Specialist',
      location: 'Philippines',
      type: 'Full-time',
      department: 'BPO & Managed Services',
      description: 'Deliver ERP-based accounting, controlling, and reporting services for international clients as part of our managed services team.',
      requirements: [
        'Bachelor degree in Accounting or Finance',
        'Experience with NetSuite or Dynamics 365',
        'Strong analytical and problem-solving skills',
        'Excellent English communication skills'
      ]
    },
    {
      title: 'OPCON Implementation Consultant',
      location: 'Singapore / Remote',
      type: 'Full-time',
      department: 'OPCON – Operational Control',
      description: 'Implement and configure our OPCON operational control platform for CFOs and COOs seeking enhanced governance and KPI transparency.',
      requirements: [
        'Experience with BI/analytics platforms (Power BI, Tableau, etc.)',
        'Understanding of KPI frameworks and operational metrics',
        'ERP integration experience (NetSuite, D365, SAP, etc.)',
        'Consulting background preferred'
      ]
    },
    {
      title: 'Junior ERP Developer',
      location: 'Singapore / Philippines',
      type: 'Full-time',
      department: 'ERP & Technology',
      description: 'Support ERP customization and integration projects using SuiteScript, JavaScript, and modern web technologies.',
      requirements: [
        '1-2 years of software development experience',
        'Proficiency in JavaScript/TypeScript',
        'Interest in ERP systems and business applications',
        'Strong learning ability and attention to detail'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Global Opportunities',
      description: 'Work across multiple countries and gain international exposure'
    },
    {
      title: 'Professional Development',
      description: 'Continuous learning with certifications and training programs'
    },
    {
      title: 'Competitive Compensation',
      description: 'Market-leading salaries and performance-based bonuses'
    },
    {
      title: 'Flexible Work',
      description: 'Hybrid work arrangements and flexible schedules'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness benefits'
    },
    {
      title: 'Career Growth',
      description: 'Clear career progression paths and mentorship programs'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(to bottom right, var(--jps-blue-lighter), white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            Build your career with the JPS-iQ Solutions Group — empowering finance leaders globally.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're looking for talented professionals who are passionate about finance transformation, ERP technology, and delivering exceptional client value.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join JPS-iQ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Be part of a global team transforming how finance organizations operate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Opportunities
            </h2>
            <p className="text-lg text-gray-600">
              Explore open positions across our global locations
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} style={{ color: 'var(--jps-blue)' }} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} style={{ color: 'var(--jps-blue)' }} />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} style={{ color: 'var(--jps-blue)' }} />
                        {job.department}
                      </div>
                    </div>
                  </div>
                  <button 
                    className="text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap"
                    style={{ backgroundColor: 'var(--jps-blue)' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue-hover)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue)'}
                    onClick={() => onPageChange?.('contact')}
                  >
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-700 mb-4">{job.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-gray-600 flex items-start gap-2">
                        <span style={{ color: 'var(--jps-blue)' }}>•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your CV and let us know how you can contribute to our mission.
          </p>
          <button 
            onClick={() => onPageChange?.('contact')}
            className="text-white px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2 font-semibold text-lg"
            style={{ backgroundColor: 'var(--jps-blue)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue)'}
          >
            Get in Touch
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
}
