import React, { useState, useEffect, useRef } from "react";

const Singles = () => {
  const releases = [
    {
      title: "If Orange Was A Place",
      type: "EP • 2021",
      image: "/image 34.png",
      links: {
        spotify:
          "https://open.spotify.com/search/If%20Orange%20Was%20A%20Place%20Tems",
        apple:
          "https://music.apple.com/search?term=If%20Orange%20Was%20A%20Place%20Tems",
        youtube:
          "https://www.youtube.com/results?search_query=If+Orange+Was+A+Place+Tems",
        amazon:
          "https://music.amazon.com/search/If%20Orange%20Was%20A%20Place%20Tems",
      },
    },

    {
      title: "Me & U",
      type: "Singles • 2023",
      image: "/Me & U.png",
      links: {
        spotify: "https://open.spotify.com/search/Me%20%26%20U%20Tems",
        apple:
          "https://music.apple.com/search?term=Me%20%26%20U%20Tems",
        youtube:
          "https://www.youtube.com/results?search_query=Me+and+U+Tems",
        amazon:
          "https://music.amazon.com/search/Me%20and%20U%20Tems",
      },
    },

    {
      title: "Not An Angel",
      type: "Single • 2023",
      image: "/Not an Angel.png",
      links: {
        spotify:
          "https://open.spotify.com/search/Not%20An%20Angel%20Tems",
        apple:
          "https://music.apple.com/search?term=Not%20An%20Angel%20Tems",
        youtube:
          "https://www.youtube.com/results?search_query=Not+An+Angel+Tems",
        amazon:
          "https://music.amazon.com/search/Not%20An%20Angel%20Tems",
      },
    },

    {
      title: "Try Me",
      type: "Single • 2019",
      image: "/TryMe.png",
      links: {
        spotify:
          "https://open.spotify.com/track/4Ieod2ueT9GEEz9ILN84qP",
        apple:
          "https://music.apple.com/us/album/try-me-single/1475114791",
        youtube:
          "https://www.youtube.com/watch?v=hVEp-P2-rqY",
        amazon:
          "https://music.amazon.com/search/Try%20Me%20Tems",
      },
    },

    {
      title: "Love Me Jeje",
      type: "Singles • 2024",
      image: "/LovemeJeje.png",
      links: {
        spotify:
          "https://open.spotify.com/search/Love%20Me%20Jeje%20Tems",
        apple:
          "https://music.apple.com/search?term=Love%20Me%20Jeje%20Tems",
        youtube:
          "https://www.youtube.com/results?search_query=Love+Me+Jeje+Tems",
        amazon:
          "https://music.amazon.com/search/Love%20Me%20Jeje%20Tems",
      },
    },
  ];

  const platforms = [
    {
      name: "Spotify",
      key: "spotify",
      icon: "/spotify.png",
    },

    {
      name: "Apple Music",
      key: "apple",
      icon: "/apple.png",
    },

    {
      name: "YouTube Music",
      key: "youtube",
      icon: "/Utube.png",
    },

    {
      name: "Amazon Music",
      key: "amazon",
      icon: "/ama.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedRelease, setSelectedRelease] = useState(null);

  const pauseAutoScroll = useRef(false);
  const pauseTimeout = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseAutoScroll.current && !selectedRelease) {
        setActiveIndex((prev) => (prev + 1) % releases.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [releases.length, selectedRelease]);

  const pauseAfterClick = () => {
    pauseAutoScroll.current = true;

    clearTimeout(pauseTimeout.current);

    pauseTimeout.current = setTimeout(() => {
      pauseAutoScroll.current = false;
    }, 5000);
  };

  const handleNext = () => {
    pauseAfterClick();

    setActiveIndex(
      (prev) => (prev + 1) % releases.length
    );
  };

  const handlePrev = () => {
    pauseAfterClick();

    setActiveIndex(
      (prev) => (prev - 1 + releases.length) % releases.length
    );
  };

  const getCardPosition = (index) => {
    const position =
      (index - activeIndex + releases.length) %
      releases.length;

    if (position === 0) {
      return "z-30 opacity-100 translate-x-0 scale-100 brightness-100";
    }

    if (position === 1) {
      return "z-10 opacity-100 translate-x-[280px] md:translate-x-[430px] scale-[0.78] brightness-50 grayscale-[40%]";
    }

    if (position === releases.length - 1) {
      return "z-10 opacity-100 -translate-x-[280px] md:-translate-x-[430px] scale-[0.78] brightness-50 grayscale-[40%]";
    }

    if (position === 2) {
      return "z-0 opacity-0 translate-x-[600px] md:translate-x-[800px] scale-[0.78] brightness-50 grayscale-[40%]";
    }

    return "z-0 opacity-0 -translate-x-[600px] md:-translate-x-[800px] scale-[0.78] brightness-50 grayscale-[40%]";
  };

  return (
    <section className="w-full min-h-screen bg-tems-green py-20 md:py-28 px-6 md:px-20 text-tems-cream overflow-hidden">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto flex justify-between items-end mb-12 md:mb-16">
        <h2 className="bg-gradient-to-r from-[#F4F0EA] to-[#9A9A9A] bg-clip-text text-transparent font-playfair text-3xl md:text-7xl tracking-tight leading-tight px-2">
          Singles &amp; EPs
        </h2>

        <a
          href="https://open.spotify.com/playlist/6BuIokrjsUNFPH8siI2bCp?si=5V74L-q3QQS2hOvxMSGMSw"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans inline-flex items-center justify-center w-[140px] sm:w-auto px-1 sm:px-4 py-2 bg-[#C67E66] text-tems-cream rounded-full font-medium text-xs md:text-base text-center text-brand-dark/80 hover:bg-tems-brown transition-all duration-300 active:scale-95"
        >
          View All Songs
        </a>
      </div>

      {/* SLIDER */}
      <div className="relative w-screen md:max-w-7xl md:w-full left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 md:mx-auto h-[430px] md:h-[580px] flex items-center justify-center overflow-hidden">
        {releases.map((item, index) => (
          <div
            key={item.title}
            className={`absolute transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${getCardPosition(index)}`}
          >
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 w-[280px] h-[360px] md:w-[420px] md:h-[520px] hover:scale-[1.02]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* PLAY BUTTON */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();

                    pauseAfterClick();

                    if (index !== activeIndex) {
                      setActiveIndex(index);
                    } else {
                      setSelectedRelease(item);
                    }
                  }}
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20"
                >
                  <span className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <span className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></span>
                  </span>
                </button>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                {/* TEXT */}
                <div
                  className={`absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white transition-opacity duration-500 pointer-events-none ${
                    index === activeIndex
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <p className="font-sans font-bold text-xl md:text-2xl tracking-tight">
                    {item.title}
                  </p>

                  <p className="text-xs md:text-sm tracking-[0.3em] mt-2 text-white/70 uppercase">
                    {item.type}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* INDICATORS */}
      {/* <div className="flex justify-center gap-2 mt-8">
        {releases.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              pauseAfterClick();

              setActiveIndex(index);
            }}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === activeIndex
                ? "w-8 bg-tems-cream"
                : "w-2 bg-tems-cream/30"
            }`}
          />
        ))}
      </div> */}

      {/* NAVIGATION */}
      <div className="flex justify-center gap-6 mt-10 md:mt-12">
        <button
          onClick={handlePrev}
          className="w-14 h-14 md:w-16 md:h-16 border border-tems-cream/30 rounded-full flex items-center justify-center hover:bg-tems-cream hover:text-tems-green transition-all group"
        >
          <span className="text-xl md:text-2xl font-light group-hover:-translate-x-1 transition-transform pb-1">
            &lt;
          </span>
        </button>

        <button
          onClick={handleNext}
          className="w-14 h-14 md:w-16 md:h-16 border border-tems-cream/30 rounded-full flex items-center justify-center hover:bg-tems-cream hover:text-tems-green transition-all group"
        >
          <span className="text-xl md:text-2xl font-light group-hover:translate-x-1 transition-transform pb-1">
            &gt;
          </span>
        </button>
      </div>

      {/* STREAM MODAL */}
      {selectedRelease && (
        <div
          onClick={() => setSelectedRelease(null)}
          className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-md flex items-center justify-center px-4 py-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-brand-dark border border-white/10 w-full max-w-lg rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-full"
          >
            {/* HEADER */}
            <div className="flex justify-between items-start p-6 md:px-10 md:py-6 pb-4">
              <div className="pr-4">
                <p className="text-white/50 tracking-[0.2em] text-[10px] md:text-xs mb-1">
                  Stream Now
                </p>

                <h3 className="text-2xl md:text-3xl font-playfair italic text-white leading-tight">
                  {selectedRelease.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedRelease(null)}
                className="p-2 -mr-2 text-white/40 hover:text-white transition-colors bg-white/5 rounded-full"
              >
                ✕
              </button>
            </div>

            {/* LINKS */}
            <div className="flex-1 overflow-y-auto px-6 md:px-10 pb-2 md:pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col gap-2.5">
                {platforms.map((platform) => (
                  <a
                    key={platform.key}
                    href={
                      selectedRelease.links[
                        platform.key
                      ]
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 md:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 relative shrink-0">
                        <img
                          src={platform.icon}
                          alt={platform.name}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>

                      <span className="text-white text-sm md:text-base font-medium">
                        {platform.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">
                      Play
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="h-6 w-full bg-gradient-to-t from-brand-dark to-transparent shrink-0 pointer-events-none"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Singles;