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
      bgClass: 'bg-[#FF6B4A]',
      tagline: '4-Year Bachelor\'s Degree Program',
      description: 'A 4-year degree is a cornerstone for professional success. With an average income potential of $100,000+ per year, investing in your education is the single best decision you can make for your future.',
      
      // New detailed sections
      paygradeStatistics: {
        entryLevel: '$55,000 - $70,000',
        midCareer: '$85,000 - $120,000',
        experienced: '$130,000 - $200,000+',
        topEmployers: ['Google', 'Microsoft', 'Apple', 'Amazon', 'Deloitte'],
        growthRate: '8% (Faster than average)',
        unemploymentRate: '2.2% (Very low)'
      },
      
      futureCareerImpact: {
        promotionSpeed: '3-5 years to management roles',
        jobSecurity: 'High - Essential across all industries',
        advancedDegrees: 'MBA, Master\'s, PhD opportunities',
        entrepreneurshipPotential: 'Strong foundation for business ownership',
        globalOpportunities: 'Work visa eligibility worldwide'
      },
      
      industryDemand: [
        'Technology & Software Development',
        'Healthcare Administration',
        'Financial Services',
        'Engineering & Manufacturing',
        'Education & Research',
        'Government & Public Policy'
      ],
      
      successStories: [
        'Sarah J. - Became Software Engineer at Google, now earning $165,000',
        'Michael R. - Promoted to Marketing Director within 5 years, $140,000 package',
        'Dr. Emily T. - Pursued medical school, now practicing physician'
      ],
      
      whyMatters: `Statistically, a Bachelor's degree holder earns significantly more over their lifetime compared to high school graduates. According to the U.S. Bureau of Labor Statistics, bachelor's degree holders earn approximately $2.8 million over their lifetime compared to $1.6 million for high school graduates. As the economy shifts toward high-skill roles, your degree acts as a key to accessing premium industries. This scholarship not only bridges the financial gap but provides access to a network of professionals who can guide you through your career launch.`,
      
      benefits: [
        'Full financial support for 4 years of undergraduate studies',
        'Access to exclusive industry mentorship programs with Fortune 500 leaders',
        'Priority consideration for internships at top-tier companies',
        'Networking opportunities with academic leaders and alumni network',
        'Career placement assistance upon graduation',
        'Annual leadership development retreats'
      ],
      
      requirements: [
        'Enrolled in or accepted to a 4-year undergraduate degree program',
        'Minimum GPA of 3.0 on a 4.0 scale',
        'Proven commitment to community leadership and volunteer work',
        'Submission of a 500-word essay on career goals and aspirations',
        'Two letters of recommendation from teachers or community leaders',
        'Demonstrated financial need'
      ],
      
      applicationDeadline: 'June 31, 2026',
      awardAmount: 'Up to $40,000 per year',
      renewable: 'Yes, for up to 4 years maintaining academic standards'
    },
    
    'jr-college': {
      title: 'Jr. College Scholarship',
      bgClass: 'bg-[#00C853]',
      tagline: '2-Year Associate Degree Program',
      description: 'A 2-year Associate degree is a highly effective way to gain specialized skills and enter the workforce quickly. With an average income potential of $60,000 - $80,000 per year, it provides a stable and fast-track path to financial independence.',
      
      paygradeStatistics: {
        entryLevel: '$45,000 - $55,000',
        midCareer: '$65,000 - $85,000',
        experienced: '$90,000 - $120,000',
        topEmployers: ['Healthcare Systems', 'Tech Support Firms', 'Construction Management', 'Government Agencies'],
        growthRate: '6% (Average growth)',
        unemploymentRate: '3.5% (Lower than national average)'
      },
      
      futureCareerImpact: {
        promotionSpeed: '2-3 years to supervisory roles',
        jobSecurity: 'Good - Specialized skills in high demand',
        advancedDegrees: 'Pathway to Bachelor\'s programs with transfer credits',
        entrepreneurshipPotential: 'Excellent for trade-based businesses',
        globalOpportunities: 'Transferable skills, some international recognition'
      },
      
      industryDemand: [
        'Nursing & Healthcare Technology',
        'Information Technology Support',
        'Criminal Justice & Legal Studies',
        'Business Administration',
        'Graphic Design & Digital Media',
        'Early Childhood Education'
      ],
      
      successStories: [
        'David M. - Registered Nurse now earning $78,000 with hospital benefits',
        'Lisa K. - IT Support Specialist promoted to Team Lead in 2 years',
        'James W. - Started own construction business after degree'
      ],
      
      whyMatters: `Junior colleges offer an invaluable bridge to higher education. For many students, these institutions provide the necessary support, smaller class sizes, and flexibility to excel while working or managing personal obligations. Our support ensures that you can focus on building your foundation without financial stress. According to recent studies, 62% of associate degree holders report being satisfied with their career trajectory, with many advancing to bachelor's programs or management positions within 5 years.`,
      
      benefits: [
        'Coverage for 2 years of tuition, fees, and textbooks',
        'Mentorship focusing on career placement and credit transfer pathways',
        'Dedicated counseling for academic and personal growth',
        'Exposure to internship opportunities with industry partners',
        'Job placement assistance upon graduation',
        'Transfer support to 4-year universities'
      ],
      
      requirements: [
        'Enrolled in a 2-year associate degree or certificate program',
        'Minimum GPA of 2.5 on a 4.0 scale',
        'Commitment to academic progress and attendance (90%+ attendance)',
        'Interest in early career integration and workforce readiness',
        'Personal statement explaining educational goals (300 words)',
        'High school diploma or GED equivalent'
      ],
      
      applicationDeadline: 'June 15, 2026',
      awardAmount: 'Up to $15,000 per year',
      renewable: 'Yes, for second year with GPA above 2.75'
    },
    
    'trade-school': {
      title: 'Trade School Scholarship',
      bgClass: 'bg-[#333333]',
      tagline: 'Vocational & Technical Certification Program',
      description: 'Trade schools provide fast-track paths to well-paying, high-demand technical careers. Skilled trade professionals often earn $70,000 - $90,000 per year, enabling immediate financial growth and stability.',
      
      paygradeStatistics: {
        entryLevel: '$50,000 - $65,000',
        midCareer: '$75,000 - $95,000',
        experienced: '$100,000 - $150,000+',
        topEmployers: ['Electrical Contractors', 'Plumbing Companies', 'Manufacturing Plants', 'Renewable Energy Firms'],
        growthRate: '10% (Much faster than average)',
        unemploymentRate: '1.8% (Extremely low)'
      },
      
      futureCareerImpact: {
        promotionSpeed: '1-2 years to journeyman/master status',
        jobSecurity: 'Very High - Skills cannot be outsourced',
        advancedDegrees: 'Specialized certifications, business ownership',
        entrepreneurshipPotential: 'Excellent - Easy to start independent business',
        globalOpportunities: 'Skills in demand worldwide, especially in developed countries'
      },
      
      industryDemand: [
        'Electrical & Solar Installation',
        'Plumbing & Pipefitting',
        'HVAC Technology',
        'Welding & Fabrication',
        'Automotive & Diesel Mechanics',
        'Renewable Energy Technology'
      ],
      
      successStories: [
        'Robert T. - Master Electrician earning $120,000 owning his company',
        'Maria L. - HVAC Specialist promoted to Operations Manager at $95,000',
        'Thomas K. - Welder working on oil rigs earning $140,000 annually'
      ],
      
      whyMatters: `Skilled trade work is the engine of the economy. From technical engineering to specialized mechanical work, trade school graduates are in constant demand. The construction industry alone faces a shortage of over 500,000 skilled workers, driving wages higher every year. This scholarship rewards your focus on acquiring a specific, high-demand skill set and helps you launch your career with virtually no student debt. Trade school graduates typically enter the workforce 2-3 years earlier than bachelor's degree holders, giving them a significant head start on earning and saving.`,
      
      benefits: [
        'Full coverage for professional certification and licensing costs',
        'Access to specialized training facilities and state-of-the-art equipment',
        'Direct placement assistance with partner employers and unions',
        'Networking with local tradespeople and industry leaders',
        'Tool allowance up to $2,000 for required equipment',
        'Safety certification courses included'
      ],
      
      requirements: [
        'Enrolled in a certified trade or vocational program (minimum 6 months)',
        'Demonstrated passion for the selected trade through prior experience',
        'Strong commitment to safety protocols and technical proficiency',
        'Evidence of attendance and successful project completion',
        'Physical capability to perform trade duties',
        'Background check and drug screening (for certain trades)'
      ],
      
      applicationDeadline: 'June 30, 2026',
      awardAmount: 'Up to $25,000 total',
      renewable: 'Program-length coverage based on completion milestones'
    }
  };

  useEffect(() => {
    const slug = params?.slug;
    if (slug && scholarships[slug]) {
      // Build comprehensive full description
      const data = scholarships[slug];
      
      const fullDescription = `${data.description}

${data.whyMatters}

📊 PAYGRADE STATISTICS
Entry Level: ${data.paygradeStatistics.entryLevel}
Mid-Career (5-10 years): ${data.paygradeStatistics.midCareer}
Experienced (10+ years): ${data.paygradeStatistics.experienced}
Industry Growth Rate: ${data.paygradeStatistics.growthRate}
Unemployment Rate: ${data.paygradeStatistics.unemploymentRate}
Top Hiring Employers: ${data.paygradeStatistics.topEmployers.join(', ')}

🚀 FUTURE CAREER IMPACT & GROWTH
• Time to Promotion: ${data.futureCareerImpact.promotionSpeed}
• Job Security Level: ${data.futureCareerImpact.jobSecurity}
• Advanced Education Pathways: ${data.futureCareerImpact.advancedDegrees}
• Entrepreneurship Potential: ${data.futureCareerImpact.entrepreneurshipPotential}
• Global Career Opportunities: ${data.futureCareerImpact.globalOpportunities}

🏆 INDUSTRIES WITH HIGHEST DEMAND
${data.industryDemand.map(industry => `• ${industry}`).join('\n')}

🌟 SUCCESS STORIES FROM PAST RECIPIENTS
${data.successStories.map(story => `• ${story}`).join('\n')}

✅ PROGRAM BENEFITS
${data.benefits.map(benefit => `• ${benefit}`).join('\n')}

📋 ELIGIBILITY REQUIREMENTS
${data.requirements.map(req => `• ${req}`).join('\n')}

📅 IMPORTANT DETAILS
• Application Deadline: ${data.applicationDeadline}
• Award Amount: ${data.awardAmount}
• Renewable: ${data.renewable}`;
      
      setScholarship({
        ...data,
        fullDescription: fullDescription
      });
    } else {
      router.push('/scholarships');
    }
  }, [params, router]);

  // Hero Slider Data
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
              <div className={`${scholarship.bgClass} p-6 md:p-8`}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white mb-2" style={{ color: '#FFFFFF' }}>
                  {scholarship.title}
                </h1>
                <p className="text-white/90 text-lg md:text-xl mt-2">
                  {scholarship.tagline}
                </p>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 lg:p-10">
                <div className="space-y-8">
                  <h2 className='text-white/90 text-lg md:text-xl mt-2'>Why this scholarship matters</h2>
                  {scholarship.fullDescription.split('\n\n').map((section, sectionIndex) => {
                    const lines = section.split('\n').filter(line => line.trim());
                    
                    // Check if this section has bullet points
                    const hasBullets = lines.some(line => line.trim().startsWith('•') || line.trim().startsWith('altree') || line.trim().startsWith('altree') || line.trim().startsWith('altree'));
                    
                    if (hasBullets) {
                      // Find the title (first line without bullet)
                      const titleLine = lines.find(line => !line.trim().startsWith('•') && !line.trim().startsWith('altree') && !line.trim().startsWith('altree') && !line.trim().startsWith('altree'));
                      const bulletLines = lines.filter(line => line.trim().startsWith('•') || line.trim().startsWith('altree') || line.trim().startsWith('altree') || line.trim().startsWith('altree'));
                      
                      return (
                        <div key={sectionIndex} className="space-y-4">
                          {titleLine && (
                            <h3 className="text-xl md:text-2xl font-semibold text-primary border-l-4 border-primary pl-4">
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
                                    {item.replace('•', '').replace('', '').replace('', '').replace('', '').trim()}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    }
                    
                    // Check if it's a statistics section with colons
                    if (lines.length > 0 && lines[0].includes(':')) {
                      return (
                        <div key={sectionIndex} className="bg-gray-50 rounded-lg p-6 space-y-2">
                          {lines.map((line, lineIndex) => {
                            const [label, value] = line.split(':');
                            if (label && value) {
                              return (
                                <div key={lineIndex} className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 pb-2 last:border-0">
                                  <span className="font-semibold text-gray-800">{label.trim()}:</span>
                                  <span className="text-gray-600">{value.trim()}</span>
                                </div>
                              );
                            }
                            return <p key={lineIndex} className="text-gray-700">{line}</p>;
                          })}
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

                {/* CTA Box */}
                <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-primary/20">
                  <h3 className="text-xl font-bold text-primary mb-3">Ready to Invest in Your Future?</h3>
                  <p className="text-gray-700 mb-4">
                    Don't let financial barriers hold you back. Apply for the {scholarship.title} today and take the first step toward a rewarding career.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => router.push(`/application?scholarship=${params.slug}`)}
                      className="btn-primary flex-1 sm:flex-none px-8 py-3 text-base font-semibold bg-primary text-white rounded-lg hover:bg-primary/90 transition"
                    >
                      Apply Now - Deadline {scholarship.applicationDeadline}
                    </button>
                    <button
                      onClick={() => router.push('/scholarships')}
                      className="btn-secondary flex-1 sm:flex-none px-8 py-3 text-base font-semibold border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition"
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