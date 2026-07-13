"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Variant {
  name: string;          // e.g., "Small Jar", "Large Jar"
  price: number;         // Base price for this specific variant
  discountPrice?: number; // Optional promo price for this variant
}

interface Product {
  id: number;
  title: string;
  description: string;
  sinhalaDesc?: string;
  images: string[];
  badge?: string;
  variants: Variant[];   // Multi-variant structure supporting unique prices
}

const HARDCODED_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Arrow Foods Chicken Sambol",
    description: "Our signature blend combining intense spice, robust savory chicken notes, and rich traditional culinary heritage.",
    sinhalaDesc: "රසවත් බව, සැර රසය සහ ගෙදර හැදූ රසය එකට එක් කරමින් සකස් කළ අපේ විශේෂ Chicken Sambol.",
    images: [
      "/products/chicken-sambol.jpg",
      "/products/chicken-sambol-2.jpg",
      "/products/chicken-sambol-3.jpg"
    ],
    badge: "Signature Mix",
    variants: [
      { name: "Small Pack", price: 550 },
      { name: "Large Pack", price: 950, discountPrice: 850 }
    ]
  },
  {
    id: 2,
    title: "Premium Homemade Kiri Toffee",
    description: "Rich, creamy, and melts in your mouth. Made with 100% real milk without synthetic preservatives or artificial flavors. Cash on Delivery available. Free delivery around Kalutara area!",
    sinhalaDesc: "නැවුම් කිරි රසයෙන් යුත්, කෘත්‍රීම රසකාරක හෝ කල් තබාගැනීමේ ද්‍රව්‍ය කිසිත් අඩංගු නොවන රසවත් කිරි ටොෆී. පළවෙනි එක රස බැලුවොත් දෙවෙනි එකත් රස බලනවා ෂුවර්! (කළුතර අවට බෙදාහැරීම නොමිලේ)",
    images: ["/products/kiri-toffee.jpg"],
    badge: "New Arrival",
    variants: [
      { name: "Small Pack", price: 450 },
      { name: "Large Pack", price: 850 }
    ]
  },
  {
    id: 3,
    title: "Arrow Foods Fish Ambulthiyal",
description: "Experience the authentic, time-honored taste of Matara. Prepared using premium local souring agents and heavy spices for an unforgettable profile perfect for your rice table.",
    sinhalaDesc: "සාම්ප්‍රදායික මාතර රසය... අදම ඔබේ මේසයට! ඇඹුල් රසයත්, කුළුබඩුවල සුවඳත් එක්ක සම්ප්‍රදායික රසයෙන් සකස් කළ Arrow Food Fish Ambulthiyal බත් පිඟානකට අමතක නොවන රසයක්!",
    images: ["/products/fish-ambulthiyal.jpg"],
    badge: "Traditional Choice",
    variants: [
      { name: "500g", price: 1750 },
      { name: "1Kg", price: 3200 }
    ]
  }
];

export default function Products() {
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; title: string; image: string }>({
    isOpen: false,
    title: '',
    image: ''
  });

  return (
    <section id="products" className="py-32 bg-[#FAF8F5] border-y border-[#EFEBE9]/60 scroll-mt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#F5F2EB_1px,transparent_1px)] bg-[size:6rem] [mask-image:linear-gradient(to_bottom,#FAF8F5,transparent_80%)] pointer-events-none -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-[#EFEBE9] gap-6"
        >
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8D6E63]" />
              <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-[#8D6E63] block">
                Our Collection
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-black text-[#3E2723] tracking-tight">
              Explore Wholesome Goodness
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6D4C41] max-w-xs font-light leading-relaxed">
            Freshly packed in micro-batches and ready for dispatch. Experience clean culinary heritage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {HARDCODED_PRODUCTS.map((product, index) => (
            <ProductCard 
              key={product.id}
              product={product}
              index={index}
              onImageClick={(img) => setLightbox({ isOpen: true, title: product.title, image: img })}
            />
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox({ isOpen: false, title: '', image: '' })}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#3E2723]/90 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 bg-[#FAF8F5] shadow-2xl cursor-default"
            >
              <Image 
                src={lightbox.image} 
                alt={lightbox.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-8 pt-20">
                <span className="text-[10px] text-white/60 font-mono tracking-widest uppercase">Full View Workspace</span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">{lightbox.title}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ==========================================================================
   Sub-Component: Isolated Product Card to Safely Manage Variant States
   ========================================================================== */
function ProductCard({ 
  product, 
  index, 
  onImageClick 
}: { 
  product: Product; 
  index: number; 
  onImageClick: (img: string) => void; 
}) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const currentVariant = product.variants[selectedVariantIndex];
  const hasDiscount = !!currentVariant.discountPrice;

  // Handles contextual WhatsApp text cleanly based on selection
  const orderText = `Hi, I'm interested in ordering ${product.title} (${currentVariant.name})`;
  const whatsappUrl = `https://wa.me/94703872325?text=${encodeURIComponent(orderText)}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="bg-white rounded-[2.5rem] overflow-hidden border border-[#EFEBE9] group shadow-[0_4px_20px_rgba(62,39,35,0.01)] hover:shadow-[0_24px_50px_rgba(62,39,35,0.06)] hover:border-[#D7CCC8] transition-all duration-500 flex flex-col h-full"
    >
      <ProductCardGallery 
        images={product.images} 
        title={product.title} 
        badge={product.badge} 
        onImageClick={onImageClick}
      />

      <div className="p-8 pt-6 flex flex-col flex-grow justify-between space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-[#3E2723] group-hover:text-[#8D6E63] transition-colors duration-300 tracking-tight">
              {product.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#6D4C41] leading-relaxed font-light">
              {product.description}
            </p>
            {product.sinhalaDesc && (
              <p className="text-xs sm:text-[13px] text-[#8D6E63] font-medium leading-relaxed border-l-2 border-[#D7CCC8] pl-3 py-0.5 mt-2">
                {product.sinhalaDesc}
              </p>
            )}
          </div>

          <div className="space-y-2 pt-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#A1887F] block">Select Size / Variant:</span>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((variant, idx) => (
                <button
                  key={variant.name}
                  onClick={() => setSelectedVariantIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 border ${
                    idx === selectedVariantIndex
                      ? 'bg-[#3E2723] border-[#3E2723] text-[#FAF8F5] shadow-sm'
                      : 'bg-[#FAF8F5] border-[#EFEBE9] text-[#5D4037] hover:border-[#D7CCC8]'
                  }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-5 border-t border-[#FAF8F5] flex items-center justify-between gap-4">
          <div className="flex flex-col min-h-[44px] justify-center">
            {hasDiscount ? (
              <>
                <span className="text-[10px] text-[#A1887F] line-through tracking-wider">
                  LKR {currentVariant.price.toFixed(2)}
                </span>
                <span className="text-xl font-bold text-[#8D6E63] tracking-tight">
                  LKR {currentVariant.discountPrice?.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-[#3E2723] tracking-tight">
                LKR {currentVariant.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#FAF8F5] border border-[#D7CCC8] text-[#5D4037] px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#3E2723] hover:border-[#3E2723] hover:text-[#FAF8F5] transition-all duration-300 shadow-sm"
          >
            Buy Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   Sub-Component: Product Card Gallery Loop
   ========================================================================== */
function ProductCardGallery({ 
  images, 
  title, 
  badge, 
  onImageClick 
}: { 
  images: string[]; 
  title: string; 
  badge?: string; 
  onImageClick: (img: string) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5] p-3">
      <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden group/gallery">
        <div 
          onClick={() => onImageClick(images[activeIndex])}
          className="relative w-full h-full cursor-zoom-in overflow-hidden"
        >
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full relative"
          >
            <Image 
              src={images[activeIndex]} 
              alt={`${title} view ${activeIndex + 1}`}
              fill
              sizes="(max-w-768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 pointer-events-none" />

        {badge && (
          <span className="absolute top-4 left-4 z-10 bg-[#3E2723]/90 backdrop-blur-md text-[#FAF8F5] text-[9px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-lg border border-white/10 shadow-sm pointer-events-none">
            {badge}
          </span>
        )}

        {images.length > 1 && (
          <>
            <button 
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center border border-[#EFEBE9] text-[#3E2723] opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 hover:bg-white shadow-sm z-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center border border-[#EFEBE9] text-[#3E2723] opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 hover:bg-white shadow-sm z-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-4 inset-x-0 flex justify-center gap-1.5 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}