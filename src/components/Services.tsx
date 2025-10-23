const services = [
  {
    number: '01',
    title: 'Private Events',
    description: 'Intimate gatherings. Personalized menus. Refined service.',
    image: 'https://images.unsplash.com/photo-1696805566858-fe4a670d5df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGZvb2QlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzU5OTI3NjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    number: '02',
    title: 'Weddings',
    description: 'Rehearsal dinners to receptions. Your celebration, handled.',
    image: 'https://images.unsplash.com/photo-1655386068478-e8283085cac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdGFibGUlMjBkZWNvcnxlbnwxfHx8fDE3NTk5MTg2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    number: '03',
    title: 'Corporate Events',
    description: 'Business gatherings. Professional service. Quality cuisine.',
    image: 'https://images.unsplash.com/photo-1731941465921-eb4285693713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NTk5MTYwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    number: '04',
    title: 'Chef Services',
    description: 'Personal chef experiences at home. Seasonal ingredients. Artisan care.',
    image: 'https://images.unsplash.com/photo-1750943082012-efe6d2fd9e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzU5OTU3NDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

interface ServicesProps {
  onNavigate?: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps = {}) {
  return (
    <section id="services" className="section-padding bg-[#EFE3D7]">
      <div className="container-wide mx-auto px-6 lg:px-8">
        {/* Section Number - Kalm Kitchen Style */}
        <div className="section-number mb-12">
          <span className="inline-block px-3 py-1 border border-[#C9C3BA]" style={{ color: '#36394C' }}>02 · Services · La Mesa</span>
        </div>

        {/* Intro - Editorial Style */}
        <div className="max-w-3xl mb-20">
          <h2
            className="text-[#36394C] mb-6"
            style={{
              fontFamily: 'Libre Baskerville, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 36px)',
              lineHeight: 1.2,
            }}
          >
            La Mesa
          </h2>
          <div className="h-[1px] bg-[#C4A46A] w-16 mb-6" />
          <p
            className="text-[#36394C]"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(16px, 2vw, 18px)',
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            Every event is unique. We design culinary experiences that honor your vision. Seamless execution from inquiry to service.
          </p>
        </div>

        {/* Services Grid - Modular, Full-Width Blocks */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Block */}
              <div 
                className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[500px] object-cover shadow-quiet"
                />
                {/* Brass top accent */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#C4A46A]" />
                
                {/* Service Number - Overlay */}
                <div 
                  className="absolute top-6 left-6 bg-[#EFE3D7]/95 backdrop-blur-sm px-4 py-2"
                  style={{
                    fontFamily: 'Libre Baskerville, Georgia, serif',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#C4A46A',
                  }}
                >
                  {service.number}
                </div>
              </div>

              {/* Content Block */}
              <div
                className={`${index % 2 === 1 ? 'lg:order-1' : ''} cursor-pointer`}
                onClick={() => {
                  if (service.title === 'Private Events') onNavigate?.('private-events');
                  else if (service.title === 'Weddings') onNavigate?.('weddings');
                  else if (service.title === 'Corporate Events') onNavigate?.('corporate-events');
                  else if (service.title === 'Chef Services') onNavigate?.('chef-services');
                }}
              >
                <div className="max-w-lg">
                  <h3
                    className="text-[#36394C] mb-4 hover:text-[#5B2E34] transition-colors"
                    style={{
                      fontFamily: 'Libre Baskerville, Georgia, serif',
                      fontSize: 'clamp(24px, 3vw, 28px)',
                      fontWeight: 600,
                      lineHeight: 1.25,
                    }}
                  >
                    {service.title}
                  </h3>

                  <div className="h-[1px] bg-[#C9C3BA] w-12 mb-6" />

                  <p
                    className="text-[#36394C]"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'clamp(16px, 2vw, 18px)',
                      lineHeight: 1.6,
                      fontWeight: 400,
                    }}
                  >
                    {service.description}
                  </p>

                  <p
                    className="text-[#5B2E34] mt-4 text-sm font-medium hover:text-[#4F272C] transition-colors cursor-pointer"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      letterSpacing: '0.02em',
                    }}
                    onClick={() => {
                      if (service.title === 'Private Events') onNavigate?.('private-events');
                      else if (service.title === 'Weddings') onNavigate?.('weddings');
                      else if (service.title === 'Corporate Events') onNavigate?.('corporate-events');
                      else if (service.title === 'Chef Services') onNavigate?.('chef-services');
                    }}
                  >
                    Learn More →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - Centered */}
        <div className="mt-24 text-center">
          <a
            href="#contact"
            className="inline-block bg-[#5B2E34] text-[#EFE3D7] px-10 py-4 transition-all duration-300 hover:bg-[#4F272C] hover:shadow-quiet-hover"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '15px',
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
          >
            VIEW MENU
          </a>
        </div>
      </div>
    </section>
  );
}
