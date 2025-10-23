import { useState, useEffect } from 'react';

interface HeaderProps {
   onNavigate: (section: string) => void;
   alwaysLight?: boolean;
   currentPage?: string;
   showBackLink?: boolean;
}

export function Header({ onNavigate, alwaysLight = false, currentPage = 'home', showBackLink = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger shrink after scrolling past hero (typically 100-150px)
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLight = alwaysLight || scrolled;

  const navLinksLeft = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    ...(currentPage === 'home' ? [{ name: 'Our Process', id: 'process' }] : []),
  ];

  const navLinksRight = [
    { name: 'Our Work', id: 'gallery' },
    { name: 'Menu', id: 'menu' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-[#EFE3D7]/98 backdrop-blur-md shadow-quiet"
      style={{
        borderBottom: '1px solid rgba(201, 195, 186, 0.2)',
        // Kalm Kitchen style: Header shrinks on scroll
        height: scrolled ? '70px' : '90px',
      }}
    >
      <div className="container-wide mx-auto px-6 lg:px-8 h-full">
        {/* Desktop Layout: Left Nav | Center Logo | Right Nav + CTA */}
        <div className="hidden lg:grid lg:grid-cols-3 items-center h-full gap-8">
          {/* Left Navigation */}
          <nav className="flex items-center gap-8 justify-start">
            {showBackLink ? (
              <button
                onClick={() => onNavigate('home')}
                className="text-[#36394C] transition-colors hover:text-[#5B2E34]"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                }}
              >
                ← BACK
              </button>
            ) : (
              navLinksLeft.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="group relative transition-all duration-300 text-[#36394C]"
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {link.name}
                  {/* Brass underline on hover */}
                  <span
                    className="absolute -bottom-1 left-0 h-[1px] bg-[#C4A46A] w-0 group-hover:w-full transition-all duration-300"
                  />
                </button>
              ))
            )}
          </nav>

          {/* Centered Logo */}
          <div className="flex justify-center">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo(0, 0);
              }}
              className="group transition-all duration-500 ease-in-out hover:opacity-80 focus:opacity-80 focus:outline-none"
              aria-label="La Bella Mesa Home"
            >
              <img
                src="/01_Logo/PNG/WIDE_ASPECTRATIO_BLACK.png"
                alt="La Bella Mesa"
                className="transition-all duration-500 ease-in-out"
                style={{
                  height: scrolled ? '40px' : '50px',
                }}
              />
            </button>
          </div>

          {/* Right Navigation + CTA */}
          <div className="flex items-center justify-end gap-8">
            {navLinksRight.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="group relative transition-all duration-300 text-[#36394C]"
                style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                {link.name}
                {/* Brass underline on hover */}
                <span
                  className="absolute -bottom-1 left-0 h-[1px] bg-[#C4A46A] w-0 group-hover:w-full transition-all duration-300"
                />
              </button>
            ))}

            {/* Primary CTA - Reserved Burgundy */}
            <button
              onClick={() => onNavigate('contact')}
              className={`relative bg-[#5B2E34] text-[#EFE3D7] transition-all duration-300 hover:bg-[#4F272C] overflow-hidden group rounded-[12px] ${
                scrolled ? 'px-5 py-2.5 text-sm' : 'px-6 py-3 text-base'
              }`}
              style={{
                fontWeight: 500,
                letterSpacing: '0.02em',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              <span className="relative z-10">INQUIRE</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex lg:hidden items-center justify-between h-full">
          {/* Mobile Back Link or Menu Button */}
          {showBackLink ? (
            <button
              onClick={() => onNavigate('home')}
              className="text-[#36394C] transition-colors hover:text-[#5B2E34] p-2"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              ← BACK
            </button>
          ) : (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors ${
                isLight ? 'text-[#36394C]' : 'text-[#EFE3D7]'
              }`}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          )}

          {/* Mobile Centered Logo */}
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo(0, 0);
            }}
            className="transition-all duration-500 ease-in-out hover:opacity-80 focus:opacity-80 focus:outline-none"
            aria-label="La Bella Mesa Home"
          >
            <img
              src="/01_Logo/PNG/WIDE_ASPECTRATIO_BLACK.png"
              alt="La Bella Mesa"
              className="transition-all duration-500 ease-in-out"
              style={{
                height: scrolled ? '35px' : '40px',
              }}
            />
          </button>

          {/* Mobile CTA */}
          <button
            onClick={() => onNavigate('contact')}
            className={`bg-[#5B2E34] text-[#EFE3D7] transition-all duration-300 hover:bg-[#4F272C] rounded-[12px] ${
              scrolled ? 'px-4 py-2 text-sm' : 'px-5 py-2.5 text-sm'
            }`}
            style={{
              fontWeight: 500,
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            INQUIRE
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div 
            className={`lg:hidden absolute top-full left-0 right-0 ${
              isLight ? 'bg-[#EFE3D7]' : 'bg-[#36394C]'
            } shadow-lg`}
          >
            <nav className="flex flex-col p-6 gap-4">
              {[...navLinksLeft, ...navLinksRight].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left transition-colors text-[#36394C]"
                  style={{ 
                    fontSize: '16px',
                    fontWeight: 500,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
