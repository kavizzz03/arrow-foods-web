import React from 'react';

const taglines = [
  { 
    title: "Traditional Recipes", 
    desc: "Handed down through generations, preserving the authentic culinary heritage of Sri Lankan homes." 
  },
  { 
    title: "Natural Ingredients", 
    desc: "Strictly sourcing pure, unadulterated components completely free from artificial additives." 
  },
  { 
    title: "Home Made with Love", 
    desc: "Crafted carefully in small batches with meticulous attention to clean, wholesome quality." 
  },
  { 
    title: "Refreshingly Prepared", 
    desc: "Made fresh on demand to guarantee the peak of nutritional value and vibrant taste profiles." 
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Modern Premium Branding Context */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-[1px] bg-[#8D6E63]"></span>
            <span className="text-xs uppercase tracking-widest font-bold text-[#8D6E63] block">
              Our Philosophy
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-[#3E2723] leading-tight font-bold tracking-tight">
            Rooted in Taste, <br />
            <span className="text-[#8D6E63] italic font-normal">Crafted in Kalutara.</span>
          </h2>
          
          <p className="text-[#6D4C41] leading-relaxed text-base font-light">
            At Arrow Foods, we elegantly blend time-honored Sri Lankan traditions with uncompromised, modern cleanliness standards. Every item we mix reflects our core dedication to serving pure, wholesome flavors directly to your family table.
          </p>

          <div className="pt-4">
            <a 
              href="#products" 
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#5D4037] hover:text-[#8D6E63] transition-colors duration-200 group"
            >
              <span>View our natural collection</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: High-End Feature Grid Array */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {taglines.map((tag, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-white border border-[#EFEBE9] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between min-h-[180px]"
            >
              <div>
                {/* Micro-Interaction Number Badge */}
                <div className="w-8 h-8 rounded-full bg-[#F5F2EB] flex items-center justify-center text-xs font-mono font-bold text-[#8D6E63] mb-6 group-hover:bg-[#5D4037] group-hover:text-white transition-all duration-300">
                  0{idx + 1}
                </div>
                
                <h3 className="font-serif text-xl font-bold text-[#3E2723] mb-2 group-hover:text-[#8D6E63] transition-colors duration-200">
                  {tag.title}
                </h3>
                
                <p className="text-sm text-[#6D4C41] leading-relaxed font-light">
                  {tag.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}