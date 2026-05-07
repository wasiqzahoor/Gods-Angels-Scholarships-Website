'use client';

import { useRouter } from 'next/navigation';
import HeroSlider from '@/components/HeroSlider';
import ApplyNowButton from '@/components/ApplyNowButton';
import ScholarshipCard from '@/components/ScholarshipCard';
import HowItWorks from '@/components/HowItWorks';
import CategoryCard from '@/components/CategoryCard'; 
import Footer from '@/components/Footer';

export default function Home() {
  const router = useRouter();

  // Hero Slider Data - Single clean slider
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

  

  // Home.js main  categories array 
const categories = [
  { title: 'College', desc: '4 year college', bg: 'bg-[#FF6B4A]', id: 'college', href: '/scholarships/college' },
  { title: 'Jr. College', desc: '2 year college', bg: 'bg-[#00C853]', id: 'jr-college', href: '/scholarships/jr-college' },
  { title: 'Trade School', desc: 'Make money asap', bg: 'bg-[#333333]', id: 'trade-school', href: '/scholarships/trade-school' },
  { title: 'Apply Now', desc: 'Start your future 5 minute App!', bg: 'bg-[#0277BD]', id: 'apply', href: '/application' },
];
  const handleViewScholarship = (scholarship) => {
    router.push(`/scholarships/${scholarship.id}`);
  };

  return (
    <main className="min-h-screen ">
      {/* 1. Hero Slider - Single clean slider */}
      <HeroSlider slides={heroSlides} />

      {/* 2. Apply Now Button - 2 inches below slider, centered, blue, very visible */}
      {/* <ApplyNowButton href="/application" /> */}

      {/* 3. Intro / Information Section - Full width text */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About Our Scholarship Program
            </h2>
            <div className="text-gray text-lg leading-relaxed space-y-4">
              <p>
                Our scholarship program is designed to support deserving students who demonstrate academic excellence, 
                leadership potential, and a passion for making a difference. We provide financial assistance to help 
                students achieve their educational goals.
              </p>
              <p>
                Whether you're pursuing undergraduate or graduate studies, we're here to support your journey. 
                Our scholarships are open to students from diverse backgrounds who show promise and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* 4. Category Section - 4 category Cards */}
      <section className="py-12 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
    {categories.map((cat) => (
      <CategoryCard 
        key={cat.id} 
        title={cat.title} 
        desc={cat.desc} 
        bg={cat.bg} 
        href={cat.href} 
      />
    ))}
  </div>
</section>

      {/* 5. How It Works Section */}
      <HowItWorks />

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}
