import React, { useState, useEffect } from "react";

const Albums = () => {
  const [albumList, setAlbumList] = useState([
    {
      image: "/Love in K.png",
      title: "Love Is A Kingdom",
      year: "Album - 2025",
      release: "2025 Release",
      links: {
        spotify: "https://open.spotify.com/album/3aI43F5shWPnoW4KMfxM1c",
        apple: "https://music.apple.com/us/album/love-is-a-kingdom/1853635930",
        youtube: "https://www.youtube.com/playlist?list=PLxA687tYuMWjJWbSu10W_pMKsLueq48DL",
        amazon: "https://music.amazon.com/albums/B0G2MXCB4X",
      },
    },
    {
      image: "/Tics.png",
      title: "Born In The Wild",
      year: "Album - 2024",
      release: "2024 Release",
      links: {
        spotify: "https://open.spotify.com/album/1FGGv0vvSTerGQ91Mkvf9p",
        apple: "https://music.apple.com/us/album/born-in-the-wild/1750361972",
        youtube: "https://www.youtube.com/playlist?list=PL9tY0BWXOZFsSxo19SHqK2vQ-y9DEACON",
        amazon: "https://music.amazon.com/albums/B0D654GLHD",
      },
    },
    {
      image: "/Broken E.png",
      title: "For Broken Ears",
      year: "Album - 2020",
      release: "2020 Release",
      links: {
        spotify: "https://open.spotify.com/album/2sU8ByeYc5BOBFNDr58CGV",
        apple: "https://music.apple.com/us/album/for-broken-ears/1532252592",
        youtube: "https://www.youtube.com/playlist?list=PLsAk6h4n-dS2g2qs4DQ9Rjy7bqPFtEyvC",
        amazon: "https://music.amazon.com/albums/B08JD8LJ69",
      },
    },
  ]);

  const albumPlatforms = [
    { name: "Spotify", key: "spotify", icon: "/spotify.png" },
    { name: "Apple Music", key: "apple", icon: "/apple.png" },
    { name: "YouTube Music", key: "youtube", icon: "/Utube.png" },
    { name: "Amazon Music", key: "amazon", icon: "/ama.png" },
  ];

  const [fadingAlbum, setFadingAlbum] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handleNext = () => {
    setFadingAlbum(albumList[0]);

    setAlbumList((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });

    setTimeout(() => {
      setFadingAlbum(null);
    }, 650);
  };

  const handlePrev = () => {
    setAlbumList((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, -1);
      return [last, ...rest];
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!selectedAlbum) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [albumList, selectedAlbum]);

  return (
    <section
      id="songs"
      className="w-full h-auto md:min-h-screen bg-tems-brown pt-16 pb-20 md:pt-24 md:pb-32 px-8 md:px-24 text-tems-cream overflow-hidden rounded-t-[20px] md:rounded-t-[40px] flex flex-col"
    >
      {/* QUOTE AREA */}
      <div className="w-full flex justify-end mb-16 md:mb-28">
        <p className="max-w-[280px] md:max-w-4xl text-left text-xl md:text-[44px] opacity-90 w-full font-playfair leading-tight md:leading-tight bg-gradient-to-r from-[#F4F0EA] to-[#9A9A9A] bg-clip-text text-transparent animate-quote-left">
          ''Authenticity is everything to me. That's the one thing I cannot
          compromise on because that's all I have—who I really am.''
        </p>
      </div>

      {/* SECTION TITLE */}
      <div className="mb-10 md:mb-38">
        <h2 className="font-playfair leading-tight md:leading-tight text-4xl md:text-7xl text-left bg-gradient-to-r from-[#F4F0EA] to-[#9A9A9A] opacity-85 bg-clip-text text-transparent">
          Sonic Chapters
        </h2>
      </div>

      {/* HORIZONTAL CAROUSEL */}
      <div
        className="relative flex items-center gap-6 md:gap-12 overflow-x-auto pt-1 md:pt-8 pb-6 md:pb-20 no-scrollbar pl-20 md:pl-95 -mr-8 md:-mr-24 h-[300px] md:h-[450px]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* FADING FIRST ALBUM CLONE */}
        {fadingAlbum && (
          <div className="absolute left-32 md:left-95 top-1 md:top-8 flex-none w-[240px] md:w-[400px] h-[240px] md:h-[400px] z-10 pointer-events-none album-fade-away">
            <div className="relative aspect-square w-full h-full rounded-[10px] overflow-hidden shadow-2xl flex items-center justify-center">
              <img
                src={fadingAlbum.image}
                alt={fadingAlbum.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 opacity-100">
                <p className="font-semibold text-base md:text-lg">
                  {fadingAlbum.title}
                </p>
                <p className="text-xs md:text-sm text-[#9F9F9F] tracking-widest">
                  {fadingAlbum.year}
                </p>
              </div>
            </div>
          </div>
        )}

        {albumList.map((album, index) => (
          <div
            key={album.image}
            onClick={() => setSelectedAlbum(album)}
            className={`flex-none group cursor-pointer transition-all duration-[1600ms] ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-center album-slide-over ${
              index === 0
                ? "w-[240px] md:w-[400px] z-40"
                : "w-[180px] md:w-[330px] opacity-100 hover:opacity-50 z-30"
            }`}
          >
            <div className="relative aspect-square w-full h-full rounded-[10px] overflow-hidden shadow-2xl flex items-center justify-center">
              <img
                src={album.image}
                alt={album.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="eager"
              />

              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 transition-opacity duration-500 opacity-100">
                <p className="font-semibold text-base md:text-lg">
                  {album.title}
                </p>
                <p className="text-xs md:text-sm text-[#9F9F9F] tracking-widest">
                  {album.year}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NAVIGATION CONTROLS */}
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

      {/* ALBUM STREAM MODAL */}
      {selectedAlbum && (
        <div
          onClick={() => setSelectedAlbum(null)}
          className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-md flex items-center justify-center px-4 py-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white/10 backdrop-blur-xl border border-white/10 w-full max-w-lg rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-full"
          >
            <div className="flex justify-between items-start p-6 md:px-10 md:py-6 pb-4">
              <div className="pr-4">
                <p className="text-white/50 tracking-[0.2em] text-[10px] md:text-xs mb-1">
                  {selectedAlbum.release}
                </p>

                <h3 className="text-2xl md:text-3xl font-playfair italic text-white leading-tight">
                  {selectedAlbum.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedAlbum(null)}
                className="p-2 -mr-2 text-white/40 hover:text-white transition-colors bg-white/5 rounded-full"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 md:px-10 pb-2 md:pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col gap-2.5">
                {albumPlatforms.map((platform) => (
                  <a
                    key={platform.key}
                    href={selectedAlbum.links[platform.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 md:p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all group"
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

                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-white/40 group-hover:text-white transition-colors">
                      Play
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="h-6 w-full bg-gradient-to-t from-black/20 to-transparent shrink-0 pointer-events-none"></div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes quoteFadeLeft {
          0% {
            opacity: 0;
            transform: translateX(-45px);
          }

          100% {
            opacity: 0.9;
            transform: translateX(0);
          }
        }

        .animate-quote-left {
          animation: quoteFadeLeft 1.2s ease-out both;
        }

        @keyframes albumFadeAway {
          0% {
            opacity: 1;
            transform: scale(1);
          }

          35% {
            opacity: 0.05;
            transform: scale(0.825);
          }

          100% {
            opacity: 0;
            transform: scale(0.825);
          }
        }

        @keyframes albumSlideOver {
          0% {
            transform: translateX(110px);
            opacity: 1;
          }

          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .album-fade-away {
          transform-origin: center center;
          animation: albumFadeAway 0.65s ease-out both;
        }

        .album-slide-over {
          animation: albumSlideOver 1.6s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
      `}</style>
    </section>
  );
};

export default Albums;