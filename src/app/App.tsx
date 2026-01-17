import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutUs } from './components/AboutUs';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
import { JobsPage } from './components/JobsPage';
import { NewsPage } from './components/NewsPage';
import { Footer } from './components/Footer';

export type Page = 'home' | 'about' | 'services' | 'contact' | 'jobs' | 'news';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="size-full bg-white">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      {currentPage === 'home' && <HomePage onPageChange={setCurrentPage} />}
      {currentPage === 'about' && <AboutUs />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'jobs' && <JobsPage onPageChange={setCurrentPage} />}
      {currentPage === 'news' && <NewsPage />}
      
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}