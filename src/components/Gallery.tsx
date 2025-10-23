import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1565898094840-7e408a6f361d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGFwcGV0aXplcnN8ZW58MXx8fHwxNzU5OTkwMDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Artisan Appetizers',
  },
  {
    url: 'https://images.unsplash.com/photo-1750943082012-efe6d2fd9e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzU5OTU3NDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Gourmet Plating',
  },
  {
    url: 'https://images.unsplash.com/photo-1737700088028-fae0666feb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGVzc2VydCUyMGRpc3BsYXl8ZW58MXx8fHwxNzU5OTkwMDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Dessert Display',
  },
  {
    url: 'https://images.unsplash.com/photo-1688559688736-140e6cbd2c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwZ2xhc3NlcyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc1OTk5MDA0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Wine Selection',
  },
  {
    url: 'https://images.unsplash.com/photo-1758810742561-9d8732eeecd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZXZlbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzU5OTkwMDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Outdoor Events',
  },
  {
    url: 'https://images.unsplash.com/photo-1655386068478-e8283085cac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdGFibGUlMjBkZWNvcnxlbnwxfHx8fDE3NTk5MTg2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Wedding Decor',
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-[#C9C3BA]">
      <div className="container-wide mx-auto px-6 lg:px-8">
        {/* Section Number - Kalm Kitchen Style */}
        <div className="section-number mb-12">
          <span className="inline-block px-3 py-1 border border-[#C9C3BA]" style={{ color: '#36394C' }}>04 · Gallery</span>
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
            Our Work
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
            Soft daylight. Neutral surfaces. Food provides the color.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group relative cursor-pointer overflow-hidden shadow-quiet hover:shadow-quiet-hover transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Brass accent on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C4A46A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#36394C]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p
                  className="text-white"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '15px',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                  }}
                >
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#36394C]/95 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[#C4A46A] transition-colors"
          >
            <X size={32} />
          </button>
          <img
            src={galleryImages[selectedImage].url}
            alt={galleryImages[selectedImage].caption}
            className="max-w-full max-h-full shadow-quiet-hover"
            onClick={(e) => e.stopPropagation()}
          />
          <p
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '15px',
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
          >
            {galleryImages[selectedImage].caption}
          </p>
        </div>
      )}
    </section>
  );
}
