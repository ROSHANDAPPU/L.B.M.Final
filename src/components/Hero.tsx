import { useEffect, useState } from 'react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-[#36394C]">
      {/* Full-bleed Aspirational Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay={!isMobile}
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdGFibGUlMjBzZXR0aW5nJTIwYnJpZ2h0JTIwbGlnaHR8ZW58MXx8fHwxNzU5OTkwMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          className="w-full h-full object-cover transition-transform duration-[15000ms] ease-out"
          style={{
            transform: isVisible ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
          {/* Fallback image */}
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdGFibGUlMjBzZXR0aW5nJTIwYnJpZ2h0JTIwbGlnaHR8ZW58MXx8fHwxNzU5OTkwMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Bright, airy table setting with natural light and elegant simplicity"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Light Cream overlay for Ink Navy text contrast */}
        <div className="absolute inset-0 bg-[#EFE3D7]/10" />
      </div>

      {/* Overlay Text - Centered with Generous Space */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-5xl breathe">
          {/* H1 - Libre Baskerville 700, 44-48px, Ink Navy (on light overlay) */}
          <div
            className="inline-block px-12 py-10 transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            <h1
              className="text-[#36394C] mb-6"
              style={{
                fontFamily: 'Libre Baskerville, Georgia, serif',
                fontWeight: 700,
                fontSize: 'clamp(44px, 5vw, 48px)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Elegancia sin esfuerzo
            </h1>

            {/* Brass divider */}
            <div
              className="h-[1px] bg-[#C4A46A] w-24 mx-auto mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'all 1s ease-out 300ms',
              }}
            />

            <p
              className="text-[#36394C] mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: 1.5,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 1s ease-out 500ms',
              }}
            >
              Effortless elegance, handled.
            </p>

            {/* Primary CTA - Reserved Burgundy */}
            <div 
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 1s ease-out 700ms',
              }}
            >
              <button
                onClick={() => onNavigate('contact')}
                className="relative bg-[#5B2E34] text-[#EFE3D7] px-10 py-4 transition-all duration-300 hover:bg-[#4F272C] hover:shadow-quiet-hover overflow-hidden group"
                style={{
                  fontSize: '15px',
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
        </div>
      </div>

      {/* Scroll indicator - minimal, brass */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        style={{
          opacity: isVisible ? 0.6 : 0,
          transition: 'opacity 1.5s ease-out 1s',
        }}
      >
        <div className="flex flex-col items-center gap-2 text-[#C4A46A]">
          <span className="section-number" style={{ fontSize: '10px' }}>Scroll</span>
          <div className="h-8 w-[1px] bg-[#C4A46A] animate-pulse" />
        </div>
      </div>
    </section>
  );
}
