import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EFEBE9] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Panel: Brand, Socials & Quick Links Workspace */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#EFEBE9]/60">
          
          {/* Brand & Philosophy Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex flex-col group w-fit">
              <span className="font-serif text-xl font-bold tracking-wider text-[#3E2723]">
                ARROW <span className="text-[#8D6E63] font-normal italic">FOODS</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#A1887F] font-bold -mt-0.5">
                Pure & Traditional
              </span>
            </a>
            <p className="text-xs text-[#6D4C41] max-w-sm leading-relaxed font-light">
              Bringing authentic Sri Lankan traditional flavors from our kitchen in Kalutara right to your home, crafted entirely with clean, natural ingredients.
            </p>
            
            {/* Elegant Minimal Facebook Social Button */}
            <div className="pt-2">
              <a 
                href="https://www.facebook.com/profile.php?id=61590906582232" /* Replace with your exact Facebook page URL */
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#5D4037] hover:text-[#8D6E63] transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#F5F2EB] flex items-center justify-center group-hover:bg-[#5D4037] transition-all duration-300">
                  <svg 
                    className="w-4 h-4 text-[#5D4037] group-hover:text-white transition-colors duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.85z" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold tracking-widest text-[#5D4037] group-hover:text-[#8D6E63]">
                  Follow Our Journey
                </span>
              </a>
            </div>
          </div>

          {/* Quick Shortcuts Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#A1887F]">Explore</h4>
            <ul className="space-y-2 text-xs text-[#5D4037] font-medium">
              <li><a href="#about" className="hover:text-[#8D6E63] transition-colors duration-200">Our Story</a></li>
              <li><a href="#products" className="hover:text-[#8D6E63] transition-colors duration-200">Natural Menu</a></li>
              <li><a href="#contact" className="hover:text-[#8D6E63] transition-colors duration-200">Get In Touch</a></li>
            </ul>
          </div>

          {/* Direct Support Context Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#A1887F]">Production Base</h4>
            <p className="text-xs text-[#6D4C41] leading-relaxed font-light">
              Kalutara,<br />
              Western Province, Sri Lanka.
            </p>
            <p className="text-[11px] font-mono font-medium text-[#8D6E63] pt-1">
              Fresh Batches Dispatched Weekly
            </p>
          </div>

        </div>

        {/* Bottom Panel: Legal Copy & Designer Showcase */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#A1887F] font-medium">
          <div>
            &copy; {currentYear} <span className="text-[#5D4037] font-semibold">Arrow Foods</span>. All Rights Reserved.
          </div>
          
          {/* Vexel IT Premium Attribution Link */}
          <div className="flex items-center space-x-1 bg-[#F5F2EB] px-4 py-2 rounded-full border border-[#EFEBE9]/50 shadow-sm">
            <span className="font-light">Designed & Architected by</span>
            <a 
              href="https://www.vexelit.xyz" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3E2723] font-bold hover:text-[#8D6E63] tracking-wide transition-colors duration-200 ml-1"
            >
              Vexel IT by Kavizz
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}