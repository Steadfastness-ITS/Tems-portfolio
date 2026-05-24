import React, { useState } from "react";

const Albums = () => {
  const [albumList, setAlbumList] = useState([
    { image: "/Love in K.png", title: "Love Is A Kingdom", year: "Album - 2025" },
    { image: "/Tics.png", title: "Born In The Wild", year: "Album - 2024" },
    { image: "/Broken E.png", title: "For Broken Ears", year: "Album - 2020" },
  ]);

  const handleNext = () => {
    setAlbumList((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const handlePrev = () => {
    setAlbumList((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, -1);
      return [last, ...rest];
    });
  };

  return (
    <section
      id="songs"
      className="w-full h-auto md:min-h-screen bg-tems-brown pt-16 pb-20 md:pt-24 md:pb-32 px-8 md:px-24 text-tems-cream overflow-hidden rounded-t-[20px] md:rounded-t-[40px] flex flex-col"
    >
      {/* QUOTE AREA */}
      <div className="w-full flex justify-end mb-16 md:mb-28">
        <p className="max-w-[280px] md:max-w-4xl text-left text-xl md:text-[44px] opacity-90 w-full font-playfair leading-tight md:leading-tight bg-gradient-to-r from-[#F4F0EA] to-[#9A9A9A] bg-clip-text text-transparent">
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
        className="flex items-center gap-6 md:gap-12 overflow-x-auto pt-1 md:pt-8 pb-6 md:pb-20 no-scrollbar pl-32 md:pl-95 -mr-8 md:-mr-24 h-[300px] md:h-[450px]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {albumList.map((album, index) => (
          <div
            key={album.image}
            className={`flex-none group cursor-pointer transition-all duration-700 ease-in-out flex items-center justify-center ${
              index === 0
                ? "w-[240px] md:w-[400px]"
                : "w-[180px] md:w-[330px] opacity-100 hover:opacity-50"
            }`}
          >
            <div className="relative aspect-square w-full h-full rounded-[10px] overflow-hidden shadow-2xl flex items-center justify-center">
              <img
                src={album.image}
                alt={album.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="eager"
              />

              <div
                className={`absolute bottom-4 left-4 md:bottom-6 md:left-6 transition-opacity duration-500 ${
                  index === 0 ? "opacity-100" : "opacity-0"
                }`}
              >
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