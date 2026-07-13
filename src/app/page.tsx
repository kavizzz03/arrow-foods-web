import Image from "next/image";
import Header from "../components/Header";
import About from "../components/About";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FoodEstablishment",
      "name": "Arrow Foods",
      "image": "https://arrowfoods.lk/.hero-food.jpg", // Change to a valid asset path
      "description": "The best homemade traditional foods in Kalutara, Sri Lanka. Famous for Chicken Sambol, Fish Ambulthiyal, and Kiri Toffee.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kalutara",
        "addressCountry": "LK"
      },
      "url": "https://arrowfoods.lk",
      "servesCuisine": "Sri Lankan Traditional"
    })
  }}
/>
export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3E2723] selection:bg-[#3E2723] selection:text-[#FAF8F5] antialiased scroll-smooth">
      <Header />
      
      <main className="relative overflow-hidden">
        {/* Elite Immersive Visual Hero Workspace */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-6 lg:px-12 py-20 bg-gradient-to-b from-[#F2ECE4] via-[#FAF8F5] to-transparent">
          
          {/* Subtle Dynamic Ambient Lighting Blur */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(141,110,99,0.12),transparent_70%)] rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
            <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(215,204,200,0.3),transparent_70%)] rounded-full blur-3xl animate-[pulse_12s_ease-in-out_infinite_2s]" />
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
            
            {/* Left Column: Typographic Presentation Workspace */}
            <div className="lg:col-span-7 space-y-8 text-left">
             

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#3E2723] leading-[1.05] animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
                Taste The Pure <br />
                <span className="text-[#8D6E63] font-normal italic font-serif relative">
                  Tradition
                </span> <br className="hidden md:block"/>
                of Home.
              </h1>

              <p className="text-base sm:text-lg text-[#5D4037]/90 max-w-xl leading-relaxed font-light animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
                Carefully curated homemade options freshly prepared right in the heart of Kalutara with completely natural, organic ingredients. No compromises, no artificial additives.
              </p>

              {/* Action Anchors */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
                <a 
                  href="#products" 
                  className="w-full sm:w-auto bg-[#3E2723] text-[#FAF8F5] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-center hover:bg-[#5D4037] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Explore Showcase
                </a>
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto bg-white border border-[#D7CCC8] text-[#3E2723] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-center hover:bg-[#FAF8F5] hover:border-[#5D4037] transition-all duration-300 shadow-sm"
                >
                  Contact Kitchen
                </a>
              </div>
            </div>

            {/* Right Column: Modern Image Composition Card Showcase */}
            <div className="lg:col-span-5 relative flex items-center justify-center animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
              <div className="relative w-full max-w-md aspect-[4/5] bg-[#3E2723] rounded-[3rem] p-4 shadow-2xl overflow-hidden border border-[#5D4037]/20 group hover:scale-[1.01] transition-transform duration-500">
                
                {/* Immersive Image Layer with Local Optimization */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/hero-food.jpg"
                    alt="Premium Traditional Spices and Herbs Craft"
                    fill
                    priority
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.75] contrast-[1.05]"
                  />
                  {/* Premium Vignette & Color Grading Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723] via-transparent to-black/30 opacity-80" />
                </div>

                {/* Relative Content Mask Over Image Base */}
                <div className="relative z-10 h-full flex flex-col justify-between p-4">
                  
                  {/* Top Badge Meta */}
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[9px] text-[#D7CCC8] tracking-widest uppercase bg-[#3E2723]/60 backdrop-blur-md px-2.5 py-1 rounded-md">
                      ORIGIN // KALUTARA
                    </span>
                    <div className="px-2.5 py-1 bg-amber-500 text-[#3E2723] rounded-md text-[9px] font-mono font-bold uppercase tracking-wider">
                      100% Organic
                    </div>
                  </div>

                  {/* Central Typography Accent Frame */}
                  <div className="text-center py-6 border-y border-white/10 backdrop-blur-[2px] bg-black/10 rounded-2xl my-auto">
                    <span className="font-serif italic text-3xl text-[#FAF8F5] block mb-1 drop-shadow-md">
                      Arrow Foods
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#D7CCC8] drop-shadow-sm">
                      Pure Sri Lankan Heritage
                    </span>
                  </div>

                  {/* Bottom Operational Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-left">
                    <div>
                      <span className="block text-[8px] text-[#D7CCC8] uppercase tracking-wider font-semibold">Production</span>
                      <span className="text-xs text-[#FAF8F5] font-medium tracking-wide">Small Batches</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[8px] text-[#D7CCC8] uppercase tracking-wider font-semibold">Dispatch status</span>
                      <span className="text-xs text-amber-400 font-mono font-bold animate-pulse">Freshly Packed</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
        

        {/* Dynamic Structural Segment Compositions */}
        <div className="space-y-6">
          <About />
          <Products />
          <Contact />
        </div>
      </main>

      <Footer />

      {/* Floating Interactive Premium WhatsApp Trigger */}
      <div className="fixed bottom-6 right-6 z-50 group opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
        <span className="absolute inset-0 rounded-full bg-emerald-500/20 scale-110 animate-ping" />
        <a 
          href="https://wa.me/94703872325"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat via WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 bg-emerald-600 text-white rounded-full shadow-2xl hover:bg-emerald-500 transition-all duration-300 hover:scale-105 hover:rotate-6"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.022 0C5.373 0 .003 5.37.057 12c.001 2.097.548 4.142 1.588 5.946L0 24l6.335-1.662c1.78.952 3.74 1.45 5.741 1.452 6.654 0 12.024-5.367 12.03-12.022.002-3.236-1.249-6.277-3.522-8.566C18.266 1.277 15.24.012 12.022 0zm-.002.889c2.688 0 5.158 1.019 7.056 2.879 1.854 1.857 2.874 4.328 2.872 6.958-.003 5.433-4.409 9.849-9.828 9.849-2.103-.001-3.753-.523-5.428-1.518l-3.912 1.027 1.047-3.825c-1.046-1.782-1.596-3.837-1.595-5.952.003-5.434 4.409-9.851 9.833-9.851zm5.63 13.971c-.303-.151-1.793-.884-2.073-.985-.28-.102-.484-.153-.688.152-.204.305-.79.985-.969 1.188-.178.203-.357.229-.66.077-1.464-.73-2.454-1.282-3.428-2.95-.255-.438.255-.407.731-1.359.077-.152.038-.285-.019-.386-.057-.102-.484-1.168-.663-1.6-.175-.421-.368-.363-.504-.37l-.429-.008c-.149 0-.393.056-.599.28-.206.225-.785.767-.785 1.871s.804 2.167.916 2.318c.112.152 1.581 2.415 3.83 3.387.535.231.952.369 1.278.473.538.171 1.027.147 1.414.09.431-.064 1.32-.54 1.506-1.061.185-.521.185-.968.13-1.061-.056-.093-.205-.143-.508-.294z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}