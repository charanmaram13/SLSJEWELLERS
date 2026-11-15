import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Heart, CheckCircle2, MapPin, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/jewellery';
import { IMAGES } from '../data/images';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { language, t } = useLanguage();

  const pillars = language === 'te' ? [
    {
      title: "నాణ్యమైన చేతిపని",
      desc: "ప్రతి బంగారు ఆభరణం నిష్ణాతులైన స్వర్ణకారుల చేతుల్లో, కచ్చితమైన స్వచ్ఛతా ప్రమాణాలతో మరియు దృఢత్వంతో రూపుదిద్దుకుంటుంది."
    },
    {
      title: "సూక్ష్మ నైపుణ్యం",
      desc: "సున్నితమైన ఫిలిగ్రీ పని నుండి అద్భుతమైన పాలిషింగ్ వరకు, ప్రతి భాగం ప్రత్యేక శ్రద్ధతో పరీక్షించబడుతుంది."
    },
    {
      title: "అందమైన డిజైన్లు",
      desc: "దక్షిణ భారత సాంప్రదాయ టెంపుల్ కళ మరియు సరికొత్త మోడళ్లను కలగలిపి పెళ్లిళ్లకు, పండుగలకు అనువైన డిజైన్లు."
    },
    {
      title: "విశ్వసనీయ సంబంధాలు",
      desc: "నేరుగా తయారీదారుల వద్ద నుండి పొందే నిజాయితీ, వినియోగదారులు మరియు రిటైలర్లతో దశాబ్దాల విశ్వాసం."
    }
  ] : [
    {
      title: "Quality Craftsmanship",
      desc: "Every ornament is shaped with masterly hand precision, honoring authentic purity standards and structural durability."
    },
    {
      title: "Attention to Detail",
      desc: "From delicate micro-filigree to mirror-polished bevels, every millimeter undergoes meticulous artisan scrutiny."
    },
    {
      title: "Elegant Designs",
      desc: "Balancing timeless South Indian temple heritage with contemporary elegance for weddings and milestone celebrations."
    },
    {
      title: "Customer Relationships",
      desc: "Direct manufacturer trust and honest consultation, forging enduring bonds with families and jewellery retailers."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#2B1D15] relative overflow-hidden">
      {/* Subtle background ambient gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-champagne/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-champagne/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-champagne font-medium block mb-3">
            {t('aboutEyebrow')}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight">
            {language === 'te' ? (
              <>సంప్రదాయం మరియు <span className="italic text-gold-gradient font-normal">నైపుణ్యం కలబోత.</span></>
            ) : (
              <>Tradition Meets <span className="italic text-gold-gradient font-normal">Timeless Craft.</span></>
            )}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-champagne to-transparent mx-auto mt-6" />
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Premium Jewellery Photograph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 relative"
          >
            {/* Elegant double border frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 rounded-3xl border border-gold-champagne/25 -rotate-1 pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-champagne/40 bg-chocolate-950 aspect-[4/5]">
                <img
                  src={IMAGES.about.workshop}
                  alt={IMAGES.about.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/90 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Artisan Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-luxury border border-gold-champagne/30 text-left">
                  <div className="flex items-center gap-2 text-gold-champagne text-xs uppercase tracking-widest font-medium mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-gold-warm" />
                    <span>{language === 'te' ? 'తెనాలి స్వర్ణకారుల వర్క్‌షాప్' : 'Tenali Goldsmith Workshop'}</span>
                  </div>
                  <p className="font-serif-luxury text-lg text-ivory">
                    {language === 'te' ? '22K స్వచ్ఛమైన బంగారు ఆభరణాల తయారీ.' : 'Hand-finishing 22K gold ornaments with microscopic precision.'}
                  </p>
                </div>
              </div>

              {/* Decorative Corner Flairs */}
              <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-gold-champagne/70 pointer-events-none hidden sm:block" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-gold-champagne/70 pointer-events-none hidden sm:block" />
            </div>
          </motion.div>

          {/* Right Column: Brand Story & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 text-left space-y-8"
          >
            {/* User-requested exact brand statement */}
            <div className="space-y-4">
              <p className="font-serif-luxury text-2xl sm:text-3xl font-light text-ivory/95 leading-relaxed italic border-l-2 border-gold-champagne pl-6">
                {t('aboutQuote')}
              </p>
              <p className="font-sans text-sm sm:text-base text-ivory/75 font-light leading-relaxed pl-6">
                {t('aboutDescription')}
              </p>
            </div>

            {/* Core Values 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-chocolate-900/60 border border-gold-champagne/20 hover:border-gold-champagne/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-chocolate-800 border border-gold-champagne/40 flex items-center justify-center text-gold-champagne mb-3">
                    <CheckCircle2 className="w-4 h-4 text-gold-warm" />
                  </div>
                  <h4 className="font-serif-luxury text-xl font-normal text-ivory mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="font-sans text-xs text-ivory/70 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Tenali Hub Location Assurance Badge */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-chocolate-900 via-chocolate-800 to-chocolate-900 border border-gold-champagne/30">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-warm shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-sans text-xs uppercase tracking-wider text-gold-champagne font-semibold block">
                    {language === 'te' ? 'షరాఫ్ బజార్, తెనాలి' : 'Sharraf Bazar, Tenali'}
                  </span>
                  <p className="font-sans text-xs text-ivory/70">
                    {BRAND_INFO.addressShort}
                  </p>
                </div>
              </div>

              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-chocolate bg-gold-gradient hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{language === 'te' ? 'సంప్రదించండి' : 'Enquire Direct'}</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
