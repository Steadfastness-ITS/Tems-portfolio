import React from "react";

const Tickets = () => {
  return (
    <section
      id="tour"
      className="relative w-full min-h-[400px] md:min-h-screen flex flex-col items-center justify-start py-16 md:py-24 px-4 md:px-6 overflow-hidden bg-black"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 flex justify-center items-start overflow-hidden">
        <img
          src="/Tics.png"
          alt="Tems Portrait"
          className="absolute w-full h-full md:w-auto md:h-[115%] object-cover md:object-contain object-center md:-top-[6%] brightness-[1]"
        />

        <div className="absolute inset-0 bg-black/35"></div>
        <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full mt-0 md:mt-8 max-w-7xl flex flex-col items-center text-center">
        {/* HEADER */}
        <div className="mb-6 md:mb-4 flex justify-center">
          <div className="w-full max-w-[320px] md:max-w-[620px] text-center">
            <h1 className="font-playfair text-white text-4xl sm:text-5xl md:text-[90px] leading-none tracking-tight">
              Out in the Wild
            </h1>

            <p className="font-sans text-white/85 text-xs sm:text-sm md:text-lg leading-snug mt-3 md:mt-8 max-w-[530px] mx-auto">
              Explore upcoming tour dates and step into the experience of a
              lifetime.
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <a
          href="https://open.spotify.com/playlist/6BuIokrjsUNFPH8siI2bCp?si=5V74L-q3QQS2hOvxMSGMSw"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans relative z-30 inline-flex items-center justify-center text-center px-5 py-2 md:px-8 md:py-3 bg-[#C67E66] text-white rounded-full text-[10px] md:text-sm font-semibold mb-10 md:mb-1 hover:bg-[#b06d56] transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          View All Concerts Tickets
        </a>

        {/* FLOATING TICKET CARDS */}
<div className="relative w-full mt-0 md:mt-4 max-w-7xl h-[390px] md:h-[720px] mx-auto album-bounce">

  {/* Card 1 - Right */}
  <div className="absolute right-6 md:right-12 top-[8px] md:top-[140px] z-30 hover:scale-105 transition-transform duration-500">
    <div className="w-[260px] sm:w-[330px] md:w-[550px] min-h-[76px] md:min-h-[132px] bg-[#3B2A22] rounded-[14px] md:rounded-[18px] shadow-2xl px-2.5 py-2 md:p-4 flex items-center gap-3 md:gap-5">
      <div className="w-[52px] h-[62px] md:w-[105px] md:h-[105px] bg-[#6B5246] rounded-[8px] md:rounded-[10px] flex flex-col items-center justify-center shrink-0">
        <p className="font-playfair text-white text-[20px] md:text-[32px] leading-none">Apr</p>
        <p className="font-playfair text-white text-[20px] md:text-[32px] leading-none mt-1">4</p>
      </div>

      <div className="flex-1 text-left min-w-0">
        <h3 className="font-sans text-white text-[11px] md:text-base font-semibold">Sunrise</h3>
        <p className="font-sans text-white/80 text-[9px] md:text-sm leading-tight mt-1">
           Chris Brown, Plies, Monica, Trick Daddy, Rob 49, Tems, Sexyy, Boss Man Dlow, Loe Shimmy.
        </p>
      </div>

      <div className="bg-[#6B5246] text-white text-[9px] md:text-sm px-2 md:px-3 py-1 md:py-2 rounded-full shrink-0">
        3:30am
      </div>
    </div>
  </div>

  {/* Card 2 - Left */}
  <div className="absolute left-6 md:left-12 top-[110px] md:top-[220px] z-20 hover:scale-105 transition-transform duration-500">
    <div className="w-[260px] sm:w-[330px] md:w-[550px] min-h-[76px] md:min-h-[132px] bg-[#3B2A22] rounded-[14px] md:rounded-[18px] shadow-2xl px-2.5 py-2 md:p-4 flex items-center gap-3 md:gap-5">
      <div className="w-[52px] h-[62px] md:w-[105px] md:h-[105px] bg-[#6B5246] rounded-[8px] md:rounded-[10px] flex flex-col items-center justify-center shrink-0">
        <p className="font-playfair text-white text-[20px] md:text-[32px] leading-none">Aug</p>
        <p className="font-playfair text-white text-[20px] md:text-[32px] leading-none mt-1">21</p>
      </div>

      <div className="flex-1 text-left min-w-0">
        <h3 className="font-sans text-white text-[11px] md:text-base font-semibold">London</h3>
        <p className="font-sans text-white/80 text-[9px] md:text-sm leading-tight mt-1">
          Jorja Smith, Tems, Kwn, Ayra Starr, Odeal.
        </p>
      </div>

      <div className="bg-[#6B5246] text-white text-[9px] md:text-sm px-2 md:px-3 py-1 md:py-2 rounded-full shrink-0">
        2:00pm
      </div>
    </div>
  </div>


  {/* Card 3 - Right Bottom */}
  <div className="absolute right-6 md:right-12 top-[210px] md:top-[400px] z-50 hover:scale-105 transition-transform duration-500">
    <div className="w-[260px] sm:w-[330px] md:w-[550px] min-h-[76px] md:min-h-[132px] bg-[#3B2A22] rounded-[14px] md:rounded-[18px] shadow-2xl px-2.5 py-2 md:p-4 flex items-center gap-3 md:gap-5">
      <div className="w-[52px] h-[62px] md:w-[105px] md:h-[105px] bg-[#6B5246] rounded-[8px] md:rounded-[10px] flex flex-col items-center justify-center shrink-0">
        <p className="font-playfair text-white text-[20px] md:text-[32px] leading-none">Aug</p>
        <p className="font-playfair text-white text-[20px] md:text-[32px] leading-none mt-1">29</p>
      </div>

      <div className="flex-1 text-left min-w-0">
        <h3 className="font-sans text-white text-[11px] md:text-base font-semibold">Bristol</h3>
        <p className="font-sans text-white/80 text-[9px] md:text-sm leading-tight mt-1">
          FORWARDS Bristol - Saturday Tickets
        </p>
      </div>

      <div className="bg-[#6B5246] text-white text-[9px] md:text-sm px-2 md:px-3 py-1 md:py-2 rounded-full shrink-0">
        12:00pm
      </div>
    </div>
  </div>

  {/* Card 4 - Left Bottom */}
  <div className="absolute left-6 md:left-12 top-[310px] md:top-[465px] z-40 hover:scale-105 transition-transform duration-500">
    <div className="w-[260px] sm:w-[330px] md:w-[550px] min-h-[76px] md:min-h-[132px] bg-[#3B2A22] rounded-[14px] md:rounded-[18px] shadow-2xl px-2.5 py-2 md:p-4 flex items-center gap-3 md:gap-5">
      <div className="w-[52px] h-[62px] md:w-[105px] md:h-[105px] bg-[#6B5246] rounded-[8px] md:rounded-[10px] flex flex-col items-center justify-center shrink-0">
        <p className="font-playfair text-white text-[20px] md:text-[32px] leading-none">Aug</p>
        <p className="font-playfair text-white text-[20px] md:text-[32px] leading-none mt-1">30</p>
      </div>

      <div className="flex-1 text-left min-w-0">
        <h3 className="font-sans text-white text-[11px] md:text-base font-semibold">Bristol</h3>
        <p className="font-sans text-white/80 text-[9px] md:text-sm leading-tight mt-1">
          Tems, Self Esteem, Wet Leg, Little Simz, Amylz And The Sniffers, ...
        </p>
      </div>

      <div className="bg-[#6B5246] text-white text-[9px] md:text-sm px-2 md:px-3 py-1 md:py-2 rounded-full shrink-0">
        11:59pm
      </div>
    </div>
  </div>
</div>
      </div>

    <style>{`
          @keyframes subtleAlbumBounce {
            0% {
              transform: translateY(0px) scale(1);
            }

            25% {
              transform: translateY(-4px) scale(1.002);
            }

            50% {
              transform: translateY(0px) scale(1);
            }

            75% {
              transform: translateY(3px) scale(0.998);
            }

            100% {
              transform: translateY(0px) scale(1);
            }
          }

          .album-bounce {
            transform-style: preserve-3d;
            animation: subtleAlbumBounce 4s ease-in-out infinite;
          }
        `}</style>

    </section>
  );
};

export default Tickets;