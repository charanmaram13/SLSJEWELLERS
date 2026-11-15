import React from 'react';
import { motion } from 'framer-motion';
import { COLLECTIONS, BRAND_INFO } from '../data/jewellery';
import CollectionCard from '../components/CollectionCard';
import { Sparkles, MessageCircle } from 'lucide-react';

export default function Collections() {
  return (
    <section id="collections" className="py-24 md:py-32 bg-chocolate-950 relative overflow-hidden">
      {/* Ambient Gold Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-champagne/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-warm/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-champagne/30 bg-chocolate-900/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-warm" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold-champagne font-medium">
              SIGNATURE CURATIONS
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight">
            Jewellery <span className="italic text-gold-gradient font-normal">Collections</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory/70 font-light max-w-xl mx-auto mt-4 leading-relaxed">
            From imperial muhurtham harams to sleek diamond-cut chains, explore master creations crafted for weddings, families, and discerning retailers.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-champagne to-transparent mx-auto mt-6" />
        </div>

        {/* 6 Core Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS.map((col, idx) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <CollectionCard collection={col} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Bespoke Order Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-chocolate-900 via-chocolate-800 to-chocolate-900 border border-gold-champagne/30 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left space-y-1">
            <h3 className="font-serif-luxury text-2xl font-normal text-ivory">
              Need a Custom Weight or Bespoke Design?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-ivory/70 font-light">
              We manufacture customized bridal harams, chains, and wedding sets tailored to your gram weight and design specifications.
            </p>
          </div>

          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold text-chocolate bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-dark hover:shadow-[0_0_20px_rgba(220,194,143,0.4)] transition-all"
          >
            <MessageCircle className="w-4 h-4 text-chocolate" />
            <span>Consult Manufacturer</span>
          </a>
        </div>

      </div>
    </section>
  );
}
