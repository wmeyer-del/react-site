import { Briefcase, MapPin, Clock, DollarSign, ArrowRight, Heart, Zap, Users, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function Jobs() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Senior Cloud Solutions Architect',
      department: 'Cloud Solutions',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$150K - $200K',
      description: 'Lead the design and implementation of enterprise cloud solutions for Fortune 500 clients.',
      requirements: ['8+ years cloud architecture experience', 'AWS/Azure certifications', 'Team leadership experience']
    },
    {
      id: 2,
      title: 'ERP Implementation Consultant',
      department: 'ERP Services',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$120K - $160K',
      description: 'Guide clients through end-to-end ERP implementations with focus on SAP and Oracle systems.',
      requirements: ['5+ years ERP implementation', 'SAP or Oracle certified', 'Strong client-facing skills']
    },
    {
      id: 3,
      title: 'IT Strategy Consultant',
      department: 'Strategy',
      location: 'Remote',
      type: 'Full-time',
      salary: '$130K - $180K',
      description: 'Develop strategic IT roadmaps that align technology investments with business objectives.',
      requirements: ['7+ years IT consulting', 'MBA or equivalent preferred', 'Strategic thinking ability']
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'System Support',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
      salary: '$110K - $150K',
      description: 'Build and maintain CI/CD pipelines, infrastructure automation, and monitoring systems.',
      requirements: ['5+ years DevOps experience', 'Kubernetes, Docker expertise', 'Scripting skills (Python, Bash)']
    },
    {
      id: 5,
      title: 'Junior Cloud Engineer',
      department: 'Cloud Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$80K - $100K',
      description: 'Support cloud infrastructure deployment and maintenance under senior engineers mentorship.',
      requirements: ['2+ years cloud experience', 'AWS or Azure basics', 'Eager to learn and grow']
    },
    {
      id: 6,
      title: 'Technical Project Manager',
      department: 'Project Management',
      location: 'Chicago, IL / Hybrid',
      type: 'Full-time',
      salary: '$115K - $145K',
      description: 'Oversee complex IT projects ensuring delivery on time, within scope, and on budget.',
      requirements: ['5+ years project management', 'PMP certification preferred', 'Agile/Scrum experience']
    },
    {
      id: 7,
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100K - $140K',
      description: 'Monitor security threats, implement protective measures, and respond to security incidents.',
      requirements: ['4+ years security experience', 'CISSP or CEH certification', 'Threat analysis skills']
    },
    {
      id: 8,
      title: 'Data Integration Specialist',
      department: 'ERP Services',
      location: 'Boston, MA',
      type: 'Contract',
      salary: '$90K - $120K',
      description: 'Design and implement data migration strategies for ERP implementations.',
      requirements: ['3+ years data integration', 'ETL tools expertise', 'SQL proficiency']
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, and vision coverage for you and your family'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: '$5,000 annual budget for courses, certifications, and conferences'
    },
    {
      icon: Zap,
      title: 'Work-Life Balance',
      description: 'Flexible hours, unlimited PTO, and remote work options'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Regular team events, mentorship programs, and inclusive environment'
    }
  ];

  const departments = ['all', 'Cloud Solutions', 'ERP Services', 'Strategy', 'System Support', 'Project Management', 'Security'];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Join Our Team
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Build Your Career with Industry Leaders
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join a team of passionate professionals dedicated to transforming businesses 
                through innovative technology solutions. We invest in our people because they 
                are our greatest asset.
              </p>
              <div className="flex flex-wrap gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">40+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">4.8/5</div>
                  <div className="text-gray-600">Glassdoor Rating</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1704652070195-61e76e1466db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWFtfGVufDF8fHx8MTc2NzcyNzQ5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Office workspace team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job—we offer a career path with growth, learning, and meaningful impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore opportunities across our organization
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedDepartment === dept
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {dept === 'all' ? 'All Positions' : dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign size={16} />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap flex items-center gap-2 group">
                    Apply Now
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <p className="text-gray-600 mb-4">
                  {job.description}
                </p>

                <div>
                  <div className="font-semibold text-gray-900 mb-2">Key Requirements:</div>
                  <ul className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <ArrowRight size={16} className="text-blue-600 flex-shrink-0 mt-1" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No positions available in this department at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Submit General Application
          </button>
        </div>
      </section>
    </div>
  );
}
