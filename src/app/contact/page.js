import HeroSlider from '@/components/HeroSlider';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const heroSlides = [
    {
      image: 'https://res.cloudinary.com/dwhj8qfca/image/upload/q_auto/f_auto/v1778186201/ChatGPT_Image_May_8_2026_12_28_44_AM_zs3coo.png',
      title: 'Get in Touch',
      subtitle: "We're here to help you with any questions",
      overlay: true,
    },
  ];

  return (
    <main className="min-h-screen">
      <HeroSlider slides={heroSlides} />
      
      <section className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Contact Us
            </h1>
            <div className="text-gray text-lg leading-relaxed space-y-8">
              <p>
                We'd love to hear from you! Whether you have questions about our scholarship program, need help with your 
                application, or want to learn more about how you can support our mission, we're here to help.
              </p>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Contact Information</h2>
                <div className="space-y-2">
                  <p><strong>Email:</strong> info@scholarship.com</p>
                  <p><strong>Phone:</strong> (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Education Street, City, State 12345</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Office Hours</h2>
                <p>
                  Our office is open Monday through Friday, 9:00 AM to 5:00 PM EST. We respond to emails and phone calls 
                  within 24-48 hours during business days.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <p><strong>Q: How do I apply for a scholarship?</strong></p>
                    <p>A: You can apply by completing our online application form. Visit the Application page to get started.</p>
                  </div>
                  <div>
                    <p><strong>Q: When is the application deadline?</strong></p>
                    <p>A: We accept applications on a rolling basis. Check the scholarship details for specific deadlines.</p>
                  </div>
                  <div>
                    <p><strong>Q: Can I apply for multiple scholarships?</strong></p>
                    <p>A: Yes, you can apply for multiple scholarships if you meet the eligibility requirements for each.</p>
                  </div>
                  <div>
                    <p><strong>Q: How will I know if I've been selected?</strong></p>
                    <p>A: All applicants will be notified via email within 4-6 weeks of application submission.</p>
                  </div>
                  <div>
                    <p><strong>Q: Are scholarships renewable?</strong></p>
                    <p>A: Many of our scholarships are renewable. Check the specific scholarship details for renewal requirements.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Visit Us</h2>
                <p>
                  If you're in the area, feel free to stop by our office. We'd be happy to meet with you in person and answer 
                  any questions you may have. Please call ahead to schedule an appointment.
                </p>
              </div>

              <p>
                We look forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

