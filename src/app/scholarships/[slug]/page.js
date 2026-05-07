'use client';

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import HeroSlider from '@/components/HeroSlider';
import Footer from '@/components/Footer';

export default function ScholarshipDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [scholarship, setScholarship] = useState(null);

  const scholarships = {
   'college': {
  title: 'College Scholarship',
  fullDescription: `The College Scholarship supports students pursuing a 4-year degree. We are committed to fostering academic excellence and leadership in higher education.\n\n• Pursuing a 4-year undergraduate degree\n• Minimum 3.0 GPA\n• Demonstrated commitment to personal growth\n\nAwarded to students who show dedication towards their 4-year study path. Our goal is to minimize financial barriers for undergraduate students.`
},
'jr-college': {
  title: 'Jr. College Scholarship',
  fullDescription: `The Jr. College Scholarship is designed for students enrolled in 2-year community college or associate degree programs. We support local talent and vocational transitions.\n\n• Enrolled in a 2-year associate program\n• Demonstrated financial need\n• Community involvement and academic progress\n\nSupporting students as they bridge their secondary education to specialized career paths.`
},
'trade-school': {
  title: 'Trade School Scholarship',
  fullDescription: `The Trade School Scholarship helps students acquire professional certifications and skills for immediate workforce entry. We value practical expertise.\n\n• Enrolled in a certified trade/vocational program\n• Focus on skill acquisition and professional certification\n• Quick transition to employment goals\n\nEnabling students to enter the workforce with the right tools and training as quickly as possible.`
},
  };

  useEffect(() => {
    const slug = params?.slug;
    if (slug && scholarships[slug]) {
      setScholarship(scholarships[slug]);
    } else {
      router.push('/scholarships');
    }
  }, [params, router]);

  // Hero Slider Data - Three slides with constant content (same for all scholarships)
  const heroSlides = [
    {
      image: 'https://res.cloudinary.com/dwhj8qfca/image/upload/q_auto/f_auto/v1778186201/ChatGPT_Image_May_8_2026_12_28_44_AM_zs3coo.png',
      title: 'Gods Angels Scholarships',
      subtitle: 'Apply for our scholarship program and take the next step in your educational journey',
      overlay: true,
    },
    {
      image: 'https://res.cloudinary.com/dwhj8qfca/image/upload/q_auto/f_auto/v1778186201/ChatGPT_Image_May_8_2026_12_28_44_AM_zs3coo.png',
      title: 'Gods Angels Scholarships',
      subtitle: 'Apply for our scholarship program and take the next step in your educational journey',
      overlay: true,
    },
    {
      image: 'https://res.cloudinary.com/dwhj8qfca/image/upload/q_auto/f_auto/v1778186201/ChatGPT_Image_May_8_2026_12_28_44_AM_zs3coo.png',
      title: 'Gods Angels Scholarships',
      subtitle: 'Apply for our scholarship program and take the next step in your educational journey',
      overlay: true,
    },
  ];

  if (!scholarship) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSlider slides={heroSlides} />

      <section className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <button
                onClick={() => router.push('/scholarships')}
                className="text-primary hover:text-primary-hover transition-colors duration-200 flex items-center gap-2 text-base font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Scholarships
              </button>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary/90 p-6 md:p-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white mb-2" style={{ color: '#FFFFFF' }}>
                  {scholarship.title}
                </h1>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 lg:p-10">
                <div className="space-y-8">
                  {scholarship.fullDescription.split('\n\n').map((section, sectionIndex) => {
                    const lines = section.split('\n').filter(line => line.trim());
                    
                    // Check if this section has bullet points
                    const hasBullets = lines.some(line => line.trim().startsWith('•'));
                    
                    if (hasBullets) {
                      // Find the title (first line without bullet)
                      const titleLine = lines.find(line => !line.trim().startsWith('•'));
                      const bulletLines = lines.filter(line => line.trim().startsWith('•'));
                      
                      return (
                        <div key={sectionIndex} className="space-y-4">
                          {titleLine && (
                            <h3 className="text-xl md:text-2xl font-semibold text-primary">
                              {titleLine.trim()}
                            </h3>
                          )}
                          {bulletLines.length > 0 && (
                            <ul className="space-y-3">
                              {bulletLines.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-3">
                                  <span className="text-primary mt-1 flex-shrink-0">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                  </span>
                                  <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    {item.replace('•', '').trim()}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    }
                    
                    // Regular paragraph section
                    const paragraphText = lines.join(' ').trim();
                    if (paragraphText) {
                      return (
                        <p key={sectionIndex} className="text-gray-700 text-base md:text-lg leading-relaxed">
                          {paragraphText}
                        </p>
                      );
                    }
                    
                    return null;
                  })}
                </div>

                {/* Action Buttons */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => router.push(`/application?scholarship=${params.slug}`)}
                      className="btn-primary flex-1 sm:flex-none px-8 py-3 text-base font-semibold"
                    >
                      Apply Now
                    </button>
                    <button
                      onClick={() => router.push('/scholarships')}
                      className="btn-secondary flex-1 sm:flex-none px-8 py-3 text-base font-semibold"
                    >
                      View Other Scholarships
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

