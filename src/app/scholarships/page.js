'use client';

import { useRouter } from 'next/navigation';
import HeroSlider from '@/components/HeroSlider';
import CategoryCard from '@/components/CategoryCard';
import Footer from '@/components/Footer';

export default function ScholarshipsPage() {
  const router = useRouter();

  const heroSlides = [
    {
      image: 'https://res.cloudinary.com/dwhj8qfca/image/upload/q_auto/f_auto/v1778186201/ChatGPT_Image_May_8_2026_12_28_44_AM_zs3coo.png',
      title: 'Scholarship Opportunities',
      subtitle: 'Find the perfect scholarship for your educational journey',
      overlay: true,
    },
  ];

  const categories = [
    { title: 'College', desc: '4 year college', bg: 'bg-[#FF6B4A]', id: 'college', href: '/scholarships/college' },
    { title: 'Jr. College', desc: '2 year college', bg: 'bg-[#00C853]', id: 'jr-college', href: '/scholarships/jr-college' },
    { title: 'Trade School', desc: 'Make money asap', bg: 'bg-[#333333]', id: 'trade-school', href: '/scholarships/trade-school' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSlider slides={heroSlides} />

      {/* Scholarship Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-5xl font-bold text-primary mb-4">Scholarship Programs</h2>
    <div className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
      <p>
        Welcome to our scholarship platform, dedicated to empowering students to reach their academic goals. 
        We provide specialized financial support for a variety of educational paths, ensuring that 
        talented individuals can focus on their studies and future careers. Whether you are pursuing 
        a traditional four-year degree, a two-year associate program, or specialized vocational training, 
        our programs are designed to minimize financial barriers and support your success.
      </p>
    </div>
  
  
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Final Apply Now Section */}
      <section className="py-12 text-center bg-white border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to apply?</h3>
        <button 
          onClick={() => router.push('/application')} 
          className="bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition"
        >
          Apply Now
        </button>
      </section>

      <Footer />
    </main>
  );
}