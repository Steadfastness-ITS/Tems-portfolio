import React from 'react';

const LatestRelease = () => {
  return (
    <>
      <section className="w-full min-h-fit bg-tems-cream py-20 md:py-32 px-6 md:px-16 lg:px-24 flex flex-col items-center overflow-hidden">
        
        {/* 1. HEADING: Kept at the top, moved slightly left using negative margin */}
        <div className="w-full mb-8 md:mb-12 text-left md:-ml-20">
          <h2 className="font-playfair italic text-tems-brown text-4xl sm:text-5xl md:text-8xl lg:text-8xl tracking-tight leading-none select-none">
            Latest Release
          </h2>
        </div>

        {/* 2. CONTENT WRAPPER: Centers the image and anchors the description to the bottom */}
        <div className="w-full max-w-[1800px] flex flex-col md:flex-row items-center md:items-end justify-between gap-12">
          
          {/* Spacer for left-side balance (empty div) */}
          <div className="hidden md:block w-1/4" />

          {/* 3. ALBUM ART: Mathematically centered */}
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[520px] lg:h-[520px] bg-[#070C12] overflow-hidden rounded-[20px] md:rounded-[30px] shadow-[0_30px_80px_rgba(0,0,0,0.15)] flex-shrink-0 z-10">
  
  {/* LOGO IMAGE */}
  <div className="absolute top-59 md:top-106 left-4 md:left-8 z-20 bg-white w-[48px] md:w-[60px] lg:w-[65px] aspect-square flex flex-col items-center justify-center shadow-lg">
  
  <div className="text-black font-bold leading-none text-[10px] md:text-xs tracking-[0.18em] text-center">
    <p>COL</p>
    <p>ORS</p>
  </div>

  <p className="text-[5px] md:text-[6px] text-black tracking-[0.15em] mt-1">
    *STUDIOS
  </p>

</div>

  {/* MAIN IMAGE */}
  <img
    src="/Tems-img.png"
    alt="Tems"
    className="absolute inset-0 w-full h-full object-contain object-center hover:scale-[1.03] transition-transform duration-700"
  />

</div>

          {/* 4. DESCRIPTION & STREAMING: Moved to the bottom right */}
          <div className="w-full md:w-1/4 flex flex-col items-start md:items-start text-left pb-4">
            <p className="font-sans text-brand-dark/80 text-[15px] md:text-[15px] font-medium text-tems-brown leading-relaxed mb-6 tracking-tight max-w-[280px]">
              Tems returns to the COLORS stage with a hauntingly intimate and vocal-led 
              performance of <strong className="font-sans text-brand-dark/80 text-tems-brown font-bold">"What You Need."</strong>
            </p>

            <div className="flex flex-col gap-4">
              <h3 className="font-sans text-brand-dark/80 text-tems-brown font-bold text-[16px] tracking-widest opacity-100">
                Stream on:
              </h3>
              
              <div className="flex items-center gap-4">
              <a href="https://music.apple.com/us/song/what-you-need-a-colors-show/1882510092" target="_blank" rel="noopener noreferrer"> 
                <img src="/apple.png" alt="Apple" className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:scale-110 transition-transform" />
              </a> 
              <a href="https://open.spotify.com/track/3UE6vII3kZabnDYgTbREs6?si=8af01767756a4e1c" target="_blank" rel="noopener noreferrer">
                <img src="/spotify.png" alt="Spotify" className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:scale-110 transition-transform" />
              </a>
              <a href="https://youtu.be/QQaFn8f6ihA?si=EDw6zrje9DbFHNiN" target="_blank" rel="noopener noreferrer">
                <img src="/Utube.png" alt="YouTube" className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:scale-110 transition-transform" />
              </a> 
              <a href="https://music.amazon.com/tracks/B0G2MX32N4?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_sQolseaS9sAzKoHvt6LDOdYEV" target="_blank" rel="noopener noreferrer">
                <img src="/ama.png" alt="Amazon" className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:scale-110 transition-transform" />
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