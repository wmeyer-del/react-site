import { Mail, MapPin, Send, Globe2 } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(to bottom right, var(--jps-blue-lighter), white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We value our customers very much and are glad that you visit our website. What can we do for you?
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: 'var(--jps-blue-light)' }}
                  >
                    <MapPin style={{ color: 'var(--jps-blue)' }} size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Our Office</h3>
                    <p className="text-gray-600">Tech IQ Solutions Global PTE LTD</p>
                    <p className="text-gray-600">210 Turf Club Road, Bukit Timah</p>
                    <p className="text-gray-600">Singapore 287995</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: 'var(--jps-blue-light)' }}
                  >
                    <Mail style={{ color: 'var(--jps-blue)' }} size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a 
                      href="mailto:welcome@jps-iq.com" 
                      className="text-lg transition-colors"
                      style={{ color: 'var(--jps-blue)' }}
                      onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                      onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                    >
                      welcome@jps-iq.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: 'var(--jps-blue-light)' }}
                  >
                    <Globe2 style={{ color: 'var(--jps-blue)' }} size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Global Presence</h3>
                    <p className="text-gray-600">
                      Headquartered in Singapore with offices in Germany, Philippines, and the United States.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-xl" style={{ backgroundColor: 'var(--jps-blue-lighter)' }}>
                <h3 className="font-semibold text-gray-900 mb-3">Why Choose JPS-iQ?</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>Finance-first approach to ERP implementation</span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>Global expertise across multiple platforms</span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>End-to-end support from strategy to execution</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      '--tw-ring-color': 'var(--jps-blue)' 
                    } as React.CSSProperties}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--jps-blue)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = ''}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      '--tw-ring-color': 'var(--jps-blue)' 
                    } as React.CSSProperties}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--jps-blue)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = ''}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      '--tw-ring-color': 'var(--jps-blue)' 
                    } as React.CSSProperties}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--jps-blue)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = ''}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{ 
                      '--tw-ring-color': 'var(--jps-blue)' 
                    } as React.CSSProperties}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--jps-blue)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = ''}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-semibold"
                  style={{ backgroundColor: 'var(--jps-blue)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue)'}
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
