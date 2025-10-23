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

function AppetizersMenuSection() {
  const [isBurgundyBg, setIsBurgundyBg] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBurgundyBg(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-20 px-6 relative overflow-hidden transition-all duration-1000"
      style={{
        backgroundColor: isBurgundyBg ? '#5B2E34' : '#EFE3D7',
      }}
    >
      <div className="absolute inset-0 transition-opacity duration-1000"
           style={{
             backgroundImage: `url('https://images.unsplash.com/photo-1698280954292-c955f882486f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwdGFibGV8ZW58MXx8fHwxNzU5OTIwMDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             opacity: isBurgundyBg ? 0.08 : 0,
           }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <p
            className="mb-2 transition-colors duration-1000"
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontStyle: 'italic',
              fontSize: '28px',
              color: '#C4A46A'
            }}
          >
            Private Events
          </p>
          <h2
            className="mb-4 transition-colors duration-1000"
            style={{ color: isBurgundyBg ? '#EFE3D7' : '#36394C' }}
          >
            APPETIZERS
          </h2>
          <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          <div>
            <h4
              className="mb-4 transition-colors duration-1000"
              style={{ color: isBurgundyBg ? '#EFE3D7' : '#36394C' }}
            >
              $1.49 PER ITEM (50 MINIMUM)
            </h4>
            <ul
              className="space-y-2 transition-colors duration-1000"
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: isBurgundyBg ? 'rgba(239, 227, 215, 0.9)' : 'rgba(54, 57, 76, 0.85)'
              }}
            >
              <li>Fresh Garlic Breadsticks with Marinara</li>
              <li>Salmon Pinwheel</li>
              <li>Ham & Cheese Pinwheel</li>
              <li>Deviled Eggs</li>
              <li>Mexican Street Corn Phyllo Cup</li>
              <li>Bruschetta with Toast Points</li>
            </ul>
          </div>

          <div>
            <h4
              className="mb-4 transition-colors duration-1000"
              style={{ color: isBurgundyBg ? '#EFE3D7' : '#36394C' }}
            >
              $2.99 PER ITEM (50 MINIMUM)
            </h4>
            <ul
              className="space-y-2 transition-colors duration-1000"
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: isBurgundyBg ? 'rgba(239, 227, 215, 0.9)' : 'rgba(54, 57, 76, 0.85)'
              }}
            >
              <li>Petite Quiche</li>
              <li>Pinwheels (turkey, ham, vegetarian)</li>
              <li>Meatballs (Swedish, BBQ, Marinara, Teriyaki)</li>
              <li>Coconut Shrimp</li>
              <li>Chicken Strips or Wings</li>
              <li>Miniature Strudel Americana</li>
            </ul>
          </div>

          <div>
            <h4
              className="mb-4 transition-colors duration-1000"
              style={{ color: isBurgundyBg ? '#EFE3D7' : '#36394C' }}
            >
              $3.99 PER ITEM (50 MINIMUM)
            </h4>
            <ul
              className="space-y-2 transition-colors duration-1000"
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: isBurgundyBg ? 'rgba(239, 227, 215, 0.9)' : 'rgba(54, 57, 76, 0.85)'
              }}
            >
              <li>Antipasto Kabobs</li>
              <li>Caprese Skewers w/ Balsamic Glaze</li>
              <li>Chicken Potstickers</li>
              <li>Pulled Pork Sliders</li>
              <li>Brisket Brie Cheese Puffs</li>
              <li>Crab Stuffed Mushrooms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PrivateEventsPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [heroVisible, setHeroVisible] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setHeroVisible(true);
  }, []);

  const mainCourses = [
    {
      name: 'Pollo en Mole Poblano',
      description: 'Slow-braised chicken in rich chocolate-chile sauce',
      sides: 'Mexican rice, refried beans',
      price: '$24 per person',
    },
    {
      name: 'Carne Asada',
      description: 'Marinated grilled beef with chimichurri',
      sides: 'Grilled vegetables, papas bravas',
      price: '$28 per person',
    },
    {
      name: 'Pescado a la Veracruzana',
      description: 'Pan-seared sea bass, tomatoes, olives, capers',
      sides: 'Arroz con azafrán, grilled asparagus',
      price: '$32 per person',
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
          backgroundImage: `url('https://images.unsplash.com/photo-1696805566858-fe4a670d5df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwdGFibGUtc2V0dGluZ3xlbnwxfHx8fDE3NTk5Mjc2NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
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
          <h1 className="text-[#36394C] mb-6" style={{ fontFamily: 'Libre Baskerville, Georgia, serif', fontWeight: 700, fontSize: 'clamp(44px, 5vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>Private Events</h1>
          <p className="text-[#36394C] mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '18px', fontWeight: 500, lineHeight: 1.5 }}>
            Intimate gatherings. Personalized menus. Refined service.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="relative bg-[#5B2E34] text-[#EFE3D7] px-8 py-4 rounded-[12px] shadow-lg hover:bg-[#4F272C] hover:shadow-xl transition-all duration-300"
            style={{ fontWeight: 500, letterSpacing: '0.02em', fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="relative z-10">INQUIRE NOW</span>
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
          Private events demand perfection. We curate bespoke experiences for intimate gatherings, ensuring every detail reflects your unique vision and creates lasting memories.
        </p>
      </div>

      {/* Appetizers Menu Section */}
      <AppetizersMenuSection />

      {/* Main Courses Section */}
      <div className="py-20 px-6 bg-[#EFE3D7]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#36394C] mb-4">Main Courses</h2>
            <div className="w-[60px] h-[2px] bg-[#C4A46A] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {mainCourses.map((course, index) => (
              <MenuItemCard key={course.name} {...course} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 bg-[#C9C3BA]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#36394C] mb-6">Plan Your Private Event</h2>
          <p className="text-[#36394C]/85 mb-8" style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Every private event is unique. Let us create a culinary experience that perfectly matches your vision and creates unforgettable memories.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="relative bg-[#5B2E34] text-[#EFE3D7] px-8 py-4 rounded-[12px] shadow-lg hover:bg-[#4F272C] hover:shadow-xl transition-all duration-300"
            style={{ fontWeight: 500, letterSpacing: '0.02em', fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="relative z-10">START PLANNING</span>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}