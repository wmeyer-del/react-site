import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Page } from '../App';

interface NavigationProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePageChange = (page: Page) => {
    onPageChange(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => handlePageChange('home')}
            className="flex items-center"
          >
            <span className="text-2xl font-semibold" style={{ color: 'var(--jps-blue)' }}>JPS-IQ</span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handlePageChange('home')} 
              className={`transition-colors ${currentPage === 'home' ? '' : 'text-gray-700'}`}
              style={currentPage === 'home' ? { color: 'var(--jps-blue)' } : {}}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue)'}
              onMouseLeave={(e) => currentPage !== 'home' && (e.currentTarget.style.color = '')}
            >
              Home
            </button>
            <button 
              onClick={() => handlePageChange('about')} 
              className={`transition-colors ${currentPage === 'about' ? '' : 'text-gray-700'}`}
              style={currentPage === 'about' ? { color: 'var(--jps-blue)' } : {}}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue)'}
              onMouseLeave={(e) => currentPage !== 'about' && (e.currentTarget.style.color = '')}
            >
              About
            </button>
            <button 
              onClick={() => handlePageChange('services')} 
              className={`transition-colors ${currentPage === 'services' ? '' : 'text-gray-700'}`}
              style={currentPage === 'services' ? { color: 'var(--jps-blue)' } : {}}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue)'}
              onMouseLeave={(e) => currentPage !== 'services' && (e.currentTarget.style.color = '')}
            >
              Solutions
            </button>
            <button 
              onClick={() => handlePageChange('jobs')} 
              className={`transition-colors ${currentPage === 'jobs' ? '' : 'text-gray-700'}`}
              style={currentPage === 'jobs' ? { color: 'var(--jps-blue)' } : {}}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue)'}
              onMouseLeave={(e) => currentPage !== 'jobs' && (e.currentTarget.style.color = '')}
            >
              Jobs
            </button>
            <button 
              onClick={() => handlePageChange('news')} 
              className={`transition-colors ${currentPage === 'news' ? '' : 'text-gray-700'}`}
              style={currentPage === 'news' ? { color: 'var(--jps-blue)' } : {}}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--jps-blue)'}
              onMouseLeave={(e) => currentPage !== 'news' && (e.currentTarget.style.color = '')}
            >
              News
            </button>
          </div>

          <div className="hidden md:block">
            <button 
              onClick={() => handlePageChange('contact')}
              className="w-full text-white px-6 py-2 rounded-lg transition-colors"
              style={{ backgroundColor: 'var(--jps-blue)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue)'}
            >
              Contact us
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <button 
              onClick={() => handlePageChange('home')} 
              className={`block w-full text-left py-2 transition-colors ${currentPage === 'home' ? '' : 'text-gray-700'}`}
              style={currentPage === 'home' ? { color: 'var(--jps-blue)' } : {}}
            >
              Home
            </button>
            <button 
              onClick={() => handlePageChange('about')} 
              className={`block w-full text-left py-2 transition-colors ${currentPage === 'about' ? '' : 'text-gray-700'}`}
              style={currentPage === 'about' ? { color: 'var(--jps-blue)' } : {}}
            >
              About
            </button>
            <button 
              onClick={() => handlePageChange('services')} 
              className={`block w-full text-left py-2 transition-colors ${currentPage === 'services' ? '' : 'text-gray-700'}`}
              style={currentPage === 'services' ? { color: 'var(--jps-blue)' } : {}}
            >
              Solutions
            </button>
            <button 
              onClick={() => handlePageChange('jobs')} 
              className={`block w-full text-left py-2 transition-colors ${currentPage === 'jobs' ? '' : 'text-gray-700'}`}
              style={currentPage === 'jobs' ? { color: 'var(--jps-blue)' } : {}}
            >
              Jobs
            </button>
            <button 
              onClick={() => handlePageChange('news')} 
              className={`block w-full text-left py-2 transition-colors ${currentPage === 'news' ? '' : 'text-gray-700'}`}
              style={currentPage === 'news' ? { color: 'var(--jps-blue)' } : {}}
            >
              News
            </button>
            <button 
              onClick={() => handlePageChange('contact')}
              className="w-full text-white px-6 py-2 rounded-lg transition-colors"
              style={{ backgroundColor: 'var(--jps-blue)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--jps-blue)'}
            >
              Get in Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}