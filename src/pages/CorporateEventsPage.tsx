import { useEffect, useRef, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface MenuItemCardProps {
  name: string;
  description?: string;
  price: string;
  sides?: string;
  index: number;
}

function MenuItemCard({ name, description, price, sides, index }: MenuItemCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="bg-[#EFE3D7] rounded-2xl border border-[#C9C3BA] p-8 hover:shadow-xl transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div className="h-[2px] w-12 bg-[#C4A46A] mb-4" />
      <h3 className="text-[#36394C] mb-3">{name}</h3>
      {description && (
        <p className="text-[#36394C]/85 mb-3" style={{ fontSize: '16px', lineHeight: '1.5' }}>
          {description}
        </p>
      )}
      {sides && (
        <p className="text-[#36394C]/70 mb-3" style={{ fontSize: '14px', fontStyle: 'italic' }}>
          Served with: {sides}
        </p>
      )}
      <p className="text-[#5B2E34]" style={{ fontWeight: 600, fontSize: '16px' }}>
        {price}
      </p>
    </div>
  );
}

export function CorporateEventsPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [heroVisible, setHeroVisible] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setHeroVisible(true);
  }, []);

  const corporateServices = [
    {
      title: 'Executive Luncheons',
      description: 'Professional business meetings with sophisticated plated service and impeccable presentation',
      price: 'Custom pricing from $65/person'
    },
    {
      title: 'Conference Catering',
      description: 'Multi-day events with breakfast, lunch, and break refreshments tailored to your schedule',
      price: 'Custom pricing from $45/person'
    },
    {
      title: 'Product Launches',
      description: 'Memorable unveilings with creative cuisine that complements your brand messaging',
      price: 'Custom pricing from $85/person'
    },
    {
      title: 'Team Building Events',
      description: 'Interactive gatherings with shared dining experiences and professional service',
      price: 'Custom pricing from $55/person'
    }
  ];

  const businessCuisine = [
    {
      name: 'Executive Business Lunch',
      description: 'Three-course plated service with seasonal ingredients and wine pairings',
      price: '$65 per person',
    },
    {
      name: 'Working Breakfast Buffet',
      description: 'Continental breakfast with fresh pastries, seasonal fruits, and hot items',
      price: '$25 per person',
    },
    {
      name: 'Afternoon Networking Reception',
      description: 'Passed appetizers and wine service perfect for client meetings',
      price: '$45 per person',
    },
  ];

  return (
    <div className="min-h-screen bg-[#EFE3D7]">
      <Header alwaysLight showBackLink onNavigate={(target) => {
        if (target === 'home') {
          onNavigate('home');
        }
      }} />

      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center text-center px-6"
        style={{
          height: '70vh',
          marginTop: '80px',
          backgroundImage: `url('https://images.unsplash.com/photo-1731941465921-eb4285693713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NTk5MTYwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div
          className="max-w-4xl transition-all duration-1000 ease-out"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(40px)',
          }}
        >
          <h1 className="text-[#36394C] mb-6" style={{ fontFamily: 'Libre Baskerville, Georgia, serif', fontWeight: 700, fontSize: 'clamp(44px, 5vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>Corporate Events</h1>
          <p className="text-[#36394C] mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '18px', fontWeight: 500, lineHeight: 1.5 }}>
            Business gatherings. Professional service. Quality cuisine.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="relative bg-[#5B2E34] text-[#EFE3D7] px-8 py-4 rounded-[12px] shadow-lg hover:bg-[#4F272C] hover:shadow-xl transition-all duration-300"
            style={{ fontWeight: 500, letterSpacing: '0.02em', fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="relative z-10">PLAN YOUR EVENT</span>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-[#EFE3D7] py-20 px-10">
        <p
          className="text-[#36394C] text-center max-w-4xl mx-auto transition-all duration-800 ease-out"
          style={{
            fontSize: '18px',
            lineHeight: '1.6',
            opacity: introVisible ? 1 : 0,
            transform: introVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          Professional excellence demands exceptional dining. We provide sophisticated catering solutions for corporate events, conferences, and business gatherings that impress clients and inspire teams.
        </p>
      </div>

      {/* Corporate Services Section */}
      <div className="py-20 px-6 bg-[#C9C3BA]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#36394C] mb-4">Corporate Services</h2>
            <div className="w-[60px] h-[2px] bg-[#C4A46A] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {corporateServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-[#EFE3D7] rounded-2xl border border-[#C9C3BA] p-8 hover:shadow-xl transition-all duration-300"
                style={{
                  opacity: introVisible ? 1 : 0,
                  transform: introVisible ? 'translateY(0)' : 'translateY(40px)',
                  transitionDelay: `${index * 0.2}s`,
                }}
              >
                <div className="h-[2px] w-12 bg-[#C4A46A] mb-4" />
                <h3 className="text-[#36394C] mb-3">{service.title}</h3>
                <p className="text-[#36394C]/85 mb-3" style={{ fontSize: '16px', lineHeight: '1.5' }}>
                  {service.description}
                </p>
                <p className="text-[#5B2E34]" style={{ fontWeight: 600, fontSize: '16px' }}>
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Cuisine Section */}
      <div className="py-20 px-6 bg-[#EFE3D7]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#36394C] mb-4">Business Cuisine</h2>
            <div className="w-[60px] h-[2px] bg-[#C4A46A] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {businessCuisine.map((dish, index) => (
              <MenuItemCard key={dish.name} {...dish} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 bg-[#5B2E34]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#EFE3D7] mb-6">Elevate Your Business Events</h2>
          <p className="text-[#EFE3D7]/85 mb-8" style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Make every corporate gathering memorable with exceptional cuisine and flawless service that reflects your company's standards of excellence.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="relative bg-[#EFE3D7] text-[#5B2E34] px-8 py-4 rounded-[12px] shadow-lg hover:bg-[#F8F5F0] hover:shadow-xl transition-all duration-300"
            style={{ fontWeight: 500, letterSpacing: '0.02em', fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="relative z-10">START PLANNING</span>
            <div className="absolute inset-0 bg-gradient-to-br from-[#5B2E34]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}