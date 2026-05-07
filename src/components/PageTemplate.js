import HeroSlider from './HeroSlider';
import Footer from './Footer';

export default function PageTemplate({
  title,
  content,
  sliderData = {
    image: '/hero-placeholder.jpg',
    title: '',
    subtitle: '',
    overlay: true,
  },
  footerProps = {},
}) {
  return (
    <main className="min-h-screen">
      {/* Top Slider */}
      <HeroSlider slides={[sliderData]} />

      {/* Large Text Area */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            {title && (
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
                {title}
              </h1>
            )}
            <div className="prose prose-lg max-w-none">
              {typeof content === 'string' ? (
                <div className="text-gray text-lg leading-relaxed space-y-6 whitespace-pre-line">
                  {content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <div className="text-gray text-lg leading-relaxed space-y-6">
                  {content}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer {...footerProps} />
    </main>
  );
}

