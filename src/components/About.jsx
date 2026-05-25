import React from "react";

const About = () => {
  return (
    <section className="relative w-full bg-[#4a533c] overflow-hidden rounded-b-[30px] md:rounded-b-[40px]">
      <div className="flex flex-col lg:flex-row min-h-[800px]">
        {/* LEFT SIDE: Portrait/Media Image Layer */}
        <div className="relative w-full lg:w-[50%] h-[500px] md:h-[600px] lg:h-auto overflow-hidden">
          <img
            src="/image 32.png"
            alt="Tems"
            className="absolute inset-0 w-full h-full object-cover md:object-center about-image-slide"
          />

          {/* Gradient Bleed/Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#4a533c] via-transparent to-transparent" />
        </div>

        {/* RIGHT SIDE: Text & Biography Information Panel */}
        <div className="w-full lg:w-[55%] p-8 md:p-16 lg:p-24 flex flex-col justify-center about-text-slide">
          <h2 className="font-playfair bg-gradient-to-r from-[#F4F0EA] to-[#9A9A9A] bg-clip-text text-transparent text-5xl md:text-7xl mb-6 md:mb-6 tracking-tight">
            Temilade
          </h2>

          <p className="font-sans font-normal text-[#F4F0EA] opacity-90 text-xs md:text-[15px] leading-[1.5em] mb-3 max-w-2xl">
            Temilade Openiyi, known professionally as Tems, is a Nigerian
            singer, songwriter, and record producer whose soulful blend of R&B
            and Afrobeats has established her as a global cultural icon.
          </p>

          <p className="font-sans font-normal text-[#F4F0EA] opacity-90 text-xs md:text-[15px] leading-[1.5em] mb-3 max-w-2xl">
            Since her breakout with the self-produced single "Mr Rebel" in
            2018, she has achieved unprecedented milestones, including becoming
            the first African female artist to win a Grammy Award and the first
            to debut seven entries on the U.S. Billboard Hot 100. Renowned for
            her deep, velvet-toned vocals and radical creative autonomy, she
            released her critically acclaimed debut studio album, Born in the
            Wild, in 2024, followed by the self-produced EP Love Is a Kingdom in
            late 2025. As of 2026, Tems remains a pioneering force who bridges
            the gap between the African continent and the international
            mainstream.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes aboutImageDesktop {
          0% {
            opacity: 0;
            transform: translateX(-80px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes aboutTextDesktop {
          0% {
            opacity: 0;
            transform: translateX(80px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes aboutImageMobile {
          0% {
            opacity: 0;
            transform: translateY(-80px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes aboutTextMobile {
          0% {
            opacity: 0;
            transform: translateY(80px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-image-slide {
          animation: aboutImageMobile 1.2s ease-out both;
        }

        .about-text-slide {
          animation: aboutTextMobile 1.2s ease-out both;
        }

        @media (min-width: 1024px) {
          .about-image-slide {
            animation: aboutImageDesktop 1.2s ease-out both;
          }

          .about-text-slide {
            animation: aboutTextDesktop 1.2s ease-out both;
          }
        }
      `}</style>
    </section>
  );
};

export default About;