import react from 'react';

const hero = () => {
  return (
    <section className="relative w-full flex flex-col items-center bg-tems-cream pt-32 md:pt-40 h-auto md:h-[150vh] overflow-hidden">
      
      {/* 1. background typography: centered behind subject */}
      <div className="absolute top-[26%] md:top-[15%] right-3 md:right-0 md:left-0 w-full flex items-center justify-center z-0 pointer-events-none">
        <img 
            src="/Raw Soul.png" 
            alt="raw soul"
            className="w-[85vw] md:w-[90vw] max-w-full h-auto object-contain select-none opacity-100"
        />
      </div>

      {/* 2. subject: Te.png */}
      <div className="relative z-10 w-full flex justify-center items-center pointer-events-none">
        {/* mobile: added -translate-y-2 to move it up slightly so it touches the text above */}
        <div className="relative w-[70%] -translate-y-10 translate-y-6 md:translate-y-14 md:w-[45vw] lg:w-[55vw] translate-x-0 md:translate-x-10">
          <img 
            src="/Te.png" 
            alt="tems" 
            className="w-full h-auto object-cover drop-shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
          />
        </div>
      </div>

      {/* 3. description: float right */}
      {/* adjusted mobile top to 32% and kept md:top-[48%] for desktop */}
      <div className="absolute right-2 md:right-44 top-[44%] md:top-[48%] z-20 max-w-[140px] md:max-w-[320px]">
        <p className="text-[11px] md:text-[18px] font-bold leading-[1.2] text-left text-tems-brown tracking-tight font-sans">
          Discover the Grammy-winning voice redefining the boundaries of Alté, R&B, and Afrobeats with unmatched clarity.
        </p>
      </div>

      <div className="absolute bottom-[1%] right-4 md:bottom-35 md:left-33 z-20 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
        <span className="text-[11px] md:text-[16px] font-bold text-tems-brown tracking-tight font-sans">
          Stream all songs on:
        </span>
        
        {/* mobile icons: gap-3 to fit the narrow left side, gap-7 for desktop */}
        <div className="flex items-center gap-1 md:gap-7">
        {/* Apple Music */}
        <a href="https://music.apple.com/us/artist/tems/1413909060" target="_blank" rel="noopener noreferrer">
            <img 
            src="/apple.png" 
            alt="apple" 
            className="w-6 h-6 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-transform" 
            />
        </a>

        {/* Spotify */}
        <a href="https://open.spotify.com/artist/687cZJR45JO7jhk1LHIbgq?si=2055df23bb2a4246" target="_blank" rel="noopener noreferrer">
            <img 
            src="/spotify.png" 
            alt="spotify" 
            className="w-6 h-6 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-transform" 
            />
        </a>

        {/* YouTube */}
        <a href="https://youtube.com/@temsbaby" target="_blank" rel="noopener noreferrer">
            <img 
            src="/Utube.png" 
            alt="youtube" 
            className="w-6 h-6 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-transform" 
            />
        </a>

        {/* Amazon Music */}
        <a href="https://music.amazon.com/artists/B07885YMWB/tems?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_YeiNHBqJ0viCbhAvHpRjXR5Ku" target="_blank" rel="noopener noreferrer">
            <img 
            src="/ama.png" 
            alt="amazon" 
            className="w-6 h-6 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-transform" 
            />
        </a>
    </div>
      </div>
    </section>
  );
};

export default hero;