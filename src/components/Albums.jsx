import react from 'react';

const albums = () => {
  const albums = [
    { image: "/cover-2.png" },
    { image: "/cover-1.png" },
    { image: "/for broken hearts.png" }
  ];

  return (
    <section className="w-full h-auto md:min-h-screen bg-tems-brown pt-16 pb-20 md:pt-24 md:pb-32 px-8 md:px-24 text-tems-cream overflow-hidden rounded-t-[20px] flex flex-col">
      
      {/* 1. quote area */}
      <div className="w-full flex justify-end mb-16 md:mb-28">
        <blockquote className="max-w-[280px] md:max-w-4xl text-lefft">
          <p className="text-lg md:text-[3rem] leading-[1.1] md:leading-[1.15] opacity-80 tracking-tight">
            "Authenticity is everything to me. that's the one thing i cannot compromise on because that's all i have—who i really am."
          </p>
        </blockquote>
      </div>

      {/* 2. section title */}
      <div className="mb-10 md:mb-24">
        <h2 className="text-5xl md:text-[4.5rem] leading-[0.9] tracking-tighter opacity-90">
          Sonic Chapters
        </h2>
      </div>

      {/* 3. horizontal carousel */}
      {/* change: removed pb-12 on mobile and replaced with pb-4 to tighten the gap */}
      <div 
        className="flex items-center gap-6 md:gap-12 overflow-x-auto pb-6 md:pb-20 no-scrollbar 
        pl-32 md:pl-95 -mr-8 md:-mr-24" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {albums.map((album, index) => (
          <div 
            key={index} 
            className={`flex-none group cursor-pointer transition-all duration-700 ${
              index === 0 
                ? 'w-[240px] md:w-[400px]' 
                : 'w-[180px] md:w-[330px] opacity-100 hover:opacity-50'
            }`}
          >
            <div className="relative aspect-square rounded-[2px] overflow-hidden shadow-2xl">
              <img 
                src={album.image} 
                alt={`album cover ${index + 1}`} 
                className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 4. navigation controls */}
      {/* change: removed mt-auto and added mt-6 for mobile. 
          md:mt-auto is used to keep the desktop view perfectly aligned. */}
      <div className="flex gap-10 mt-6 md:mt-auto">
        <button className="w-14 h-14 md:w-20 md:h-20 border border-tems-cream/10 rounded-full flex items-center justify-center hover:bg-tems-cream hover:text-tems-brown transition-all group">
          <span className="text-xl md:text-2xl font-light group-hover:-translate-x-1 transition-transform">←</span>
        </button>
        <button className="w-14 h-14 md:w-20 md:h-20 border border-tems-cream/10 rounded-full flex items-center justify-center hover:bg-tems-cream hover:text-tems-brown transition-all group">
          <span className="text-xl md:text-2xl font-light group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default albums;