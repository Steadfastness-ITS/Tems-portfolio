import React from 'react';

const Tickets = () => {

  return (
    <section className="relative w-full flex flex-col items-center justify-start py-1 md:py-30 px-6 md:px-6 overflow-hidden">
      
      {/* 1. LAYER 1: THE SUBJECT IMAGE (Tems Portrait)
          Positioned absolutely to sit *behind* the cards like the UI.
          It fades to black at the bottom to blend with the section.
      */}
      <div className="absolute inset-0 z-0 flex justify-center items-start overflow-hidden">
        <img 
          src="/Tic.png" /* Replace with your actual path for Tems portrait */
          alt="Tems Portrait" 
          className="absolute w-full md:w-auto max-w-[100%] md:max-w-[105%] h-auto md:h-[110%] block md:hidden md:-top-[8%] object-contain brightness-[1.0]"
        />
      </div>

      {/* 2. CONTENT WRAPPER (Sits on top of the portrait) */}
      <div className="relative z-10 w-full mt-10 md:mt-12 max-w-7xl flex flex-col items-center text-center">
        
        {/* Header Section: Typography Image
            Replacing the <h2> and <p> text tags with image_1.png
        */}
        <div className="mb-6 md:mb-10 flex justify-center">
          <img 
            src="/Tic-text.png" 
            alt="Out in the Wild - Tour Dates"
            className="w-[33vw] translate-y-8 md:w-auto max-w-[600px] h-auto object-contain"
          />
        </div>
        
        {/* Button remains as coded */}
        <a 
          href="https://open.spotify.com/playlist/6BuIokrjsUNFPH8siI2bCp?si=5V74L-q3QQS2hOvxMSGMSw" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block text-center px-1 py-1 md:px-8 md:py-3 mt-6 md:mt-0 bg-[#C67E66] text-white rounded-[10px] md:rounded-full text-[4px] md:text-[12px] tracking-widest mb-2 md:mb-10 hover:bg-[#b06d56] transition-all transform hover:scale-105 active:scale-95 shadow-lg"
        >
          View All Concerts Tickets
        </a>

        {/* 3. FLOATING TICKET CARDS: 
            Retaining the dark, staggered, semi-transparent look from image_0.png
        */}

<div className="w-full flex flex-col -mt-20 md:-mt-28 items-center md:items-start relative max-w-7xl mx-auto h-[312px] md:h-[850px]">
  
  {/* Card 1: Sunrise (4.png) - Top Right */}
  <div className="absolute right-[3%] top-[40%] md:right-[5%] md:top-[260px] z-10 hover:scale-105 transition-transform duration-500">
    <img 
      src="/4.png" 
      alt="Sunrise Tickets" 
      className="w-[155px] md:w-[550px] h-auto rounded-[8px] md:rounded-[15px] shadow-2xl"
    />
  </div>

  {/* Card 2: London (21.png) - After it at the Left */}
  <div className="absolute left-[3%] top-[46%] md:left-[5%] md:top-[330px] z-20 hover:scale-105 transition-transform duration-500">
    <img 
      src="/21.png" 
      alt="London Tickets" 
      className="w-[155px] md:w-[540px] h-auto rounded-[8px] shadow-2xl md:rounded-[15px]"
    />
  </div>

  {/* Card 3: Bristol Aug 29 (29.png) - After it at the Right */}
  <div className="absolute right-[3%] top-[62%] md:right-[5%] md:top-[520px] z-30 hover:scale-105 transition-transform duration-500">
    <img 
      src="/29.png" 
      alt="Bristol Tickets Aug 29" 
      className="w-[155px] md:w-[540px] h-auto rounded-[8px] md:rounded-[15px] shadow-2xl"
    />
  </div>

  {/* Card 4: Bristol Aug 30 (30.png) - Lastly at the Left */}
  <div className="absolute left-[3%] top-[68%] md:left-[5%] md:top-[590px] z-40 hover:scale-105 transition-transform duration-500">
    <img 
      src="/30.png" 
      alt="Bristol Tickets Aug 30" 
      className="w-[155px] md:w-[540px] h-auto rounded-[8px] md:rounded-[15px] shadow-2xl"
    />
  </div>

</div>
      </div>
    </section>
  );
};

export default Tickets;