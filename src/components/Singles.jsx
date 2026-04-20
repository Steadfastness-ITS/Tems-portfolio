import React, { useState, useEffect } from 'react';

const Singles = () => {
  // 1. State for the releases array
  const [releases, setReleases] = useState([
    { title: "If Orange Was A Place", type: "EP • 2021", image: "/image 34.png" },
    { title: "Me & U", type: "Singles • 2023", image: "/Me & U.png" },
    { title: "Not An Angel", type: "Single • 2023", image: "/Not an Angel.png" },
    { title: "Try Me", type: "Single • 2019", image: "/Try Me.png" },
    { title: "Love Me Jeje", type: "Singles • 2024", image: "/Love me Jeje.png" }
  ]);

  // 2. State to track how many items to show based on screen width
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 3);
    };
    
    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 3. Navigation Logic
  const handleNext = () => {
    setReleases((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const handlePrev = () => {
    setReleases((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, -1);
      return [last, ...rest];
    });
  };

  return (
    <section className="w-full min-h-screen bg-tems-green py-20 md:py-32 px-6 md:px-20 text-tems-cream">
      
      {/* HEADER AREA */}
      <div className="flex justify-between items-end mb-12 md:mb-20">
        <h2 className="font-tems-italic text-3xl md:text-[5.5rem] leading-none tracking-tighter">
          Singles & EPs
        </h2>
        
        <a 
          href="https://open.spotify.com/playlist/6BuIokrjsUNFPH8siI2bCp?si=5V74L-q3QQS2hOvxMSGMSw" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hidden md:block px-8 py-3 bg-[#C67E66] text-tems-cream rounded-full font-bold text-sm hover:bg-[#b06d56] transition-colors text-center"
        >
          View All Songs
        </a>
      </div>

      {/* CARDS GRID/SLIDER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
        {/* Dynamic slice: shows 1 on mobile, 3 on desktop */}
        {releases.slice(0, itemsToShow).map((item, index) => (
          <div 
            key={item.title} 
            className={`relative group cursor-pointer overflow-hidden rounded-xl transition-all duration-700 ${
              // Only scale the middle item if we are showing 3 items (desktop)
              itemsToShow === 3 && index === 1 ? 'md:scale-110 z-10' : 'opacity-100 md:opacity-80 md:hover:opacity-100'
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
              <h3 className="text-sm md:text-xs font-medium leading-tight">{item.title}</h3>
              <p className="text-xs md:text-xs tracking-widest opacity-80 mt-1">
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
          <button 
            onClick={handlePrev}
            className="w-14 h-14 md:w-16 md:h-16 border border-tems-cream/30 rounded-full flex items-center justify-center hover:bg-tems-cream hover:text-tems-green transition-all group"
          >
            {/* Chevron-style < symbol */}
            <span className="text-xl md:text-2xl font-light group-hover:-translate-x-1 transition-transform pb-1">
              &lt;
            </span>
          </button>
          
          <button 
            onClick={handleNext}
            className="w-14 h-14 md:w-16 md:h-16 border border-tems-cream/30 rounded-full flex items-center justify-center hover:bg-tems-cream hover:text-tems-green transition-all group"
          >
            {/* Chevron-style > symbol */}
            <span className="text-xl md:text-2xl font-light group-hover:translate-x-1 transition-transform pb-1">
              &gt;
            </span>
          </button>
        </div>

        {/* Mobile-only View All Button */}
        <a 
          href="https://open.spotify.com/playlist/6BuIokrjsUNFPH8siI2bCp?si=5V74L-q3QQS2hOvxMSGMSw" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="md:hidden w-full py-4 bg-[#C67E66] text-tems-cream rounded-full font-bold text-sm text-center block"
        >
          View All Songs
        </a>
      </div>
    </section>
  );
};

export default Singles;