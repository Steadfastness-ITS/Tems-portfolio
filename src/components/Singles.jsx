import React from 'react';

const Singles = () => {
  const releases = [
    {
      title: "If Orange Was A Place",
      type: "EP • 2021",
      image: "/image 34.png", 
    },
    {
      title: "Me & U",
      type: "Singles • 2023",
      image: "/Me & U.png",
    },
    {
      title: "Not An Angel",
      type: "Single • 2023",
      image: "/Not an Angel.png",
    }
  ];

  return (
    <section className="w-full min-h-screen bg-tems-green py-20 md:py-32 px-6 md:px-20 text-tems-cream">
      
      {/* HEADER AREA */}
      <div className="flex justify-between items-end mb-12 md:mb-20">
        <h2 className="font-tems-italic text-3xl md:text-[5.5rem] leading-none tracking-tighter">
          Singles & EPs
        </h2>
        
        <button className="hidden md:block px-8 py-3 bg-[#C67E66] text-tems-cream rounded-full font-bold text-sm hover:bg-[#b06d56] transition-colors">
          View All Songs
        </button>
      </div>

      {/* CARDS GRID/SLIDER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
        {releases.map((item, index) => (
          <div 
            key={index} 
            className={`relative group cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ${
              index === 1 ? 'md:scale-110 z-10' : 'opacity-80 hover:opacity-100'
            }`}
          >
            {/* Aspect Ratio Box */}
            <div className="aspect-[4/5] md:aspect-square overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* TEXT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xs md:text-xs font-medium leading-tight">{item.title}</h3>
              <p className="text-[10px] md:text-xs tracking-widest opacity-80 mt-1">
                {item.type}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* NAVIGATION & MOBILE BUTTON */}
      <div className="flex flex-col items-center mt-16 md:mt-24 gap-10">
        {/* Slider Controls */}
        <div className="flex gap-6">
          <button className="w-14 h-14 md:w-16 md:h-16 border border-tems-cream/30 rounded-full flex items-center justify-center hover:bg-tems-cream hover:text-tems-green transition-all group">
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          </button>
          <button className="w-14 h-14 md:w-16 md:h-16 border border-tems-cream/30 rounded-full flex items-center justify-center hover:bg-tems-cream hover:text-tems-green transition-all group">
            <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Mobile-only View All Button */}
        <button className="md:hidden w-full py-4 bg-[#C67E66] text-tems-cream rounded-full font-bold text-sm">
          View All Songs
        </button>
      </div>
    </section>
  );
};

export default Singles;