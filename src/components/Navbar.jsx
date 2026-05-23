import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'py-4 bg-tems-cream/95 backdrop-blur-md shadow-sm' : 'py-8 bg-tems-cream'
    } px-6 md:px-16`}>
      <div className="max-w-[1800px] mx-auto flex items-center justify-between relative">
        
        {/* LEFT SECTION: Desktop Links & Mobile Logo Image */}
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-12">
            <a href="#songs" className="flex items-center gap-3 text-tems-brown text-[11px] font-bold tracking-[0.03em] hover:text-tems-orange transition-colors duration-300">
              <span className="font-sans text-brand-dark/80 w-1.5 h-1.5 bg-tems-brown rounded-full"></span>
              Songs
            </a>
            <a href="#tour" className="flex items-center gap-3 text-tems-brown text-[11px] font-bold tracking-[0.03em] hover:text-tems-orange transition-colors duration-300">
              <span className="font-sans text-brand-dark/80 w-1.5 h-1.5 bg-tems-brown rounded-full"></span>
              Tour
            </a>
          </div>
          
          {/* MOBILE LOGO (Replaces the 'Tems' text) */}
          <div className="md:hidden">
            <a href="/">
              <img 
                src="/Temslogo.png" 
                alt="TEMS Logo" 
                className="h-7 w-auto object-contain" 
              />
            </a>
          </div>
        </div>

        {/* CENTER LOGO: Hidden on Mobile, Visible on Desktop */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
          <a href="/">
            <img 
              src="/Temslogo.png" 
              alt="TEMS Logo" 
              className="h-12 w-auto object-contain transition-transform hover:scale-105" 
            />
          </a>
        </div>

        {/* RIGHT SECTION: Merch & Action Button */}
        <div className="flex items-center gap-6 md:gap-12">
          <a href="https://www.amazon.com/stores/TEMS/page/12191104-3E04-4AA5-A248-41B6E7FF0BD0?ref_=cm_sw_r_mwn_sf_stores_6GCFB4Y8Q3YK54NK6QXT" className="hidden md:flex items-center gap-3 text-tems-brown text-[11px] font-bold tracking-[0.03em] hover:text-tems-orange transition-colors duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="font-sans text-brand-dark/80 w-1.5 h-1.5 bg-tems-brown rounded-full"></span>
            Merch
          </a>
          
          <a 
            href="https://spotlight.leadingvibe.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleARTnHZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacCqlVQJoj60Jn4bgRGSkGMLDI0g5dbgS6nyFkX5KW7bbGBHfgrQy8EYTBHvA_aem_HlGldblPZtHfpp6Awdf7kw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-tems-green text-tems-cream px-6 py-2.5 md:px-9 md:py-3.5 rounded-full text-[10px] md:text-[11px] font-medium tracking-[0.1em] font-sans text-brand-dark/80 shadow-lg hover:bg-tems-orange transition-all duration-300 active:scale-95 text-center"
          >
            Stream What You Need
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-tems-brown p-1"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY (Now with fully matching hover styles) */}
      <div className={`fixed inset-0 w-full h-screen bg-tems-cream transition-all duration-700 ease-in-out flex flex-col items-center justify-center gap-10 md:hidden z-[110] ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-tems-brown">
          <X size={32} />
        </button>
        
        <a href="#songs" onClick={() => setIsOpen(false)} className="text-4xl font-playfair italic text-tems-brown hover:text-tems-orange transition-colors duration-300 hover:italic">Songs</a>
        <a href="#tour" onClick={() => setIsOpen(false)} className="text-4xl font-playfair italic text-tems-brown hover:text-tems-orange transition-colors duration-300">Tour</a>
        <a href="#merch" onClick={() => setIsOpen(false)} className="text-4xl font-playfair italic text-tems-brown hover:text-tems-orange transition-colors duration-300">Merch</a>
        
        <div className="mt-20">
            <img src="/Temslogo.png" alt="TEMS" className="h-12 opacity-95 grayscale" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;