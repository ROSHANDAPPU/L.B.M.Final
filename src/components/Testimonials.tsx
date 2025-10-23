const testimonials = [
  {
    quote: "Every detail was handled. The cuisine was beautiful. Service was seamless.",
    author: "Sofia & Marco",
    event: "Wedding Reception",
  },
  {
    quote: "Quality is their standard. Our event ran smoothly. Clients were impressed.",
    author: "James Patterson",
    event: "Corporate Gala",
  },
  {
    quote: "First consultation to final course. Everything felt natural. Truly special.",
    author: "Elena Rodriguez",
    event: "Anniversary Dinner",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      {/* Clean Header with Light Cream Background */}
      <div className="bg-[#EFE3D7] pb-16">
        <div className="container-wide mx-auto px-6 lg:px-8">
          {/* Section Number - Split styling */}
          <div className="section-number mb-12">
            <span className="inline-block px-3 py-1 border border-[#C9C3BA]">
              <span style={{
                color: '#C9C3BA',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400
              }}>03 · </span>
              <span style={{
                color: '#36394C',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600
              }}>TESTIMONIALS</span>
            </span>
          </div>

          {/* Intro */}
          <div className="max-w-3xl">
            <h2
              className="text-[#36394C] mb-6"
              style={{
                fontFamily: 'Libre Baskerville, Georgia, serif',
                fontWeight: 700,
                fontSize: 'clamp(32px, 4vw, 36px)',
                lineHeight: 1.2,
              }}
            >
              Client Voices
            </h2>
            <div className="h-[1px] bg-[#C4A46A] w-16 mb-6" />
            <p
              className="text-[#36394C]"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '17px',
                lineHeight: 1.7,
                fontWeight: 500,
              }}
            >
              What our clients say.
            </p>
          </div>
        </div>
      </div>

      {/* Pattern Texture Layer with Stone Background */}
      <div
        className="py-16 bg-[#C9C3BA] relative"
      >
        {/* Pattern overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("/02_Templates/Pattern/LA BELLA MESA PATTERN.png")`,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
            opacity: 0.07
          }}
        />

        {/* Cards container with higher z-index */}
        <div className="relative z-10">
          <div className="container-wide mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative bg-[#EFE3D7] border border-[#C9C3BA] p-6 shadow-quiet"
                >
                  {/* Brass accent */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-[#C4A46A]" />

                  {/* Quote mark - Brass accent */}
                  <div
                    className="text-[#C4A46A] mb-4"
                    style={{
                      fontFamily: 'Libre Baskerville, Georgia, serif',
                      fontSize: '48px',
                      lineHeight: 1,
                    }}
                  >
                    "
                  </div>

                  <p
                    className="text-[#36394C] mb-6"
                    style={{
                      fontSize: '16px',
                      lineHeight: 1.7,
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 400,
                      fontStyle: 'italic',
                    }}
                  >
                    {testimonial.quote}
                  </p>

                  {/* Stone divider */}
                  <div className="h-[1px] bg-[#C9C3BA] w-12 mb-4" />

                  <p
                    className="text-[#36394C] mb-1"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 600,
                      fontSize: '15px',
                    }}
                  >
                    {testimonial.author}
                  </p>
                  <p
                    className="section-number"
                    style={{ fontSize: '11px' }}
                  >
                    {testimonial.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
