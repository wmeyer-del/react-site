import { Mail, MapPin, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import { Page } from '../App';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const handlePageChange = (page: Page) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--jps-blue-accessible-dark-bg)' }}>JPS-iQ</h3>
            <p className="text-gray-400 mb-4">
              Finance-First. Technology-Driven. Globally Connected.
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Empowering CFOs and enterprises to modernize finance and operations through world-class ERP and business transformation services.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-lg transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-lg transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-lg transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-lg transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handlePageChange('home')} 
                  className="text-gray-400 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue-accessible-dark-bg)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageChange('about')} 
                  className="text-gray-400 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue-accessible-dark-bg)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageChange('services')} 
                  className="text-gray-400 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue-accessible-dark-bg)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageChange('contact')} 
                  className="text-gray-400 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue-accessible-dark-bg)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Solution Areas */}
          <div>
            <h4 className="font-semibold mb-4">Solution Areas</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handlePageChange('services')} 
                  className="text-gray-400 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue-accessible-dark-bg)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  Finance & Transformation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageChange('services')} 
                  className="text-gray-400 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue-accessible-dark-bg)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  ERP & Technology
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageChange('services')} 
                  className="text-gray-400 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue-accessible-dark-bg)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  BPO & Managed Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageChange('services')} 
                  className="text-gray-400 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue-accessible-dark-bg)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  OPCON – Operational Control
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--jps-blue-accessible-dark-bg)' }} />
                <span className="text-gray-400 text-sm">
                  Tech IQ Solutions Global PTE LTD<br />
                  210 Turf Club Road, Bukit Timah<br />
                  Singapore 287995
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="flex-shrink-0" style={{ color: 'var(--jps-blue-accessible-dark-bg)' }} />
                <a 
                  href="mailto:welcome@jps-iq.com" 
                  className="text-gray-400 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue-accessible-dark-bg)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  welcome@jps-iq.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2023 Tech IQ Solutions Global PTE LTD - All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a 
                href="#" 
                className="text-gray-400 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue-accessible-dark-bg)'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue-accessible-dark-bg)'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-gray-400 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue-accessible-dark-bg)'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Legal Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
