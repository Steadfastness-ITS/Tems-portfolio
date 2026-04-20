import React from 'react';

const LatestRelease = () => {
  return (
    <>
      <section className="w-full min-h-fit bg-tems-cream py-20 md:py-32 px-6 md:px-16 lg:px-24 flex flex-col items-center overflow-hidden">
        
        {/* 1. HEADING: Kept at the top, moved slightly left using negative margin */}
        <h2 className="w-full font-tems-italic text-3xl md:text-[7rem] lg:text-[6.5rem] text-tems-brown mb-8 md:mb-12 tracking-tighter leading-none text-left md:-ml-20">
          Latest Release
        </h2>

        {/* 2. CONTENT WRAPPER: Centers the image and anchors the description to the bottom */}
        <div className="w-full max-w-[1800px] flex flex-col md:flex-row items-center md:items-end justify-between gap-12">
          
          {/* Spacer for left-side balance (empty div) */}
          <div className="hidden md:block w-1/4" />

          {/* 3. ALBUM ART: Mathematically centered */}
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[520px] lg:h-[520px] bg-black overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] flex-shrink-0 z-10">
            <img 
              src="/Image.png" 
              alt="Latest Release"
              className="w-full h-full object-cover hover:scale-108 transition-transform"
            />
          </div>

          {/* 4. DESCRIPTION & STREAMING: Moved to the bottom right */}
          <div className="w-full md:w-1/4 flex flex-col items-start md:items-start text-left pb-4">
            <p className="text-[14px] md:text-[15px] font-medium text-tems-brown leading-relaxed mb-6 tracking-tight max-w-[280px]">
              Tems returns to the COLORS stage with a hauntingly intimate and vocal-led 
              performance of <strong className="text-tems-brown font-bold">"What You Need."</strong>
            </p>

            <div className="flex flex-col gap-4">
              <h3 className="text-tems-brown font-bold text-xs tracking-widest opacity-100">
                Stream on:
              </h3>
              
              <div className="flex items-center gap-4">
              <a href="https://music.apple.com/us/artist/tems/1413909060" target="_blank" rel="noopener noreferrer"> 
                <img src="/apple.png" alt="Apple" className="w-7 h-7 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-transform" />
              </a> 
              <a href="https://open.spotify.com/artist/687cZJR45JO7jhk1LHIbgq?si=2055df23bb2a4246" target="_blank" rel="noopener noreferrer">
                <img src="/spotify.png" alt="Spotify" className="w-7 h-7 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.youtube.com/channel/UC9zj3cQhXlLZt2sHkKZy1vw" target="_blank" rel="noopener noreferrer">
                <img src="/Utube.png" alt="YouTube" className="w-7 h-7 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-transform" />
              </a> 
              <a href="https://music.amazon.com/artists/B07885YMWB/tems?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_YeiNHBqJ0viCbhAvHpRjXR5Ku" target="_blank" rel="noopener noreferrer">
                <img src="/ama.png" alt="Amazon" className="w-7 h-7 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-transform" />
              </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default LatestRelease;