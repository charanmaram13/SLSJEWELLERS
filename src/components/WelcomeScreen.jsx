import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, MapPin, Globe } from 'lucide-react';

export default function WelcomeScreen() {
  const { hasChosenLanguage, setLanguage } = useLanguage();

  if (hasChosenLanguage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B1D15] overflow-y-auto px-4 py-8 select-none"
      >
        {/* Luxury Background Jewellery Photograph with Dark Vignette */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/assets/products/SLS004.jpg"
            alt="SLS JEWELLERY WORKS Temple Jewellery Background"
            className="w-full h-full object-cover object-center scale-105 filter blur-[3px] opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C120C]/95 via-[#2B1D15]/90 to-[#1C120C]/98" />
          <div className="absolute inset-0 bg-radial from-gold-champagne/10 via-transparent to-transparent" />
        </div>

        {/* Central Dialog Card */}
        <motion.div
          initial={{ y: 25, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-lg rounded-3xl p-8 sm:p-12 text-center bg-[#2B1D15]/95 border-2 border-gold-champagne/40 shadow-[0_25px_70px_rgba(0,0,0,0.85)] backdrop-blur-xl"
        >
          {/* Gold Corner Accents */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-gold-champagne pointer-events-none" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-gold-champagne pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-gold-champagne pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-gold-champagne pointer-events-none" />

          {/* Central Official Logo Emblem */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-6 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-gold-champagne/40 animate-pulse-subtle" />
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-gold-champagne flex items-center justify-center shadow-[0_0_25px_rgba(220,194,143,0.35)] overflow-hidden p-1">
              <img
                src="/assets/logo.jpg"
                alt="SLS JEWELLERY WORKS Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Brand Name & Location */}
          <div className="space-y-1 mb-6">
            <h1 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.16em] text-gold-gradient uppercase">
              SLS JEWELLERY WORKS
            </h1>
            <div className="flex items-center justify-center gap-2 text-xs tracking-[0.25em] text-gold-champagne/80 font-medium uppercase pt-1">
              <MapPin className="w-3.5 h-3.5 text-gold-warm" />
              <span>TENALI · ANDHRA PRADESH</span>
            </div>
          </div>

          {/* Gold Divider */}
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-champagne to-transparent mx-auto mb-6" />

          {/* Dual Language Welcome Headings */}
          <div className="space-y-2 mb-8">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-light text-ivory">
              Welcome to SLS JEWELLERY WORKS
            </h2>
            <h3 className="font-telugu text-xl sm:text-2xl font-medium text-gold-champagne">
              SLS జ్యువెలరీ వర్క్స్ కు స్వాగతం
            </h3>
          </div>

          {/* Instruction */}
          <div className="space-y-1 mb-8">
            <p className="font-sans text-xs sm:text-sm uppercase tracking-widest text-ivory/70 font-light">
              Choose Your Preferred Language
            </p>
            <p className="font-telugu text-sm sm:text-base text-gold-champagne/90">
              మీకు నచ్చిన భాషను ఎంచుకోండి
            </p>
          </div>

          {/* Two Large, Touch-Friendly Buttons for Elderly & Mobile Customers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* English Button */}
            <button
              onClick={() => setLanguage('en')}
              className="group relative flex flex-col items-center justify-center py-5 px-6 rounded-2xl bg-gradient-to-br from-gold-champagne via-gold-warm to-gold-dark text-chocolate shadow-[0_10px_25px_rgba(201,160,98,0.35)] hover:shadow-[0_15px_35px_rgba(220,194,143,0.5)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="font-serif-luxury text-2xl font-semibold tracking-wider uppercase leading-none">
                English
              </span>
              <span className="text-[11px] tracking-widest uppercase font-medium text-chocolate/80 mt-1">
                Continue in English
              </span>
            </button>

            {/* Telugu Button */}
            <button
              onClick={() => setLanguage('te')}
              className="group relative flex flex-col items-center justify-center py-5 px-6 rounded-2xl bg-chocolate-900 border-2 border-gold-champagne text-gold-champagne shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:bg-gold-champagne hover:text-chocolate hover:shadow-[0_15px_35px_rgba(220,194,143,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="font-telugu text-2xl font-bold leading-none">
                తెలుగు
              </span>
              <span className="text-[11px] tracking-wider font-telugu text-gold-champagne group-hover:text-chocolate mt-1">
                తెలుగులో కొనసాగండి
              </span>
            </button>
          </div>

          {/* Subtext info */}
          <p className="text-[11px] text-ivory/50 mt-8 tracking-wider">
            You can switch languages anytime in the top navigation bar.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
