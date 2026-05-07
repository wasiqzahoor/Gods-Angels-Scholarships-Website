'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HeroSlider({ slides = [], applyButtonHref = '/application' }) {
  // Default placeholder slides if none provided
  const defaultSlides = [
    {
      image: 'https://res.cloudinary.com/dwhj8qfca/image/upload/q_auto/f_auto/v1778182143/ChatGPT_Image_May_8_2026_12_28_44_AM_mvazh3.png',
      title: 'Gods Angels Scholarships',
      subtitle: 'Empowering students to achieve their dreams',
      overlay: true,
    },
  ];

  const displaySlides = slides.length > 0 ? slides : defaultSlides;

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-2 !h-2 !rounded-full',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white !w-8',
        }}
        navigation={false}
        loop={displaySlides.length > 1}
        className="w-full h-full"
      >
        {displaySlides.map((slide, index) => (
          <SwiperSlide key={index} className="!h-full">
            <div className="relative w-full h-full ">
              {/* Slider Image */}
              {slide.image ? (
                <Image
                  src={slide.image}
                  alt={slide.title || 'Hero Image'}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  unoptimized
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-blue-600 to-blue-800" />
              )}

              {/* Color Overlay */}
              {slide.overlay && (
                <div className="slider-overlay" />
              )}

              {/* Text Overlay - Centered in Middle */}
{/* Updated Text Overlay Section */}
{(slide.title || slide.subtitle) && (
  <div className="slider-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-2 z-10 w-full md:px-4">
    <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-6 drop-shadow-2xl">
      {slide.title}
    </h1>
    {slide.subtitle && (
      <p className="text-xs md:text-xl lg:text-2xl text-white drop-shadow-md max-w-xl md:max-w-3xl mx-auto mb-4 md:mb-6 leading-tight">
        {slide.subtitle}
      </p>
    )}
    
    {/* Buttons Container */}
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center mt-4">
      <Link 
        href="/scholarships" 
        className="bg-transparent text-black border-2 border-white hover:bg-white hover:text-primary font-bold text-sm md:text-lg px-6 py-2 md:px-8 md:py-4 rounded-lg transition-all"
      >
        Scholarships
      </Link>
      <Link 
        href={applyButtonHref} 
        className="bg-[#1E40AF] text-black hover:bg-[#1D4ED8] font-bold text-sm md:text-lg px-6 py-2 md:px-8 md:py-4 rounded-lg shadow-lg transition-all"
      >
        Apply Now
      </Link>
    </div>

  </div>
)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

