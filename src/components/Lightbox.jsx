import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MessageCircle, Gem, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../data/jewellery';
import { getPublicImageUrl } from '../utils/whatsapp';

export default function Lightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while lightbox is active
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  const photoUrl = getPublicImageUrl(item.image);
  const whatsappInquireUrl = `https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent(
    `Hello SLS JEWELLERS, I am interested in inquiring about this piece from your Gallery: ${item.title} (${item.category} - ${item.specs}).\n\n📸 Photo: ${photoUrl}`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 max-w-5xl w-full rounded-3xl overflow-hidden bg-chocolate-950 border border-gold-champagne/40 shadow-[0_25px_70px_rgba(0,0,0,0.9)] flex flex-col lg:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-chocolate-900/80 border border-gold-champagne/40 text-gold-champagne hover:text-ivory hover:bg-gold-champagne hover:text-chocolate transition-all flex items-center justify-center"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left/Main Image Display with Navigation Arrows */}
          <div className="relative flex-1 bg-chocolate-950 flex items-center justify-center min-h-[300px] sm:min-h-[420px] lg:min-h-[520px] overflow-hidden group">
            <img
              key={item.id}
              src={item.image}
              alt={item.alt}
              className="max-h-[75vh] w-full object-contain p-2 sm:p-4"
            />

            {/* Prev Image Control */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass-luxury border border-gold-champagne/40 text-gold-champagne hover:bg-gold-champagne hover:text-chocolate transition-all flex items-center justify-center shadow-lg"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Image Control */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass-luxury border border-gold-champagne/40 text-gold-champagne hover:bg-gold-champagne hover:text-chocolate transition-all flex items-center justify-center shadow-lg"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Right Information & Action Panel */}
          <div className="w-full lg:w-80 p-6 sm:p-8 flex flex-col justify-between bg-chocolate-900/90 border-t lg:border-t-0 lg:border-l border-gold-champagne/20 text-left space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-chocolate-950 text-gold-champagne border border-gold-champagne/30">
                  {item.category}
                </span>
                <span className="text-xs text-gold-champagne/60">•</span>
                <span className="text-[11px] text-ivory/60 tracking-wider">
                  {item.tag}
                </span>
              </div>

              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-ivory leading-tight">
                {item.title}
              </h3>

              <div className="mt-4 pt-4 border-t border-gold-champagne/15 space-y-2">
                <div className="text-xs text-ivory/80 flex items-center gap-2">
                  <Gem className="w-3.5 h-3.5 text-gold-warm" />
                  <span>{item.specs}</span>
                </div>
                <div className="text-xs text-ivory/60 leading-relaxed">
                  Crafted by master goldsmiths at SLS JEWELLERS in Sharraf Bazar, Tenali. Custom gram variations available.
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-gold-champagne/15">
              <a
                href={whatsappInquireUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-full text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-dark text-chocolate hover:shadow-[0_0_20px_rgba(220,194,143,0.4)] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire On WhatsApp</span>
              </a>

              <p className="text-center text-[10px] text-ivory/50 uppercase tracking-widest">
                Direct Manufacturer Consultation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
