import React from 'react';

const Footer = () => {
  const socials = [
    { 
      name: "X", 
      url: "https://x.com/temsbaby",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
        </svg>
      )
    },
    { 
      name: "TikTok", 
      url: "https://tiktok.com/@temsbaby",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      )
    },
    { 
      name: "Instagram", 
      url: "https://instagram.com/temsbaby",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    },
    { 
      name: "Facebook", 
      url: "https://facebook.com/temsbaby",
      icon: (
        <svg width="24" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
  ];

  return (
    <footer className="w-full bg-tems-cream py-10 px-6 md:px-20 border-t border-tems-brown/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* BOTTOM SECTION: Socials, Stacked Center (Logo/Credit/Copyright), and Legal Links */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-0">
          
          {/* Social Icons (Left) */}
          <div className="flex items-center gap-3">
            {socials.map((social, i) => (
              <a 
                key={i} 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-8 h-8 md:w-9 md:h-9 bg-tems-brown rounded-full flex items-center justify-center text-tems-cream cursor-pointer hover:scale-110 active:scale-95 transition-transform"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* CENTER GROUP: Logo, Credit, and Copyright all on one vertical axis */}
          <div className="flex flex-col items-center">
            <img 
              src="/Temslogo.png" 
              alt="Tems Logo" 
              className="w-10 md:w-12 mb-4 opacity-80"
            />
            <p className="text-tems-brown text-[10px] md:text-xs font-medium tracking-tight opacity-90 mb-8">
              Built by Steadfastness
            </p>
            <p className="text-[9px] md:text-[10px] text-tems-brown/60 font-medium tracking-[0.2em] text-center">
              @2026Leadingvibe / RCA records / Since '93
            </p>
          </div>

          {/* Legal Links (Right) */}
          <div className="flex items-center gap-4 md:gap-6 text-[9px] md:text-[10px] text-tems-brown/80 font-bold tracking-wider">
            <span className="cursor-pointer hover:text-tems-brown/50 transition-colors">Terms</span>
            <span className="w-px h-3 bg-tems-brown/10" />
            <span className="cursor-pointer hover:text-tems-brown/50 transition-colors">Privacy</span>
            <span className="w-px h-3 bg-tems-brown/10" />
            <span className="cursor-pointer hover:text-tems-brown/50 transition-colors">Cookie Choices</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;