import Image from 'next/image';
import HeroSlider from '@/components/HeroSlider';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const heroSlides = [
    {
      image: 'https://res.cloudinary.com/dwhj8qfca/image/upload/q_auto/f_auto/v1778186201/ChatGPT_Image_May_8_2026_12_28_44_AM_zs3coo.png',
      title: 'About Our Scholarship Program',
      subtitle: 'Empowering students to achieve their dreams',
      overlay: true,
    },
  ];

  return (
    <main className="min-h-screen">
      <HeroSlider slides={heroSlides} />

      {/* About Content */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto mx-auto px-4">
          <div className="max-w-7xl mx-auto mx-auto space-y-12 md:space-y-16">

            {/* Intro */}
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
                About Us
              </h1>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                Our Scholarship Program exists to create opportunities for motivated students who are ready
                to shape their future through education. We believe talent should never be limited by
                financial circumstances.
              </p>
            </div>

            {/* Image + Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80"
                  alt="Students studying together"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="space-y-4 md:space-y-5">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  We are dedicated to supporting students who demonstrate academic excellence, leadership
                  potential, and a strong commitment to personal growth. Our goal is to help students
                  access higher education and vocational training without unnecessary financial stress.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Whether you plan to attend a university, college, or technical institute, our scholarship
                  program is designed to support you throughout your educational journey.
                </p>
              </div>
            </div>

            {/* Mission Section */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4 md:mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  Education is a powerful tool for change. Our mission is to remove financial barriers and
                  ensure that deserving students have access to quality education.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Support students with demonstrated financial need</li>
                  <li>Recognize academic achievement and dedication</li>
                  <li>Encourage leadership and community involvement</li>
                  <li>Promote diversity and equal opportunity</li>
                </ul>
              </div>
            </div>

            {/* Impact Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-5 order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                  Our Impact
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Over the years, our program has helped hundreds of students move closer to their goals.
                  Each application is carefully reviewed to ensure fairness, transparency, and equal
                  opportunity for all applicants.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  We look beyond grades alone — personal achievements, challenges, and future ambitions
                  all play a role in our selection process.
                </p>
              </div>

              <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden order-1 md:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=900&q=80"
                  alt="Graduation success"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Goals Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Academic excellence"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="space-y-4 md:space-y-5">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                  What We Aim To Achieve
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      Support students with demonstrated financial need and remove barriers to higher education
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      Recognize academic achievement and excellence across diverse fields of study
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      Encourage leadership and community involvement among scholarship recipients
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      Foster diversity and inclusion in higher education for all deserving students
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center mb-8">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 md:mb-3">500+</div>
                  <div className="text-gray-700 text-base md:text-lg">Students Helped</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 md:mb-3">$2M+</div>
                  <div className="text-gray-700 text-base md:text-lg">Awards Distributed</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 md:mb-3">8</div>
                  <div className="text-gray-700 text-base md:text-lg">Scholarship Programs</div>
                </div>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
                Our scholarship program has helped hundreds of students achieve their dreams, and we're
                committed to continuing this important work. We carefully review each application and select
                recipients based on a combination of academic merit, financial need, and personal achievements.
              </p>
            </div>

            {/* Closing */}
            <div className="bg-primary rounded-2xl p-6 md:p-10 text-center max-w-7xl mx-auto mx-auto">
              <p className="text-white text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                If you are a student seeking financial assistance to pursue your education, we encourage
                you to apply. Our application process is simple, transparent, and designed with students
                in mind.
              </p>
              <a
                href="/application"
                className="inline-block bg-white text-primary font-semibold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
