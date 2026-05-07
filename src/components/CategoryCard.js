import Link from 'next/link';

export default function CategoryCard({ title, desc, bg, href }) {
  return (
    <Link href={href} className="flex flex-col h-full rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      
      {/* Upper Colored Part */}
      <div className={`${bg} h-32 p-6 flex flex-col justify-between`}>
        <div className="flex justify-between items-start">
          {/* text-white class yahan apply ki hai */}
          <h3 className="text-3xl font-bold text-gray-light truncate pr-2">{title}</h3> 
          <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] text-white font-bold uppercase tracking-wider">
             Available
          </span>
        </div>
      </div>

      {/* Lower Description Part */}
      <div className="bg-[#F3F0E6] flex-grow p-6 flex items-center">
        <p className="text-lg text-gray-700 font-medium leading-tight">{desc}</p>
      </div>
      
    </Link>
  );
}