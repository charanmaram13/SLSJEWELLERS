import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../data/images';
import Lightbox from './Lightbox';
import { Sparkles, Maximize2, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/jewellery';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Necklaces', 'Harams', 'Chains', 'Earrings', 'Bridal'];

  const filteredItems = activeFilter === 'All'
    ? IMAGES.gallery
    : IMAGES.gallery.filter((item) => item.category === activeFilter);

  const handleOpenLightbox = (item) => {
    const idx = filteredItems.findIndex((it) => it.id === item.id);
    setLightboxIndex(idx !== -1 ? idx : 0);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-chocolate-950 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold-champagne/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-warm/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-champagne/30 bg-chocolate-900/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-warm" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold-champagne font-medium">
              CURATED ARCHIVE
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight">
            Editorial <span className="italic text-gold-gradient font-normal">Gallery</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory/70 font-light max-w-xl mx-auto mt-4 leading-relaxed">
            Explore our curated portfolio of heirloom jewellery. Select any image to view in high resolution or enquire directly.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-champagne to-transparent mx-auto mt-6" />
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((cat) => {
            const isSelected = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                  isSelected
                    ? 'bg-gold-metallic text-chocolate shadow-[0_0_15px_rgba(220,194,143,0.35)] scale-105'
                    : 'bg-chocolate-900/60 text-ivory/70 border border-gold-champagne/20 hover:border-gold-champagne/50 hover:text-gold-champagne'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry / Editorial Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => handleOpenLightbox(item)}
                className="group relative rounded-2xl overflow-hidden bg-chocolate-900/60 border border-gold-champagne/20 hover:border-gold-champagne/60 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/5]"
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Ambient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950 via-chocolate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Corner Category Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-chocolate-950/80 text-gold-champagne border border-gold-champagne/30 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* Expand / View Icon on Hover */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-chocolate-950/80 border border-gold-champagne/30 text-gold-champagne flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-left transition-transform duration-300 transform group-hover:-translate-y-1">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-gold-champagne/75 font-sans block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="font-serif-luxury text-2xl font-normal text-ivory group-hover:text-gold-champagne transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-ivory/60 mt-1">
                    {item.specs}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-gold-champagne font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Click to view in lightbox</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          item={filteredItems[lightboxIndex]}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
