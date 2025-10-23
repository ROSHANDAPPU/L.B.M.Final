import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MenuPage } from './pages/MenuPage';
import { PrivateEventsPage } from './pages/PrivateEventsPage';
import { WeddingsPage } from './pages/WeddingsPage';
import { CorporateEventsPage } from './pages/CorporateEventsPage';
import { ChefServicesPage } from './pages/ChefServicesPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'menu' | 'private-events' | 'weddings' | 'corporate-events' | 'chef-services'>('home');

  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'menu') {
      setCurrentPage('menu');
      window.scrollTo(0, 0);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page as 'home' | 'menu' | 'private-events' | 'weddings' | 'corporate-events' | 'chef-services');
    if (page === 'home') {
      window.scrollTo(0, 0);
    }
  };

  if (currentPage === 'menu') {
    return <MenuPage onNavigate={handleNavigation} />;
  }

  if (currentPage === 'private-events') {
    return <PrivateEventsPage onNavigate={handleNavigation} />;
  }

  if (currentPage === 'weddings') {
    return <WeddingsPage onNavigate={handleNavigation} />;
  }

  if (currentPage === 'corporate-events') {
    return <CorporateEventsPage onNavigate={handleNavigation} />;
  }

  if (currentPage === 'chef-services') {
    return <ChefServicesPage onNavigate={handleNavigation} />;
  }

  return (
    <div className="min-h-screen">
      <Header onNavigate={scrollToSection} currentPage={currentPage} />
      <Hero onNavigate={scrollToSection} />
      <About />
      <Services onNavigate={handleNavigation} />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
