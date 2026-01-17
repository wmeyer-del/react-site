import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            We value our customers very much and are glad that you visit our website. What can we do for you?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                  style={{ backgroundColor: 'var(--jps-blue-light)' }}
                >
                  <MapPin style={{ color: 'var(--jps-blue)' }} size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Our Office</h4>
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
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a 
                    href="mailto:welcome@jps-iq.com" 
                    className="transition-colors"
                    style={{ color: 'var(--jps-blue)' }}
                    onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                  >
                    welcome@jps-iq.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: 'var(--jps-blue-lighter)' }}>
              <h4 className="font-semibold text-gray-900 mb-2">Global Presence</h4>
              <p className="text-gray-700 text-sm">
                Headquartered in Singapore with offices in Germany, Philippines, and the United States.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
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
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
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
  );
}
