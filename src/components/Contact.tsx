import { useState } from 'react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDate: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setShowSuccess(true);
    setFormData({ name: '', email: '', eventDate: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-[#EFE3D7]">
      <div className="container-wide mx-auto px-6 lg:px-8">
        {/* Section Number - Kalm Kitchen Style */}
        <div className="section-number mb-12">
          <span className="inline-block px-3 py-1 border border-[#C9C3BA]" style={{ color: '#36394C' }}>05 · Contact</span>
        </div>

        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <h2
            className="text-[#36394C] mb-6"
            style={{
              fontFamily: 'Libre Baskerville, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 36px)',
              lineHeight: 1.2,
            }}
          >
            Let's Talk
          </h2>
          <div className="h-[1px] bg-[#C4A46A] w-16 mb-6" />
          <p
            className="text-[#36394C]"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '17px',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Ready for your next event? Get in touch. We'll handle the details.
          </p>
        </div>

        {showSuccess && (
          <div className="mb-8 p-6 bg-[#C4A46A]/10 border border-[#C4A46A]/30 text-[#36394C] text-center transition-opacity duration-300">
            <p style={{ fontSize: '15px', fontWeight: 500 }}>
              Message received. We'll be in touch soon.
            </p>
          </div>
        )}

        {/* Asymmetric 70/30 Grid */}
        <div className="grid lg:grid-cols-[65%_35%] gap-12 lg:gap-16 items-start">
          {/* Form - Left Side */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#EFE3D7] breathe shadow-quiet brass-pattern"
          >
            {/* Brass accent */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#C4A46A]" />

            <div className="space-y-6">
              <div>
                <label 
                  className="block text-[#36394C] mb-2"
                  style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#EFE3D7] border border-[#C9C3BA] focus:border-[#5B2E34] focus:outline-none focus:ring-2 focus:ring-[#5B2E34]/20 transition-all"
                  style={{ fontSize: '16px' }}
                />
              </div>

              <div>
                <label 
                  className="block text-[#36394C] mb-2"
                  style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#EFE3D7] border border-[#C9C3BA] focus:border-[#5B2E34] focus:outline-none focus:ring-2 focus:ring-[#5B2E34]/20 transition-all"
                  style={{ fontSize: '16px' }}
                />
              </div>

              <div>
                <label 
                  className="block text-[#36394C] mb-2"
                  style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}
                >
                  Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#EFE3D7] border border-[#C9C3BA] focus:border-[#5B2E34] focus:outline-none focus:ring-2 focus:ring-[#5B2E34]/20 transition-all"
                  style={{ fontSize: '16px' }}
                />
              </div>

              <div>
                <label 
                  className="block text-[#36394C] mb-2"
                  style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}
                >
                  Tell us about your event
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#EFE3D7] border-b-2 border-[#C9C3BA] focus:border-[#5B2E34] focus:outline-none transition-colors resize-vertical"
                  style={{ fontSize: '16px' }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full bg-[#5B2E34] text-[#EFE3D7] py-4 px-8 transition-all duration-300 hover:bg-[#4F272C] hover:shadow-quiet-hover disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group mt-8"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                }}
              >
                <span className="relative z-10 block w-full text-center">
                  {isSubmitting ? 'SENDING...' : 'SEND INQUIRY'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </form>

          {/* Contact Info - Right Side */}
          <div className="space-y-10">
            <div>
              <h3
                className="text-[#36394C] mb-4"
                style={{
                  fontFamily: 'Libre Baskerville, Georgia, serif',
                  fontSize: 'clamp(20px, 2vw, 22px)',
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                Reach Out
              </h3>
              <div className="h-[1px] bg-[#C9C3BA] w-12 mb-6" />
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-[1px] h-6 bg-[#C4A46A] flex-shrink-0" />
                  <div>
                    <p className="section-number mb-1">Email</p>
                    <a 
                      href="mailto:contact@labellamesa­events.com" 
                      className="text-[#5B2E34] hover:text-[#C4A46A] transition-colors"
                      style={{ fontSize: '15px' }}
                    >
                      contact@labellamesa­events.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-[1px] h-6 bg-[#C4A46A] flex-shrink-0" />
                  <div>
                    <p className="section-number mb-1">Phone</p>
                    <a 
                      href="tel:+12147169201" 
                      className="text-[#5B2E34] hover:text-[#C4A46A] transition-colors"
                      style={{ fontSize: '15px' }}
                    >
                      (214) 716-9201
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-[1px] h-6 bg-[#C4A46A] flex-shrink-0" />
                  <div>
                    <p className="section-number mb-1">Instagram</p>
                    <a 
                      href="https://instagram.com/labellamesa_events" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#5B2E34] hover:text-[#C4A46A] transition-colors"
                      style={{ fontSize: '15px' }}
                    >
                      @labellamesa_events
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-[1px] h-6 bg-[#C4A46A] flex-shrink-0" />
                  <div>
                    <p className="section-number mb-1">Website</p>
                    <a 
                      href="https://www.labellamesa­events.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#5B2E34] hover:text-[#C4A46A] transition-colors"
                      style={{ fontSize: '15px' }}
                    >
                      www.labellamesa­events.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#C9C3BA]">
              <h4
                className="section-number mb-4"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(20px, 2vw, 22px)',
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                Office Hours
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#36394C]" style={{ fontSize: '14px', fontWeight: 500 }}>Mon — Fri</span>
                  <span className="text-[#36394C]/70" style={{ fontSize: '14px' }}>9:00 — 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#36394C]" style={{ fontSize: '14px', fontWeight: 500 }}>Saturday</span>
                  <span className="text-[#36394C]/70" style={{ fontSize: '14px' }}>10:00 — 16:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#36394C]" style={{ fontSize: '14px', fontWeight: 500 }}>Sunday</span>
                  <span className="text-[#36394C]/70" style={{ fontSize: '14px' }}>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
