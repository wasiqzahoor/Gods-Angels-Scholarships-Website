import Link from 'next/link';

export default function ApplyNowButton({ href = '/application' }) {
  return (
    <section className="w-full pt-[48px] pb-0 flex justify-center items-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <Link 
            href={href} 
            className="!text-white hover:!text-white bg-[#1E40AF] hover:bg-[#1D4ED8] font-bold text-xl md:text-2xl px-16 py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 text-center inline-block"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}

