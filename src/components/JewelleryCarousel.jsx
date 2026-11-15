import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MessageCircle, Sparkles, Gem, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../data/images';
import { BRAND_INFO } from '../data/jewellery';
import { getPublicImageUrl } from '../utils/whatsapp';

export default function JewelleryCarousel() {
  const items = IMAGES.runway;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef(null);

  const activeItem = items[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Drag & Swipe Handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    setDragOffset(currentX - startX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 45) {
      handlePrev();
    } else if (dragOffset < -45) {
      handleNext();
    }
    setDragOffset(0);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - startX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 50) {
      handlePrev();
    } else if (dragOffset < -50) {
      handleNext();
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  // Direct WhatsApp Enquiry URL with item context and photo preview
  const photoUrl = getPublicImageUrl(activeItem.image);
  const whatsappRunwayUrl = `https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent(
    `Hello SLS JEWELLERY WORKS, I am inquiring about the ${activeItem.title} (${activeItem.category}) from your Jewellery Runway.\n\n📸 Photo: ${photoUrl}`
  )}`;

  return (
    <section id="runway" className="py-24 md:py-32 bg-[#23160F] relative overflow-hidden select-none">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold-champagne/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-gold-champagne/5 pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-gold-warm/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-champagne/30 bg-chocolate-900/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-champagne" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold-champagne font-medium">
              SIGNATURE SHOWCASE
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight">
            Interactive Jewellery <span className="italic text-gold-gradient font-normal">Runway</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory/70 font-light max-w-xl mx-auto mt-4 leading-relaxed">
            Drag or swipe through our master-crafted pieces in a 3D cylindrical stage. Experience the majesty of Tenali craftsmanship.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-champagne to-transparent mx-auto mt-6" />
        </div>

        {/* 3D Runway Experience Grid: Carousel Viewport + Side Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 3D Cylindrical Runway Stage */}
          <div
            ref={containerRef}
            className="lg:col-span-7 relative h-[440px] sm:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden rounded-3xl bg-chocolate-950/60 border border-gold-champagne/20 p-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {/* Ambient Base Light Pedestal */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-72 h-16 bg-gradient-to-t from-gold-champagne/20 to-transparent rounded-full blur-xl pointer-events-none" />

            {/* 3D Items Layer */}
            <div className="relative w-full h-full flex items-center justify-center perspective-1000">
              {items.map((item, index) => {
                // Calculate circular offset relative to active item
                let offset = index - activeIndex;
                const total = items.length;
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const isActive = offset === 0;
                const isAdjacent = Math.abs(offset) === 1;
                const isVisible = Math.abs(offset) <= 2;

                if (!isVisible) return null;

                // 3D positioning calculations
                const translateX = offset * 140;
                const translateZ = -Math.abs(offset) * 110;
                const rotateY = offset * -25;
                const scale = isActive ? 1 : isAdjacent ? 0.8 : 0.65;
                const opacity = isActive ? 1 : isAdjacent ? 0.55 : 0.25;

                return (
                  <motion.div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    animate={{
                      x: translateX,
                      z: translateZ,
                      rotateY: rotateY,
                      scale: scale,
                      opacity: opacity,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 28,
                    }}
                    className={`absolute w-60 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-300 ${
                      isActive
                        ? 'z-30 ring-2 ring-gold-champagne shadow-[0_20px_50px_rgba(201,160,98,0.3)]'
                        : 'z-10'
                    }`}
                  >
                    <div className="relative w-full h-full bg-chocolate-900">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover object-center pointer-events-none"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/90 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Active Tag overlay */}
                      {isActive && (
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-widest font-semibold bg-gold-metallic text-chocolate shadow-md">
                            Active Showcase
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-3 left-3 right-3 text-left">
                        <span className="text-[10px] uppercase tracking-widest text-gold-champagne/80 font-sans block">
                          {item.category}
                        </span>
                        <h4 className="font-serif-luxury text-base text-ivory truncate">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Controls: Prev / Next Floating Arrows */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-40">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="pointer-events-auto w-11 h-11 rounded-full glass-luxury border border-gold-champagne/40 text-gold-champagne hover:bg-gold-champagne hover:text-chocolate transition-all flex items-center justify-center shadow-lg"
                aria-label="Previous Jewellery Piece"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="pointer-events-auto w-11 h-11 rounded-full glass-luxury border border-gold-champagne/40 text-gold-champagne hover:bg-gold-champagne hover:text-chocolate transition-all flex items-center justify-center shadow-lg"
                aria-label="Next Jewellery Piece"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Pagination Dots at Bottom of Carousel */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-40">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'w-6 bg-gold-champagne'
                      : 'w-1.5 bg-ivory/30 hover:bg-ivory/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Side Panel: Selected Jewellery Details & WhatsApp Action */}
          <div className="lg:col-span-5 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-10 rounded-3xl bg-chocolate-900/90 border border-gold-champagne/30 shadow-[0_20px_50px_rgba(28,18,12,0.8)] relative space-y-6"
              >
                {/* Header Tag & Purity */}
                <div className="flex items-center justify-between border-b border-gold-champagne/15 pb-4">
                  <div className="flex items-center gap-2 text-gold-champagne text-xs uppercase tracking-[0.2em] font-medium">
                    <Gem className="w-4 h-4 text-gold-warm" />
                    <span>{activeItem.category}</span>
                  </div>

                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-chocolate-950 text-gold-champagne border border-gold-champagne/30">
                    {activeItem.purity}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="font-serif-luxury text-3xl sm:text-4xl text-ivory font-normal leading-tight">
                    {activeItem.title}
                  </h3>
                  <p className="font-sans text-sm text-ivory/75 font-light leading-relaxed mt-4">
                    {activeItem.description}
                  </p>
                </div>

                {/* Specs / Highlights */}
                <div className="p-4 rounded-xl bg-chocolate-950/70 border border-gold-champagne/15 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-ivory/80">
                    <ShieldCheck className="w-4 h-4 text-gold-champagne shrink-0" />
                    <span>24 Karat Gold Sheeted Direct Manufacturer Craft</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ivory/80">
                    <Sparkles className="w-4 h-4 text-gold-champagne shrink-0" />
                    <span>Custom Weight & Dimension Scaling Available</span>
                  </div>
                </div>

                {/* Primary WhatsApp Action Button */}
                <div className="pt-2">
                  <a
                    href={whatsappRunwayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-chocolate bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-dark hover:shadow-[0_0_25px_rgba(220,194,143,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 text-chocolate" />
                    <span>WhatsApp Enquiry About This Piece</span>
                  </a>
                  <p className="text-center text-[10px] text-ivory/50 uppercase tracking-wider mt-2.5">
                    Connect directly with SLS JEWELLERY WORKS master workshop
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
