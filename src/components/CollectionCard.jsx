import React from 'react';
import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/jewellery';
import { useLanguage } from '../context/LanguageContext';

export default function CollectionCard({ collection }) {
  const { language } = useLanguage();

  const titleTeMap = {
    'Gold Necklaces': 'బంగారు నెక్లెస్‌లు',
    'Traditional Harams': 'సాంప్రదాయ హారాలు',
    'Gold Chains': 'బంగారు గొలుసులు',
    'Elegant Earrings': 'చెవి కమ్మలు & బుట్టలు',
    'Bridal Jewellery': 'పెళ్లి ఆభరణాల సెట్లు',
    'Exclusive Designs': 'ప్రత్యేక తయారీ డిజైన్లు'
  };

  const title = language === 'te' && titleTeMap[collection.title] ? titleTeMap[collection.title] : collection.title;

  const whatsappCollectionUrl = `https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent(
    `Hello SLS JEWELLERS, I am interested in viewing your ${collection.title} collection from your website.`
  )}`;

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-chocolate-900/80 border border-gold-champagne/20 hover:border-gold-champagne/60 transition-all duration-500 flex flex-col justify-between shadow-[0_15px_30px_rgba(28,18,12,0.6)] hover:shadow-[0_20px_45px_rgba(201,160,98,0.15)]">
      {/* Top Image Container with Zoom & Shimmer Effect */}
      <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-chocolate-950">
        <img
          src={collection.image}
          alt={collection.alt}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />

        {/* Ambient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900 via-chocolate-900/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

        {/* Accent Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-medium bg-chocolate-950/80 text-gold-champagne border border-gold-champagne/30 backdrop-blur-md flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-gold-warm" />
            {collection.accent}
          </span>
        </div>

        {/* Quick WhatsApp Action icon on top right */}
        <a
          href={whatsappCollectionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-chocolate-950/80 border border-gold-champagne/30 text-gold-champagne flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold-champagne hover:text-chocolate"
          title={`Enquire on WhatsApp about ${collection.title}`}
          aria-label={`Enquire on WhatsApp about ${collection.title}`}
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>

      {/* Content Container */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-left space-y-4">
        <div>
          <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-gold-champagne/80 font-medium block mb-1.5">
            {collection.category}
          </span>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-ivory group-hover:text-gold-champagne transition-colors">
            {title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-ivory/70 font-light leading-relaxed mt-2.5">
            {collection.description}
          </p>
        </div>

        {/* Highlights List */}
        <div className="space-y-1.5 pt-1 border-t border-gold-champagne/10">
          {collection.highlights.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[11px] text-ivory/60">
              <span className="w-1 h-1 rounded-full bg-gold-champagne/60" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div className="pt-3 flex items-center justify-between gap-3">
          <a
            href={whatsappCollectionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-gold-champagne hover:text-ivory transition-colors group/btn"
          >
            <span>{language === 'te' ? 'కలెక్షన్ చూడండి' : 'Explore Collection'}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-gold-warm" />
          </a>

          <a
            href={whatsappCollectionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-chocolate-800 border border-gold-champagne/30 text-gold-champagne hover:bg-gold-champagne hover:text-chocolate text-xs transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="text-[11px]">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
