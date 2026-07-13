import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="bg-[#5D4037] text-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden border border-[#6D4C41]/30">
        
        {/* Advanced Ambient Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(215,204,200,0.15),transparent_60%)] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(141,110,99,0.2),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Presentation Workspace */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#4E342E] border border-[#6D4C41] px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#D7CCC8]">
                Open for Orders
              </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight">
              Fresh Batches <br />Are Waiting <br />
              <span className="text-[#D7CCC8] italic font-normal font-sans text-3xl md:text-4xl">For You.</span>
            </h2>
            
            <p className="text-[#D7CCC8]/80 max-w-sm text-sm leading-relaxed font-light">
              Have customized packaging requests or direct wholesale volume inquiries? Reach out across our official channels straight to our Kalutara production team.
            </p>
          </div>

          {/* Right Actionable Grid Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Facebook Messenger Action Card */}
            <a 
              href="https://m.me/61590906582232"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#4E342E] rounded-2xl hover:bg-[#3E2723] transition-all duration-300 border border-[#6D4C41] shadow-md hover:-translate-y-1 flex flex-col justify-between h-40 group"
            >
              <div className="flex justify-between items-start">
                <span className="text-[#D7CCC8] text-[10px] uppercase font-bold tracking-widest">Instant Chat</span>
                <div className="w-8 h-8 rounded-xl bg-[#5D4037] group-hover:bg-[#006AFF] flex items-center justify-center transition-all duration-300 text-white shadow-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.14 2 11.25c0 2.91 1.45 5.51 3.73 7.14v3.86c0 .41.44.66.78.43l4.33-2.82c.38.1.77.17 1.16.17 5.52 0 10-4.14 10-9.25S17.52 2 12 2zm1.14 11.83l-2.09-2.23-4.07 2.23 4.47-4.74 2.15 2.23 4.01-2.23-4.47 4.74z"/>
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-base font-bold tracking-wide mb-0.5">Facebook Messenger</div>
                <div className="text-xs text-[#D7CCC8]/70 font-light group-hover:text-white transition-colors">Tap to chat with us directly</div>
              </div>
            </a>

            {/* Direct Phone Option Card */}
            <a 
              href="tel:+94703872325"
              className="p-6 bg-[#4E342E] rounded-2xl hover:bg-[#3E2723] transition-all duration-300 border border-[#6D4C41] shadow-md hover:-translate-y-1 flex flex-col justify-between h-40 group"
            >
              <div className="flex justify-between items-start">
                <span className="text-[#D7CCC8] text-[10px] uppercase font-bold tracking-widest">Call Directly</span>
                <div className="w-8 h-8 rounded-xl bg-[#5D4037] group-hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 text-white shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.622c0-1.03.829-1.871 1.868-1.871h.519c.997 0 1.848.69 2.056 1.666l.723 3.41c.21.986-.307 1.962-1.22 2.39L6.5 13.5a10.516 10.516 0 004.5 4.5l1.412-1.412c.427-.428 1.404-.945 2.39-.723l3.411.723c.976.208 1.666 1.059 1.666 2.056v.518c0 1.03-.84 1.871-1.872 1.871h-.518a16.55 16.55 0 01-15.5-15.5v-.518z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-base font-mono font-bold tracking-wider mb-0.5">+94 70 387 2325</div>
                <div className="text-xs text-[#D7CCC8]/70 font-light group-hover:text-white transition-colors">Available daily for order updates</div>
              </div>
            </a>

            {/* Email Channels Card */}
            <a 
              href="mailto:arrowfoods.info@gmail.com"
              className="p-6 bg-[#4E342E] rounded-2xl hover:bg-[#3E2723] transition-all duration-300 border border-[#6D4C41] shadow-md hover:-translate-y-1 flex flex-col justify-between h-40 sm:col-span-2 group"
            >
              <div className="flex justify-between items-start">
                <span className="text-[#D7CCC8] text-[10px] uppercase font-bold tracking-widest">Corporate Inquiries</span>
                <div className="w-8 h-8 rounded-xl bg-[#5D4037] group-hover:bg-[#8D6E63] flex items-center justify-center transition-all duration-300 text-white shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold tracking-wide truncate mb-0.5">arrowfoods.info@gmail.com</div>
                <div className="text-xs text-[#D7CCC8]/70 font-light group-hover:text-white transition-colors">Best channel for official wholesale proposals</div>
              </div>
            </a>

            {/* Premium Location Information Footer Accent */}
            <div className="sm:col-span-2 flex items-center justify-between text-[11px] text-[#D7CCC8]/60 font-mono tracking-wider pt-2 border-t border-[#6D4C41]/40">
              <div>HQ BASE: KALUTARA, WESTERN PROVINCE, SL</div>
              <div>EST. 2026</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}