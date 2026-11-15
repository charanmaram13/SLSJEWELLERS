import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../data/images';
import { CRAFTSMANSHIP_STAGES } from '../data/jewellery';
import { Sparkles, Compass, Hammer, Eye, CheckCircle2 } from 'lucide-react';

export default function Craftsmanship() {
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      ...CRAFTSMANSHIP_STAGES[0],
      image: IMAGES.craftsmanship[0].image,
      alt: IMAGES.craftsmanship[0].alt,
      icon: Compass
    },
    {
      ...CRAFTSMANSHIP_STAGES[1],
      image: IMAGES.craftsmanship[1].image,
      alt: IMAGES.craftsmanship[1].alt,
      icon: Hammer
    },
    {
      ...CRAFTSMANSHIP_STAGES[2],
      image: IMAGES.craftsmanship[2].image,
      alt: IMAGES.craftsmanship[2].alt,
      icon: Eye
    },
    {
      ...CRAFTSMANSHIP_STAGES[3],
      image: IMAGES.craftsmanship[3].image,
      alt: IMAGES.craftsmanship[3].alt,
      icon: CheckCircle2
    }
  ];

  const currentStage = stages[activeStep];
  const CurrentIcon = currentStage.icon;

  return (
    <section id="craftsmanship" className="py-24 md:py-32 bg-chocolate relative overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-champagne/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-champagne/30 bg-chocolate-900/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-warm" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold-champagne font-medium">
              ARTISANAL METIER
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight">
            The Beauty Behind <span className="italic text-gold-gradient font-normal">Every Detail.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory/70 font-light max-w-xl mx-auto mt-4 leading-relaxed">
            Witness the harmonious journey of precious gold, from initial architectural sketch to hand-finished heirloom radiance.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-champagne to-transparent mx-auto mt-6" />
        </div>

        {/* Step Selector Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          {stages.map((stage, idx) => {
            const isSelected = activeStep === idx;
            const Icon = stage.icon;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 md:p-5 rounded-2xl text-left transition-all duration-300 relative border ${
                  isSelected
                    ? 'bg-chocolate-900 border-gold-champagne shadow-[0_10px_25px_rgba(201,160,98,0.2)]'
                    : 'bg-chocolate-900/40 border-gold-champagne/15 hover:border-gold-champagne/40 hover:bg-chocolate-900/70'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-serif-luxury text-sm font-semibold tracking-wider ${
                    isSelected ? 'text-gold-champagne' : 'text-ivory/40'
                  }`}>
                    {stage.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-gold-champagne' : 'text-ivory/40'}`} />
                </div>
                <h3 className={`font-serif-luxury text-base md:text-lg font-medium leading-snug ${
                  isSelected ? 'text-ivory' : 'text-ivory/70'
                }`}>
                  {stage.title}
                </h3>
                {isSelected && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute -bottom-px left-4 right-4 h-0.5 bg-gradient-to-r from-gold-dark via-gold-champagne to-gold-dark"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Sticky Visual Display & Narrative */}
        <div className="rounded-3xl overflow-hidden bg-chocolate-950 border border-gold-champagne/30 shadow-[0_25px_60px_rgba(28,18,12,0.95)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual Photography Side */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] lg:min-h-[500px] overflow-hidden bg-chocolate-900">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.step}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <img
                    src={currentStage.image}
                    alt={currentStage.alt}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950 via-chocolate-950/20 to-transparent pointer-events-none" />
                  
                  {/* Floating Step Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-chocolate-950/85 text-gold-champagne border border-gold-champagne/40 backdrop-blur-md">
                      STAGE {currentStage.step} OF 04
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Narrative Content Side */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between text-left space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.step}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-gold-champagne/80 font-medium block mb-2">
                      {currentStage.shortDesc}
                    </span>
                    <h3 className="font-serif-luxury text-3xl sm:text-4xl text-ivory font-normal leading-tight">
                      {currentStage.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-ivory/80 font-light leading-relaxed">
                    {currentStage.details}
                  </p>

                  <div className="p-4 rounded-2xl bg-chocolate-900/60 border border-gold-champagne/15 space-y-2">
                    <h4 className="font-serif-luxury text-sm text-gold-champagne font-medium uppercase tracking-wider">
                      Craft Philosophy
                    </h4>
                    <p className="font-sans text-xs text-ivory/70 leading-relaxed font-light">
                      Every piece is shaped by patient hands in Tenali, preserving regional heritage motifs without taking shortcuts on metal integrity.
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Step Navigation Controls */}
              <div className="pt-6 border-t border-gold-champagne/15 flex items-center justify-between">
                <button
                  onClick={() => setActiveStep((prev) => (prev === 0 ? stages.length - 1 : prev - 1))}
                  className="text-xs uppercase tracking-widest text-ivory/60 hover:text-gold-champagne transition-colors"
                >
                  ← Previous Stage
                </button>

                <div className="flex items-center gap-1.5">
                  {stages.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeStep ? 'w-5 bg-gold-champagne' : 'w-1.5 bg-ivory/20'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveStep((prev) => (prev === stages.length - 1 ? 0 : prev + 1))}
                  className="text-xs uppercase tracking-widest text-gold-champagne hover:text-ivory transition-colors font-medium"
                >
                  Next Stage →
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
