import { Instagram, Facebook, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#EFE3D7] text-[#36394C] relative">
      {/* Brass accent border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C4A46A]" />
      
      <div className="container-wide mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <div className="mb-6">
              <img
                src="/La_Bella_Mesa_Brand_Package/01_Logo/PNG/SQUARE_TRANSPARENT_INK_NAVY.png"
                alt="La Bella Mesa"
                style={{ height: '100px', width: 'auto' }}
              />
            </div>
            <p
              className="text-[#36394C] mb-4"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '15px',
                lineHeight: 1.7,
                opacity: 0.9,
                fontWeight: 400,
              }}
            >
              Elegancia sin esfuerzo.
            </p>
            
            {/* "Powered by local makers" badge */}
            <div 
              className="inline-flex items-center gap-3 px-4 py-2 bg-[#EFE3D7] mt-6"
              style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.05em' }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#C4A46A]" />
              <span
                className="text-[#36394C]"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                }}
              >
                Powered by local makers
              </span>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4
              className="mb-6"
              style={{
                fontFamily: 'Libre Baskerville, Georgia, serif',
                fontSize: '18px',
                fontWeight: 700,
                color: '#36394C',
              }}
            >
              Sitemap
            </h4>
            <div className="h-[1px] bg-[#C4A46A]/30 w-12 mb-6" />
            <ul className="space-y-3" style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}>
               <li>
                 <a href="#hero" className="text-[#36394C] hover:text-[#5B2E34] transition-colors">
                   Home
                 </a>
               </li>
               <li>
                 <a href="#services" className="text-[#36394C] hover:text-[#5B2E34] transition-colors">
                   Services · La Mesa
                 </a>
               </li>
               <li>
                 <a href="#about" className="text-[#36394C] hover:text-[#5B2E34] transition-colors">
                   Network · Comunidad
                 </a>
               </li>
               <li>
                 <a href="#gallery" className="text-[#36394C] hover:text-[#5B2E34] transition-colors">
                   Gallery
                 </a>
               </li>
               <li>
                 <a href="#contact" className="text-[#36394C] hover:text-[#5B2E34] transition-colors">
                   Contact
                 </a>
               </li>
             </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4
              className="mb-6"
              style={{
                fontFamily: 'Libre Baskerville, Georgia, serif',
                fontSize: '18px',
                fontWeight: 700,
                color: '#36394C',
              }}
            >
              Connect
            </h4>
            <div className="h-[1px] bg-[#C4A46A]/30 w-12 mb-6" />
            
            <div className="space-y-3 mb-6">
              <a
                href="tel:+12147169201"
                className="flex items-center gap-3 text-[#36394C] hover:text-[#5B2E34] transition-colors group"
                style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}
              >
                <div className="w-[1px] h-5 bg-[#C4A46A] group-hover:h-6 transition-all" />
                (214) 716-9201
              </a>
              <a
                href="mailto:contact@labellamesa­events.com"
                className="flex items-center gap-3 text-[#36394C] hover:text-[#5B2E34] transition-colors group"
                style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}
              >
                <div className="w-[1px] h-5 bg-[#C4A46A] group-hover:h-6 transition-all" />
                contact@labellamesa­events.com
              </a>
              <a
                href="https://www.labellamesa­events.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#36394C] hover:text-[#5B2E34] transition-colors group"
                style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}
              >
                <div className="w-[1px] h-5 bg-[#C4A46A] group-hover:h-6 transition-all" />
                www.labellamesa­events.com
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              <a
                href="https://instagram.com/labellamesa_events"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#C4A46A] hover:border-[#5B2E34] hover:bg-[#5B2E34]/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-[#36394C]" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#C4A46A] hover:border-[#5B2E34] hover:bg-[#5B2E34]/10 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-[#36394C]" />
              </a>
              <a
                href="mailto:contact@labellamesa­events.com"
                className="w-10 h-10 flex items-center justify-center border border-[#C4A46A] hover:border-[#5B2E34] hover:bg-[#5B2E34]/10 transition-all"
                aria-label="Email"
              >
                <Mail size={18} className="text-[#36394C]" />
              </a>
            </div>
            
            <p
              className="text-[#5B2E34] mt-4"
              style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.02em',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              @labellamesa_events
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C9C3BA] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-[#36394C]/70"
              style={{
                fontSize: '13px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
              }}
            >
              © {currentYear} La Bella Mesa. All rights reserved.
            </p>
            <p
              className="text-[#36394C]/70 italic"
              style={{
                fontSize: '13px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
              }}
            >
              Elegancia sin esfuerzo · Effortless elegance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
