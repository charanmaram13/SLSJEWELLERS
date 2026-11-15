import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show luxury loading for 1.6s to create a cinematic first impression
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#2B1D15] overflow-hidden select-none"
        >
          {/* Subtle radial ambient gold glow */}
          <div className="absolute inset-0 bg-radial from-gold-champagne/10 via-chocolate/40 to-chocolate-950 pointer-events-none" />

          {/* Central Logo Container */}
          <div className="relative flex flex-col items-center text-center p-8 z-10">
            {/* 3D Rotating & Pulsing Gold Geometric Monogram */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, rotateY: -30 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="relative w-28 h-28 md:w-32 md:h-32 mb-8 flex items-center justify-center"
            >
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-gold-champagne/30 border-dashed"
              />

              {/* Inner glowing diamond */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-20 h-20 border border-gold-warm/40 rotate-45 shadow-[0_0_20px_rgba(201,160,98,0.25)]"
              />

              {/* Inner solid badge */}
              <div className="relative w-16 h-16 rounded-full bg-chocolate-900 border border-gold-champagne/80 flex items-center justify-center shadow-2xl">
                <span className="font-serif-luxury font-bold text-2xl tracking-widest text-gold-gradient">
                  SLS
                </span>
              </div>
            </motion.div>

            {/* Brand Title */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-4"
            >
              <h1 className="font-serif-luxury text-3xl md:text-5xl font-semibold tracking-[0.25em] text-gold-gradient uppercase">
                SLS JEWELLERS
              </h1>
              <p className="font-sans text-xs md:text-sm tracking-[0.35em] text-gold-champagne/75 uppercase mt-2">
                TENALI • ESTEEMED MANUFACTURER
              </p>
            </motion.div>

            {/* Elegant Divider Line with Shimmer */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "140px", opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-gold-champagne to-transparent mb-5"
            />

            {/* User-requested exact text */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.35em" }}
              transition={{ delay: 0.7, duration: 0.9 }}
              className="font-sans text-xs tracking-[0.35em] text-ivory/80 uppercase font-light"
            >
              CRAFTED WITH PRECISION
            </motion.p>

            {/* Subtle Progress Bar */}
            <div className="w-48 h-[2px] bg-chocolate-800 rounded-full mt-6 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-gold-dark via-gold-champagne to-ivory"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
