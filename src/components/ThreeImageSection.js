import Image from 'next/image';

export default function ThreeImageSection({ images = [] }) {
  // Default placeholder images if none provided
  const defaultImages = [
    { 
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80', 
      alt: 'Image 1',
      title: 'Academic Excellence',
      text: 'We recognize and reward students who have demonstrated outstanding academic achievement throughout their educational journey.'
    },
    { 
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80', 
      alt: 'Image 2',
      title: 'Leadership & Community',
      text: 'Our scholarship program values students who show leadership potential and a commitment to serving their communities.'
    },
    { 
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80', 
      alt: 'Image 3',
      title: 'Financial Need',
      text: 'We understand that financial barriers should not prevent talented students from pursuing their dreams and reaching their full potential.'
    },
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  return (
    <section className="section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {displayImages.map((img, index) => (
            <div key={index} className="flex flex-col">
              {/* Image */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg mb-4">
                {img.src ? (
                  <Image
                    src={img.src}
                    alt={img.alt || `Image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <span className="text-gray-text text-sm">Image {index + 1}</span>
                  </div>
                )}
              </div>
              
              {/* Text Box Below Image */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                {img.title && (
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                    {img.title}
                  </h3>
                )}
                {img.text && (
                  <p className="text-gray text-base leading-relaxed">
                    {img.text}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

