import React, { useState } from 'react';

const Albums = () => {
  // 1. Array in state to allow rotation
  const [albumList, setAlbumList] = useState([
    { image: "/COVER-2.png" },
    { image: "/COVER-1.png" },
    { image: "/For Broken Hearts.png" }
  ]);

  // 2. Move first to back
  const handleNext = () => {
    setAlbumList((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  // 3. Move last to front
  const handlePrev = () => {
    setAlbumList((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, -1);
      return [last, ...rest];
    });
  };

  return (
    <section id="songs" className="w-full h-auto md:min-h-screen bg-tems-brown pt-16 pb-20 md:pt-24 md:pb-32 px-8 md:px-24 text-tems-cream overflow-hidden rounded-t-[20px] flex flex-col">
      
      {/* 1. Quote area */}
      <div className="w-full flex justify-end mb-16 md:mb-28">
        <blockquote className="max-w-[280px] md:max-w-4xl text-left">
          <p className="text-lg md:text-[3rem] leading-[1.1] md:leading-[1.15] opacity-80 tracking-tight">
            "Authenticity is everything to me. That's the one thing i cannot compromise on because that's all i have—who i really am."
          </p>
        </blockquote>
      </div>

      {/* 2. Section title */}
      <div className="mb-10 md:mb-24">
        <h2 className="text-5xl md:text-[4.5rem] leading-[0.9] tracking-tighter opacity-90">
          Sonic Chapters
        </h2>
      </div>

      {/* 3. Horizontal Carousel */}
<div 
  className="flex items-center gap-6 md:gap-12 overflow-x-auto pb-6 md:pb-20 no-scrollbar 
  pl-32 md:pl-95 -mr-8 md:-mr-24 h-[300px] md:h-[450px]" // Locked height for the whole row
  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
>
  {albumList.map((album, index) => (
    <div 
      key={album.image} 
      className={`flex-none group cursor-pointer transition-all duration-700 ease-in-out flex items-center justify-center ${
        index === 0 
          ? 'w-[240px] md:w-[400px]' 
          : 'w-[180px] md:w-[330px] opacity-100 hover:opacity-50'
      }`}
    >
      {/* This container now has a fixed height that matches your largest image (400px).
          Even when the image inside is smaller (330px), this box stays 400px tall,
          preventing the section from "jumping."
      */}
      <div className="relative aspect-square w-full h-full rounded-[2px] overflow-hidden shadow-2xl flex items-center justify-center">
        <img 
          src={album.image} 
          alt={`album cover ${index + 1}`} 
          className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
          loading="eager"
        />
      </div>
    </div>
  ))}
</div>

      {/* 4. Navigation controls - UPDATED WITH CHEVRONS */}
      <div className="flex gap-10 mt-6 md:mt-auto">
        <button 
          onClick={handlePrev}
          className="w-14 h-14 md:w-20 md:h-20 border border-tems-cream/10 rounded-full flex items-center justify-center hover:bg-tems-cream hover:text-tems-brown transition-all group"
        >
          <span className="text-xl md:text-2xl font-light group-hover:-translate-x-1 transition-transform pb-1">
            &lt;
          </span>
        </button>
        <button 
          onClick={handleNext}
          className="w-14 h-14 md:w-20 md:h-20 border border-tems-cream/10 rounded-full flex items-center justify-center hover:bg-tems-cream hover:text-tems-brown transition-all group"
        >
          <span className="text-xl md:text-2xl font-light group-hover:translate-x-1 transition-transform pb-1">
            &gt;
          </span>
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

export default Albums;