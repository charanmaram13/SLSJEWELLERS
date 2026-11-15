import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, ChevronRight, Gem } from 'lucide-react';
import { BRAND_INFO } from '../data/jewellery';
import { IMAGES } from '../data/images';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  const showcasePieces = [
    {
      title: "Royal Peacock Haram",
      category: "22K Traditional Haram",
      image: IMAGES.runway[0].image,
      tag: "Heritage Masterpiece",
      detail: "Intricate Nakshi Filigree"
    },
    {
      title: "Devi Temple Choker",
      category: "Bridal Jewellery",
      image: IMAGES.runway[1].image,
      tag: "Imperial Bridal",
      detail: "Custom Collar Fitting"
    },
    {
      title: "Vajra Interlock Chain",
      category: "Pure Gold Chains",
      image: IMAGES.runway[3].image,
      tag: "Everyday Grandeur",
      detail: "Hand-Interlocked Links"
    },
    {
      title: "Aura Royale Jhumkas",
      category: "Artisan Earrings",
      image: IMAGES.runway[2].image,
      tag: "Festive Splendor",
      detail: "Micro-Beaded Drop"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Auto-rotate showcase pieces every 4.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcasePieces.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [showcasePieces.length]);

  // Subtle 3D mouse perspective tilt
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:py-32 overflow-hidden bg-gradient-to-b from-[#1C120C] via-[#2B1D15] to-[#2B1D15]"
    >
      {/* Floating Gold Particles */}
      <ParticlesBackground className="absolute inset-0 z-0 pointer-events-none opacity-75" />

      {/* Atmospheric Radial Light Beams */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-gold-champagne/10 via-gold-warm/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold-dark/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left space-y-6 md:space-y-8"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-gold-champagne/30 bg-chocolate-900/60 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-champagne animate-ping" />
              <span className="font-sans text-xs tracking-[0.25em] text-gold-champagne uppercase font-medium">
                THE ART OF FINE JEWELLERY
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-light tracking-tight leading-[1.1] text-ivory">
              Where Elegance <br />
              <span className="text-gold-gradient font-normal italic">
                Becomes Eternal.
              </span>
            </h1>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-ivory/80 font-light leading-relaxed max-w-xl">
              Discover timeless jewellery crafted with passion, precision and an uncompromising eye for detail.
            </p>

            {/* Location & Purity Badge */}
            <div className="flex flex-wrap items-center gap-4 text-xs tracking-wider text-ivory/70 pt-1">
              <div className="flex items-center gap-1.5 text-gold-champagne">
                <Gem className="w-4 h-4 text-gold-warm" />
                <span className="uppercase">Direct Manufacturer</span>
              </div>
              <span className="text-gold-champagne/40">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-ivory/90 uppercase">Sharraf Bazar, Tenali</span>
              </div>
              <span className="text-gold-champagne/40">•</span>
              <div className="flex items-center gap-1.5 text-gold-champagne">
                <ShieldCheck className="w-4 h-4 text-gold-warm" />
                <span className="uppercase">22K Gold Standard</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => scrollTo('collections')}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-chocolate bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-dark hover:shadow-[0_0_25px_rgba(220,194,143,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4 text-chocolate transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('craftsmanship')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-ivory border border-gold-champagne/40 hover:bg-gold-champagne/10 hover:border-gold-champagne transition-all duration-300"
              >
                <span>Discover Our Craft</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Immersive 3D Rotating Jewellery Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative perspective-1000 flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Outer Halo Rings */}
            <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-gold-champagne/20 border-dashed animate-spin-slow pointer-events-none" />
            <div className="absolute w-[380px] h-[380px] sm:w-[470px] sm:h-[470px] rounded-full border border-gold-warm/15 pointer-events-none" />

            {/* 3D Tilted Card Container */}
            <div
              className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5] rounded-3xl p-3 transform-style-3d transition-transform duration-200 ease-out shadow-[0_25px_60px_rgba(28,18,12,0.95)]"
              style={{
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                background: 'linear-gradient(145deg, rgba(58, 40, 29, 0.8), rgba(35, 22, 15, 0.95))',
                border: '1px solid rgba(220, 194, 143, 0.3)'
              }}
            >
              {/* Gold Corner Accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-champagne pointer-events-none" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-champagne pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-champagne pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-champagne pointer-events-none" />

              {/* Image Frame with Dramatic Lighting */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-chocolate-950 group">
                <img
                  key={activeIndex}
                  src={showcasePieces[activeIndex].image}
                  alt={showcasePieces[activeIndex].title}
                  className="w-full h-full object-cover object-center transition-all duration-1000 ease-out transform group-hover:scale-105"
                  loading="eager"
                />

                {/* Ambient vignette and gold lighting overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950 via-chocolate-950/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-champagne/15 via-transparent to-transparent pointer-events-none" />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium bg-chocolate-900/90 text-gold-champagne border border-gold-champagne/30 backdrop-blur-md">
                    {showcasePieces[activeIndex].tag}
                  </span>
                </div>

                {/* Floating Info Overlay on Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-left">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold-champagne/80 font-sans block mb-1">
                    {showcasePieces[activeIndex].category}
                  </span>
                  <h3 className="font-serif-luxury text-2xl font-normal text-ivory leading-tight mb-1">
                    {showcasePieces[activeIndex].title}
                  </h3>
                  <p className="font-sans text-xs text-ivory/70">
                    {showcasePieces[activeIndex].detail}
                  </p>

                  {/* Carousel Selection Indicators */}
                  <div className="flex items-center gap-2 pt-4">
                    {showcasePieces.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          i === activeIndex
                            ? 'w-7 bg-gold-champagne'
                            : 'w-2 bg-ivory/20 hover:bg-ivory/40'
                        }`}
                        aria-label={`Showpiece ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
