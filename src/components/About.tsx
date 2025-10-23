export function About() {
  return (
    <section id="about" className="section-padding bg-[#C9C3BA]">
      <div className="container-wide mx-auto px-6 lg:px-8">
        {/* Section Number - Kalm Kitchen Style */}
        <div className="section-number mb-12">
          <span className="inline-block px-3 py-1 border border-[#C9C3BA]" style={{ color: '#36394C' }}>01 · Network</span>
        </div>

        {/* Asymmetric 60/40 Grid */}
        <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">
          {/* Left: Image Block */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1631724739232-d1f1403e6879?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjB0YWJsZSUyMHNldHRpbmd8ZW58MXx8fHwxNzU5OTkwMDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Artisan table setting with natural elements"
              className="w-full h-[600px] object-cover shadow-quiet"
            />
            {/* Brass accent border */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C4A46A]" />
          </div>

          {/* Right: Content Block */}
          <div className="breathe bg-[#EFE3D7] shadow-quiet">
            <h2
              className="text-[#36394C] mb-6"
              style={{
                fontFamily: 'Libre Baskerville, Georgia, serif',
                fontWeight: 700,
                fontSize: 'clamp(32px, 4vw, 36px)',
                lineHeight: 1.2,
              }}
            >
              Built on Trust
            </h2>
            
            {/* Brass divider */}
            <div className="h-[1px] bg-[#C4A46A] w-16 mb-6" />

            <p
              className="text-[#36394C] mb-6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
              }}
            >
              Every gathering deserves to feel natural. We create culinary experiences that honor tradition. Modern. Thoughtful. Yours.
            </p>

            <p
              className="text-[#36394C] mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
              }}
            >
              We work with local makers. Attention to detail is our standard. From intimate dinners to celebrations, we bring warmth and quality to every table.
            </p>

            {/* Stats - Clean, minimal */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#C9C3BA]">
              <div>
                <div 
                  className="text-[#5B2E34] mb-1" 
                  style={{ 
                    fontFamily: 'Libre Baskerville, Georgia, serif',
                    fontSize: '36px',
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  500+
                </div>
                <p className="section-number">Events</p>
              </div>
              <div>
                <div 
                  className="text-[#5B2E34] mb-1" 
                  style={{ 
                    fontFamily: 'Libre Baskerville, Georgia, serif',
                    fontSize: '36px',
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  12
                </div>
                <p className="section-number">Years</p>
              </div>
              <div>
                <div 
                  className="text-[#5B2E34] mb-1" 
                  style={{ 
                    fontFamily: 'Libre Baskerville, Georgia, serif',
                    fontSize: '36px',
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  100%
                </div>
                <p className="section-number">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Badge - "Powered by local makers" */}
        <div className="mt-16 flex justify-center">
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#EFE3D7] border border-[#C9C3BA]/50 shadow-quiet"
            style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em' }}
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
      </div>
    </section>
  );
}
