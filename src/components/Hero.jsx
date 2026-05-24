import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col items-center bg-tems-cream pt-32 md:pt-40 h-auto md:h-[150vh] overflow-hidden">
      {/* 1. background typography */}
      <div className="absolute top-[25%] md:top-[10%] right-4 md:right-0 md:left-0 w-full flex items-center justify-center z-0 pointer-events-none">
        <div className="flex items-center justify-center gap-[12vw] md:gap-[7vw] w-[85vw] md:w-[90vw] max-w-full">
          <h2 className="w-1/2 text-right font-playfair italic text-tems-brown text-[18vw] md:text-[22vw] leading-none font-bold tracking-tight select-none opacity-100 animate-raw-slide">
            Raw
          </h2>

          <h2 className="w-1/2 text-left font-playfair italic text-tems-brown text-[18vw] md:text-[22vw] leading-none font-bold tracking-tight select-none opacity-100 animate-soul-slide">
            Soul
          </h2>
        </div>
      </div>

      {/* 2. subject */}
      <div className="relative z-10 w-full flex justify-center items-center pointer-events-none">
        <div className="relative w-[70%] -translate-y-10 translate-y-6 md:translate-y-14 md:w-[45vw] lg:w-[55vw] translate-x-0 md:translate-x-10 animate-image-slide">
          <img
            src="/Te.png"
            alt="tems"
            className="w-full h-auto object-cover drop-shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
          />
        </div>
      </div>

      {/* 3. description */}
      <div className="absolute right-2 md:right-30 top-[44%] md:top-[46%] z-20 max-w-[140px] md:max-w-[380px] hero-slide-up-late">
        <p className="font-sans text-brand-dark/80 text-[11px] md:text-[21px] font-bold leading-[1.2] text-left text-tems-brown tracking-tight">
          Discover the Grammy-winning voice redefining the boundaries of Alté,
          R&B, and Afrobeats with unmatched clarity.
        </p>
      </div>

      <div className="absolute bottom-[32%] left-5 md:bottom-35 md:left-20 z-20 flex flex-col md:flex-row md:items-center gap-3 md:gap-4 hero-slide-up-late">
        <span className="font-sans text-brand-dark/80 text-[11px] md:text-[18px] font-bold text-tems-brown tracking-tight right-1 md:right-0">
          Stream all songs on:
        </span>

        <div className="flex items-center gap-3 md:gap-7">
          <a
            href="https://music.apple.com/us/artist/tems/1413909060"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/apple.png"
              alt="apple"
              className="w-6 h-6 md:w-11 md:h-11 cursor-pointer hover:scale-110 transition-transform"
            />
          </a>

          <a
            href="https://open.spotify.com/artist/687cZJR45JO7jhk1LHIbgq?si=2055df23bb2a4246"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/spotify.png"
              alt="spotify"
              className="w-6 h-6 md:w-11 md:h-11 cursor-pointer hover:scale-110 transition-transform"
            />
          </a>

          <a
            href="https://youtube.com/@temsbaby"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Utube.png"
              alt="youtube"
              className="w-6 h-6 md:w-11 md:h-11 cursor-pointer hover:scale-110 transition-transform"
            />
          </a>

          <a
            href="https://music.amazon.com/artists/B07885YMWB/tems?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_YeiNHBqJ0viCbhAvHpRjXR5Ku"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/ama.png"
              alt="amazon"
              className="w-6 h-6 md:w-11 md:h-11 cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>

      <style>{`
  @keyframes rawSlide {
    0% {
      opacity: 0;
      transform: translateX(-80px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes soulSlide {
    0% {
      opacity: 0;
      transform: translateX(80px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes imageSlide {
    0% {
      opacity: 0;
      transform: translateY(90px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes heroFadeIn {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    1% {
      visibility: visible;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }

  .animate-raw-slide {
    animation: rawSlide 1.2s ease-out both;
  }

  .animate-soul-slide {
    animation: soulSlide 1.2s ease-out both;
  }

  .animate-image-slide {
    animation: imageSlide 1.2s ease-out both;
  }

  .hero-fade-in {
    animation: heroFadeIn 1.2s ease-out both;
  }

  @keyframes heroSlideUpLate {
  0% {
    opacity: 0;
    transform: translateY(28px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-slide-up-late {
  animation: heroSlideUpLate 1s ease-out 1.3s both;
}
`}</style>
    </section>
  );
};

export default Hero;