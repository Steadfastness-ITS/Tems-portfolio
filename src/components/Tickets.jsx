import React from 'react';

const Tickets = () => {
  const tourDates = [
    {
      month: "Apr",
      day: "4",
      location: "Sunrise",
      lineup: "Chris Brown, Plies, Monica, Trick Daddy, Rob 49, Tems, Sexyy, Boss Man Dlow, Loe Shimmy.",
      time: "3:30am"
    },
    {
      month: "Aug",
      day: "21",
      location: "London",
      lineup: "Jorja Smith, Tems, Kwn, Ayra Starr, Odeal.",
      time: "2:00pm"
    },
    {
      month: "Aug",
      day: "29",
      location: "Bristol",
      lineup: "FORWARDS Bristol - Saturday Tickets",
      time: "12:00pm"
    },
    {
      month: "Aug",
      day: "30",
      location: "Bristol",
      lineup: "Tems, Self Esteem, Wet Leg, Little Simz, Amylz And The Sniffers, ...",
      time: "11:59pm"
    }
  ];

  return (
    <section className="w-full min-h-screen bg-tems-cream py-24 md:py-40 px-6 md:px-24 flex flex-col md:flex-row gap-16 md:gap-28 items-start justify-center overflow-hidden">
      
      {/* 1. LEFT SIDE: LIVE PERFORMANCE SHOT */}
      {/* Changed: Removed fixed h-[850px] and aspect ratio. Added md:self-stretch */}
      <div className="w-full md:w-1/2 md:self-stretch md:-mt-10 rounded-[10px] md:rounded-[20px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.08)] group">
        <img 
          src="/image 29.png" 
          alt="Tems Live" 
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
        />
      </div>

      {/* 2. RIGHT SIDE: HEADER & TOUR LIST */}
      <div className="w-full md:w-1/2 flex flex-col">
        {/* Massive Editorial Heading */}
        <h2 className="text-4xl md:text-[5rem] text-tems-brown mb-4 md:mb-6 leading-[0.8] tracking-tighter">
          Out in the Wild
        </h2>
        
        <p className="text-tems-brown/60 text-[15px] font-bold md:text-[13.5px] mb-10 max-w-sm leading-relaxed tracking-tight">
          Explore upcoming tour dates and step into the experience of a lifetime.
        </p>

        <button className="w-fit px-10 py-4 bg-[#C67E66] text-tems-cream rounded-full text-[8px] md:text-[10px] tracking-[0.2em] mb-16 shadow-lg hover:bg-[#b06d56] transition-all hover:scale-105 active:scale-95">
          View All Concerts Tickets
        </button>

        {/* TOUR LIST: Clean & Minimalist Rows */}
        <div className="flex flex-col gap-3 md:gap-4">
          {tourDates.map((tour, index) => (
            <div 
              key={index} 
              className="group flex items-center bg-[#F8F6F2] hover:bg-white p-4 md:p-5 rounded-[10px] md:rounded-[10px] transition-all cursor-pointer border border-tems-brown/5 hover:shadow-md"
            >
              {/* Refined Date Box */}
              <div className="bg-tems-brown text-tems-cream flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-[5px] mr-5 shrink-0">
                <span className="text-[9px] md:text-lg font-medium tracking-widest">{tour.month}</span>
                <span className="text-xl md:text-sm font-medium leading-none">{tour.day}</span>
              </div>

              {/* Info Container */}
              <div className="flex-1 flex items-center justify-between gap-5">
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-tems-brown text-[14px] md:text-[16px] tracking-tight">
                    {tour.location}
                  </h4>
                  <p className="text-[9px] md:text-[14px] text-tems-brown/40 max-w-[180px] md:max-w-[300px] leading-tight font-medium">
                    {tour.lineup}
                  </p>
                </div>
                
                {/* Time Tag */}
                <div className="bg-tems-brown/5 px-4 py-1.5 rounded-full shrink-0">
                  <span className="text-[9px] md:text-[12px] font-bold text-tems-brown/60 tracking-wider">
                    {tour.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tickets;