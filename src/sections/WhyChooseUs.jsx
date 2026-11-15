import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/jewellery';
import { useLanguage } from '../context/LanguageContext';

export default function WhyChooseUs() {
  const { language, t } = useLanguage();

  const itemsData = language === 'te' ? [
    {
      id: "attention-to-detail",
      title: "సూక్ష్మ నైపుణ్యం",
      subtitle: "అత్యుత్తమ హస్తకళ",
      description: "ఆభరణం రూపకల్పన నుండి పాలిషింగ్ వరకు ప్రతి అంశాన్ని అత్యంత శ్రద్ధతో, నిష్ణాతులైన స్వర్ణకారులతో తీర్చిదిద్దుతాము.",
      icon: "gem"
    },
    {
      id: "elegant-collections",
      title: "విశిష్ట కలెక్షన్లు",
      subtitle: "కనువిందు చేసే నమూనాలు",
      description: "ఆంధ్రప్రదేశ్ సాంప్రదాయ టెంపుల్ హారాల నుండి సరికొత్త ఆధునిక నెక్లెస్‌ల వరకు ప్రతి సందర్భానికీ నప్పే విస్తృత ఎంపిక.",
      icon: "sparkles"
    },
    {
      id: "traditional-inspiration",
      title: "సంప్రదాయ వారసత్వం",
      subtitle: "తెనాలి పురాతన కళ",
      description: "తెనాలి షరాఫ్ బజార్ కేంద్రంగా తరతరాల బంగారు పని నైపుణ్యాన్ని కొనసాగిస్తూ, స్వచ్ఛమైన నాణ్యతతో కూడిన ఆభరణాలను అందిస్తున్నాము.",
      icon: "shield"
    },
    {
      id: "customer-focused-service",
      title: "విశ్వసనీయ సేవ",
      subtitle: "నేరుగా తయారీదారుల వద్ద నుండి",
      description: "మధ్యవర్తులు లేకుండా నేరుగా తయారీదారుల వద్ద నుండి పొందడం వలన కచ్చితమైన తూకం, పారదర్శకమైన ధరలు మరియు సంపూర్ణ నమ్మకం.",
      icon: "heart-handshake"
    }
  ] : WHY_CHOOSE_US;

  // Custom luxury SVG icon renderer
  const renderCustomIcon = (type) => {
    switch (type) {
      case 'gem': // Attention to Detail
        return (
          <svg className="w-8 h-8 text-gold-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12l4 6-10 12L2 9l4-6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 9h20" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 3l-2 6 4 12 4-12-2-6" />
          </svg>
        );
      case 'sparkles': // Elegant Collections
        return (
          <svg className="w-8 h-8 text-gold-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
            <circle cx="19" cy="5" r="1.5" fill="currentColor" />
            <circle cx="5" cy="19" r="1.5" fill="currentColor" />
          </svg>
        );
      case 'shield': // Traditional Inspiration
        return (
          <svg className="w-8 h-8 text-gold-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
          </svg>
        );
      case 'heart-handshake': // Customer-Focused Service
      default:
        return (
          <svg className="w-8 h-8 text-gold-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4" />
          </svg>
        );
    }
  };

  return (
    <section id="why-us" className="py-24 md:py-32 bg-[#2B1D15] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold-champagne/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-champagne/30 bg-chocolate-900/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-warm" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold-champagne font-medium">
              {language === 'te' ? 'మా ప్రత్యేకతలు' : 'THE SLS DISTINCTION'}
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight">
            {language === 'te' ? (
              <>SLS JEWELLERS ను <span className="italic text-gold-gradient font-normal">ఎందుకు ఎంచుకోవాలి?</span></>
            ) : (
              <>Why Choose <span className="italic text-gold-gradient font-normal">SLS JEWELLERS?</span></>
            )}
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory/70 font-light max-w-xl mx-auto mt-4 leading-relaxed">
            {t('whyUsSub')}
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-champagne to-transparent mx-auto mt-6" />
        </div>

        {/* 4 Cards with 3D Hover & Custom SVG Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {itemsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-3xl bg-chocolate-900/70 border border-gold-champagne/20 hover:border-gold-champagne/60 transition-all duration-400 flex flex-col justify-between shadow-[0_15px_30px_rgba(28,18,12,0.7)] hover:shadow-[0_20px_45px_rgba(201,160,98,0.18)]"
            >
              {/* Top ambient gold spotlight */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gold-champagne/60 to-transparent group-hover:w-36 transition-all duration-500" />

              <div>
                {/* Custom SVG Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-chocolate-950 border border-gold-champagne/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-gold-champagne transition-all duration-300 shadow-md">
                  {renderCustomIcon(item.icon)}
                </div>

                <span className="font-serif-luxury text-xs text-gold-champagne/80 font-semibold tracking-wider block mb-1">
                  0{index + 1}.
                </span>
                <h3 className="font-serif-luxury text-2xl font-normal text-ivory group-hover:text-gold-champagne transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-ivory/70 font-light leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Pill */}
              <div className="mt-6 pt-4 border-t border-gold-champagne/10 flex items-center justify-between">
                <span className="text-[10px] tracking-widest uppercase text-gold-champagne/60 font-sans">
                  {item.subtitle}
                </span>
                <span className="text-gold-champagne opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                  ✦
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
